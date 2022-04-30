import React from 'react';
import { View,ScrollView,ActivityIndicator } from 'react-native';
import DealCart from '../components/DealCart'
import { useSelector } from 'react-redux';
import { postData, url } from '../action';
import { backgroundColor } from './../assets/color';

const PopularDeal = (props) => {
    const navigation = props.navigation
    const [DealData, setDealData] = React.useState(null)
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    React.useEffect(() => {
        postData(url + "/getData", {
            tableName: 'deals',
            orderColumn: 'popularity'
        }).then(data => {
            if (Array.isArray(data)) {
                return setDealData(data)
            }
            console.log('CategorySingle.js->' + data.message)
        })
    }, [])
    return (
        <ScrollView style={{
            backgroundColor: backgroundColor(darkMode)
        }}>
            <View >
                {
                    DealData ? (
                        DealData.map(doc => (
                            <DealCart data={doc} key={doc.id} headLine={doc.name}
                                category={doc.brand} img={doc.image} navigation={navigation}
                            />
                        ))
                    ) : (
                        <ActivityIndicator size="large" color="#FA454B" />
                    )
                }
            </View>
        </ScrollView>
    );
};

export default PopularDeal;