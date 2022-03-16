import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'

const HotelGallery = () => {
    return (
        <View style={styles.body}>
            <ScrollView >
                <Hotelpicture></Hotelpicture>
                <Hotelpicture></Hotelpicture>
                <Hotelpicture></Hotelpicture>
                <Hotelpicture></Hotelpicture>
                <Hotelpicture></Hotelpicture>
                <Hotelpicture></Hotelpicture>
                <Hotelpicture></Hotelpicture>
                <Hotelpicture></Hotelpicture>
                <Hotelpicture></Hotelpicture>
            </ScrollView>
        </View>

    );
};

export default HotelGallery;

const Hotelpicture = () => {
    return (
        <TouchableOpacity>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80',
                }}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    body: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:150,
    },
    image: {
        height: 250,
        width: 400,
        borderRadius: 10,
        marginBottom: 10
    },
})