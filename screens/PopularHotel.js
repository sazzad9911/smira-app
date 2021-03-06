import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native'
import Cards from '../components/Cards'
import { useSelector } from 'react-redux';
import { postData, url } from '../action';
import { backgroundColor } from './../assets/color';

const PopularHotel = (props) => {
    const navigation = props.navigation
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    const recentSearch = useSelector(state => state.recentSearch)

    const [Hotels, setHotels] = React.useState(null)

    React.useEffect(() => {
        postData(url + "/searchData", {
            tableName: 'hotels',
            searchColumn: 'address',
            searchData: props.search,
            orderColumn: recentSearch.shortBy != 'more amenities' ? recentSearch.shortBy : '',
            filterColumn: 'categories',
            filterValue: recentSearch.category
        }).then(data => {
            if (Array.isArray(data)) {
                return setHotels(data)
            }
            console.log('PopularHotels.js->' + data.message)
        })
    }, [recentSearch.shortBy + props.search + recentSearch.category])
    return (
        <ScrollView style={{ backgroundColor: backgroundColor(darkMode) }}>
            <View >
                {
                    Hotels ? (
                        Hotels.map(doc => (
                            <Cards key={doc.id} doc={doc} navigation={navigation}
                                img={{ uri: doc.image }} title={doc.name}
                                address={doc.address} rating={doc.ratings} />
                        ))
                    ) : (
                        <ActivityIndicator size="large" color="#FA454B" />
                    )
                }
            </View>
        </ScrollView>
    );
};

export default PopularHotel;