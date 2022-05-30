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
           let arr = [];
           if(recentSearch.brand) {
            recentSearch.brand.forEach((data) => {
                let search =brands.filter(d => d.name == data)
                arr.push(search[0]);
            })
            setData(arr)
           }
    },[recentSearch.shortBy + recentSearch.category + recentSearch.brand])
 
    React.useEffect(() => {
        let arr = brands.filter(d => d.type == props.search)
        
        setData(arr)
    }, [])

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
                    }}>No data available</Text>)
                ) : (
                    <ActivityIndicator size="large" color="#FA454B" />
                )
            }
        </ScrollView>
    );
};

export default Salon;