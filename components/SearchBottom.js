import React from 'react';
import { View, Dimensions, Modal, TouchableOpacity,ScrollView ,Text} from 'react-native'
import Filter from './Filter';
import ShortBy from './ShortBy';
import { AntDesign } from '@expo/vector-icons'
const window = Dimensions.get('window')

const SearchBottom = () => {
    const [modalVisible, setModalVisible] = React.useState(false)
    const [filter, setFilter] = React.useState(false)

    return (
        <View style={{
            width: window.width,
            height: 70,
            backgroundColor: '#ffff',
            padding:10

        }}>
            <View style={{
                flexDirection: 'row',
            }}>
                <TouchableOpacity onPress={()=>{
                    setModalVisible(true)
                    setFilter(false)
                }} style={{
                    borderColor: '#4c4b4bb7',
                    borderWidth:1,
                    flex:1,
                    marginRight:10,
                    height:50,
                    borderRadius:30,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <AntDesign name="swap" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    setModalVisible(true)
                    setFilter(true)
                }} style={{
                    borderColor: '#4c4b4bb7',
                    borderWidth:1,
                    flex:3,
                    marginRight:10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height:50,
                    borderRadius:30,
                }}>
                <Text>Brands     |     Filters</Text>
                </TouchableOpacity>
            </View>
            <Modal transparent={true} animationType='slide' visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                <View style={{
                    width: window.width,
                    height: window.height - 400,
                    backgroundColor: '#ffff',
                    marginTop: 400,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    shadowOffset: {
                        height: 2, width: 2
                    }, shadowOpacity: .4,
                    shadowRadius: 5,
                    elevation: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{
                        width: window.width,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }}>
                        <AntDesign name="caretdown" size={30} color="black" />
                    </TouchableOpacity>
                    <ScrollView>
                        {
                            filter ?
                                (
                                    <Filter />
                                ) : (
                                    <ShortBy />
                                )
                        }
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
};

export default SearchBottom;