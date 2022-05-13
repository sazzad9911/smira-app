import React,{useEffect} from 'react';
import { View, ScrollView, Text,BackHandler } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {useSelector,useDispatch} from 'react-redux'
import { backgroundColor, textColor } from './../assets/color';
import AnimatedLoader from 'react-native-animated-loader';
import LottieView from 'lottie-react-native';

const ConfirmMessage = (props) => {
    const params = props.route.params;
    const darkMode= useSelector(state => state.pageSettings.darkMode)
    const [Loader, setLoader]= React.useState(true)
    
    return (
        <View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                backgroundColor: textColor(!darkMode)
            }}>
                <LottieView style={{
                    marginTop:-80
                }} source={require("../assets/ConfirmationTick.json")} autoPlay />
                <Text style={{
                    fontSize: 20,
                    fontWeight: '700',
                    marginTop: 20,
                    color:textColor(darkMode)
                }}>Confirmation!</Text>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: 'rgb(100,100,100)',
                }}>{params && params.text1?params.text1:'Action successful.'}</Text>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: 'rgb(100,100,100)',
                }}>{params && params.text2?params.text2:'Please check for confirmation email.'}</Text>
            </View>
            
        </View>
    );
};

export default ConfirmMessage;