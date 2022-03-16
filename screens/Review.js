import React from 'react';
import { Constants } from 'expo';
import { AntDesign } from '@expo/vector-icons';
import { View, StyleSheet, Dimensions, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';

const Review = () => {
    return (
        <ScrollView>
            <View style={styles.body}>
                <Text style={styles.headText}>
                    Shradha Saburi Palace
                </Text>
                <Text style={styles.headText1}>
                    Shirdi, Maharashtra
                </Text>
                <View style={styles.iconView}>
                    <TouchableOpacity style={styles.icon}>
                        <AntDesign name="staro" size={45} color="rgba(128, 128, 128, 1)" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <AntDesign name="staro" size={45} color="rgba(128, 128, 128, 1)" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <AntDesign name="staro" size={45} color="rgba(128, 128, 128, 1)" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <AntDesign name="staro" size={45} color="rgba(128, 128, 128, 1)" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <AntDesign name="staro" size={45} color="rgba(128, 128, 128, 1)" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ marginEnd: '60%' }}>Review</Text>
                </View>
                <View style={styles.content} >
                    <TextInput
                        multiline={true}
                        style={styles.textInput}
                        numberOfLines={4}
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                    <View style={styles.line} />
                </View>
                <TouchableOpacity>
                <View style={styles.view}>
                    <Text style={styles.viewtext}>
                        SUBMIT</Text>
                </View>
            </TouchableOpacity>
            </View>
            
        </ScrollView>
    );
};

export default Review;

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        alignItems: 'center',
        
        height:Dimensions.get('screen').height,
        width:Dimensions.get('screen').width
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:40
    },
    headText: {
        fontSize: 25,
        fontWeight: '500',
        color: '#000000',
        marginTop:40
    },
    headText1: {
        fontSize: 16,
        fontWeight: '400',
        color: '#808080',
        marginBottom:40
    },
    icon: {
        marginLeft: 10,
    },

    content: {
        width: Dimensions.get('screen').width - 50,
    },
    textInput: {
        borderRadius: 20,
        paddingHorizontal: 12,
        backgroundColor: '#F5F5F5',
        height: 300,
        fontSize: 14,
        fontWeight:'500',
    },
    view: {
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 30,
        marginTop: 90,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewtext: {
        textAlign:'center',
        color: 'red',
        fontSize: 20,
        width:Dimensions.get('screen').width-50,
        
    },

})