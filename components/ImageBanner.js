import React from 'react';
import { Image, TouchableOpacity,Modal } from 'react-native';
import { DetailsCart } from './SalonCart';
import {useSelector} from 'react-redux';

const ImageBanner = (props) => {
    const [ModalVisible, setModalVisible]= React.useState(false)
    const data = props.data
    const brands= useSelector(state => state.brands)
    return (
        <TouchableOpacity onPress={() =>setModalVisible(true)}>
            <Image style={{
                width: 300,
                height: 230,
                marginLeft: 10,
                borderRadius: 10
            }} source={{ uri: data.image }} />
            <Modal visible={ModalVisible} onRequestClose={() => setModalVisible(!ModalVisible)}>
            <DetailsCart setModalVisible={setModalVisible} data={brands?brands.filter(d=>d.id ==data.brand_id)[0]:{}}/>
            </Modal>
        </TouchableOpacity>
    );
};

export default ImageBanner;