import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, StatusBar } from 'react-native'
import { Dimensions } from 'react-native';
import SideSwipe from 'react-native-sideswipe';
import { AntDesign } from '@expo/vector-icons';
import Screen from '../assets/Screen.png'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AnimatedLoader from "react-native-animated-loader";
import { LogBox } from 'react-native';
import app from './../firebase';
LogBox.ignoreAllLogs();
//import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/css';

const window = Dimensions.get('window')
const Onboarding = (props) => {
    const [index, setIndex] = React.useState(0)
    const [user, setUser] = React.useState(null)
    const navigation = props.navigation
    const [data, setData] = React.useState([
        0, 1, 2
    ])
    

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{
                backgroundColor: 'white'
            }}>
                <SideSwipe
                    index={index}
                    itemWidth={window.width}
                    style={{width:window.width}}
                    data={data}
                    contentOffset={window.width}
                    onIndexChange={index => {
                        setIndex(index);
                    }}
                    renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
                        <Slider
                            {...item}
                            index={itemIndex}
                            currentIndex={currentIndex}
                            animatedValue={animatedValue}
                            i={index}
                        />
                    )} />
            </View>
            <View style={{
                padding: 30,
                marginBottom: 20,
                
            }}>

                <View style={{
                    height: 100,
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'flex-end', alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{
                        flex: 1,
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            lineHeight: 20,
                            fontFamily: 'PlusJakartaSans',
                        }}>Skip</Text>
                    </TouchableOpacity>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}>

                        <View style={[styles.view, { backgroundColor: index == 0 ? 'black' : '#0000008e' }]}></View>
                        <View style={[styles.view, { backgroundColor: index == 1 ? 'black' : '#0000008e' }]}></View>
                        <View style={[styles.view, { backgroundColor: index == 2 ? 'black' : '#0000008e' }]}></View>
                    </View>
                    <TouchableOpacity onPress={() => {
                        if(index<1){
                            setIndex(1)
                            return
                        }
                        if (index < 2) {
                            setIndex(index + 1)
                        } else {
                            navigation.navigate('SignUp')
                        }
                    }} style={{
                        height: 62,
                        width: 62,
                        backgroundColor: '#FC444B',
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <AntDesign name="arrowright" size={24} color="#ffff" />
                    </TouchableOpacity>
                </View>
            </View>
            
        </ScrollView>
    );
};

export default Onboarding;
const styles = StyleSheet.create({
    view: {
        width: 20,
        height: 4,
        margin: 2,
        backgroundColor: 'black',
        borderRadius: 1
    }
})
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'

const Slider = (props) => {
    const index = props.i;
    console.log(index)
    return (
        <View style={{
            width: window.width,
            height: window.height - 180,
            backgroundColor: 'white',
        }}>
            <Image source={props.i== 0 ? one:
                 index ==1 ? two: three} style={{
                    width: window.width,
                    height: '70%',
                }} />
            <View style={{
                width: '100%',
                height: '30%',
                justifyContent: 'center',
                padding: 30,
                
            }}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: '500',
                    lineHeight: 30,
                    fontFamily: 'PlusJakartaSans'
                }}>{index == 0 ? 'Exclusive discounts on your favourite brands'
                    : index == 1 ? 'Enjoy deals on large range of categories  ' : 'Book executive hotels for FREE '}</Text>
                <Text style={{
                    fontSize: 14,
                    marginTop: 5,
                    opacity: 0.4,
                    color: '#000000',
                    fontWeight: '400',
                    lineHeight: 19,
                    fontFamily: 'PlusJakartaSans'
                }}>{index == 0 ? 'Get an overview of how you are performing and motivate yourself to achieve even moew.'
                    : index == 1 ? 'Choose from a range of categories and double your savings. ' : 'Spend your vacation in executive hotels while saving money.'}</Text>
            </View>
        </View>
    )
}