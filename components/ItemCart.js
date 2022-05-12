import React from 'react';
import { TouchableOpacity, View, Dimensions, Image, Text } from 'react-native'
import { useSelector } from 'react-redux';

const ItemCart = (props) => {
    const window = Dimensions.get('window')
    const deals = useSelector(state => state.deals)
    const [Data, setData] = React.useState(null)
    React.useEffect(() => {
       if(deals){
        let arr = deals.filter(e => e.deal.type == props.name)
        setData(arr)
       }
    }, [deals])

    return (
        <TouchableOpacity onPress={props.onPress} style={{
            width: window.width / 2 - 20,
            margin: 10,
            borderRadius: 10
        }}>
            <Image style={{
                width: '100%',
                height: 130,
                borderRadius: 10,
            }} source={{ uri: Data?Data[0].deal.image:''}} />
            <Text style={{
                fontFamily: 'PlusJakartaSansBold',
                fontSize: 18,
                marginLeft: 10
            }}>{props.name}</Text>
            <Text style={{
                fontFamily: 'PlusJakartaSans',
                fontSize: 14,
                marginLeft: 10
            }}>{Data?Data.length: '0'} places</Text>
        </TouchableOpacity>
    );
};

export default ItemCart;