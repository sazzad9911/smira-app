import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import Picture from '../assets/10.jpg'
import RedeemHistoryCart from '../components/RedeemHistoryCart';
import { useSelector } from 'react-redux'
import { postData, url } from '../action'
import { getAuth } from 'firebase/auth';
import app from '../firebase';


const RedeemHistory = () => {
    const user = useSelector(state => state.user)
    const [RedeemHistory, setRedeemHistory] = React.useState(null)
    const auth = getAuth(app);

    React.useEffect(() => {
        const fun = postData(url + '/getData', {
            tableName: 'redeem_history',
            orderColumn: 'date',
        }).then((data) => {
            if (Array.isArray(data)) {
                let arr = []
                data.forEach((item) => {
                    if (item.uid == auth.currentUser.uid) {
                        arr.push(item)
                    }
                })
                return setRedeemHistory(arr)
            }
            return fun
        })
    }, [])
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <Image
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: 50,
                    }}
                    source={{ uri: user && user[0].image ? user[0].image : 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg' }}
                />
                <Text
                    style={{
                        fontSize: 18, fontFamily: 'PlusJakartaSansBold', margin: 5
                    }}>{user && user[0].name ? user[0].name : 'Loading...'}</Text>
                {
                    user && user[0].membership_type == 'Gold Membership' ? (
                        <Text style={[styles.membership]}>
                            <Text style={{ color: '#FFB92E' }}>Gold </Text>
                            Member</Text>
                    ) : user && user[0].membership_type == 'Platinum Membership' ? (
                        <Text style={[styles.membership]}>
                            <Text style={{ color: '#A2B0CD' }}>Platinum </Text>
                            Member</Text>
                    ) : user && user[0].membership_type == 'Diamond Membership' ? (
                        <Text style={[styles.membership]}>
                            <Text style={{ color: '#48A6DB' }}>Diamond </Text>
                            Member</Text>
                    ) : user && user[0].membership_type == 'Silver Membership' ? (
                        <Text style={[styles.membership]}>
                            <Text style={{ color: '#FC444B' }}>Slider </Text>
                            Member</Text>
                    ) :
                        (
                            <Text style={[styles.membership]}>
                                <Text style={{ color: 'black' }}>Non </Text>
                                Member</Text>
                        )
                }
            </View>
            <View style={{ borderWidth: 0.7, margin: 15, borderColor: '#F5F5F5' }}>
            </View>
            {
                //must be include the props types,title,date and image
                RedeemHistory ? (
                    RedeemHistory.map((doc, index) => (
                        <View key={index}>
                            <RedeemHistoryCart 
                                type={doc.purches_type == 'deals' ? "coupon" : "hotel"}
                                data={doc} />
                            <View style={{ borderWidth: 0.7, margin: 1,
                             borderColor: '#F5F5F5',marginLeft:15,marginRight:15 }}></View>
                        </View>

                    ))
                ) : (
                    <ActivityIndicator size="large" color="#FA454B" />
                )
            }
        </ScrollView>
    );
};

export default RedeemHistory;
const styles = StyleSheet.create({
    membership: {
        fontSize: 15,
        color: 'rgb(90,90,90)',
        marginTop: 5,
        fontWeight: '500'
    },
})