import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const DealCoupon = (props) => {
    return (
        <View>
            <AntDesign onPress={() => props.close(false)} style={[styles.icon, {
                top: Platform.OS == 'ios' ? 60 : 20
            }]} name="leftcircle" size={30} color="black" />
            <View style={styles.body}>
                <ScrollView>
                    <View>
                        <Image
                            source={{ uri: "https://t3.ftcdn.net/jpg/03/55/64/22/360_F_355642221_gISI4BdHVP8dOmf9icHQVYyBDLXLZSu6.jpg" }} style={{ width: '100%', height: 300 }} />

                        <View style={styles.content}>
                            <View style={styles.logo}>
                                <Image borderRadius={60}
                                    source={{ uri: "https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y" }} style={{ width: 100, height: 100 }} />
                            </View>
                            <View>
                                <Text style={styles.headingText}>
                                    Flat 35% OFF On All Orders
                                </Text>
                                <Text style={styles.subText}>
                                    Ovenstory
                                </Text>
                                <View style={styles.input}>
                                    <Text style={{ textAlign: 'center', fontSize: 20 }}>
                                        SMROS100
                                    </Text>
                                </View>
                                <TouchableOpacity>
                                    <View style={styles.view}>
                                        <Text style={styles.viewtext}>
                                            COPY CODE</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={{fontSize:20, }}>
                            Terms {'&'} Conditions
                        </Text>
                        <Text style={styles.textDescrp}>
                            We are happy to serve you special dsfers with
                            the followingterms and conditions:{'\n'}
                           •ltisthe responslblityofa customer to read,
                                understand and remainkmowledgeable of the.
                        </Text>
                        <TouchableOpacity>
                            <Text style={{color:'red'}}>
                                Read more
                            </Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default DealCoupon;
const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        top: 60,
        left: 20,
        zIndex:1
    },
    body: {
        height: '100%',
    },
    content: {
        alignItems: 'center',
    },
    logo: {
        marginTop: 30,
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    headingText: {
        fontSize: 25,
        marginTop: 30,
    },
    subText: {
        color: 'rgb(100,100,100)',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 40
    },
    input: {
        height: 70,
        margin: 12,
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#ECE6E6'
    },
    textDescrp:{
        color: 'rgb(100,100,100)',
        marginTop:20,
        marginBottom:10,
        fontSize:20
    },
    view: {
        height: 50,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 30,
        marginTop: 30,
        marginBottom:40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewtext: {
        color: 'red',
        fontSize: 20,
    },
    bottom:{
        margin:20,
    }
})