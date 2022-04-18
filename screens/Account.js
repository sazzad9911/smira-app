import { MaterialCommunityIcons, SimpleLineIcons, MaterialIcons, Ionicons, } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import {
  Image, ScrollView, Text, TouchableOpacity,
  View, TextInput, Modal, Alert, Platform
} from 'react-native'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import image from './../assets/10.jpg'
import { useSelector,useDispatch } from 'react-redux'
import * as ImagePicker from 'expo-image-picker';
import { postData, url,setUser } from '../action'
import { getAuth } from 'firebase/auth'
import app from '../firebase'

function Account({ navigation }) {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("")
  const [MobilNo, setMobilNo] = useState("")
  const [Gender, setGender] = useState("")
  const [Dob, setDob] = useState("")
  const [Location, setLocation] = useState("")
  const [ProfileImage, setProfileImage] = useState("")
  const [MembershipFamilyCode, setMembershipFamilyCode] = useState("")
  const [MemberShipFamilyCodeError, setMemberShipFamilyCodeError] = useState(false)
  const [ShowModal, setShowModal] = useState(false)
  const { height, width } = Dimensions.get('screen')
  const user = useSelector(state => state.user)
  const auth = getAuth(app);
  const dispatch = useDispatch()

  useEffect(() => {
    if (user && user[0].image) {
      setProfileImage(user[0].image)
    }
    if (user && user[0].name) {
      setName(user[0].name)
    }
    if (user && user[0].phone) {
      setMobilNo(user[0].phone)
    }
    if (user && user[0].email) {
      setEmail(user[0].email)
    }
    if (user && user[0].address) {
      setLocation(user[0].address)
    }
    if (user && user[0].birth_day) {
      setDob(user[0].birth_day)
    }
    if (user && user[0].gender) {
      setGender(user[0].gender)
    }
  }, [])


  const [Open, setOpen] = useState(false)
  const [Value, setValue] = useState(null)
  const [Items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ])
  const Save = (key, value) => {
    postData(url + '/updateData', {
      tableName: 'user',
      columns: [key],
      values: [value],
      condition: "uid=" + "'" + auth.currentUser.uid + "'"
    }).then(data => {
      postData(url +'/getData',{
        tableName: 'user',
        condition: "uid=" + "'" + auth.currentUser.uid + "'"
      }).then(data => {
        if(Array.isArray(data)){
          dispatch(setUser(data));
        }
      })
    }).catch(err => {
      console.log(err.message)
    })
  }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };
  return (
    <ScrollView>

      <Modal
        animationType='slide'
        visible={ShowModal}
        transparent={true}
        onRequestClose={() => {
          Alert.alert("Modal closed")
          setShowModal(false)
        }}
      >
        <View style={{
          position: 'absolute', justifyContent: 'center', alignItems: 'center',
          height: height, width: width, padding: 16
        }}>
          <View style={{
            width: '100%', backgroundColor: 'white',
            shadowColor: 'rgb(160,160,160)', shadowOpacity: 0.7, shadowRadius: 10, shadowOffset: {
              height: 10, width: 0
            }, borderRadius: 10
          }}>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'flex-end', padding: 15 }}>
              <MaterialCommunityIcons name='close' size={28} onPress={() => {
                setShowModal(false)
              }} />
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 20 }}>Membership Family Code</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TextInput
                placeholder='XXXX-XXXX-XXXX-XXXX'
                placeholderTextColor={'rgb(130,130,130)'}
                value={MembershipFamilyCode}
                onChangeText={text => setMembershipFamilyCode(text)}
                style={{
                  width: '80%', backgroundColor: 'rgb(245,245,245)', height: 40,
                  borderRadius: 20, paddingLeft: 20, paddingRight: 20, textAlign: 'center'
                  , marginBottom: 5,
                }} />
            </View>
            {
              MemberShipFamilyCodeError === true &&
              <Text style={{
                textAlign: 'center', color: 'gray', marginTop: 20,
                marginBottom: 20
              }}><Text style={{ color: 'red' }}>Incorrect code </Text> Please try again.</Text>
            }
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
              <TouchableOpacity onPress={() => {

              }} style={{
                justifyContent: 'center', alignItems: 'center', backgroundColor: '#FB444B',
                width: '80%', height: 40, borderRadius: 20, marginBottom: 30
              }}>
                <Text style={{ color: 'white', fontSize: 15, }}
                >ADD FAMILY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{ backgroundColor: '#FC444B', height: 70 }}>
        <TouchableOpacity style={{
          position: 'absolute', right: 0, top: Platform.OS == 'ios' ? 50 : 10, marginRight: 10,
        }} onPress={() => {
          navigation.goBack()
        }}>
          <MaterialCommunityIcons name='close'
            style={{ color: 'white' }} size={26} />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: 'center', minHeight: 120 }}>
        <View style={{ height: 160, position: 'absolute', width: '100%', }}>
          <View style={{ backgroundColor: '#FC444B', flex: 1 }}></View>
          <View style={{ backgroundColor: 'white', flex: 1 }}></View>
        </View>
        <TouchableOpacity onPress={pickImage}>
          {
            ProfileImage !== "" &&
            <Image source={{ uri:ProfileImage}} style={[styles.profileImage,]} />
          }
          {
            ProfileImage === "" &&
            <View style={[styles.profileImage, { backgroundColor: 'rgb(240,240,240)' }]} >
              <Ionicons name='ios-camera-outline' size={40} style={[{ color: 'rgb(130,130,130)' }]} />
            </View>
          }
        </TouchableOpacity>
      </View>

      <View style={[styles.body, { marginTop: 0 }]}>
        <View style={[styles.formRow]}>
          <View style={[styles.imageStyle, Name === "" ? styles.imageStyleEmptyStyle : '']} >
            <SimpleLineIcons name='user' size={22} style={[Name === "" ? styles.inactiveIcon : styles.activeIcon]} />
          </View>
          <TextInput
            value={Name} placeholderTextColor='rgb(130,130,130)'
            placeholder={Name === "" ? "Full Number" : ""}
            onChangeText={e => { setName(e) }} onEndEditing={() => {
              Save('name', Name);
            }} style={[styles.formInput, Name === "" ? styles.fontEmptyStyle : '']} />
        </View>
        <View style={[styles.formRow]}>
          <View style={[styles.imageStyle, MobilNo === "" ? styles.imageStyleEmptyStyle : '']} >
            <SimpleLineIcons name='phone' size={22} style={[MobilNo === "" ? styles.inactiveIcon : styles.activeIcon]} />
          </View>
          <TextInput value={MobilNo} placeholderTextColor='rgb(130,130,130)'
            placeholder={MobilNo === "" ? "Mobile No." : ""}
            onChangeText={e => setMobilNo(e)} onEndEditing={() => {
              Save('phone', MobilNo);
            }} style={[styles.formInput, MobilNo === "" ? styles.fontEmptyStyle : '']} />
        </View>
        <View style={[styles.formRow]}>
          <View style={[styles.imageStyle, Email === "" ? styles.imageStyleEmptyStyle : '']} >
            <MaterialIcons name='mail' size={22} style={[Email === "" ? styles.inactiveIcon : styles.activeIcon]} />
          </View>
          <TextInput value={Email} placeholderTextColor='rgb(130,130,130)'
            placeholder={Email === "" ? "Email" : ""}
            onChangeText={e => setEmail(e)} onEndEditing={() => {
              Save('email', Email);
            }} style={[styles.formInput, Email === "" ? styles.fontEmptyStyle : '']} />
        </View>

        <TouchableOpacity
          onPress={() => {
            if (Gender === 'Male') {
              setGender('Female')
            } else if (Gender === 'Female') {
              setGender('Male')
            } else {
              setGender('Female')
            }
            Save('gender', Gender)
          }}
          style={[styles.formRow]}>
          <View style={[styles.imageStyle, Gender === "" ? styles.imageStyleEmptyStyle : '']} >
            <MaterialCommunityIcons
              name={`${Gender.toLowerCase() === 'male' ? 'gender-male' :
                Gender.toLocaleLowerCase() === 'female' ? 'gender-female' : 'checkbox-blank-circle-outline'}`} size={22}
              style={[Gender === "" ? styles.inactiveIcon : styles.activeIcon]} />
          </View>
          <View style={[styles.formInput, { justifyContent: 'center' }, Gender === "" ? styles.fontEmptyStyle : '']}>
            <Text>{Gender}</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.formRow]}>
          <View style={[styles.imageStyle, Dob === "" ? styles.imageStyleEmptyStyle : '']} >
            <SimpleLineIcons name='calendar' size={22} style={[Dob === "" ? styles.inactiveIcon : styles.activeIcon]} />
          </View>
          <TextInput value={Dob} placeholderTextColor='rgb(130,130,130)'
            placeholder={Dob === "" ? "Birthday" : ""}
            onChangeText={e => setDob(e)} onEndEditing={() => {
              Save('birth_day', Dob);
            }} style={[styles.formInput, Dob === "" ? styles.fontEmptyStyle : '']} />
        </View>
        <View style={[styles.formRow]}>
          <View style={[styles.imageStyle, Location === "" ? styles.imageStyleEmptyStyle : '']} >
            <SimpleLineIcons name='map' size={22} style={[Location === "" ? styles.inactiveIcon : styles.activeIcon]} />
          </View>
          <TextInput value={Location} placeholderTextColor='rgb(130,130,130)'
            placeholder={Location === "" ? "City of Residence" : ""}
            onChangeText={e => setLocation(e)} onEndEditing={() => {
              Save('address', Location)
            }} style={[styles.formInput, Location === "" ? styles.fontEmptyStyle : '']} />
        </View>
      </View>
      <View style={[{ borderBottomWidth: 1, borderColor: 'rgb(220,220,220)', }]}></View>
      <Text style={[styles.textMemberShip]}>Add Membership Family</Text>

      <View style={[styles.formRow]}>
        <View style={[styles.imageStyle, MembershipFamilyCode === "" ? styles.imageStyleEmptyStyle : '']} >
          <Ionicons name='key-outline' size={22} style={[MembershipFamilyCode === "" ? styles.inactiveIcon : styles.activeIcon]} />
        </View>
        <TextInput onPressIn={() => {
          setShowModal(true)
        }} value={MembershipFamilyCode} placeholderTextColor='rgb(130,130,130)'
          placeholder={MembershipFamilyCode === "" ? "Membership Family Code" : ""}
          onChangeText={e => setMembershipFamilyCode(e)} style={[styles.formInput, MembershipFamilyCode === "" ? styles.fontEmptyStyle : '']} />
      </View>
      <View style={[{ backgroundColor: 'white' }]}>
        <TouchableOpacity style={[styles.logoutButton]} onPress={() => { 
          auth.signOut().then(() => {
            navigation.navigate('Onboarding')
          })
        }} >
          <Text style={[{ color: 'red', textTransform: 'uppercase' }]}>Log out</Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: 'white', minHeight: 100 }}></View>
    </ScrollView>
  )
}
export default Account

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  topSection: {
    flex: 1,
    backgroundColor: 'rgb(255,72,72)'
  },
  fontEmptyStyle: {
    backgroundColor: 'rgb(245,245,245)',
    borderColor: 'rgb(245,245,245)',
  },
  body: {
    backgroundColor: 'white',
    flex: 2,
  },
  whiteArea: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100
  },
  redArea: {
    backgroundColor: 'red',
    flex: 1,
    minHeight: 150
  },
  profileImage: {
    height: 120,
    width: 120,
    backgroundColor: 'gray',
    borderRadius: 60,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formRow: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10
  },
  formInput: {
    flex: 6,
    backgroundColor: 'white',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgb(200,200,200)',
    margin: 5,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'black',
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: 'rgb(200,200,200)',
    borderRadius: 25,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyleEmptyStyle: {
    backgroundColor: 'rgb(245,245,245)',
    borderColor: 'rgb(245,245,245)',
  },
  inactiveIcon: {
    color: 'rgb(130,130,130)'
  },
  activeIcon: {
    color: '#000'
  },
  textMemberShip: {
    backgroundColor: 'white',
    padding: 30
  },
  logoutButton: {
    color: 'red',
    borderWidth: 1,
    borderRadius: 50,
    padding: 14,
    margin: 15,
    alignItems: 'center',
    borderColor: 'red',
  }
});