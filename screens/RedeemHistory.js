import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import Picture from '../assets/10.jpg'
import RedeemHistoryCart from '../components/RedeemHistoryCart';


const RedeemHistory = () => {
    return (
        <ScrollView>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <Image
                    style={{
                        height: 150,
                        width: 150,
                        borderRadius: 100,
                    }}
                    source={Picture}
                />
                <Text
                    style={{
                        fontSize: 25, fontWeight: 'bold'
                    }}>Nirmiti Gaitonde</Text>
                <Text
                    style={{
                        fontSize: 15,
                        color: '#FF9E00'
                    }}>Gold <Text
                        style={{ color: 'black',color: '#FFC654' }}>Member</Text></Text>
            </View>
            <View style={{ borderWidth: 0.5, margin: 15, borderColor: 'rgb(220,220,220)' }}>
            </View>
            {
                //must be include the props types,title,date and image
            }
            <RedeemHistoryCart
                type="coupon"
                title='Flat 35% OFF On All Orders'
                date='24 Febroary 2022'
                img="https://media.istockphoto.com/vectors/red-limited-offer-with-clock-for-promotion-banner-price-label-of-vector-id1172999527?k=20&m=1172999527&s=612x612&w=0&h=MiiTdF9N6n0gysXDjHUtxPdTpARjww_XCeJZukTEZdw=" />
            <View style={{ borderWidth: 0.5, margin: 15, borderColor: 'rgb(220,220,220)' }}>
            </View>
            <RedeemHistoryCart
                type="hotel"
                title='Any 2 Or More Pizza For ₹199*'
                date='24 Febroary 2022'
                img="https://media.hrs.com/media/image/01/99/b7/hotel-dummy.png" />
            <View style={{ borderWidth: 0.5, margin: 15, borderColor: 'rgb(220,220,220)' }}>
            </View>
            <RedeemHistoryCart
                type="coupon"
                title='On The Go'
                date='21 Febroary 2022'
                img="https://st2.depositphotos.com/1435425/6338/v/950/depositphotos_63384005-stock-illustration-special-offer-icon-design.jpg" />
            <View style={{ borderWidth: 0.5, margin: 15, borderColor: 'rgb(220,220,220)' }}>
            </View>
            <RedeemHistoryCart
                type="hotel"
                title='Special Offer @Just ₹199'
                date='16 Febroary 2022'
                img="https://media.hrs.com/media/image/01/99/b7/hotel-dummy.png" />
            <View style={{ borderWidth: 0.5, margin: 15, borderColor: 'rgb(220,220,220)' }}>
            </View>
        </ScrollView>
    );
};

export default RedeemHistory;