import React from 'react';
import {Image} from 'react-native';

const ImageBanner = () => {
    return (
        <Image style={{
            width:300,
            height:230,
            marginLeft:10,
            borderRadius:10
        }} source={{ uri:'https://i.ibb.co/vDRDwnC/5.png'}}/>
    );
};

export default ImageBanner;