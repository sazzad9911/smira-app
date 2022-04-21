import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import userImage from '../assets/10.jpg';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux'

const MemberShipInfo = ({ navigation }) => {
  const user = useSelector(state => state.user[0])
  const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const total = (new Date(user.ending_date).getTime() - new Date(user.starting_date).getTime()) / (1000 * 3600 * 24);
  const reminding = (new Date(user.ending_date).getTime() - new Date().getTime()) / (1000 * 3600 * 24);
  const progress = (reminding * 100) / total;
  const [color,setColor] =React.useState({
    foreground:'#FC444B',
    background:'rgba(255, 0, 0, 0.178)',
  })
  React.useEffect(()=>{
    if(user.membership_type=='gold'){
      setColor({
        foreground:'#F3B038',
        background:'#f3b2385b'
      })
    }
  },[])
  return (
    <ScrollView style={{
      backgroundColor: '#FFFF',
    }}>
      <View style={{ height: 20 }} />
      <View style={{
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={userImage} style={{
          height: 100,
          width: 100,
          borderRadius: 50,
          marginBottom: 10
        }} />
        <Text style={{
          margin: 7,
          fontFamily: 'PlusJakartaSans',
          fontSize: 14
        }}>Hi, {user.name}</Text>
        <Text style={{
          fontWeight: '600',
          fontSize: 23,
          fontFamily: 'PlusJakartaSansBold',
        }}>{
            user.membership_type == 'gold' ?
              (<Text style={{ color: '#F3B038' }}>Gold</Text>) :
              user.membership_type == 'platinum' ?
                (<Text style={{ color: '#A2B0CD' }}>Platinum</Text>) :
                user.membership_type == 'silver' ?
                  (<Text style={{ color: '#FC444B' }}>Silver</Text>) :
                  user.membership_type == 'diamond' ?
                    (<Text style={{ color: '#48A6DB' }}>Diamond</Text>) :
                    (<Text style={{ color: '#000' }}>Non</Text>)
          } Membership</Text>
        <Text style={{ color: 'gray', fontSize: 13, marginTop: 6 }}>Valid up to {new Date(user.ending_date).getDate()
          + ' ' + Months[new Date(user.ending_date).getMonth()] + ' ' + new Date(user.ending_date).getFullYear()}</Text>
        <Text style={{
          marginTop: 15,
          fontSize: 16,
          fontFamily: 'PlusJakartaSans'
        }}>
          <Text style={{ fontFamily: 'PlusJakartaSansBold' }}>{reminding.toFixed(0)}
            days left</Text> in membership</Text>
        <View style={{
          borderWidth: 1,
          width: '80%', marginTop: 15,
          borderColor: color.background,
          backgroundColor: color.background,
          borderRadius:2
        }}>
          <View style={{
            borderWidth: 1,
            width: progress + '%',
            borderColor: color.foreground
          }}>

          </View>
        </View>
      </View>
      <View style={{ flex: 3, width: '100%', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
        <Text style={{
          fontSize: 17,
          color: 'gray',
          marginTop: 30,
          marginBottom: 10,
          fontFamily: 'PlusJakartaSans'
        }}>Renew your membership</Text>
        <View style={{
          minHeight: 100, width: '95%', backgroundColor: color.background, borderRadius: 10,
          marginTop: 20, flexDirection: 'row', alignItems: 'center'
        }}>
          <View style={{ flex: 1, height: '100%' }}>
            <Ionicons name="checkmark-circle" size={24}
              color={color.foreground} style={{
                marginTop: 20,
                marginLeft: 10
              }} />
          </View>
          <View style={{ flex: 4, }}>
            <Text style={{
              fontWeight: '500',
              marginBottom: 6,
              fontFamily: 'PlusJakartaSans'
            }}>Continue as <Text style={{ fontFamily: 'PlusJakartaSansBold' }}>Gold Member</Text></Text>
            <Text style={{
              color: 'gray',
              fontSize: 12,
              fontFamily: 'PlusJakartaSans'
            }}>Special prices are available only till 23 December 2026.</Text>
          </View>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{
              fontSize: 17,
              color: color.foreground,
              textDecorationLine: 'line-through',
              fontFamily: 'PlusJakartaSansBold',
              opacity: 0.4
            }}>₹ 2999</Text>
            <Text style={{
              fontSize: 17,
              color: color.foreground,
              fontFamily: 'PlusJakartaSansBold'
            }}>₹ 2499</Text>
          </View>
        </View>

        <View style={{
          minHeight: 100, width: '95%', backgroundColor: '#ECF8FF', borderRadius: 10,
          marginTop: 20, flexDirection: 'row', alignItems: 'center'
        }}>
          <View style={{ flex: 1, height: '100%' }}>
            <Entypo name="circle" size={24} color="#1371A4" style={{ marginTop: 20, marginLeft: 10 }} />
          </View>
          <View style={{ flex: 4, }}>
            <Text style={{ fontWeight: '500', marginBottom: 6, color: "#3983B1" }}>Continue as <Text style={{ fontWeight: '700', }}>Gold Member</Text></Text>
            <Text style={{ color: 'gray', fontSize: 12 }}>Special prices are available only till 23 December 2026.</Text>
          </View>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 17, color: '#A5C9DF', textDecorationLine: 'line-through', fontWeight: 'bold' }}>₹ 2999</Text>
            <Text style={{ fontSize: 17, color: '#1371A4', fontWeight: 'bold' }}>₹ 2499</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Checkout', { color: '#FC444B' })
        }} style={{
          backgroundColor: '#64B657', flexDirection: 'row', minHeight: 70, width: '95%', backgroundColor: '#64B657', borderRadius: 10,
          marginTop: 20, alignItems: 'center', justifyContent: 'space-between'
        }}>
          <View style={{ flexDirection: 'column', padding: 15 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Renew Now</Text>
            <Text style={{ color: 'white' }}>Gold membership @ ₹2499</Text>
          </View>
          <View style={{ padding: 15 }}>
            <Entypo name="chevron-with-circle-right" size={28} color="white" />
          </View>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 16, color: '#585858' }}>Have a family code?</Text>
          <Text style={{ color: '#FC444B', textDecorationLine: 'underline', fontSize: 16, marginTop: 10 }}>Apply it here</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default MemberShipInfo

const styles = StyleSheet.create({})