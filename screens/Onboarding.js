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

const window = Dimensions.get('window')
const Onboarding = (props) => {
    const [index, setIndex] = React.useState(1)
    const [user, setUser] = React.useState(null)
    const navigation = props.navigation
    const [data, setData] = React.useState([
        0, 1, 2, 3
    ])
    React.useEffect(() => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                navigation.navigate('Dashboard')
            } else {
                setUser('ok')
            }
        })
    }, [])

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{
                backgroundColor: 'black'
            }}>
                <SideSwipe
                    index={index}
                    itemWidth={window.width}
                    style={{}}
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

                        <View style={[styles.view, { backgroundColor: index == 1 ? 'black' : '#0000008e' }]}></View>
                        <View style={[styles.view, { backgroundColor: index == 2 ? 'black' : '#0000008e' }]}></View>
                        <View style={[styles.view, { backgroundColor: index == 3 ? 'black' : '#0000008e' }]}></View>
                    </View>
                    <TouchableOpacity onPress={() => {
                        if (index < 3) {
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
            {
                user == 'ok' ? (
                    <View></View>
                ) :
                    user && user.uid ? (
                        <View></View>
                    ) : (
                        <AnimatedLoader
                            visible={true}
                            overlayColor="rgba(255,255,255,0.75)"
                            source={require("../assets/9997-infinity-loader.json")}
                            animationStyle={{
                                height: 100, width: 100,
                            }}
                            speed={1}
                        >
                            <Text>Loading...</Text>
                        </AnimatedLoader>
                    )
            }
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
    const index = props.index;
    //console.log(index);
    return (
        <View style={{
            width: window.width,
            height: window.height - 180,
            backgroundColor: 'white'
        }}>
            <Image source={index == 0 ? one
                : index == 1 ? two : three} style={{
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
                    : index == 1 ? 'Discover large range of categories ' : 'Track your mood and reflect on your day'}</Text>
                <Text style={{
                    fontSize: 14,
                    marginTop: 5,
                    opacity: 0.4,
                    color: '#000000',
                    fontWeight: '400',
                    lineHeight: 19,
                    fontFamily: 'PlusJakartaSans'
                }}>{index == 0 ? 'Get an overview of how you are performing and motivate yourself to achieve even moew.'
                    : index == 1 ? 'Get an overview of how you are performing and motivate yourself to achieve even moew. ' : 'Get an overview of how you are performing and motivate yourself to achieve even moew.'}</Text>
            </View>
        </View>
    )
}