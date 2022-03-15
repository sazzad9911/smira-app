import React from 'react';
import { View, Dimensions, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import MapView from 'react-native-maps';
import Unorderedlist from 'react-native-unordered-list';
import { AntDesign, EvilIcons, MaterialIcons } from '@expo/vector-icons';

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
                </View>
            </View>
        </ScrollView>
    );
};

export default Hotel;

const HotelMember = (props) => {
    return(
        <View>
            
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
        marginBottom:70
    },
    nearbyTextDescr: {
        fontSize: 14,
        fontWeight: '500',
        color: '#777777'
    },
    contentTopLeftBox2:{
        width: 60,
        height: 30,
        backgroundColor: 'green',
        borderRadius: 15,
        marginLeft: '55%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }

})