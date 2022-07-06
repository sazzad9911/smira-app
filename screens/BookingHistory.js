
import React from 'react';
import {
    View, StyleSheet,
    Dimensions, ScrollView, Text,
    TouchableOpacity, TextInput
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { postData, url } from '../action';
import { useSelector } from 'react-redux';

const window = Dimensions.get('window')

const BookingHistory = (props) => {
    const [CheckIn, setCheckIn] = React.useState('')
    const [CheckOut, setCheckOut] = React.useState('')
    const [data, setData] = React.useState(null)
    const hotels = useSelector(state => state.hotels)
    const [Hotel, setHotel] = React.useState(null)

    React.useEffect(() => {
        if (props.data) {
            postData(url + '/getData', {
                tableName: 'hotel_booking',
                condition: `id=${props.data.purches_id}`
            }).then(result => {
                if (Array.isArray(result)) {
                    setData(result[0])
                    setCheckIn(convertDate(result[0].check_in))
                    setCheckOut(convertDate(result[0].check_out))
                    handleHotels(result[0].hotel_id)
                }
            })
        }
    }, [props.data])
    const convertDate = (date) => {
        date = new Date(date)
        let Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let data = ''
        return data = date.getDate() + ' ' + Months[date.getMonth()] + ' ' + date.getFullYear()
    }
    const handleHotels = (id) => {

        hotels.forEach(element => {
            if (element.id == id) {
                setHotel(element)
            }
        });
    }
    return (

        <View>
            <View style={[style.container, {
                marginTop: Platform.OS == 'ios' ? 45 : 5
            }]}>
                <TouchableOpacity onPress={() => props.close(false)}
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <View style={{ flex: 6, alignItems: 'center' }}>
                    <Text style={style.font}>Booking History</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{
                    paddingHorizontal:20
                }}>
                    <View style={style.view}>
                        <Text style={style.Text}>{Hotel ? Hotel.name : ''}</Text>
                        <Text style={style.Text1}>{Hotel ? Hotel.address : ''}</Text>
                    </View>
                    <View style={style.view1}>
                        <View style={style.view3}>
                            <Text style={{
                                fontSize: 12,
                                color: 'rgb(100,100,100)',
                                fontFamily: 'PlusJakartaSans',
                            }}>Check-in</Text>
                            <Text style={{
                                fontSize: 18,
                                fontFamily: 'PlusJakartaSansBold',
                            }}>{Hotel ? Hotel.check_in : ''}</Text>
                        </View>
                        <View style={style.view2}></View>
                        <View style={style.view3}>
                            <Text style={{
                                fontSize: 12,
                                color: 'rgb(100,100,100)',
                                fontFamily: 'PlusJakartaSans',
                            }}>Check-out</Text>
                            <Text style={{
                                fontSize: 18,
                                fontFamily: 'PlusJakartaSansBold',
                            }}>{Hotel ? Hotel.check_out : ''}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 15,
                            color: 'rgb(100,100,100)',
                            marginTop: 20,
                            marginLeft: 40,
                            fontFamily: 'PlusJakartaSans',
                        }}>Check-in</Text>
                        <TextInput editable={false} selectTextOnFocus={false}
                            style={[style.input, { paddingLeft: 30 }]}
                            value={CheckIn}
                            onChangeText={(val) =>
                                setCheckIn(val)}
                        />
                    </View>

                    <View>
                        <Text style={{
                            fontSize: 15,
                            color: 'rgb(100,100,100)',
                            marginTop: 20,
                            marginLeft: 40,
                            fontFamily: 'PlusJakartaSans',
                        }}>Check-out</Text>
                        <TextInput editable={false} selectTextOnFocus={false}
                            style={[style.input, { paddingLeft: 30 }]}
                            value={CheckOut}
                            onChangeText={(val) =>
                                setCheckOut(val)}
                        />
                    </View>

                    <View>
                        <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
                            <View style={{ flex: 2 }}>
                                <Text style={{ fontSize: 14, fontFamily: 'PlusJakartaSans' }}>Adults</Text>
                                <Text style={{
                                    fontSize: 12,
                                    color: 'rgb(100,100,100)',
                                    fontFamily: 'PlusJakartaSans'
                                }}>Older 12 years</Text>
                            </View>
                            <View style={style.view4}>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: 'PlusJakartaSans'
                                }}>{data ? data.adult : ''}</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: 20 }}>
                            <View style={{ flex: 2 }}>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: 'PlusJakartaSans'
                                }}>Children</Text>
                                <Text style={{
                                    fontSize: 12,
                                    color: 'rgb(100,100,100)',
                                    fontFamily: 'PlusJakartaSans'
                                }}>5-12 years old</Text>
                            </View>
                            <View style={style.view4}>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: 'PlusJakartaSans'
                                }}>{data ? data.children : ''}</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: 20 }}>
                            <View style={{ flex: 2 }}>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: 'PlusJakartaSans'
                                }}>Rooms</Text>
                                <Text style={{
                                    fontSize: 12,
                                    color: 'rgb(100,100,100)',
                                    fontFamily: 'PlusJakartaSans'
                                }}></Text>
                            </View>
                            <View style={style.view4}>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: 'PlusJakartaSans'
                                }}>{data ? data.room : ''}</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: 20 }}>
                            <View style={{ flex: 2 }}>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: 'PlusJakartaSans'
                                }}>Veg</Text>
                                <Text style={{
                                    fontSize: 12,
                                    color: 'rgb(100,100,100)',
                                    fontFamily: 'PlusJakartaSans'
                                }}></Text>
                            </View>
                            <View style={style.view4}>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: 'PlusJakartaSans'
                                }}>{data ? data.veg : ''}</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: 20 }}>
                            <View style={{ flex: 2 }}>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: 'PlusJakartaSans'
                                }}>Non Veg</Text>
                                <Text style={{
                                    fontSize: 12,
                                    color: 'rgb(100,100,100)',
                                    fontFamily: 'PlusJakartaSans'
                                }}></Text>
                            </View>
                            <View style={style.view4}>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: 'PlusJakartaSans'
                                }}>{data ? data.non_veg : ''}</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={style.viewEnd}>
                                <Text style={style.viewtext}>BOOKING ID #{data ? data.id : ''}</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{
                            height: 75,
                        }}></View>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};

export default BookingHistory;
const style = StyleSheet.create({
    container: {
        width: window.width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    font: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: -50,
        fontFamily: 'PlusJakartaSansBold',
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    Text: {
        fontSize: 20,
        fontFamily: 'PlusJakartaSans',
    },
    Text1: {
        fontSize: 14,
        color: '#808080',
        fontFamily: 'PlusJakartaSans',
    },
    view1: {
        borderWidth: .5,
        height: 90,
        marginTop: 50,
        margin: 12,
        padding: 10,
        borderRadius: 15,
        flexDirection: 'row',
        alignContent: 'center',
        color: 'rgb(100,100,100)',
        borderColor: '#D8D8D8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view2: {
        borderWidth: .5,
        height: 70,
        width: 1,
        borderColor: '#D8D8D8',

    },
    view3: {
        marginTop: 10,
        justifyContent: 'center',
        width: 100,
        margin: 10,
        marginHorizontal: 50
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        borderColor: '#D8D8D8',
        fontFamily: 'PlusJakartaSans',
        fontSize: 13,
    },
    view4: {
        height: 40,
        width: 40,
        margin: 12,
        padding: 5,
        borderRadius: 30,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',

    },
    viewEnd: {
        height: 50,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: '#FC444B',
        borderRadius: 30,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewtext: {
        color: '#FC444B',
        fontSize: 16,
        fontFamily: 'PlusJakartaSans'
    },

})
