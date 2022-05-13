import React from 'react';
import { View, ScrollView,ActivityIndicator } from 'react-native'
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
            let arr = brands.filter(d => d.name == recentSearch.brand);
            setData(arr)
    },[recentSearch.shortBy + recentSearch.category + recentSearch.brand])

    React.useEffect(() => {
        let arr = brands.filter(d => d.type == props.search)
        
        setData(arr)
    }, [])

    return (
        <ScrollView style={{ backgroundColor: backgroundColor(darkMode) }}>
            {
                Data ? (
                    Data.map((doc, i) => (
                        <SalonCart data={doc} key={i} />
                    ))
                ) : (
                    <ActivityIndicator size="large" color="#FA454B" />
                )
            }
        </ScrollView>
    );
};

export default Salon;