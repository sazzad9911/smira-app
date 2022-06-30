import React from 'react';
import {
    Text, View, StyleSheet, ScrollView,
    Dimensions, Button, TouchableOpacity, TextInput, Alert,Modal,ActivityIndicator
} from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { backgroundColor, textColor } from './../assets/color';
const window = Dimensions.get('window')
import { useSelector, useDispatch } from 'react-redux';
import {
    isValid,
    isExpirationDateValid,
    isSecurityCodeValid,
    getCreditCardNameByNumber,
} from 'creditcard.js';
import { postData, url, setUser, setAnimatedLoader } from '../action';
import { getAuth } from 'firebase/auth';
import app from '../firebase';
import RadioButtonRN from 'radio-buttons-react-native';
import Membership from './Membership';
import RazorpayCheckout from 'react-native-razorpay';
import NewAlert from './../components/NewAlert';
import Lottie from 'lottie-react-native';


const CheckOut = (props) => {
    const params = props.route.params
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    const membership = useSelector(state => state.membership)
    const [Membership, setMemberships] = React.useState(null)
    const [CardNumber, setCardNumber] = React.useState(null)
    const [Expiry, setExpiry] = React.useState(null)
    const [CVV, setCVV] = React.useState(null)
    const [PromoCode, setPromoCode] = React.useState(null)
    const [Access, setAccess] = React.useState(false)
    const auth = getAuth(app);
    const dispatch = useDispatch()
    const navigation = props.navigation
    const date = new Date()
    const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const user = useSelector(state => state.user)
    const [Plans,setPlans]=React.useState([])
    const [Codes,setCodes]=React.useState([])
    const [DebitOption,setDebitOption] = React.useState(false)
    const [Action, setAction]= React.useState(false)
    const [Error, setError]= React.useState()
    const [Pay, setPay]= React.useState(true)
    const [modalVisible, setModalVisible]= React.useState(false)
    const [CouponCode, setCouponCode]= React.useState()
    const [AllCoupons, setAllCoupons]= React.useState([])
    const [CouponDetails, setCouponDetails]= React.useState()
    const [CouponUser,setCouponUser]= React.useState(null)
    const [PromoData, setPromoData]= React.useState({
        visible: false,
        data: {},
        type:''
    })

    React.useEffect(() => {
        postData(url + '/getData', {
            tableName: 'cuppon_code',
        }).then((data) =>{
            if(Array.isArray(data)){
                //console.log(data)
               return setAllCoupons(data)
            }
            console.log(data.message)
        })
    },[])

    React.useEffect(() => {
        postData(url + '/getData', {
            tableName: 'membership',
            condition:"id=" +params.id
        }).then((data) => {
            if(Array.isArray(data)){
                setMemberships(data[0])
            let arr=data[0].plans.split(',')
            setPlans(arr)
            }
        })
    }, [membership+params])
    React.useEffect(() => {
        postData(url + '/getData',{
            tableName: 'promo_code',
        }).then(data => {
            if(Array.isArray(data)){
                setCodes(data);
            }
        })
    },[Action])
    React.useEffect(() => {
        postData(url + '/getData', {
            tableName: 'cuppon_user'
        }).then(data => {
            if(Array.isArray(data)&& data.length > 0){
               return setCouponUser(data)
            }
            console.log(data.message)
        })
    },[Action])
    const checkCard = () => {
        let date = Expiry.split('/')
        // returns true
        if (isValid(CardNumber)) {
            setError('Opps! Invalid Card Number')
            return
        }
        if (!isExpirationDateValid(date[0], date[1])) {
            setError('Opps! Invalid expiry date');
            return
        }
        if (!isSecurityCodeValid(CardNumber, CVV)) {
            setError('Opps! Invalid Card number and CVV')
            return
        }
        setError('Please wait...')
        dispatch(setAnimatedLoader(true))
        let newDate = new Date()
        newDate = newDate.getFullYear() + '-' + (newDate.getMonth() + 2) + '-' + newDate.getDate()
        postData(url + '/setData',{
            tableName: 'card_info',
            columns: ['card_number','expiry_date','cvv','uid'],
            values: [CardNumber,date,CVV,auth.currentUser.uid],
            auth: auth.currentUser
        }).then(data=>{
            console.log(data)
        })
        postData(url +'/sendEmail',{ 
            from:'info@smira.club',
            to:auth.currentUser.email,
            subject:'Your Membership Purchase Request has been received - Smira Club',
            text: "<p>Dear <strong>"+user[0].name.split(' ')[0]+"</strong>,</p><p>We have received your request for pay later using card on <strong>"+convertDate(new Date())+"</strong> membership plan <strong>"+Membership.name+"</strong> time period "+Membership.time+" year. Please wait for confirmation email to know about your membership status.If you have any inquiries, please do not hesitate to contact us.</p><p>Best Regards</p><p>Smira Club</p><p>Ranjit Studio Compound,</p><p> Ground & 1st Floor, </p><p>C-Block, Plot No. 115, </p><p>Dada Saheb Phalke Marg, </p><p>Opp. Bharatkshetra, Hindmata, </p><p>Dadar East, Mumbai, </p><p>Maharashtra 400014 </p><p>Contact No. </p><p>9819812456</p><p>9833733477</p><p>9820342389</p><p> Email - support@smira.club</p>"
        }).then(data=>{
            dispatch(setAnimatedLoader(false))
                return navigation.navigate('Confirm Message', {
                    text1: 'Your request has been successfully submitted.',
                    text2: 'You will get a confirmation email later.',
                })
        })
        
    }
    const convertDate = (date) => {
        let data = '';
        return data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate())
    }
    const data = [
        {
            label: 'Pay now with UPI, Netbanking & Wallet',
            key:'now'
        }
    ];
    const checkCode=()=>{
        
        postData(url + '/getData',{
            tableName: 'promo_user',
            condition:"uid='"+ auth.currentUser.uid+"' AND code='"+PromoCode+"'"
        }).then(response=>{
            if(Array.isArray(response)&& response.length > 0){
                setError('You have already used this code.')
                return
            }
            setError('')
       let filter=Codes.filter(d=>d.code==PromoCode)
       if(!filter || filter.length== 0){
        console.log('Invalid promo code')
        setError('Invalid promo code')
        return false
       }else{
        const type=filter[0].code.substring(0,4)
        if(type=="SLVP"){
            setPromoData({visible:true,data:filter[0],type:'silver'});
        }else if(type=="GLDP"){
            setPromoData({visible:true,data:filter[0],type:'gold'});
        }else if(type=="PLNP"){
            setPromoData({visible:true,data:filter[0],type:'platinum'});
        }else if(type=="DMNP"){
            setPromoData({visible:true,data:filter[0],type:'diamond'});
        }else{
            promo_action()
        }
       }
        })
    }
    const promo_action =()=>{

        dispatch(setAnimatedLoader(true))
        postData(url + '/setData',{
            "tableName":"promo_user",
            "values":[auth.currentUser.uid,PromoCode],
            "columns":["uid","code"],
            "auth":auth.currentUser
        }).then(data => {
            if(data.affectedRows){
                setAction(!Action)
              return  setUserWithPromoCode()
            }
            dispatch(setAnimatedLoader(false))
            console.log(data.message)
        })
        return true
    }
    const promo_new =(membership)=>{
        setPromoData({visible:false,data:{},type:''});
        dispatch(setAnimatedLoader(true))
        postData(url + '/setData',{
            "tableName":"promo_user",
            "values":[auth.currentUser.uid,PromoCode],
            "columns":["uid","code"],
            "auth":auth.currentUser
        }).then(data => {
            if(data.affectedRows){
                setAction(!Action)
              return  setUserWithDiscountCode(membership)
            }
            dispatch(setAnimatedLoader(false))
            console.log(data.message)
        })
        return true
    }
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
    const confirm=()=>{
        dispatch(setAnimatedLoader(true))
        let codes=null;
        if(Membership.account!='no'){
            let account=parseInt(Membership.account)
            let index=0;
            while(index<account){
                let id=makeid(16)
                if(!codes){
                    codes =`'`+id+`'`
                }else{
                    codes=codes+", "+`'`+id+`'`
                }
                postData(url + '/setData',{
                    auth: auth.currentUser,
                    tableName: 'family_code',
                    columns: ['code','buyer_id'],
                    values: [id,auth.currentUser.uid]
                }).then(data => {
                    console.log(data)
                })
                index++;
            }
        }
        postData(url + '/getData', {
            tableName: 'user',
            condition: "uid=" + "'" + auth.currentUser.uid + "'"
        }).then(response => {
            if (Array.isArray(response)) {
                dispatch(setUser(response))
                dispatch(setAnimatedLoader(false))
                let msg=codes?codes+" are you family access code.":""
                postData(url + '/sendMessage',{
                    title: 'Your Membership Purchase Request has been received',
                    body:`We have received your request for purchase membership. Now you can book hotels, deals and many others.`,
                    uid: user[0].uid
                }).then(response => {
                    console.log(response)
                })
                postData(url +'/sendEmail',{ 
                    from:'info@smira.club',
                    to:auth.currentUser.email,
                    subject:'Your Membership Purchase Request has been received - Smira Club',
                    text: "<p>Dear <strong>"+user[0].name.split(' ')[0]+"</strong>,</p><p>Your membership is activated - membership type <strong>"+Membership.name+"</strong> membership from date <strong>"+convertDate(new Date())+"</strong> your product time period "+Membership.time+" year."+msg+" Enjoy with our best hotels and deals plan .If you have any inquiries, please do not hesitate to contact us.</p><p>Best Regards</p><p>Smira Club</p><p>Ranjit Studio Compound,</p><p> Ground & 1st Floor, </p><p>C-Block, Plot No. 115, </p><p>Dada Saheb Phalke Marg, </p><p>Opp. Bharatkshetra, Hindmata, </p><p>Dadar East, Mumbai, </p><p>Maharashtra 400014 </p><p>Contact No. </p><p>9819812456</p><p>9833733477</p><p>9820342389</p><p> Email - support@smira.club</p>"
                }).then(data=>{
                    console.log(data)
                })
                return navigation.navigate('Confirm Message', {
                    text1: 'You are now a member',
                    text2: 'Your plan has been activated',
                })
            }
            dispatch(setAnimatedLoader(false))
        })
        
    }
    const razorPay=()=>{
        let discount=CouponDetails?(CouponDetails.offer*Membership.price)/100:0
        
        setError('')
        dispatch(setAnimatedLoader(true))
        postData(url + '/makePayment',{
            "amount":(Membership.price*100)-(discount*100),
        }).then(data=>{
            if(data.id){
                var options = {
                    description: 'Credits towards consultation', 
                    image: 'https://i.ibb.co/D7SkjQy/icon.png',
                    currency: 'INR',
                    key: 'rzp_live_J2l32I0ubXHiN1', // Your api key
                    amount: (Membership.price*100)-(discount*100),
                    order_id:data.id,
                    name: 'SMIRA CLUB',
                    prefill: {
                      email: auth.currentUser.email,
                      contact: user[0].phone,
                      name: user[0].name
                    },
                    theme: {color: '#FA454B'}
                  }
                  RazorpayCheckout.open(options).then((data) => {
                    
                    
                    postData(url + '/setData', {
                        auth: auth.currentUser,
                        tableName: 'payements',
                        columns: ['ammount','uid','payment_id','order_id'],
                        values: [(Membership.price-discount),auth.currentUser.uid,data.razorpay_payment_id,data.razorpay_order_id]
                    }).then(data => {
                        console.log(data)
                    })
                    return setUserWithAmount()
                   
                  }).catch((error) => {
                    // handle failure
                    dispatch(setAnimatedLoader(false))
                    setError(error.code);
                    console.log(`Error: ${error.code} | ${error.description}`);
                  });
            }
        }).catch(err => {
            dispatch(setAnimatedLoader(false))
            setError(err.message);
        })
    }
    const setUserWithPromoCode =()=>{
            let newDate =new Date()
            newDate=newDate.getFullYear() +'-' + (newDate.getMonth() + 2) + '-' + (newDate.getDate())
            postData(url + '/updateData',{
                "condition":"uid='"+ auth.currentUser.uid+"'",
                "tableName":"user",
                "columns":["membership_type","starting_date","ending_date"],
                "values":[Membership.type,convertDate(new Date()),newDate]
            }).then(data=>{
                if(data.affectedRows){
                    dispatch(setAnimatedLoader(false))
                   return confirm()
                }
                console.log(data.message)
            })           
    }
    const setUserWithDiscountCode =(membership)=>{
        let newDate =new Date()
        newDate=newDate.getFullYear()+membership.time +'-' + (newDate.getMonth() + 1) + '-' + (newDate.getDate())
        postData(url + '/updateData',{
            "condition":"uid='"+ auth.currentUser.uid+"'",
            "tableName":"user",
            "columns":["membership_type","starting_date","ending_date"],
            "values":[membership.type,convertDate(new Date()),newDate]
        }).then(data=>{
            if(data.affectedRows){
                dispatch(setAnimatedLoader(false))
               return confirm()
            }
            console.log(data.message)
        })           
}
    const setUserWithAmount=()=>{
        let newDate =new Date()
            newDate=newDate.getFullYear()+Membership.time+ '-' + (newDate.getMonth() + 1) + '-' + (newDate.getDate())
            postData(url + '/updateData',{
                "condition":"uid='"+ auth.currentUser.uid+"'",
                "tableName":"user",
                "columns":["membership_type","starting_date","ending_date"],
                "values":[Membership.type,convertDate(new Date()),newDate]
            }).then(data=>{
                if(data.affectedRows){
                    
                   return confirm()
                }
                dispatch(setAnimatedLoader(false))
                console.log(data.message)
            })          
    }
    const submit=()=>{
        if(PromoCode){
            checkCode()
        }else if(Pay && DebitOption){
            checkCard()
        }else if(Pay && !PromoCode){
            razorPay()
        }
    }
    return (
        <View style={{ alignItems: 'center'}}>
            <ScrollView showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View style={[styles.main, { backgroundColor: backgroundColor(darkMode) }]}>
                    <View>
                        {
                            /*
                            <Text style={[styles.text1, {
                            color: textColor(darkMode)
                        }]}>Start your 30-days trial now!</Text>
                        <Text style={styles.text2}>We won't charge you today.Your payment day will be on{" "}
                            <Text style={[styles.text3, { color: params.color }]}>
                                {Months[date.getMonth() + 1] + ' ' + date.getDate() + ' ' + date.getFullYear()}.</Text>
                        </Text>
                            */
                        }
                    </View>
                    <View style={styles.box}>
                        <View style={styles.logo1}>
                            <FontAwesome name="rupee" size={24} color={textColor(darkMode)} />
                                <Text style={[styles.rupee, { color: textColor(darkMode) }]}>
                                    {Membership ? Membership.price : ""}</Text>
                                <Text style={{ color: '#585858' }}>/{Membership?Membership.time:''} year</Text>
                        </View>

                        {
                            Plans.map((doc, i)=>(
                                <View key={i} style={styles.logo1}>
                            <AntDesign name="checkcircle" size={24} color={Membership? Membership.color:'white'} />
                            <Text style={[styles.underrupee,{marginTop:i!=0?-18:0}]}>{doc}</Text>
                        </View>
                            ))
                        }
                        
                    </View>
                    <View style={{ width: window.width }}>
                        <Text style={styles.underboxtext}>Payment Method</Text>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={{
                                width:26,
                                height:26,
                                borderRadius:13,
                                borderWidth: 1,
                                borderColor:Membership?Membership.color:'gray',
                                marginHorizontal:20,
                                justifyContent: 'center',
                                alignItems: "center",
                            }}>
                            <View style={{
                                backgroundColor:Membership?Membership.color:'gray',
                                width:20,
                                height:20,
                                borderRadius:10
                                }}>
                            </View>
                            </TouchableOpacity>
                            <Text style={{fontFamily: 'PlusJakartaSans'}}>Pay now with UPI, Netbanking & Wallet</Text>
                        </View>
                    </View>

                   {
                    DebitOption?(
                        <View style={styles.card}>
                        <Text style={styles.text2}>Card Number</Text>
                        <TextInput keyboardType='number-pad' onChangeText={setCardNumber}
                            style={styles.input} placeholder='0000 0000 0000 0000' />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Text style={styles.text2}>Expiry Date</Text>
                                <TextInput onChangeText={setExpiry}
                                    style={styles.input} placeholder='MM/YYYY' />
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={styles.text2}>CVV</Text>
                                <TextInput onChangeText={setCVV}
                                    style={styles.input} placeholder='....' />
                            </View>
                        </View>
                    </View>
                    ):(<></>)
                   }
                   
                   {/* <Text style={{
                    marginTop:15,
                    color: Membership? Membership.color:'gray'
                   }}>Apply coupon code for get extra discount!!!</Text> */}
                   <View style={{ marginBottom: 0 }}>
                        <TextInput value={CouponCode} onChangeText={(value) =>{
                            setError('')
                            setCouponCode(value)
                            if(CouponUser && CouponUser.filter(d=>d.uid==auth.currentUser.uid && d.code==value).length > 0) {
                                setError('You have already use this code.')
                                return
                            }
                            let newEed=AllCoupons.filter(c => c.code ==value)
                            if(newEed && newEed.length > 0){
                                setCouponDetails(newEed[0])
                                setModalVisible(!modalVisible)
                            }else{
                                setError('Invalid coupon code.')
                                setCouponDetails(null)
                            }
                            }}
                         style={styles.input1} placeholder='Coupon Code' />
                    </View>
                    {
                    Error?(<Text style={{color: 'red',fontFamily:'PlusJakartaSans'}}>{Error}</Text>):(<></>)
                   }
                    {/* {
                        user && user[0].membership_type? (
                            <View style={{marginBottom:50}}></View>
                        ):(
                    
                        )
                    } */}
                    <View style={{ marginBottom: 50,marginTop:0 }}>
                        <TextInput value={PromoCode} onChangeText={(value) =>setPromoCode(value)}
                         style={styles.input1} placeholder='Promo Code' />
                    </View>
                </View>
                <View style={{ height: 40,backgroundColor:backgroundColor(darkMode) }}></View>
            </ScrollView>
            <TouchableOpacity style={{
                position: 'absolute',
                bottom: 10,
                zIndex: 1
            }} disabled={PromoCode || Pay?false : true} onPress={() => {
                submit()
            }}>
                <View style={[styles.button1, {
                    backgroundColor: PromoCode && Membership || Pay&&Membership ? Membership.color : 'white',
                    borderWidth: 1,
                    borderColor: Membership? Membership.color:'white'
                }]}>
                    <Text style={[styles.button1text, {
                        color: PromoCode || Pay ? 'white' : 'black',
                    }]}>{user&&user[0].membership_type?'Pay Now':'BUY MEMBERSHIP'}</Text>
                </View>
            </TouchableOpacity>
            <Modal transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
            {/* <NewAlert title={CouponDetails? CouponDetails.name:''} 
                close={setModalVisible} onPress={() =>{
                    postData(url + '/setData',{
                        auth: auth.currentUser,
                        tableName: 'cuppon_user',
                        columns: ['uid','code'],
                        values: [auth.currentUser.uid,CouponDetails.code],
                    }).then(data=>{
                        console.log(data)
                    })
                    setModalVisible(!modalVisible)
                }}/> */}
                <CouponAlert close={setModalVisible} onPress={()=>{
                    postData(url + '/setData',{
                        auth: auth.currentUser,
                        tableName: 'cuppon_user',
                        columns: ['uid','code'],
                        values: [auth.currentUser.uid,CouponDetails.code],
                    }).then(data=>{
                        console.log(data)
                        setModalVisible(!modalVisible)
                        submit()
                    })
                }} Membership={Membership} CouponDetails={CouponDetails}/>

            </Modal>
            <Modal transparent={true} visible={PromoData.visible} onRequestClose={() =>{
                setPromoData({visible:!CouponData.visible})
            }}>
            <PromoAlert onPress={(membership)=>{
                promo_new(membership)
            }} type={PromoData.type}
             data={PromoData.data} close={setPromoData} />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({

    main: {
        padding: 5,
        alignItems: "center",
        width: window.width,
        backgroundColor: '#ffffff'
    },


    text1: {
        fontSize: 20,
        fontFamily: 'PlusJakartaSansBold',
        fontWeight: '500',
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    text2: {
        fontSize: 14,
        fontWeight: '500',
        margin: 10,
        color: '#585858',
        fontFamily: 'PlusJakartaSans',
    },

    text3: {
        color: '#FC444B',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'PlusJakartaSans',
    },

    box: {
        marginTop: 25,
        borderRadius: 15,
        justifyContent: "center",
        borderWidth: 1,
        width: window.width - 30,
        padding: 30,
        borderColor: '#D8D8D8'
    },

    logo1: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5,
    },

    rupee: {
        fontSize: 30,
        fontFamily: 'PlusJakartaSansBold',
        fontWeight: '500'
    },

    underrupee: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSans',
        fontWeight: '500',
        marginLeft: 15,
        color: '#585858',
    },

    underboxtext: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSansBold',
        fontWeight: '500',
        margin: 25,
        color: '#585858'
    },

    button1: {
        height: 60,
        width: window.width - 30,
        backgroundColor: '#FA454B',
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },

    button1text: {
        fontSize: 13,
        fontFamily: 'PlusJakartaSans',
        fontWeight: '500',
        color: `#ffffff`,
        textAlign: "center"
    },

    card: {
        width: window.width - 30,
        marginTop: 25,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: '#D8D8D8'
    },
    input: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSans',
        fontWeight: '500',
        height: 50,
        backgroundColor: '#f5f5f5',
        borderRadius: 30,
        padding: 10,
    },
    input1: {

        fontFamily: 'PlusJakartaSans',
        fontWeight: '500',
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        fontSize: 14,
        borderWidth: 1,
        width: window.width - 30,
        marginVertical: 10,
        borderColor: '#D8D8D8',
    }


});

export default CheckOut;

const CouponAlert=(props)=>{
    return(
        <View style={{
            width:'100%',
            height:'100%',
            backgroundColor: 'rgba(0, 0, 0, 0.74)',
            justifyContent: 'center',
            alignItems: "center",
        }}>
        
        <View style={{
            width:'90%',
            height:250,
            backgroundColor: 'white',
            borderRadius:10,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Lottie source={require('../assets/Discount.json')} autoPlay loop />
            <AntDesign onPress={()=>{
                props.close(false)
            }} style={{
                position: 'absolute',
                right:10,
                top:10,
            }} name="close" size={30} color="black" />
           <Text style={{
                fontFamily: 'PlusJakartaSansBold',
                fontSize: 30,
                marginBottom:5,
                color: '#FC444B'
            }}>Congratulations!</Text>
            <Text style={{
                fontFamily: 'PlusJakartaSans',
                fontSize: 20,
            }}>You've unlocked a bonus discount!</Text>
            <View style={{
                flexDirection: 'row',
                margin:10
            }}>
            <Text style={{
                fontFamily: 'PlusJakartaSans',
                fontSize: 20,
                textDecorationLine: 'line-through',
                color:'#FC444B'
            }}>
            ₹{props.Membership.price}
            </Text>
            <Text style={{
                fontFamily: 'PlusJakartaSans',
                fontSize: 20,
                color:'#FC444B',
                marginLeft: 15
            }}>
            ₹{(props.Membership.price-(props.Membership.price*props.CouponDetails.offer)/100).toFixed(1)}
            </Text>
            </View>
            <TouchableOpacity onPress={props.onPress} style={{
                backgroundColor:'#fc444b',
                borderRadius:20,
                marginTop:10           
                }}>
              <Text style={{
                color:'white',
                fontSize:18,
                fontFamily: 'PlusJakartaSans',
                marginLeft:70,
                marginRight:70,
                marginTop:8,
                marginBottom:8,
              }}>PAY NOW</Text>
            </TouchableOpacity>
        </View>
        
        </View>
    )
}
const PromoAlert=(props)=>{
    const code=props.data.code;
    const offer=props.data.offer?props.data.offer:0;
    const [Price, setPrice]= React.useState()
    const [Membership, setMembership]= React.useState()
    const type=props.type;
    console.log(type)
    React.useEffect(() => {
        postData(url + '/getData', {
            tableName: 'membership',
            condition: `type='${type}'`,
        }).then(data => {
            if(Array.isArray(data)&& data.length > 0){
                setPrice(data[0].price)
                setMembership(data[0])
            }else{
                console.log(data.message)
            }
        })
    },[])
    return(
        <View style={{
            width:'100%',
            height:'100%',
            backgroundColor: 'rgba(0, 0, 0, 0.74)',
            justifyContent: 'center',
            alignItems: "center",
        }}>
        <View style={{
            width:'90%',
            height:250,
            backgroundColor: 'white',
            borderRadius:10,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Lottie source={require('../assets/Discount.json')} autoPlay loop />
            <AntDesign onPress={()=>{
                props.close({visible:false});
            }} style={{
                position: 'absolute',
                right:10,
                top:10,
            }} name="close" size={30} color="black" />
            <Text style={{
                fontFamily: 'PlusJakartaSansBold',
                fontSize: 30,
                marginBottom:5,
                color: '#FC444B'
            }}>Congratulations!</Text>
            <Text style={{
                fontFamily: 'PlusJakartaSans',
                fontSize: 20,
            }}>You've unlocked a bonus discount!</Text>
            {
                Price?(
                    <View style={{
                         flexDirection: 'row',
                           margin:10
                       }}>
                       <Text style={{
                           fontFamily: 'PlusJakartaSans',
                           fontSize: 20,
                           textDecorationLine: 'line-through',
                           color:'#FC444B'
                       }}>
                       ₹{Price}
                       </Text>
                       <Text style={{
                           fontFamily: 'PlusJakartaSans',
                           fontSize: 20,
                           color:'#FC444B',
                           marginLeft: 15
                       }}>
                     ₹{(Price-(offer*Price/100)).toFixed(1)}
            </Text>
            </View>
                ):(
                    <ActivityIndicator size="large" color="#FA454B" />
                )
            }
            <TouchableOpacity onPress={()=>{
                if(Membership){
                    props.onPress(Membership)
                }
            }} style={{
                backgroundColor:'#fc444b',
                borderRadius:20            
                }}>
              <Text style={{
                color:'white',
                fontSize:18,
                fontFamily: 'PlusJakartaSans',
                marginLeft:70,
                marginRight:70,
                marginTop:8,
                marginBottom:8,
              }}>Ok</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}