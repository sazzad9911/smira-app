import React from 'react';
import { View, ScrollView,ActivityIndicator ,Text} from 'react-native'
import { useSelector } from 'react-redux'
import { backgroundColor } from '../assets/color';
import SalonCart from '../components/SalonCart';
import { useDispatch } from 'react-redux'
import { postData, url } from '../action';

const Salon = (props) => {
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    const brands = useSelector(state => state.brands)
    const [Data, setData] = React.useState(null)
    const recentSearch = useSelector(state => state.recentSearch)

    React.useEffect(()=>{
            //let arr = brands.filter(d => d.name == recentSearch.brand);
           // setData(arr)
           let condition=null;
           if(recentSearch.brand){
            recentSearch.brand.map((doc,i)=>{
                if(!condition){
                    condition="name='"+doc+"'";
                }
                condition=condition+" OR name='"+doc+"'"
            })
            postData(url + '/getData',{
                tableName: 'brands',
                condition: condition
            }).then(data =>{
                if(Array.isArray(data)){
                    setData(data)
                }
            })
           }
           
    },[Array.isArray(recentSearch.brand)?recentSearch.brand.length:0])
 
    React.useEffect(() => {
        if(props.search=='all'){
            postData(url + '/getData',{
                tableName: 'brands',
            }).then(data =>{
                if(Array.isArray(data)){
                    setData(data)
                }
            })
            return
        }
        if(props.search){
            let sp=props.search.split(',');
            let condition=''
            sp.map((doc,i)=>{
                if(!condition){
                    condition="id='"+doc+"'";
                }
                condition=condition+" OR id='"+doc+"'"
            })
            postData(url + '/getData',{
                tableName: 'brands',
                condition: `${condition} OR type='${props.search}'`
            }).then(data =>{
                if(Array.isArray(data)){
                    setData(data)
                }
            })
        }else{
            setData([])
        }
    }, [props.search])

    return (
        <ScrollView style={{ backgroundColor: backgroundColor(darkMode) }}>
            {
                Data ? (
                    Data.length>0 ? (
                        Data.map((doc, i) => (
                        <SalonCart data={doc} key={i} />
                    ))
                    ):(<Text style={{
                        textAlign: 'center',
                        fontFamily: 'PlusJakartaSans'
                    }}>No brands available at this moment</Text>)
                ) : (
                    <ActivityIndicator size="large" color="#FA454B" />
                )
            }
        </ScrollView>
    );
};

export default Salon;