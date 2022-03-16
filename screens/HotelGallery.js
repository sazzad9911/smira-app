import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, StyleSheet, Image, Dimensions, ScrollView, Text, TouchableOpacity, Modal } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const HotelGallery = () => {
    const [modalVisible, setModalVisible] = React.useState(false)
    const window = Dimensions.get('window')
    return (
        <View style={styles.body}>
            <ScrollView >
                <Hotelpicture close={setModalVisible}></Hotelpicture>
                <Hotelpicture close={setModalVisible}></Hotelpicture>
                <Hotelpicture close={setModalVisible}></Hotelpicture>
                <Hotelpicture close={setModalVisible}></Hotelpicture>
                <Hotelpicture close={setModalVisible}></Hotelpicture>
                <Hotelpicture close={setModalVisible}></Hotelpicture>
                <Hotelpicture close={setModalVisible}></Hotelpicture>
                <Hotelpicture close={setModalVisible}></Hotelpicture>
                <Hotelpicture close={setModalVisible}></Hotelpicture>
            </ScrollView>
            <Modal
                animationType='slide'

                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={{
                    width: window.width,
                    height: window.height,

                }}>

                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80',
                                }}
                            />
                        </View>
                    </View>


                    <TouchableOpacity style={{
                        height: '100%',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        marginTop: 200

                    }}
                        onPress={() => {
                            setModalVisible(!modalVisible)
                        }}>
                        <AntDesign name="closecircle" size={40} color='rgba(0, 0, 0, 0.5)' />
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>

    );
};

export default HotelGallery;

const Hotelpicture = (props) => {
    return (
        <TouchableOpacity onPress={() => props.close(true)}>
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    body: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 150,
    },
    image: {
        height: 250,
        width: 400,
        borderRadius: 10,
        marginBottom: 10
    },
})