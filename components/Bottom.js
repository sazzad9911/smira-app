import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Bottom = (props) => {
    const [active, setActive] = React.useState('explore')
    const navigation = props.navigation;
    const [modalVisible, setModalVisible] = React.useState(false)
    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={() => setActive('calendar')} style={styles.center}>
                <Feather name="calendar" size={24} color="#ffff" />
            </TouchableOpacity>
            <View style={{ flex: 1, flexDirection: 'row', marginRight: 40 }}>
                <TouchableOpacity onPress={() => setActive('explore')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name="explore" size={24} color={active == 'explore' ? 'black' : '#D8D8D8'} />
                    <Text style={{ color: active == 'explore' ? 'black' : '#D8D8D8' }}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActive('category')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name="category" size={24} color={active == 'category' ? 'black' : '#D8D8D8'} />
                    <Text style={{ color: active == 'category' ? 'black' : '#D8D8D8' }}>Category</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>
                <TouchableOpacity onPress={() => setActive('membership')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name="card-membership" size={24} color={active == 'membership' ? 'black' : '#D8D8D8'} />
                    <Text style={{ color: active == 'membership' ? 'black' : '#D8D8D8' }}>Membership</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActive('call')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name="call" size={24} color={active == 'call' ? 'black' : '#D8D8D8'} />
                    <Text style={{ color: active == 'call' ? 'black' : '#D8D8D8' }}>Category</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>

            </Modal>
        </View>
    );
};

export default Bottom;
const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        marginHorizontal: '4%',
        width: '92%',
        height: 70,
        borderRadius: 30,
        shadowOffset: {
            height: 2, width: 2
        }, shadowOpacity: .4,
        shadowRadius: 5,
        elevation: 5,
        marginVertical: 5,
        flexDirection: 'row'
    },
    center: {
        backgroundColor: '#FC444B',
        height: 80, width: 80,
        position: 'absolute',
        justifyContent: 'center',
        borderWidth: 8,
        borderColor: '#ffff',
        bottom: 25,
        borderRadius: 40,
        alignItems: 'center',
        left: '40%'
    }
})