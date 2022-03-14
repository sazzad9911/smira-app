import React from 'react';
import {Text,View,StyleSheet,ScrollView,Dimensions,Button,TouchableOpacity} from 'react-native'
import { FontAwesome,AntDesign } from '@expo/vector-icons';
const window=Dimensions.get('window')

const CheckOut = () => {
    return (
        <ScrollView>
            <View style={styles.main}>
        <View>
            <Text style={styles.text1}>Start your 30-days trial now!</Text>
            <Text style={styles.text2}>We won't charge you today.Your payment day will be on{" "}
            <Text style={styles.text3}>April 5,2022.</Text>
            </Text>
        </View>
        <View style={styles.box}>
            <View style={styles.logo1}>
            <FontAwesome name="rupee" size={24} color="black" /><Text><Text style={styles.rupee}>2999</Text>/2 years</Text>
            </View>
            <View style={styles.logo1}>
            <AntDesign name="checkcircle" size={24} color='#FA454B' /><Text style={styles.underrupee}>Stays upto 40 nights</Text>
            </View>
            <View style={styles.logo1}>
            <AntDesign name="checkcircle" size={24} color='#FA454B' /><Text style={styles.underrupee}>Valid on any 5 hotels</Text>
            </View>
            <View style={styles.logo1}>
            <AntDesign name="checkcircle" size={24} color='#FA454B' /><Text style={styles.underrupee}>Family access upto 3 accounts</Text>
            </View>
            <View style={styles.logo1}>
            <AntDesign name="checkcircle" size={24} color='#FA454B' /><Text style={styles.underrupee}>10 days prior to reservation</Text>
            </View>
            <View style={styles.logo1}>
            <AntDesign name="checkcircle" size={24} color='#FA454B' /><Text style={styles.underrupee}>Weekends booking</Text>
            </View>
            <View style={styles.logo1}>
            <AntDesign name="checkcircle" size={24} color='#FA454B' /><Text style={styles.underrupee}>Peak days booking</Text>
            </View>
        </View>
        <Text style={styles.underboxtext}>Payment Method</Text>
        <TouchableOpacity>
            <View style={styles.button1}>
                <Text style={styles.button1text}>TRY IT FOR 30 DAYS</Text>
            </View>
        </TouchableOpacity>

        

        <View style={styles.card}>

        </View>
        </View>
        </ScrollView>
    );
};

const styles=StyleSheet.create({

    main: {
        padding:5,
        alignItems: "center",
        width: window.width,
    },


    text1: {
        fontSize: 25,
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    text2: {
        fontSize: 17,
        margin:10
    },

    text3: {
        color:"red",
    },

    box: {
        marginTop: 25,
        borderRadius: 15,
        justifyContent: "center",
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowOpacity:0.4,
        shadowRadius:5,
        shadowColor: "black",
        elevation:1,
        flex:1,
        width: window.width-30,
        padding:30
    },
    
    logo1: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom:5
    },

    rupee: {
        fontSize: 35,
    },

    underrupee: {
        fontSize: 17,
        marginLeft: 15
    },

    underboxtext: {
        fontSize: 15,
        fontWeight: "bold",
        margin: 50
    },

    button1: {
        height: window.height-560,
        width: window.width-30,
        backgroundColor:'#FA454B',
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center"
    },

    button1text: {
        fontSize: 15,
        color:`#ffffff`,
        textAlign: "center"
    },

    card: {
        height: window.height-350,
        width: window.width-30,
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowOpacity:0.4,
        shadowRadius:5,
        shadowColor: "black",
        elevation:1,
        backgroundColor: "black",
        marginTop: 25,
        borderRadius: 18
    }


});

export default CheckOut;