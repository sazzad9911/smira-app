import React from 'react';
import { TouchableOpacity, View, Dimensions, Image, Text } from 'react-native'
import { useSelector } from 'react-redux';
import pic from '../assets/10.jpg'

const ItemCart = (props) => {
    const window = Dimensions.get('window')
    const deals = useSelector(state => state.deals)
    const [Data, setData] = React.useState(null)
    const [Deal, setDeal] =React.useState(null)
    React.useEffect(() => {
       if(deals){
        const arr = deals.filter(e => e.deal.type == props.name)
        setData(arr)
        if(arr && arr.length>0){
            setDeal(arr[0].deal)
        }
       }
    }, [deals])
    //console.log(Deal?Deal.image:'rr')
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
            }} source={{uri:Deal?Deal.image:'https://toyjunction.in/images/item_no.png'}} />
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