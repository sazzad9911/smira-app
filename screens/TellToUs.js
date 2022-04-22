import React from 'react';
import {
    View,
    StyleSheet,
    Text, TextInput, TouchableOpacity, ScrollView,Linking
} from 'react-native';

const TellToUs = () => {
    const [name, onChangeName] = React.useState(null);
    const [mobile, onChangeMobile] = React.useState(null);
    const [msg, onChangeMsg] = React.useState(null);
    const [focusName,setFocusName] = React.useState(false);
    const [focusMobile, onFocusMobile] = React.useState(false);
    const [focusMsg, onFocusMsg] = React.useState(false);
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={style.body}>
                <View>
                    <Text style={style.headText}>
                        We're here to help and answer any question you might have.
                    </Text>
                </View>
                <View style={style.inputView}>
                    <View>
                        <Text style={style.inputL}>Full Name</Text>
                        <TextInput
                            style={[style.inputFullName,{
                                borderWidth:focusName?1:0,
                                backgroundColor:focusName?'white':'#F5F5F5'
                            }]}
                            onChangeName={onChangeName}
                            value={name}
                            onFocus={() =>setFocusName(true)}
                            onEndEditing={() => setFocusName(false)}
                        />
                    </View>
                    <View>
                        <Text style={style.inputL}>Mobile No.</Text>
                        <TextInput
                            style={[style.inputFullName,{
                                borderWidth:focusMobile?1:0,
                                backgroundColor:focusMobile?'white':'#F5F5F5'
                            }]}
                            onChangeMobile={onChangeMobile}
                            value={mobile}
                            onFocus={() =>onFocusMobile(true)}
                            onEndEditing={() => onFocusMobile(false)}
                        />
                    </View>
                    <View>
                        <Text style={style.inputL}>Your Message</Text>
                        <TextInput
                            style={[style.inputFullName,{
                                borderWidth:focusMsg?1:0,
                                backgroundColor:focusMsg?'white':'#F5F5F5'
                            }]}
                            onChangeMsg={onChangeMsg}
                            value={msg}
                            onFocus={() =>onFocusMsg(true)}
                            onEndEditing={() => onFocusMsg(false)}
                        />
                    </View>
                    <TouchableOpacity>
                        <View style={style.view}>
                            <Text style={style.viewtext}>
                                SUBMIT</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '70%',
                    }}>
                        <Text style={{
                            fontSize: 14,
                            fontFamily: 'PlusJakartaSans',
                            color: '#000000',
                        }}>Didn't got the reply?</Text>
                        <TouchableOpacity onPress={() =>{
                            Linking.openURL(`tel:+8801761143991`)
                        }}>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: 'PlusJakartaSans',
                                color: '#FC444B',
                            }}>Call us directly</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </ScrollView>
    );
};

export default TellToUs;

const style = StyleSheet.create({

    body: {
        justifyContent: 'center',
        width: '90%',
        margin: 30,
    },
    headText: {
        color: '#585858',
        fontSize: 14,
        fontFamily: 'PlusJakartaSans',
    },
    inputView: {
        justifyContent: 'center',
        marginTop: 30
    },
    input: {
        height: 50,
        margin: 12,
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#F5F5F5',
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 14,
    },
    inputFullName: {
        height: 50,
        margin: 12,
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#D8D8D8',
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 14,
    },
    view: {
        height: 50,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: '#FC444B',
        borderRadius: 30,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewtext: {
        color: '#FC444B',
        fontSize: 13,
        fontFamily: 'PlusJakartaSans',
    },
    inputL: {
        color: '#585858',
        marginLeft: 40,
        fontSize: 14,
        fontFamily: 'PlusJakartaSans',
    }
})