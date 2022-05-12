import React from 'react';
import { Image, TouchableOpacity,Modal } from 'react-native';
import { DetailsCart } from './SalonCart';

const ImageBanner = (props) => {
    const [ModalVisible, setModalVisible]= React.useState(false)
    const data = props.data
    return (
        <TouchableOpacity onPress={() =>setModalVisible(true)}>
            <Image style={{
                width: 300,
                height: 230,
                marginLeft: 10,
                borderRadius: 10
            }} source={{ uri: data.brand.image }} />
            <Modal visible={ModalVisible} onRequestClose={() => setModalVisible(!ModalVisible)}>
            <DetailsCart setModalVisible={setModalVisible} data={data.brand}/>
            </Modal>
        </TouchableOpacity>
    );
};

export default ImageBanner;