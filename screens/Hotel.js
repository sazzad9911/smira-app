import React from 'react';
import {
    View, Dimensions, Text, TouchableOpacity, Image,
    StyleSheet, ScrollView, ActivityIndicator, Alert, Modal, Platform
} from 'react-native'
import MapView from 'react-native-maps';
import Unorderedlist from 'react-native-unordered-list';
import { AntDesign, EvilIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { postData, url } from '../action'
import { useRoute } from '@react-navigation/native';
import Gallery from 'react-native-image-gallery';

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

    React.useEffect(() => {
        if (params.id) {
            postData(url + '/getData', {
                tableName: 'hotels',
                condition: "id=" + "'" + params.id + "'"
            }).then(data => {
                if (Array.isArray(data)) {
                    let arr = data[0].conditions.split(',');
                    setConditions(arr)
                    return setHotel(data)
                }
                console.log('Hotel.js->' + data.message)
            }).catch(err => {
                Alert.alert('Error', err.code)
            })
            ///-----------------------------------
            postData(url + '/getData', {
                tableName: 'hotels',
                condition: "id<>" + "'" + params.id + "'"
            }).then(data => {
                if (Array.isArray(data)) {
                    return setOtherHotels(data)
                }
                console.log('Hotel.js->' + data.message)
            }).catch(err => {
                Alert.alert('Error', err.code)
            })

            ///-----------------------------------
            postData(url + '/getData', {
                tableName: 'hotel_reviews',
                condition: "hotel_id=" + "'" + params.id + "'"
            }).then(data => {
                if (Array.isArray(data)) {
                    return setRatings(data)
                }
                console.log('Hotel.js->' + data.message)
            }).catch(err => {
                Alert.alert('Error', err.code)
            })
            //get hotels images
            postData(url + '/getData', {
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
            }).catch(err => {
                console.log(err.code)
            })
        }
    }, [params.id + route])


    return (

        <View style={{
            width: window.width - 10,
            marginLeft: 5,
            height: window.height
        }}>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.bodyTop}>
                        <TouchableOpacity style={styles.image} onPress={() => setModalVisible(true)}>

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
                            <Text style={styles.imageButtomIconText}> 1/{Images ? Images.length : '1'}</Text>
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
                                                        <MaterialIcons name="monitor" size={20} color="black" />
                                                    </View>
                                                )
                                            } else {
                                                return (
                                                    <View key={i} style={styles.iconBackground}>
                                                        <EvilIcons name="sc-pinterest" size={26} color="black" />
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
                            <Text style={[styles.textDescr, { height: Read ? 'auto' : 50 }]}>
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
                                }}>Check-in</Text>
                                <Text style={{
                                    fontSize: 25,
                                }}>{Hotel ? Hotel[0].check_in : ''}</Text>
                            </View>
                            <View style={styles.view2}></View>
                            <View style={styles.view3}>
                                <Text style={{
                                    fontSize: 15,
                                    color: 'rgb(100,100,100)',
                                }}>Check-out</Text>
                                <Text style={{
                                    fontSize: 25,
                                }}>{Hotel ? Hotel[0].check_out : ''}</Text>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <MapView initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }} style={styles.map} />
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
                        <View style={styles.contentTop}>
                            <Text style={styles.hotelName}>Reviews </Text>
                            <View style={styles.contentTopLeftBox2}>
                                <TouchableOpacity>
                                    <AntDesign name="star" size={15} color="white" />
                                </TouchableOpacity>
                                <Text style={styles.contentTopLeftBoxText}>{Hotel ? Hotel[0].ratings : '0'}</Text>
                            </View>
                        </View>
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
                            fontSize: 20,
                            fontWeight: '700',
                            marginBottom: 10
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
                height: 60,
                paddingHorizontal: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Review', {
                    id: Hotel[0].id, name: Hotel[0].name, address: Hotel[0].address
                })} style={{
                    borderWidth: 1,
                    borderColor: '#0000008e',
                    width: 60,
                    height: 50,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <AntDesign name="hearto" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Booking', {
                    id: Hotel[0].id, name: Hotel[0].name, address: Hotel[0].address,
                    check_in: Hotel[0].check_in, check_out: Hotel[0].check_out
                })} style={{
                    backgroundColor: '#64B657',
                    width: 200,
                    height: 50,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 18
                    }}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Hotel;

export const HotelMemberCart = (props) => {
    return (
        <View style={styles.cart}>
            <Image
                style={styles.cartImg}
                source={{
                    uri: props.data ? props.data.image : 'https://cdna.artstation.com/p/assets/images/images/016/681/028/large/mohd-ashraf-classic-black-1.jpg?1553066591',
                }}
            />
            <View style={styles.cartText}>
                <Text style={{
                    fontSize: 18,
                    color: '#FFFFFF',
                    fontWeight: '700'
                }}>{props.data ? props.data.name : "-----"}
                </Text>
                <Text style={{
                    fontSize: 14,
                    color: '#FFFFFF',
                    fontWeight: '400',
                    marginBottom: 7
                }}>
                    {props.data ? props.data.address : "---"}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="md-checkmark-done-circle-outline" size={20} color='rgba(100, 182, 87, 1)' />
                    <Text style={{
                        fontSize: 14,
                        color: '#FFFFFF',
                        fontWeight: '500'
                    }}>
                        {props.data ? props.data.type : "Free for Members"}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const HotelMember = ({ doc }) => {
    const [Rating, setRating] = React.useState(null);
    const [User, setUser] = React.useState(null);

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
                        uri: User && User[0].image ?
                            User[0].image : 'https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png'
                    }}
                />
                <View style={{

                }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '700',
                        color: '#292929'
                    }}>
                        {User ? User[0].name : ''}
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '700',
                        color: '#CBCBCB'
                    }}>
                        {User && User[0].membership_type ? User[0].membership_type : 'No Membership'}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {
                        Rating ? (
                            Rating.map((doc, j) => (
                                <AntDesign key={j} name="star" size={22} color="red" />
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
        padding:10
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

    },
    content: {
        marginTop: 430
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
        color: '#000000'
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
    },
    view2: {
        borderWidth: .5,
        width: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    view3: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%'
    },
    map: {
        width: '100%',
        height: Dimensions.get('window').height - 750,
        borderRadius: 20

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    nearbyView: {

    },
    nearbyText: {
        color: '#292929',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 15,

    },
    nearbyTextDescrView: {
        marginLeft: 15,
        marginBottom: 70
    },
    nearbyTextDescr: {
        fontSize: 14,
        fontWeight: '500',
        color: '#777777'
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
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '90%'
    },
    textDescr1: {
        color: '#808080',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 10
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
        height: 210,
        width: 200,
        borderRadius: 10,
        opacity: .7,
        borderRadius: 5
    },
    cart: {
        height: 210,
        width: 200,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 40,
        backgroundColor: '#000',
        borderRadius: 5
    },
    cartText: {
        position: 'absolute',
        marginLeft: 10,
        marginTop: '52%'
    },
    showMoreButtonText: {
        color: '#CACACA',
        fontSize: 12,
        fontWeight: '500'
    },
    post: {
        marginBottom: 5,
        marginTop: 5,
        padding: 5,
        width: '92%'
    }
})