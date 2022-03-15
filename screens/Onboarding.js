import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
import SideSwipe from 'react-native-sideswipe';
import { AntDesign } from '@expo/vector-icons';
const window = Dimensions.get('window')
const Onboarding = (props) => {
    
    const navigation = props.navigation
    const [data, setData] = React.useState([
        {
            name: 'skdjsd',
            id: 1
        },
        {
            name: 'dewsd',
            id: 2
        }
    ])

    return (
        <ScrollView>
            <View style={{
                height: window.height / 2 + 100,
                backgroundColor: 'black'
            }}>
                <SideSwipe
                    index={0}
                    itemWidth={window.width}
                    style={{ width: window.width }}
                    data={data}
                    contentOffset={window.width/2}
                    onIndexChange={index => { }
                        //this.setState(() => ({ currentIndex: index }))
                    }
                    renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
                        <Slider
                            {...item}
                            index={itemIndex}
                            currentIndex={currentIndex}
                            animatedValue={animatedValue}
                        />
                    )}
                />
            </View>
            <View style={{
                height: window.height / 2 - 100,
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
                        <View style={styles.view}></View>
                        <View style={styles.view}></View>
                        <View style={styles.view}></View>
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
        width: 15,
        height: 3,
        margin: 2,
        backgroundColor: 'black',
        borderRadius: 1
    }
})
const Slider = ({ item }) => {
    return (
        <View style={{
            backgroundColor: 'red',
            width: window.width,
            height: 400,
            margin:10,
        }}>
            <Text style={{
                fontSize:30,
                color: 'white'
            }}>sdhskhd</Text>
        </View>
    )
}