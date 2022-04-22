import React from 'react';
import {
    ScrollView, View, Text,
    TouchableOpacity,
    Dimensions,
    Platform, ActivityIndicator
} from 'react-native';
import styles from './CategorySingleRoute'
import { SvgXml } from 'react-native-svg'
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { postData, url } from '../action';
import Brands from '../components/Brands';

const OurBrand = (props) => {
    const navigation = props.navigation
    const dispatch = useDispatch()
    const [Brand, setBrand] = React.useState(null)
    React.useEffect(() => {
        postData(url + "/getData", {
            tableName: "brands",
            orderColumn: "popularity",
        }).then(data => {
            if (Array.isArray(data)) {
                setBrand(data);
            }
        }).catch(err => {
            console.log(err.message);
        })
    }, [])
    return (
        <ScrollView>
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding:18
            }}>
                {
                    Brand ? (
                        Brand.map(d => (
                            <View key={d.id} style={{
                                margin:10
                            }}>
                                <Brands key={d.id} data={d} img={d.image} />
                            </View>
                        ))
                    ) : (
                        <ActivityIndicator size="large" color="#FA454B" />
                    )
                }
            
                
            </View>
        </ScrollView>
    );
};

export default OurBrand;