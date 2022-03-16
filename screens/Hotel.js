import React from 'react';
import { View, Dimensions, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import MapView from 'react-native-maps';
import Unorderedlist from 'react-native-unordered-list';
import { AntDesign, EvilIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Hotel = (props) => {
    const params = props.route.params
    const navigation = props.navigation;

    return (

        <ScrollView>
            <View style={styles.body}>
                <View style={styles.bodyTop}>
                    <TouchableOpacity>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80',
                            }}
                        />
                    </TouchableOpacity>

                    <View style={styles.imageButtomIcon}>
                        <Text style={styles.imageButtomIconText}> 1/9</Text>
                    </View>

                </View>
                <View style={styles.content}>
                    <View style={styles.contentTop}>
                        <Text style={styles.hotelName}>Shradha Saburi Place </Text>
                        <View style={styles.contentTopLeftBox}>
                            <TouchableOpacity>
                                <AntDesign name="star" size={15} color="white" />
                            </TouchableOpacity>
                            <Text style={styles.contentTopLeftBoxText}>4.3</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: '#808080' }}>
                            Shirdi, Maharashtra
                        </Text>
                        <View style={styles.icon}>
                            <View style={styles.iconBackground}>
                                <AntDesign name="wifi" size={20} color="black" />
                            </View>
                            <View style={styles.iconBackground}>
                                <MaterialIcons name="monitor" size={20} color="black" />
                            </View>
                            <View style={styles.iconBackground}>
                                <EvilIcons name="sc-pinterest" size={26} color="black" />
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentDescrip}>
                        <Text style={styles.textHead}>
                            Description
                        </Text>
                        <Text style={styles.textDescr}>
                            Shradha Saburi Palace is a budget hotel that
                            provides a comfortable stay for a nominal price.
                            The hotel is located close to a few attractions in
                            Shirdi including Sai Baba Mandir and more.
                        </Text>
                        <TouchableOpacity>
                            <Text style={{ color: 'red' }}>
                                Read more
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
                            }}>12:00 PM</Text>
                        </View>
                        <View style={styles.view2}></View>
                        <View style={styles.view3}>
                            <Text style={{
                                fontSize: 15,
                                color: 'rgb(100,100,100)',
                            }}>Check-out</Text>
                            <Text style={{
                                fontSize: 25,
                            }}>10:00 AM</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <MapView style={styles.map} />
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
                            <Text style={styles.contentTopLeftBoxText}>4.3</Text>
                        </View>
                    </View>
                    <HotelMember></HotelMember>
                    <HotelMember></HotelMember>
                    <HotelMember></HotelMember>
                    <View style={{ alignItems: 'center', marginBottom: 30 }}>
                        <TouchableOpacity>
                            <View style={styles.showMoreButton}>
                                <Text style={styles.showMoreButtonText}>
                                    Show more
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={{
                        color: '#000000',
                        fontSize: 20,
                        fontWeight: '700',
                        margin: 10
                    }}>
                        Other hotels nearby
                    </Text>
                    <View style={{ width: '95%' }}>
                        <ScrollView horizontal={true}>
                            <View style={{ flexDirection: 'row' }}>
                                <HotelMemberCart></HotelMemberCart>
                                <HotelMemberCart></HotelMemberCart>
                                <HotelMemberCart></HotelMemberCart>
                                <HotelMemberCart></HotelMemberCart>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Hotel;

const HotelMemberCart = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.cart}>
                <Image
                    style={styles.cartImg}
                    source={{
                        uri: 'https://cdna.artstation.com/p/assets/images/images/016/681/028/large/mohd-ashraf-classic-black-1.jpg?1553066591',
                    }}
                />
                <View style={styles.cartText}>
                    <Text style={{
                        fontSize: 18,
                        color: '#FFFFFF',
                        fontWeight: '700'
                    }}>Shradha Saburi Palace
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        color: '#FFFFFF',
                        fontWeight: '400',
                        marginBottom: 7
                    }}>
                        Shirdi, Maharashtra
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="md-checkmark-done-circle-outline" size={20} color='rgba(100, 182, 87, 1)' />
                        <Text style={{
                            fontSize: 14,
                            color: '#FFFFFF',
                            fontWeight: '500'
                        }}>
                            Free for Members
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const HotelMember = (props) => {
    return (
        <View style={styles.post}>
            <View style={styles.postHead}>
                <View>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW1lcmljYW4lMjB3b21hbnxlbnwwfHwwfHw%3D&w=1000&q=80',
                        }}
                    />
                </View>
                <View style={{
                    marginLeft: 15,
                    marginRight: 30
                }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '700',
                        color: '#292929'
                    }}>
                        Rahul Jadhav
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '700',
                        color: '#CBCBCB'
                    }}>
                        Platinum Member
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name="star" size={22} color="red" />
                    <AntDesign name="star" size={22} color="red" />
                    <AntDesign name="star" size={22} color="red" />
                    <AntDesign name="star" size={22} color="red" />
                    <AntDesign name="star" size={22} color="red" />
                </View>
            </View>
            <Text style={styles.textDescr1}>
                Shradha Saburi Palace is a budget hotel that
                provides a comfortable stay for a nominal price.
                The hotel is located close to a few attractions in
                Shirdi including Sai Baba Mandir and more.
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    body: {
        width: '100%',
        alignItems: 'center',
    },
    bodyTop: {
        width: '95%',
        backgroundColor: 'blue'
    },
    image: {
        height: 400,
        width: '100%',
        position: 'absolute',
        borderRadius: 10
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
        marginBottom: 15
    },
    time: {
        borderWidth: .5,
        height: Dimensions.get('window').height - 800,
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
        height: 80,
        width: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    view3: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
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
        width: 65,
        height: 65,
        borderRadius: 40,
    },
    postHead: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
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
        borderRadius: 10
    },
    cart: {
        height: 210,
        width: 200,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 40
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
        marginBottom: 20,
        marginTop: 20,
        padding: 5,
        alignItems: 'center',
        width: '95%'
    }
})