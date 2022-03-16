import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import { Dimensions } from 'react-native';
import SideSwipe from 'react-native-sideswipe';
import { AntDesign } from '@expo/vector-icons';
import Screen from '../assets/Screen.png'

const window = Dimensions.get('window')
const Onboarding = (props) => {
    const [index, setIndex] = React.useState(3)
    const navigation = props.navigation
    const [data, setData] = React.useState([
        0, 1, 2, 3
    ])

    return (
        <ScrollView>
            <View style={{
                backgroundColor: 'black'
            }}>
                <SideSwipe
                    index={3}
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
                height: 300,
                padding: 30,
            }}>
                <Text style={{
                    fontSize: 26
                }}>Track your mood and {'\n'} reflect on your day</Text>
                <Text style={{
                    fontSize: 17,
                    marginTop: 5,
                    color: '#0000008e'
                }}>Get an overview of how you are performing
                    and motivate yourself to achieve even moment</Text>
                <View style={{
                    height: 100,
                    width: '100%',
                    marginTop: 50,
                    flexDirection: 'row',
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{
                        flex: 1,
                    }}>
                        <Text style={{ fontSize: 18 }}>Skip</Text>
                    </TouchableOpacity>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}>

                        <View style={[styles.view, { backgroundColor: index == 0 ? 'black' : '#0000008e' }]}></View>
                        <View style={[styles.view, { backgroundColor: index==1?'black' :'#0000008e' }]}></View>
                        <View style={[styles.view, { backgroundColor: index==2?'black' :'#0000008e' }]}></View>
                        <View style={[styles.view, { backgroundColor: index==3?'black' :'#0000008e' }]}></View>
                    </View>
                    <TouchableOpacity style={{
                        height: 60,
                        width: 60,
                        backgroundColor: '#FC444B',
                        borderRadius: 20,
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
const Slider = ({ item }) => {
    return (
        <Image source={Screen} style={{
            width: window.width,
            height: window.height / 2 + 100,
        }} />
    )
}