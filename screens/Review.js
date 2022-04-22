import React,{useRef} from 'react';
import { Constants } from 'expo';
import { AntDesign } from '@expo/vector-icons';
import {
    View, StyleSheet, Dimensions, TextInput, Text,
    TouchableOpacity, ScrollView, Alert
} from 'react-native';
import { postData, url } from '../action';
import app from '../firebase'
import { getAuth } from 'firebase/auth'
import AnimatedLoader from 'react-native-animated-loader';
import AppBar from './../components/AppBar';

const Review = (props) => {
    const params = props.route.params
    const navigation = props.navigation
    const [Star1, setStar1] = React.useState(false)
    const [Star2, setStar2] = React.useState(false)
    const [Star3, setStar3] = React.useState(false)
    const [Star4, setStar4] = React.useState(false)
    const [Star5, setStar5] = React.useState(false)
    const [Review, setReview] = React.useState(null);
    const [loader,setLoader] = React.useState(false);

    const focusInput=useRef();

    const submit = () => {
        const auth = getAuth(app);
        let rate = 0;
        if(Star1){
            rate=rate + 1;
        }
        if(Star2){
            rate=rate +1;
        } 
        if(Star3){
            rate=rate +1;
        }
        if(Star4){
            rate=rate +1;
        }
        if(Star5){
            rate=rate +1;
        }
        setLoader(true)
        postData(url + '/setData', {
            auth: auth.currentUser,
            tableName: 'hotel_reviews',
            columns: ['hotel_id', 'rating', 'user_id', 'message'],
            values: [params.id, rate, auth.currentUser.uid, Review]
        }).then(data => {
            if (data && data.insertId) {
                setReview(null);
                navigation.navigate('Confirm Message',{
                    text1:'Thanks for your review.', 
                    text2:'Your review is important to us.'
                })
                setLoader(false);
                return
            }
            Alert.alert('Failed', data.message)
            setLoader(false);
        }).catch(err => {
            Alert.alert('Failed', err.code)
            setLoader(false);
        })
    }
    return (
        <ScrollView>
            <View style={styles.body}>
                <Text style={styles.headText}>
                    {params.name}
                </Text>
                <Text style={styles.headText1}>
                    {params.address}
                </Text>
                <View style={styles.iconView}>
                    <TouchableOpacity onPress={() => {
                        setStar1(!Star1)
                    }} style={styles.icon}>
                        <AntDesign name={Star1 ? 'star' : 'staro'} size={45} color={Star1 ? '#FFC654' : "rgba(128, 128, 128, 1)"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setStar2(!Star2)
                    }} style={styles.icon}>
                        <AntDesign name={Star2 ? 'star' : 'staro'} size={45} color={Star2 ? '#FFC654' : "rgba(128, 128, 128, 1)"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setStar3(!Star3)
                    }} style={styles.icon}>
                        <AntDesign name={Star3 ? 'star' : 'staro'} size={45} color={Star3 ? '#FFC654' : "rgba(128, 128, 128, 1)"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setStar4(!Star4)
                    }} style={styles.icon}>
                        <AntDesign name={Star4 ? 'star' : 'staro'} size={45} color={Star4 ? '#FFC654' : "rgba(128, 128, 128, 1)"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setStar5(!Star5)
                    }} style={styles.icon}>
                        <AntDesign name={Star5 ? 'star' : 'staro'} size={45} color={Star5 ? '#FFC654' : "rgba(128, 128, 128, 1)"} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{margin:5, marginEnd: '70%',fontFamily: 'PlusJakartaSans',}}>Review</Text>
                </View>
                <TouchableOpacity onPress={() =>{
                    focusInput.current.focus();
                }} style={styles.content} >
                    <TextInput ref={focusInput} value={Review} onChangeText={setReview}
                        multiline={true}
                        style={styles.textInput}
                        numberOfLines={4}
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                    <View style={styles.line} />
                </TouchableOpacity>
                <TouchableOpacity onPress={submit} disabled={Review && Star1 ? false : true}>
                    <View style={[styles.view, {
                        backgroundColor: Review && Star1 ? '#FC444B' : 'white',
                    }]}>
                        <Text style={[styles.viewtext, {
                            color: Review && Star1 ? '#FFFF' : '#FC444B'
                        }]}>
                            SUBMIT</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <AnimatedLoader
                visible={loader}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("../assets/9997-infinity-loader.json")}
                animationStyle={{
                    height: 100, width: 100,
                }}
                speed={1}
            >
                <Text>Loading...</Text>
            </AnimatedLoader>
        </ScrollView>
    );
};

export default Review;

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        alignItems: 'center',

        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    headText: {
        fontSize: 25,
        fontWeight: '500',
        color: '#000000',
        marginTop: 40,
        fontFamily:'PlusJakartaSans'
    },
    headText1: {
        fontSize: 16,
        fontWeight: '400',
        color: '#808080',
        marginBottom: 40,
        fontFamily:'PlusJakartaSans'
    },
    icon: {
        marginLeft: 10,
    },

    content: {
        width: Dimensions.get('screen').width - 50,
        minHeight: 300,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        padding: 5
    },
    textInput: {
        paddingHorizontal: 12,
        fontSize: 14,
        fontWeight: '500',
        borderRadius: 20,
        alignItems:'flex-start',
        fontFamily:'PlusJakartaSans'
    },
    view: {
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: '#FC444B',
        borderRadius: 30,
        marginTop: 90,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewtext: {
        textAlign: 'center',
        color: 'red',
        fontSize: 20,
        width: Dimensions.get('screen').width - 50,

    },

})