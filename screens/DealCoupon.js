import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const DealCoupon = (props) => {
    return (
        <View>
            <AntDesign onPress={()=>props.close(false)} style={[styles.icon,{
                top:Platform.OS=='ios'?60:20
            }]} name="leftcircle" size={30} color="black" />
            <ScrollView>
                <View style={styles.body}>
                    <Image
                        source={{ uri: "https://t3.ftcdn.net/jpg/03/55/64/22/360_F_355642221_gISI4BdHVP8dOmf9icHQVYyBDLXLZSu6.jpg" }} style={{ width: '100%', height: '100%' }} />

                    <View>
                        <View>
                            <Image
                                source={{ uri: "https://t3.ftcdn.net/jpg/03/55/64/22/360_F_355642221_gISI4BdHVP8dOmf9icHQVYyBDLXLZSu6.jpg" }} style={{ width: '100%', height: '100%' }} />
                        </View>
                        <View>
                            <Text>
                                Flat 35% OFF On All Orders
                            </Text>
                            <Text>
                                Ovenstory
                            </Text>
                            <View style={styles.input}>
                                <Text>
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
            </ScrollView>
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
        height: 100,
        width: '100%',
        backgroundColor: 'black',
        marginTop: 200
    },
    input: {
        height: 50,
        margin: 12,
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#ECE6E6'
    },
    view: {
        height: 50,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 30,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewtext: {
        color: 'red',
        fontSize: 20,
    },
})