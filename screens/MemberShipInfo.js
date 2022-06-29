import {
  Image, StyleSheet, Text, View, TouchableOpacity,
  ScrollView, ActivityIndicator, Alert
} from 'react-native'
import React from 'react'
import userImage from '../assets/10.jpg';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { useSelector ,useDispatch} from 'react-redux'
import { backgroundColor, textColor } from './../assets/color';
import { postData, url,setFamilyCode,visualDate,dateDifference } from '../action';

const MemberShipInfo = ({ navigation }) => {
  const user = useSelector(state => state.user)
  const darkMode = useSelector(state => state.pageSettings.darkMode)
  const dispatch = useDispatch()
  //console.log(user)
  const [color, setColor] = React.useState({
    foreground: '#FC444B',
    background: 'rgba(255, 0, 0, 0.178)',
  })
  const [Offer, setOffer] = React.useState(null)
  const [selectPlan, setSelectPlan] = React.useState(null)
  const [Progress, setProgress]= React.useState()
  const today = new Date()
  const [Plan,setPlan]= React.useState(false)
  const [Error, setError]= React.useState()
  React.useEffect(() => {
    if (user[0].membership_type == 'gold') {
      setColor({
        foreground: '#F3B038',
        background: '#f3b2385b'
      })
      
     
    }
    postData(url + '/getData', {
      tableName: 'membership',
    }).then(data => {
      if (Array.isArray(data)) {
        setOffer(data)
      }
    })
  }, [])
  React.useEffect(() => {
    if(user && dateDifference(new Date(),user[0].ending_date)>0){
      setPlan(true)
    }
  },[user])
  React.useEffect(() => {
    if(user){
      const progress=(dateDifference(new Date(),user[0].ending_date)*100)/dateDifference(user[0].starting_date,user[0].ending_date)
      setProgress(progress+'%')
      console.log(Progress)
    }
  },[user])
  return (
    <ScrollView style={{
      backgroundColor: backgroundColor(darkMode),
    }}>
      <View style={{ height: 20 }} />
      <View style={{
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={{
          uri: user && user[0].image ?
            user[0].image : 'https://i.ibb.co/B2tfxbn/202-2024792-user-profile-icon-png-download-fa-user-circle.jpg'
        }} style={{
          height: 100,
          width: 100,
          borderRadius: 50,
          marginBottom: 10
        }} />
        <Text style={{
          margin: 7,
          fontFamily: 'PlusJakartaSans',
          fontSize: 14,
          color: textColor(darkMode)
        }}>Hi, {user[0].name}</Text>
        {
          Plan?(
            <View style={{width: '100%',alignItems: 'center'}}>
            <Text style={{
          fontWeight: '600',
          fontSize: 23,
          fontFamily: 'PlusJakartaSansBold',
          color: textColor(darkMode)
        }}>{
            user[0].membership_type == 'gold' ?
              (<Text style={{ color: '#F3B038' }}>Gold</Text>) :
              user[0].membership_type == 'platinum' ?
                (<Text style={{ color: '#A2B0CD' }}>Platinum</Text>) :
                user[0].membership_type == 'silver' ?
                  (<Text style={{ color: '#FC444B' }}>Silver</Text>) :
                  user[0].membership_type == 'diamond' ?
                    (<Text style={{ color: '#48A6DB' }}>Diamond</Text>) :
                    (<Text style={{ color: '#000' }}>Non</Text>)
          } Membership</Text>
        <Text style={{ color: 'gray', fontSize: 13, marginTop: 6 }}>Valid up to {visualDate(user[0].ending_date)}</Text>
        <Text style={{
          marginTop: 15,
          fontSize: 16,
          fontFamily: 'PlusJakartaSans',
          color: textColor(darkMode)
        }}>
          <Text style={{
            fontFamily: 'PlusJakartaSansBold',
            color: textColor(darkMode)
          }}>{dateDifference(new Date(),user[0].ending_date)} days left</Text> in membership</Text>
        <View style={{
          borderWidth: 1,
          width: '80%', marginTop: 15,
          borderColor: color.background,
          backgroundColor: color.background,
          borderRadius: 2
        }}>
          <View style={{
            borderWidth: 1,
            width:Progress? Progress:'0%',
            borderColor: color.foreground
          }}>

          </View>
        </View>
            </View>
          ):(<></>)
        }
      </View>
      <View style={{ flex: 3, width: '100%', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
        <Text style={{
          fontSize: 17,
          color: 'gray',
          marginTop: 10,
          marginBottom: 10,
          fontFamily: 'PlusJakartaSans'
        }}>Renew your membership</Text>
        {
          Offer ? (
            Offer.map((doc, i) => (
              <Cart key={i} data={doc} selectPlan={selectPlan}
                setSelectPlan={setSelectPlan} />
            ))
          ) : (
            <ActivityIndicator size="large" color="#FA454B" />
          )
        }
        <Text style={{color:'red',fontFamily: 'PlusJakartaSans'}}>{Error}</Text>
        <TouchableOpacity onPress={() => {
          setError('')
          if (!selectPlan) {
            setError('Select a membership plane first.');
            return
          }
          navigation.navigate('Checkout', {
            id: selectPlan.id, type: selectPlan.name.toLowerCase()
          })
        }} style={{
          backgroundColor: '#64B657', flexDirection: 'row', minHeight: 70, width: '95%', backgroundColor: '#64B657', borderRadius: 10,
          marginTop: 20, alignItems: 'center', justifyContent: 'space-between'
        }}>
          <View style={{ flexDirection: 'column', padding: 15 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Renew Now</Text>
            <Text style={{ color: 'white' }}>{selectPlan ? selectPlan.name : 'Select a'} membership {selectPlan ? '@ ₹' + selectPlan.price : ''}</Text>
          </View>
          <View style={{ padding: 15 }}>
            <Entypo name="chevron-with-circle-right" size={28} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          dispatch(setFamilyCode(true))
        }} style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 20}}>
          <Text style={{ fontSize: 16, color: '#585858' }}>Have a family code?</Text>
          <Text style={{ color: '#FC444B', textDecorationLine: 'underline', fontSize: 16, marginTop: 10 }}>Apply it here</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default MemberShipInfo
const Cart = (props) => {
  const darkMode = useSelector(state => state.pageSettings.darkMode)
  const data = props.data
  const date = new Date(data.end_date)
  const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return (
    <TouchableOpacity onPress={() => {
      props.setSelectPlan(data)
    }} style={{
      minHeight: 100, width: '95%', backgroundColor: data ? data.color : 'transparent', borderRadius: 10,
      marginTop: 20, flexDirection: 'row', alignItems: 'center'
    }}>
      <View style={{ flex: 1, height: '100%' }}>
        {
          data == props.selectPlan ? (
            <Ionicons name="checkmark-circle" size={24}
              color={data ? 'white' : 'white'} style={{
                marginTop: 20,
                marginLeft: 10
              }} />
          ) : (
            <Entypo name="circle" size={24} color={data ? 'white' : 'white'}
              style={{ marginTop: 20, marginLeft: 10 }} />
          )
        }
      </View>
      <View style={{ flex: 4, }}>
        <Text style={{
          fontWeight: '500',
          marginBottom: 6,
          fontFamily: 'PlusJakartaSans',
          color: 'white'
        }}>Renewal as <Text style={{ fontFamily: 'PlusJakartaSansBold' }}>{data ? data.name : ''} Member</Text></Text>
        <Text style={{
          color: 'white',
          fontSize: 12,
          fontFamily: 'PlusJakartaSans',
          opacity: 0.5
        }}>Renew your membership and continue booking hotels & deals to enjoy even better savings.</Text>
      </View>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        {
          /*
          <Text style={{
          fontSize: 17,
          color:'white',
          textDecorationLine: 'line-through',
          fontFamily: 'PlusJakartaSansBold',
          opacity: 0.4
        }}>₹ {data.price}</Text>
          */
        }
        <Text style={{
          fontSize: 17,
          color: 'white',
          fontFamily: 'PlusJakartaSansBold'
        }}>₹ {data.price}</Text>
      </View>
    </TouchableOpacity>
  )
}