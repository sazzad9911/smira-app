import React from 'react';
import { View, Dimensions, Modal, TouchableOpacity,ScrollView ,Text} from 'react-native'
import Filter from './Filter';
import ShortBy from './ShortBy';
import { AntDesign } from '@expo/vector-icons'
const window = Dimensions.get('window')
import {short } from './Icon'
import { SvgXml } from 'react-native-svg';

const SearchBottom = (props) => {
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
                justifyContent: 'center',
            }}>
                <TouchableOpacity onPress={()=>{
                    setModalVisible(true)
                    setFilter(false)
                }} style={{
                    borderColor: '#D8D8D8',
                    borderWidth:1,
                    width:65,
                    marginRight:10,
                    height:50,
                    borderRadius:30,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <SvgXml xml={short} height="20" width="20"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    setModalVisible(true)
                    setFilter(true)
                }} style={{
                    borderColor: '#D8D8D8',
                    borderWidth:1,
                    width:245,
                    marginRight:10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height:50,
                    borderRadius:30,
                    marginLeft:20,
                    fontFamily:'PlusJakartaSans'
                }}>
                <Text>Brands     |     Filters</Text>
                </TouchableOpacity>
            </View>
            <Modal transparent={true} animationType='slide' visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                <View style={{
                    width: window.width,
                    maxHeight: window.height - 200,
                    backgroundColor: '#ffff',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    shadowOffset: {
                        height: 2, width: 2
                    }, shadowOpacity: .4,
                    shadowRadius: 5,
                    elevation: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 0,
                }}>
                   <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{
                        width: window.width,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }}>
                        <View style={{
                            width: 40,
                            height: 4,
                            margin: 15,
                            backgroundColor: '#D8D8D8'
                        }}></View>
                    </TouchableOpacity>
                    <ScrollView>
                        {
                            filter ?
                                (
                                    <Filter close={setModalVisible}/>
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