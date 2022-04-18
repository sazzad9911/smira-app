import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import ProfilePicture from '../assets/10.jpg';
import {useSelector} from 'react-redux'

const AppBar = ({ title, navigation, whereTo, showDrawer }) => {
    const user=useSelector(state => state.user);
    
    const openNav = () => {
        navigation.openDrawer()
    }
    const onProfileClicked = () => {
        if (whereTo) {
            navigation.navigate(whereTo)
        }else{
            navigation.openDrawer()
        }
    }
    const onPressBack = () => {
        navigation.goBack()
    }
    return (
        <View style={[styles.container]}>
            <View style={[styles.containerContent]}>
                {
                    showDrawer === true &&
                    <TouchableOpacity style={styles.ico}>
                        <MaterialIcons name='menu' size={28} onPress={openNav} />
                    </TouchableOpacity>
                }
                {
                    showDrawer === false &&
                    <TouchableOpacity style={styles.ico}>
                        <Ionicons name='ios-arrow-back-sharp' size={28} onPress={onPressBack} />
                    </TouchableOpacity>
                }

                <Text style={[styles.headerText]}>{title}</Text>

                <TouchableOpacity style={[styles.accountContainer]} onPress={onProfileClicked}>
                    <Image source={ProfilePicture} style={[styles.profilePicture]} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AppBar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor:'white',
    },
    containerContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    headerText: {
        color: 'rebeccapurple',
        fontSize: 20,
        flex: 1,
        textAlign: 'center'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ico: {
        flex: 1,
    },
    accountContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    profilePicture: {
        height: 30,
        width: 30,
        borderRadius: 50,
    }


})