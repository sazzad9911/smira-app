import React from 'react';
import { View, ScrollView,ActivityIndicator } from 'react-native'
import Cards from '../components/Cards'
import { useSelector } from 'react-redux';
import { postData, url } from '../action';

const Hotels = (props) => {
    const navigation = props.navigation
    const [Hotels, setHotels] = React.useState(null)
    React.useEffect(() => {
        postData(url + "/getData", {
            tableName: 'hotels',
            orderColumn: 'popularity'
        }).then(data => {
            if (Array.isArray(data)) {
                return setHotels(data)
            }
            console.log('PopularHotels.js->' + data.message)
        })
    }, [])
    return (
        <ScrollView>
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

export default Hotels;