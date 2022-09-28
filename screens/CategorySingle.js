import React from 'react';
import { Ionicons, Entypo,AntDesign } from '@expo/vector-icons';
import Cards from '../components/Cards'
import { View, Text, StyleSheet, Dimensions, ScrollView, Platform, ActivityIndicator } from 'react-native'
import picture from '../assets/tub.png'
import DealCart from '../components/DealCart'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { postData, url } from '../action';
import { SvgXml } from 'react-native-svg';

const CategorySingle = (props) => {
    const title = props.route.params.title;
    const [DealData, setDealData] = React.useState(null)
    const [Hotels, setHotels] = React.useState(null)
    const navigation = props.navigation
    //console.log(title)
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
    React.useEffect(() => {
        postData(url + "/getData", {
            tableName: 'hotels',
            orderColumn: 'popularity'
        }).then(data => {
            if (Array.isArray(data)) {
                return setHotels(data)
            }
            console.log('CategorySingle.js->' + data.message)
        })
    }, [])
    if (title == 'Popular Hotel') {
        return (
            <View style={styles.body}>

                <View style={{
                    flexDirection: 'row',
                    marginTop: Platform.OS == 'ios' ? 50 : 5,
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: Dimensions.get('screen').width - 60
                    }}>
                        <Text style={{
                            color: 'black',
                            fontSize: 24,
                            fontWeight: '800',
                            marginLeft: 5
                        }}> {title + 's'}</Text>
                    </View>

                    <TouchableOpacity onPress={props.navigation.goBack}>
                    <AntDesign name="close" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={[styles.content, { marginLeft: 10 }]}>
                    <SvgXml xml={`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M7.49972 14.9995C6.92295 14.9995 6.34693 14.7805 5.90666 14.3433L5.35914 13.7957C5.14688 13.5842 4.86262 13.4672 4.56111 13.4665H3.79083C2.54579 13.4665 1.5325 12.4532 1.5325 11.2081V10.4371C1.53175 10.1363 1.41475 9.85209 1.20249 9.63833L0.663969 9.10056C-0.218063 8.22378 -0.221813 6.79048 0.655719 5.90769L1.20324 5.35942C1.41475 5.14717 1.53175 4.86291 1.5325 4.56139V3.79187C1.5325 2.54607 2.54579 1.53278 3.79083 1.53278H4.56186C4.86262 1.53278 5.14613 1.41578 5.35989 1.20202L5.89916 0.664252C6.77594 -0.217781 8.2085 -0.222281 9.09203 0.656001L9.63955 1.20352C9.85256 1.41578 10.1361 1.53278 10.4368 1.53278H11.2079C12.4529 1.53278 13.4662 2.54607 13.4662 3.79187V4.56214C13.4669 4.86291 13.5839 5.14717 13.7962 5.36092L14.3347 5.89944C14.7615 6.32396 14.9977 6.88948 15 7.49325C15.0015 8.09327 14.7705 8.65804 14.3497 9.08481C14.3422 9.09231 14.3355 9.10056 14.328 9.10731L13.7955 9.63983C13.5839 9.85209 13.4669 10.1363 13.4662 10.4379V11.2081C13.4662 12.4532 12.4529 13.4665 11.2079 13.4665H10.4368C10.1361 13.4672 9.85181 13.5842 9.6388 13.7965L9.09953 14.335C8.66001 14.7775 8.07949 14.9995 7.49972 14.9995Z" fill="#64B657"/>
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03235 6.03871C5.9086 6.16247 5.74809 6.22922 5.57034 6.22922C5.40383 6.22922 5.24032 6.16097 5.10907 6.03796C4.98457 5.91421 4.91406 5.7447 4.91406 5.57295C4.91406 5.40944 4.98307 5.24143 5.10457 5.11168C5.17132 5.04418 5.25082 4.99317 5.33033 4.96617C5.55684 4.86267 5.8576 4.92342 6.0361 5.11093C6.09986 5.17468 6.14861 5.24443 6.18086 5.31719C6.21611 5.39519 6.23411 5.48369 6.23411 5.57295C6.23411 5.75145 6.16286 5.91721 6.03235 6.03871ZM9.8932 5.10801C9.63744 4.853 9.22118 4.853 8.96542 5.10801L5.11028 8.96315C4.85452 9.21891 4.85452 9.63517 5.11028 9.89168C5.23478 10.0154 5.39904 10.0837 5.57454 10.0837C5.75005 10.0837 5.91431 10.0154 6.03806 9.89168L9.8932 6.03654C10.149 5.78003 10.149 5.36451 9.8932 5.10801ZM9.67989 8.82348C9.43688 8.72147 9.14887 8.77697 8.95686 8.96898C8.91711 9.01548 8.86086 9.08748 8.82261 9.17224C8.78211 9.26374 8.77686 9.36199 8.77686 9.428C8.77686 9.494 8.78211 9.5915 8.82261 9.68301C8.86011 9.76701 8.90511 9.83526 8.96436 9.89451C9.10012 10.0205 9.25762 10.0843 9.43313 10.0843C9.59964 10.0843 9.76314 10.0168 9.8974 9.89151C10.0167 9.77226 10.0819 9.60725 10.0819 9.428C10.0819 9.24799 10.0167 9.08373 9.89665 8.96373C9.83064 8.89848 9.75114 8.84748 9.67989 8.82348Z" fill="white"/>
                                 </svg>
                                 `} 
                                 height="22" 
                                 width="22" />
                    <Text style={{
                        fontSize: 16,
                        color: '#000000',
                        fontWeight: '500',
                        marginLeft: 5
                    }}>
                        Free for Members
                    </Text>
                </View>
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
            </View>
        );
    }
    else if (title == 'Restaurant' || title == 'Deals Near You') {
        return (
            <View style={styles.body}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: Platform.OS == 'ios' ? 50 : 5,
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: Dimensions.get('screen').width - 60
                    }}>
                        <Text style={{
                            color: 'black',
                            fontSize: 24,
                            fontWeight: '800',
                            marginLeft: 0
                        }}> {title+'s'}</Text>
                    </View>

                    <TouchableOpacity onPress={props.navigation.goBack}>
                    <AntDesign name="close" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                <SvgXml xml={`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M7.49972 14.9995C6.92295 14.9995 6.34693 14.7805 5.90666 14.3433L5.35914 13.7957C5.14688 13.5842 4.86262 13.4672 4.56111 13.4665H3.79083C2.54579 13.4665 1.5325 12.4532 1.5325 11.2081V10.4371C1.53175 10.1363 1.41475 9.85209 1.20249 9.63833L0.663969 9.10056C-0.218063 8.22378 -0.221813 6.79048 0.655719 5.90769L1.20324 5.35942C1.41475 5.14717 1.53175 4.86291 1.5325 4.56139V3.79187C1.5325 2.54607 2.54579 1.53278 3.79083 1.53278H4.56186C4.86262 1.53278 5.14613 1.41578 5.35989 1.20202L5.89916 0.664252C6.77594 -0.217781 8.2085 -0.222281 9.09203 0.656001L9.63955 1.20352C9.85256 1.41578 10.1361 1.53278 10.4368 1.53278H11.2079C12.4529 1.53278 13.4662 2.54607 13.4662 3.79187V4.56214C13.4669 4.86291 13.5839 5.14717 13.7962 5.36092L14.3347 5.89944C14.7615 6.32396 14.9977 6.88948 15 7.49325C15.0015 8.09327 14.7705 8.65804 14.3497 9.08481C14.3422 9.09231 14.3355 9.10056 14.328 9.10731L13.7955 9.63983C13.5839 9.85209 13.4669 10.1363 13.4662 10.4379V11.2081C13.4662 12.4532 12.4529 13.4665 11.2079 13.4665H10.4368C10.1361 13.4672 9.85181 13.5842 9.6388 13.7965L9.09953 14.335C8.66001 14.7775 8.07949 14.9995 7.49972 14.9995Z" fill="#64B657"/>
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03235 6.03871C5.9086 6.16247 5.74809 6.22922 5.57034 6.22922C5.40383 6.22922 5.24032 6.16097 5.10907 6.03796C4.98457 5.91421 4.91406 5.7447 4.91406 5.57295C4.91406 5.40944 4.98307 5.24143 5.10457 5.11168C5.17132 5.04418 5.25082 4.99317 5.33033 4.96617C5.55684 4.86267 5.8576 4.92342 6.0361 5.11093C6.09986 5.17468 6.14861 5.24443 6.18086 5.31719C6.21611 5.39519 6.23411 5.48369 6.23411 5.57295C6.23411 5.75145 6.16286 5.91721 6.03235 6.03871ZM9.8932 5.10801C9.63744 4.853 9.22118 4.853 8.96542 5.10801L5.11028 8.96315C4.85452 9.21891 4.85452 9.63517 5.11028 9.89168C5.23478 10.0154 5.39904 10.0837 5.57454 10.0837C5.75005 10.0837 5.91431 10.0154 6.03806 9.89168L9.8932 6.03654C10.149 5.78003 10.149 5.36451 9.8932 5.10801ZM9.67989 8.82348C9.43688 8.72147 9.14887 8.77697 8.95686 8.96898C8.91711 9.01548 8.86086 9.08748 8.82261 9.17224C8.78211 9.26374 8.77686 9.36199 8.77686 9.428C8.77686 9.494 8.78211 9.5915 8.82261 9.68301C8.86011 9.76701 8.90511 9.83526 8.96436 9.89451C9.10012 10.0205 9.25762 10.0843 9.43313 10.0843C9.59964 10.0843 9.76314 10.0168 9.8974 9.89151C10.0167 9.77226 10.0819 9.60725 10.0819 9.428C10.0819 9.24799 10.0167 9.08373 9.89665 8.96373C9.83064 8.89848 9.75114 8.84748 9.67989 8.82348Z" fill="white"/>
                                 </svg>
                                 `} 
                                 height="22" 
                                 width="22" />
                     <Text style={{
                        fontSize: 16,
                        color: '#000000',
                        fontWeight: '500',
                        marginLeft: 5
                    }}>
                        Free for Members
                    </Text>
                </View>
                <ScrollView>
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
            </View>
        );
    }
    else {
        return (
            <View></View>
        );
    };
};

export default CategorySingle;

const styles = StyleSheet.create({
    body: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        backgroundColor:'white'

    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 30
    }
})