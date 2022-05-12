import React from 'react';
import {Image} from 'react-native';

const ImageBanner = (props) => {
    const data = props.data
    return (
        <Image style={{
            width:300,
            height:230,
            marginLeft:10,
            borderRadius:10
        }} source={{ uri:data.deal.image}}/>
    );
};

export default ImageBanner;