import React from 'react';
import {
    View, Dimensions, Text, TouchableOpacity, Image,
    StyleSheet, ScrollView, ActivityIndicator, Alert, Modal, Platform
} from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import Unorderedlist from 'react-native-unordered-list';
import { AntDesign, EvilIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { postData, url } from '../action'
import { useRoute } from '@react-navigation/native';
import Gallery from 'react-native-image-gallery';
import { SvgXml } from 'react-native-svg'
import { getData, storeData } from '../screens/WishList'
import { useSelector, useDispatch } from 'react-redux'
import {textColor,subTextColor,backgroundColor} from '../assets/color'

const Hotel = (props) => {
    const params = props.route.params
    const navigation = props.navigation;
    const window = Dimensions.get('window')
    const [Hotel, setHotel] = React.useState(null)
    const [conditions, setConditions] = React.useState(null)
    const [Read, setRead] = React.useState(false)
    const [OtherHotels, setOtherHotels] = React.useState(null)
    const [Ratings, setRatings] = React.useState(null);
    const [limit, setLimit] = React.useState(3);
    const route = useRoute();
    const [Images, setImages] = React.useState(null)
    const [ModalVisible, setModalVisible] = React.useState(false);
    const [color, setcolor] = React.useState(params.like ? true : false);
    const darkMode = useSelector(state => state.pageSettings.darkMode)

    React.useEffect(() => {
        if (params.id) {
            let first = postData(url + '/getData', {
                tableName: 'hotels',
                condition: "id=" + "'" + params.id + "'"
            }).then(data => {
                if (Array.isArray(data)) {
                    let arr = data[0].conditions.split(',');
                    setConditions(arr)
                    return setHotel(data)
                }
                console.log('Hotel.js->' + data.message)
                return first
            })
            ///--------------------------------------
            const second = postData(url + '/getData', {
                tableName: 'hotels',
                condition: "id<>" + "'" + params.id + "'"
            }).then(data => {
                if (Array.isArray(data)) {
                    return setOtherHotels(data)
                }
                console.log('Hotel.js->' + data.message)
                return second
            })
            ///-----------------------------------
            const third = postData(url + '/getData', {
                tableName: 'hotel_reviews',
                condition: "hotel_id=" + "'" + params.id + "'"
            }).then(data => {
                if (Array.isArray(data)) {
                    return setRatings(data)
                }
                console.log('Hotel.js->' + data.message)
                return third
            })
            //get hotels images
            const forth = postData(url + '/getData', {
                tableName: 'hotel_photos',
                condition: "hotel_id=" + "'" + params.id + "'"
            }).then(data => {
                if (Array.isArray(data)) {
                    let arr = []
                    data.forEach(doc => {
                        arr.push({ source: { uri: doc.url } })
                    })
                    return setImages(arr);
                }
                console.log(data.message)
                return forth
            })
        }
    }, [params.id + route])

    React.useEffect(() => {
        setcolor(params.like)
    }, [params.like])
    const [Hotels, setHotels] = React.useState(null)

    React.useEffect(() => {
        getData('hotels').then((data) => {
            if (data) {
                setHotels(data)
                if (data.find(element => element.id == props.doc.id)) {
                    setFavor(true);
                }
            } else {
                storeData('hotels', [])
                setHotels([])
            }
        })
    }, [params.id + route])
    return (

        <View style={{
            width: window.width,
            height: window.height,
            backgroundColor: backgroundColor(darkMode)
        }}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.body}>
                    <View style={styles.bodyTop}>
                        <TouchableOpacity disabled={Images && Images.length > 0 ? false : true} style={styles.image} onPress={() => {
                            setModalVisible(true)
                        }}>

                            {
                                Hotel ? (
                                    <Image onPress={() => console.log('press')}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: 10,
                                        }}
                                        source={{
                                            uri: Hotel[0].image,
                                        }}
                                    />
                                ) : (
                                    <ActivityIndicator size="large" color="#FA454B" />
                                )
                            }
                        </TouchableOpacity>

                        <View style={styles.imageButtomIcon}>
                            <Text style={styles.imageButtomIconText}> 0/{Images ? Images.length : '1'}</Text>
                        </View>

                    </View>
                    <View style={styles.content}>
                        <View style={styles.contentTop}>
                            <Text style={styles.hotelName}>{Hotel ? Hotel[0].name : ''} </Text>
                            <TouchableOpacity style={styles.contentTopLeftBox}>
                                <AntDesign name="star" size={15} color="white" />
                                <Text style={styles.contentTopLeftBoxText}>{Hotel ? Hotel[0].ratings : '0'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ color: '#808080' }}>
                                {Hotel ? Hotel[0].address : ''}
                            </Text>
                            <View style={styles.icon}>
                                {
                                    conditions ? (
                                        conditions.map((doc, i) => {
                                            if (doc == 'wifi') {
                                                return (
                                                    <View key={i} style={styles.iconBackground}>
                                                        <AntDesign name="wifi" size={20} color="black" />
                                                    </View>
                                                )
                                            } else if (doc == 'tv') {
                                                return (
                                                    <View key={i} style={styles.iconBackground}>
                                                        <MaterialIcons name="monitor" size={20} color="#808080" />
                                                    </View>
                                                )
                                            } else {
                                                return (
                                                    <View key={i} style={styles.iconBackground}>
                                                        <EvilIcons name="sc-pinterest" size={26} color="#808080" />
                                                    </View>
                                                )
                                            }
                                        })
                                    ) : (
                                        <ActivityIndicator size="small" color="#FA454B" />
                                    )
                                }


                            </View>
                        </View>
                        <View style={styles.contentDescrip}>
                            <Text style={styles.textHead}>
                                Description
                            </Text>
                            <Text style={[styles.textDescr, { height: Read ? 'auto' : 55 }]}>
                                {Hotel ? Hotel[0].description : ''}
                            </Text>
                            <TouchableOpacity onPress={() => {
                                setRead(!Read)
                            }}>
                                <Text style={{ color: 'red' }}>
                                    {!Read ? 'Read More' : 'Read Less'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.time}>
                            <View style={styles.view3}>
                                <Text style={{
                                    fontSize: 15,
                                    color: 'rgb(100,100,100)',
                                    fontFamily: 'PlusJakartaSans'
                                }}>Check-in</Text>
                                <Text style={{
                                    fontSize: 25,
                                    fontFamily: 'PlusJakartaSansBold'
                                }}>{Hotel ? Hotel[0].check_in : ''}</Text>
                            </View>
                            <View style={styles.view2}></View>
                            <View style={styles.view3}>
                                <Text style={{
                                    fontSize: 15,
                                    color: 'rgb(100,100,100)',
                                    fontFamily: 'PlusJakartaSans'
                                }}>Check-out</Text>
                                <Text style={{
                                    fontSize: 25,
                                    fontFamily: 'PlusJakartaSansBold'
                                }}>{Hotel ? Hotel[0].check_out : ''}</Text>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <MapView initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }} style={styles.map}>
                                <Marker
                                    coordinate={{
                                        latitude: 37.78825,
                                        longitude: -122.4324,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                    }}
                                    pinColor={"white"}
                                    title={"You are here"}
                                />
                            </MapView>
                        </View>
                        <View style={styles.nearbyView}>
                            <Text style={styles.nearbyText}>
                                What's nearby
                            </Text>
                            <View style={styles.nearbyTextDescrView}>

                                <Unorderedlist>
                                    <Text style={styles.nearbyTextDescr}>
                                        500m away from Sai Baba Mandir
                                    </Text>
                                </Unorderedlist>
                                <Unorderedlist>
                                    <Text style={styles.nearbyTextDescr}>
                                        200m away from Shirdi Bus Stop
                                    </Text>
                                </Unorderedlist>

                            </View>
                        </View>
                        {
                            Ratings && Ratings.length > 0 ? (
                                <View style={styles.contentTop}>
                                    <Text style={styles.hotelName}>Reviews </Text>
                                    <View style={styles.contentTopLeftBox2}>
                                        <TouchableOpacity>
                                            <AntDesign name="star" size={15} color="white" />
                                        </TouchableOpacity>
                                        <Text style={styles.contentTopLeftBoxText}>{Hotel ? Hotel[0].ratings : '0'}</Text>
                                    </View>
                                </View>
                            ) : (
                                <View></View>
                            )
                        }
                        {
                            Ratings ? (
                                Ratings.map((doc, i) => {
                                    if (i < limit) {
                                        return <HotelMember doc={doc} key={i} />
                                    } else {
                                        return <View key={i}></View>
                                    }
                                })
                            ) : (
                                <ActivityIndicator size="large" color="#FA454B" />
                            )
                        }
                        <View style={{ alignItems: 'center', marginBottom: 30 }}>
                            {
                                Ratings && Ratings.length > limit ? (
                                    <TouchableOpacity onPress={() => {
                                        setLimit(limit + 3);
                                    }}>
                                        <View style={styles.showMoreButton}>
                                            <Text style={styles.showMoreButtonText}>
                                                Show More
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                ) : (
                                    <View>
                                    </View>
                                )
                            }
                        </View>
                        <Text style={{
                            color: '#000000',
                            fontSize: 18,
                            fontWeight: '600',
                            marginBottom: 10,
                            fontFamily: 'PlusJakartaSansBold'
                        }}>
                            Other hotels nearby
                        </Text>
                        <ScrollView horizontal={true}>
                            {
                                OtherHotels ? (
                                    OtherHotels.map(d => (
                                        <HotelMemberCart key={d.id} data={d} />
                                    ))
                                ) : (
                                    <ActivityIndicator size="large" color="#FA454B" />
                                )
                            }
                        </ScrollView>
                    </View>
                </View>
                <Modal visible={ModalVisible} onRequestClose={() => setModalVisible(!ModalVisible)}>
                    <TouchableOpacity onPress={() => setModalVisible(!ModalVisible)} style={{
                        paddingLeft: 10,
                        height: 40,
                        justifyContent: 'center',
                        backgroundColor: '#FC444B',
                        marginTop: Platform.OS == 'ios' ? 40 : 0
                    }}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    <Gallery
                        style={{ flex: 1, backgroundColor: 'black' }}
                        images={Images}
                    />
                </Modal>
            </ScrollView>
            <View style={{
                backgroundColor: 'white',
                height: 80,
                paddingHorizontal: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                shadowOffset: {
                    height: 2, width: 2
                },
                shadowColor: 'black',
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 5,
                paddingBottom:20
            }}>
                <TouchableOpacity onPress={() => { //navigation.navigate('Review', {
                    //id: Hotel[0].id, name: Hotel[0].name, address: Hotel[0].address })} 
                    setcolor(!color);
                    if (!color) {
                        let arr = Hotels
                        arr.push(Hotel[0])
                        setHotels(arr)
                        //console.log(Deals)
                        storeData('hotels', Hotels)
                    } else {
                        let arr = Hotels.filter(element => element.id != Hotel[0].id);
                        storeData('hotels', arr);
                        //console.log(arr);
                    }
                }} style={{
                    borderWidth: 1,
                    borderColor: '#E2E2E2',
                    width: 60,
                    height: 50,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <AntDesign name="hearto" size={24} color={color ? "#FC444B" : "#808080"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Booking', {
                    id: Hotel[0].id, name: Hotel[0].name, address: Hotel[0].address,
                    check_in: Hotel[0].check_in, check_out: Hotel[0].check_out
                })} style={{
                    backgroundColor: '#64B657',
                    width: 240,
                    height: 50,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 18,
                        fontFamily: 'PlusJakartaSans'
                    }}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Hotel;

import { LinearGradient } from 'expo-linear-gradient';

export const HotelMemberCart = (props) => {
    const navigation = props.navigation
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Hotel', {
                id: props.data.id
            })
        }} style={styles.cart}>
            <Image
                style={styles.cartImg}
                source={{
                    uri: props.data ? props.data.image : 'https://cdna.artstation.com/p/assets/images/images/016/681/028/large/mohd-ashraf-classic-black-1.jpg?1553066591',
                }}
            />
            <LinearGradient style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                borderRadius: 10
            }} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={['rgba(15, 15, 15, 0.311)', 'rgba(15, 15, 15, 0.466)', '#000']}>

            </LinearGradient>

            <View style={styles.cartText}>

                <View style={{ overflow: 'hidden', marginBottom: 5 }}>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'PlusJakartaSansBold',
                        color: '#FFFFFF',
                        lineHeight: 20,
                    }}>{props.data ? props.data.name : "-----"}
                    </Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'PlusJakartaSans',
                        color: '#FFFFFF',
                        lineHeight: 20
                    }}>
                        {props.data ? props.data.address : "---"}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <SvgXml
                        style={[styles.tabIco]}
                        xml={`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.49972 14.9995C6.92295 14.9995 6.34693 14.7805 5.90666 14.3433L5.35914 13.7957C5.14688 13.5842 4.86262 13.4672 4.56111 13.4665H3.79083C2.54579 13.4665 1.5325 12.4532 1.5325 11.2081V10.4371C1.53175 10.1363 1.41475 9.85209 1.20249 9.63833L0.663969 9.10056C-0.218063 8.22378 -0.221813 6.79048 0.655719 5.90769L1.20324 5.35942C1.41475 5.14717 1.53175 4.86291 1.5325 4.56139V3.79187C1.5325 2.54607 2.54579 1.53278 3.79083 1.53278H4.56186C4.86262 1.53278 5.14613 1.41578 5.35989 1.20202L5.89916 0.664252C6.77594 -0.217781 8.2085 -0.222281 9.09203 0.656001L9.63955 1.20352C9.85256 1.41578 10.1361 1.53278 10.4368 1.53278H11.2079C12.4529 1.53278 13.4662 2.54607 13.4662 3.79187V4.56214C13.4669 4.86291 13.5839 5.14717 13.7962 5.36092L14.3347 5.89944C14.7615 6.32396 14.9977 6.88948 15 7.49325C15.0015 8.09327 14.7705 8.65804 14.3497 9.08481C14.3422 9.09231 14.3355 9.10056 14.328 9.10731L13.7955 9.63983C13.5839 9.85209 13.4669 10.1363 13.4662 10.4379V11.2081C13.4662 12.4532 12.4529 13.4665 11.2079 13.4665H10.4368C10.1361 13.4672 9.85181 13.5842 9.6388 13.7965L9.09953 14.335C8.66001 14.7775 8.07949 14.9995 7.49972 14.9995Z" fill="#64B657"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03235 6.03871C5.9086 6.16247 5.74809 6.22922 5.57034 6.22922C5.40383 6.22922 5.24032 6.16097 5.10907 6.03796C4.98457 5.91421 4.91406 5.7447 4.91406 5.57295C4.91406 5.40944 4.98307 5.24143 5.10457 5.11168C5.17132 5.04418 5.25082 4.99317 5.33033 4.96617C5.55684 4.86267 5.8576 4.92342 6.0361 5.11093C6.09986 5.17468 6.14861 5.24443 6.18086 5.31719C6.21611 5.39519 6.23411 5.48369 6.23411 5.57295C6.23411 5.75145 6.16286 5.91721 6.03235 6.03871ZM9.8932 5.10801C9.63744 4.853 9.22118 4.853 8.96542 5.10801L5.11028 8.96315C4.85452 9.21891 4.85452 9.63517 5.11028 9.89168C5.23478 10.0154 5.39904 10.0837 5.57454 10.0837C5.75005 10.0837 5.91431 10.0154 6.03806 9.89168L9.8932 6.03654C10.149 5.78003 10.149 5.36451 9.8932 5.10801ZM9.67989 8.82348C9.43688 8.72147 9.14887 8.77697 8.95686 8.96898C8.91711 9.01548 8.86086 9.08748 8.82261 9.17224C8.78211 9.26374 8.77686 9.36199 8.77686 9.428C8.77686 9.494 8.78211 9.5915 8.82261 9.68301C8.86011 9.76701 8.90511 9.83526 8.96436 9.89451C9.10012 10.0205 9.25762 10.0843 9.43313 10.0843C9.59964 10.0843 9.76314 10.0168 9.8974 9.89151C10.0167 9.77226 10.0819 9.60725 10.0819 9.428C10.0819 9.24799 10.0167 9.08373 9.89665 8.96373C9.83064 8.89848 9.75114 8.84748 9.67989 8.82348Z" fill="white"/>
                        </svg>
                        `}
                        height="15"
                        width="15" />
                    <Text style={{
                        fontSize: 14,
                        color: '#FFFFFF',
                        fontWeight: '400',
                        marginLeft: 4,
                        fontFamily: 'PlusJakartaSans'
                    }}>
                        {props.data ? props.data.type : "Free for Members"}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const HotelMember = ({ doc }) => {
    const [Rating, setRating] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const darkMode = useSelector(state => state.pageSettings.darkMode)

    React.useEffect(() => {
        let arr = []
        for (var i = 0; i < doc.rating; i++) {
            arr.push('ok')
        }
        setRating(arr);
        //finding user
        ///-----------------------------------
        postData(url + '/getData', {
            tableName: 'user',
            condition: "uid=" + "'" + doc.user_id + "'"
        }).then(data => {
            if (Array.isArray(data) && data.length > 0) {
                //console.log(data)
                return setUser(data);
            }
            console.log('369:Hotel.js->' + data.message)
        }).catch(err => {
            Alert.alert('Error', err.code)
        })
    }, [])
    return (
        <View style={styles.post}>
            <View style={styles.postHead}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: user && user[0].image ?
                            user[0].image : 'https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png'
                    }}
                />
                <View style={{
                    width: '70%',
                    paddingLeft: 20
                }}>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 16,
                        color: textColor(darkMode),
                        fontFamily: 'PlusJakartaSansBold'
                    }}>{user && user[0].name ? user[0].name : '-'}</Text>
                    {
                        user && user[0].membership_type == 'gold' ? (
                            <Text style={[styles.membership]}>
                                <Text style={{ color: '#FFB92E', fontFamily: 'PlusJakartaSansBold', }}>Gold </Text>
                                Member</Text>
                        ) : user && user[0].membership_type == 'platinum' ? (
                            <Text style={[styles.membership]}>
                                <Text style={{ color: '#A2B0CD', fontFamily: 'PlusJakartaSansBold', }}>Platinum </Text>
                                Member</Text>
                        ) : user && user[0].membership_type == 'diamond' ? (
                            <Text style={[styles.membership]}>
                                <Text style={{ color: '#48A6DB', fontFamily: 'PlusJakartaSansBold', }}>Diamond </Text>
                                Member</Text>
                        ) : user && user[0].membership_type == 'silver' ? (
                            <Text style={[styles.membership]}>
                                <Text style={{ color: '#FC444B', fontFamily: 'PlusJakartaSansBold', }}>Slider </Text>
                                Member</Text>
                        ) :
                            (
                                <Text style={[styles.membership]}>
                                    <Text style={{ color: textColor(darkMode), fontFamily: 'PlusJakartaSansBold', }}>Non </Text>
                                    Member</Text>
                            )
                    }
                </View>
                <View style={{
                    flexDirection: 'row', height: '100%',
                    alignItems: 'center', justifyContent: 'center',
                    marginTop: 3
                }}>
                    {
                        Rating ? (
                            Rating.map((doc, j) => (
                                <AntDesign key={j} name="star" size={20} color="#FC444B" />
                            ))
                        ) : (
                            <View></View>
                        )
                    }
                </View>
            </View>
            <Text style={styles.textDescr1}>
                {
                    doc.message
                }
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    body: {
        width: '100%',
        alignItems: 'center',
        padding: 10
    },
    bodyTop: {
        width: '100%',
    },
    image: {
        height: 400,
        width: '100%',
        position: 'absolute',
        borderRadius: 10,
        marginTop: 5
    },
    imageButtomIcon: {
        position: 'absolute',
        width: 48,
        height: 30,
        left: 330,
        top: 355,
        borderRadius: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    imageButtomIconText: {
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 13,
        marginTop: 6,
        fontFamily: 'PlusJakartaSans'

    },
    content: {
        marginTop: 430,
        width: '100%',
    },
    contentTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contentTopLeftBox: {
        width: 60,
        height: 30,
        backgroundColor: 'green',
        borderRadius: 15,
        marginLeft: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentTopLeftBoxText: {
        fontSize: 11,
        color: 'white',
        marginLeft: 5
    },
    hotelName: {
        fontWeight: '700',
        fontSize: 20,
        display: 'flex',
        alignItems: 'center',
        color: '#000000',
        fontFamily: 'PlusJakartaSansBold'
    },
    iconBackground: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#D8D8D8',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    },
    icon: {
        flexDirection: 'row',
        marginTop: 20
    },
    contentDescrip: {
        width: '90%'
    },
    textHead: {
        color: '#292929',
        fontSize: 16,
        fontWeight: '700',
        marginTop: 30,
        marginBottom: 15
    },
    textDescr: {
        color: '#808080',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 15,
        overflow: 'hidden',
        fontFamily: 'PlusJakartaSans'
    },
    time: {
        borderWidth: .5,
        marginTop: 40,
        marginBottom: 40,
        padding: 10,
        borderRadius: 15,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        color: 'rgb(100,100,100)',
        borderColor: '#D8D8D8'
    },
    view2: {
        borderWidth: .5,
        width: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderColor: '#D8D8D8'
    },
    view3: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%'
    },
    map: {
        height: 150,
        width: '100%'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 15,
        overflow: 'hidden'
    },
    nearbyView: {

    },
    nearbyText: {
        color: '#292929',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 15,
        fontFamily: 'PlusJakartaSansBold'

    },
    nearbyTextDescrView: {
        marginLeft: 15,
        marginBottom: 40
    },
    nearbyTextDescr: {
        fontSize: 14,
        fontWeight: '500',
        color: '#777777',
        fontFamily: 'PlusJakartaSansBold'
    },
    contentTopLeftBox2: {
        width: 60,
        height: 30,
        backgroundColor: 'green',
        borderRadius: 15,
        marginLeft: '55%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tinyLogo: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    postHead: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '90%',
        fontFamily: 'PlusJakartaSansBold'
    },
    textDescr1: {
        color: '#808080',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 10,
        fontFamily: 'PlusJakartaSans'
    },
    showMoreButton: {
        borderRadius: 20,
        borderColor: '#CACACA',
        height: 40,
        width: 150,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    cartImg: {
        height: 250,
        width: 240,
        borderRadius: 10,
        borderRadius: 5
    },
    cart: {
        height: 250,
        width: 240,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 40,
        borderRadius: 10
    },
    cartText: {
        position: 'absolute',
        marginLeft: 10,
        height: '100%',
        justifyContent: 'flex-end',
        paddingBottom: 8,
        fontFamily: 'PlusJakartaSans'
    },
    showMoreButtonText: {
        color: '#CACACA',
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'PlusJakartaSansBold'
    },
    post: {
        marginBottom: 5,
        marginTop: 5,
        padding: 10,
        width: '92%'
    }
})