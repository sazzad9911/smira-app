import React from 'react';
import {
    View,
    StyleSheet,
    Text, TextInput, TouchableOpacity, ScrollView
} from 'react-native';

const TellToUs = () => {
    const [name, onChangeName] = React.useState(null);
    const [mobile, onChangeMobile] = React.useState(null);
    const [msg, onChangeMsg] = React.useState(null);
    return (
        <ScrollView>
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
                            style={style.inputFullName}
                            onChangeName={onChangeName}
                            value={name}
                        />
                    </View>
                    <View>
                        <Text style={style.inputL}>Mobile No.</Text>
                        <TextInput
                            style={style.input}
                            onChangeMobile={onChangeMobile}
                            value={mobile}
                        />
                    </View>
                    <View>
                        <Text style={style.inputL}>Your Message</Text>
                        <TextInput
                            style={style.input}
                            onChangeMsg={onChangeMsg}
                            value={msg}
                        />
                    </View>
                    <TouchableOpacity>
                        <View style={style.view}>
                            <Text style={style.viewtext}>
                                SUBMIT</Text>
                        </View>
                    </TouchableOpacity>

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
        fontSize: 18
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
        backgroundColor: '#F5F5F5'
    },
    inputFullName: {
        height: 50,
        margin: 12,
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#F5F5F5',
        borderWidth:1,
        borderColor:'#D8D8D8'
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
        fontSize: 20,
    },
    inputL:{
        color: '#585858',
        marginLeft:40,
        fontSize:18
    }
})