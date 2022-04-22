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
import { useSelector, useDispatch } from 'react-redux'
import * as ImagePicker from 'expo-image-picker';
import { postData, url, setUser,setFamilyCode } from '../action'
import { getAuth } from 'firebase/auth'
import app from '../firebase';
import { FontAwesome5 } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg'

function Account({ navigation }) {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("")
  const [MobilNo, setMobilNo] = useState("")
  const [Gender, setGender] = useState("")
  const [Dob, setDob] = useState("")
  const [Location, setLocation] = useState("")
  const [ProfileImage, setProfileImage] = useState("")
  const [MembershipFamilyCode, setMembershipFamilyCode] = useState("")
  const user = useSelector(state => state.user)
  const auth = getAuth(app);
  const dispatch = useDispatch()
  const familyCode = useSelector(state => state.pageSettings.familyCode);
  //console.log(familyCode)

  const profileIcon = `<svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86305 4.29095C3.86305 2.56085 5.27073 1.15398 7.00083 1.15398C8.73013 1.15398 10.137 2.56085 10.137 4.29095C10.137 6.02024 8.73013 7.42792 7.00083 7.42792V8.00489L6.9774 7.42792C5.25457 7.42145 3.8574 6.01539 3.86305 4.29095ZM6.97494 8.58101H7.0008C9.36686 8.58101 11.2909 6.65697 11.2909 4.29091C11.2909 1.92485 9.36686 0 7.0008 0C4.63393 0 2.70908 1.92485 2.70908 4.28849C2.701 6.64808 4.61373 8.57374 6.97494 8.58101ZM1.81221 13.0693C1.81221 11.9016 3.55766 11.3101 7.00089 11.3101C10.4433 11.3101 12.188 11.9073 12.188 13.0855C12.188 14.2532 10.4433 14.8447 7.00089 14.8447C3.55766 14.8447 1.81221 14.2475 1.81221 13.0693ZM0.599976 13.0695C0.599976 16.0569 5.41775 16.0569 7.00078 16.0569C9.74745 16.0569 13.4 15.7491 13.4 13.0856C13.4 10.0981 8.58381 10.0981 7.00078 10.0981C4.25331 10.0981 0.599976 10.406 0.599976 13.0695Z" fill="black"/>
  </svg>`

  const mobileIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84123 2.38924C1.84279 2.38924 1.80377 2.42983 1.7546 2.47822C1.56572 2.66163 1.17469 3.04329 1.17079 3.84173C1.16455 4.95861 1.89899 7.03236 5.43538 10.568C8.95538 14.0864 11.026 14.8294 12.1452 14.8294H12.1616C12.9601 14.8255 13.3409 14.4337 13.5251 14.2456C13.5813 14.1879 13.6266 14.1457 13.6586 14.1192C14.436 13.3371 14.834 12.7549 14.8301 12.3818C14.8247 12.001 14.3509 11.5506 13.6961 10.9278C13.4877 10.7295 13.2613 10.5141 13.0225 10.2753C12.4036 9.65792 12.0968 9.76329 11.4225 10.0006C10.4898 10.3276 9.20982 10.7725 7.22114 8.783C5.22933 6.79275 5.67499 5.51431 6.00123 4.58163C6.23694 3.90729 6.34465 3.59978 5.72494 2.98007C5.48221 2.73812 5.26445 2.50865 5.06387 2.29792C4.44494 1.647 3.9985 1.17636 3.61996 1.1709H3.61372C3.23987 1.1709 2.65918 1.57051 1.83733 2.39236C1.83967 2.39002 1.84045 2.38924 1.84123 2.38924ZM12.146 16.0001C10.201 16.0001 7.66524 14.4516 4.60807 11.396C1.53919 8.32793 -0.0116415 5.78432 6.57902e-05 3.83544C0.00709018 2.54763 0.682212 1.88812 0.935871 1.64071C0.949139 1.62432 0.994408 1.57983 1.01002 1.56422C2.12924 0.444217 2.88397 -0.00846569 3.6348 0.000119681C4.5066 0.011827 5.12709 0.664315 5.91226 1.49085C6.10661 1.69534 6.31734 1.91778 6.55226 2.15193C7.69178 3.29144 7.36709 4.221 7.10641 4.96715C6.82231 5.7812 6.57646 6.48363 8.04846 7.95564C9.52202 9.42764 10.2245 9.18178 11.0354 8.89534C11.7823 8.63466 12.7095 8.30842 13.8506 9.44793C14.0816 9.67895 14.301 9.88734 14.5031 10.0801C15.3335 10.8692 15.9891 11.4928 16.0001 12.367C16.0094 13.1123 15.5568 13.8717 14.4391 14.9902L13.9443 14.6546L14.3626 15.0635C14.1152 15.3172 13.4565 15.9931 12.1679 16.0001H12.146Z" fill="black"/>
  </svg>`

  const mailIcon = `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5445 14.0931H5.05394H5.04326C4.17368 14.0931 3.40097 13.7819 2.80905 13.1907C2.12253 12.5065 1.74419 11.5232 1.74419 10.4225V5.18368C1.74419 3.05321 3.13705 1.50703 5.05546 1.50703H12.5445C14.463 1.50703 15.8558 3.05321 15.8558 5.18368V10.4225C15.8558 11.5232 15.4782 12.5065 14.791 13.1907C14.199 13.7819 13.4271 14.0931 12.5567 14.0931C12.5522 14.0931 12.5461 14.0916 12.5445 14.0931ZM2.00122 14.0015C2.81283 14.81 3.86396 15.2372 5.04094 15.2372H5.05544H12.5445H12.5567C13.736 15.2372 14.7879 14.8093 15.5987 14.0015C16.5026 13.0999 17 11.8291 17 10.4225V5.18363C17 2.4353 15.0846 0.362793 12.5445 0.362793H5.05544C2.51534 0.362793 0.599976 2.4353 0.599976 5.18363V10.4225C0.599976 11.8291 1.09732 13.0999 2.00122 14.0015ZM7.37587 8.60229C7.80151 8.93945 8.31029 9.10802 8.8206 9.10802C9.33243 9.10802 9.84503 8.93792 10.2737 8.59772L13.6636 5.84252C13.9084 5.64266 13.9458 5.28263 13.7467 5.03777C13.5469 4.79215 13.1868 4.75401 12.9412 4.95463L9.55746 7.70525C9.12495 8.04851 8.52006 8.04851 8.09061 7.7083L4.67254 4.9531C4.42692 4.75554 4.06689 4.79444 3.8678 5.0393C3.67024 5.28492 3.70838 5.64572 3.95476 5.84404L7.37587 8.60229Z" fill="black"/>
  </svg>`

  const birthdayIcon = `<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7023 3.31569C10.7023 3.65538 10.978 3.93107 11.3177 3.93107C11.6574 3.93107 11.9331 3.65538 11.9331 3.31569V2.54533C12.7905 2.61842 13.4846 2.90277 13.9594 3.37898C14.5002 3.92051 14.7726 4.7082 14.7693 5.72154V6.07539H1.23086V5.72154C1.23086 3.81355 2.23571 2.69931 4.07402 2.54499V3.31569C4.07402 3.65538 4.34972 3.93107 4.68941 3.93107C5.0291 3.93107 5.30479 3.65538 5.30479 3.31569V2.52646H10.7023V3.31569ZM11.9331 1.31103V0.615383C11.9331 0.275692 11.6574 0 11.3177 0C10.978 0 10.7023 0.275692 10.7023 0.615383V1.2957H5.30479V0.615383C5.30479 0.275692 5.0291 0 4.68941 0C4.34972 0 4.07402 0.275692 4.07402 0.615383V1.31131C1.54853 1.48738 0 3.14268 0 5.72154V13.1463C0 15.9189 1.7362 17.6411 4.53004 17.6411H11.4699C14.2638 17.6411 16 15.9426 16 13.2087V5.72318C16.0041 4.39149 15.5996 3.28134 14.8307 2.50924C14.1264 1.80347 13.1313 1.3931 11.9331 1.31103ZM1.23086 7.30616V13.1463C1.23086 15.2518 2.40255 16.4103 4.53014 16.4103H11.47C13.5976 16.4103 14.7693 15.2731 14.7693 13.2087V7.30616H1.23086ZM11.0336 9.89507C11.0336 10.2348 11.3126 10.5105 11.6523 10.5105C11.992 10.5105 12.2677 10.2348 12.2677 9.89507C12.2677 9.55538 11.992 9.27969 11.6523 9.27969H11.6449C11.3052 9.27969 11.0336 9.55538 11.0336 9.89507ZM8.01129 10.5105C7.6716 10.5105 7.39263 10.2348 7.39263 9.89507C7.39263 9.55538 7.66422 9.27969 8.00391 9.27969H8.01129C8.35098 9.27969 8.62668 9.55538 8.62668 9.89507C8.62668 10.2348 8.35098 10.5105 8.01129 10.5105ZM3.74316 9.89507C3.74316 10.2348 4.02296 10.5105 4.36265 10.5105C4.70234 10.5105 4.97803 10.2348 4.97803 9.89507C4.97803 9.55538 4.70234 9.27969 4.36265 9.27969H4.35527C4.01557 9.27969 3.74316 9.55538 3.74316 9.89507ZM11.6523 13.6995C11.3126 13.6995 11.0336 13.4238 11.0336 13.0841C11.0336 12.7444 11.3052 12.4688 11.6449 12.4688H11.6523C11.992 12.4688 12.2677 12.7444 12.2677 13.0841C12.2677 13.4238 11.992 13.6995 11.6523 13.6995ZM7.39263 13.0841C7.39263 13.4238 7.6716 13.6995 8.01129 13.6995C8.35098 13.6995 8.62668 13.4238 8.62668 13.0841C8.62668 12.7444 8.35098 12.4688 8.01129 12.4688H8.00391C7.66422 12.4688 7.39263 12.7444 7.39263 13.0841ZM4.36265 13.6995C4.02296 13.6995 3.74316 13.4238 3.74316 13.0841C3.74316 12.7444 4.01557 12.4688 4.35527 12.4688H4.36265C4.70234 12.4688 4.97803 12.7444 4.97803 13.0841C4.97803 13.4238 4.70234 13.6995 4.36265 13.6995Z" fill="black"/>
  </svg>`

  const cityIcon = `<svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.2364 6.85184C1.2364 3.75599 3.73221 1.23628 6.80004 1.23628C9.86787 1.23628 12.3637 3.75599 12.3637 6.85184C12.3637 10.7901 7.72813 14.6277 6.80004 14.833C5.87194 14.6286 1.2364 10.7909 1.2364 6.85184ZM0 6.85193C0 11.4965 5.32131 16.0727 6.8 16.0727C8.27869 16.0727 13.6 11.4965 13.6 6.85193C13.6 3.0736 10.5495 0 6.8 0C3.05052 0 0 3.0736 0 6.85193ZM5.35845 6.80057C5.35845 6.00435 6.00548 5.35732 6.80087 5.35732C7.59627 5.35732 8.2433 6.00435 8.2433 6.80057C8.2433 7.59597 7.59627 8.24217 6.80087 8.24217C6.00548 8.24217 5.35845 7.59597 5.35845 6.80057ZM4.12209 6.80066C4.12209 8.2777 5.32384 9.47862 6.80088 9.47862C8.27792 9.47862 9.47967 8.2777 9.47967 6.80066C9.47967 5.32279 8.27792 4.12105 6.80088 4.12105C5.32384 4.12105 4.12209 5.32279 4.12209 6.80066Z" fill="black"/>
  </svg>`

  const memberIcon = `<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.90246 0.163257C8.08338 0.0564752 8.28979 0 8.50028 0C8.71076 0 8.91717 0.0564752 9.09809 0.163257C9.27898 0.270021 9.42762 0.423063 9.529 0.606126L11.6703 4.47236L15.3452 2.83403C15.5457 2.74465 15.7673 2.71311 15.985 2.74317C16.2027 2.77323 16.4073 2.86361 16.5758 3.00365C16.7442 3.14366 16.8699 3.32766 16.9392 3.53465C17.0085 3.74161 17.0188 3.96372 16.9689 4.17613L15.1116 12.0936C15.0751 12.2474 15.008 12.3926 14.914 12.5201C14.82 12.6477 14.701 12.7552 14.5641 12.8359C14.4272 12.9166 14.2752 12.9688 14.1173 12.9892C13.9601 13.0096 13.8004 12.9979 13.6479 12.955C10.2778 12.0226 6.71905 12.023 3.34917 12.956C3.19658 12.9989 3.03685 13.0106 2.87957 12.9903C2.72161 12.9699 2.56957 12.9177 2.4326 12.8369C2.29564 12.7561 2.17667 12.6486 2.08266 12.5209C1.98867 12.3933 1.92155 12.2481 1.88515 12.0941L1.88486 12.0929L0.0309527 4.1754C-0.0187774 3.96302 -0.00843145 3.74095 0.0608922 3.53405C0.130225 3.32712 0.255944 3.14319 0.424421 3.00324C0.592934 2.86327 0.797476 2.77294 1.01511 2.74291C1.23276 2.71287 1.45435 2.74442 1.65481 2.83378L5.33026 4.47236L7.47155 0.606126C7.57294 0.423061 7.72157 0.27002 7.90246 0.163257ZM8.50028 1.19464L6.3641 5.05164C6.22206 5.3081 5.98884 5.50297 5.70945 5.59669C5.42998 5.69044 5.12556 5.67581 4.85646 5.55585L5.53627 4.28018L5.64705 4.16486M8.50028 1.19464L10.6365 5.05164C10.7785 5.3081 11.0117 5.50297 11.2911 5.59669C11.5706 5.69044 11.875 5.67581 12.1441 5.55585L15.8107 3.9212L13.959 11.8146C10.3852 10.827 6.61149 10.8274 3.03784 11.8156L1.18928 3.92095L4.85646 5.55585L5.53627 4.28018" fill="#D8D8D8"/>
  </svg>`
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
      postData(url + '/getData', {
        tableName: 'user',
        condition: "uid=" + "'" + auth.currentUser.uid + "'"
      }).then(data => {
        if (Array.isArray(data)) {
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
    <ScrollView style={{
      backgroundColor: 'white'
    }}>
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
            <Image source={{ uri: ProfileImage }} style={[styles.profileImage,]} />
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
            <SvgXml xml={profileIcon} height="25" width="20" style={[Name === "" ? styles.inactiveIcon : styles.activeIcon]} />
          </View>
          <TextInput
            value={Name} placeholderTextColor='rgb(130,130,130)'
            placeholder={Name === "" ? "Full Name" : ""}
            onChangeText={e => { setName(e) }} onEndEditing={() => {
              Save('name', Name);
            }} style={[styles.formInput, Name === "" ? styles.fontEmptyStyle : '']} />
        </View>
        <View style={[styles.formRow]}>
          <View style={[styles.imageStyle, MobilNo === "" ? styles.imageStyleEmptyStyle : '']} >
            <SvgXml xml={mobileIcon} height="25" width="20" style={[Name === "" ? styles.inactiveIcon : styles.activeIcon]} />
          </View>
          <TextInput value={MobilNo} placeholderTextColor='rgb(130,130,130)'
            placeholder={MobilNo === "" ? "Mobile No." : ""}
            onChangeText={e => setMobilNo(e)} onEndEditing={() => {
              Save('phone', MobilNo);
            }} style={[styles.formInput, MobilNo === "" ? styles.fontEmptyStyle : '']} />
        </View>
        <View style={[styles.formRow]}>
          <View style={[styles.imageStyle, Email === "" ? styles.imageStyleEmptyStyle : '']} >
            <SvgXml xml={mailIcon} height="25" width="20" style={[Name === "" ? styles.inactiveIcon : styles.activeIcon]} />
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
            <SvgXml xml={birthdayIcon} height="25" width="20" style={[Name === "" ? styles.inactiveIcon : styles.activeIcon]} />
          </View>
          <TextInput value={Dob} placeholderTextColor='rgb(130,130,130)'
            placeholder={Dob === "" ? "Birthday" : ""}
            onChangeText={e => setDob(e)} onEndEditing={() => {
              Save('birth_day', Dob);
            }} style={[styles.formInput, Dob === "" ? styles.fontEmptyStyle : '']} />
        </View>
        <View style={[styles.formRow]}>
          <View style={[styles.imageStyle, Location === "" ? styles.imageStyleEmptyStyle : '']} >
            <SvgXml xml={cityIcon} height="25" width="20" style={[Name === "" ? styles.inactiveIcon : styles.activeIcon]} />
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

      <View style={[styles.formRow, {
      }]}>
        <View style={[styles.imageStyle, MembershipFamilyCode === "" ? styles.imageStyleEmptyStyle : '']} >
          <SvgXml xml={memberIcon} height="25" width="20" style={[Name === "" ? styles.inactiveIcon : styles.activeIcon]} />

        </View>
        <TextInput onPressIn={() => {
          dispatch(setFamilyCode(true))
          console.log('ok')
        }} value={MembershipFamilyCode} placeholderTextColor='rgb(130,130,130)'
          placeholder={MembershipFamilyCode === "" ? "Membership Family Code" : ""}
          onChangeText={e => {}} style={[styles.formInput, MembershipFamilyCode === "" ? styles.fontEmptyStyle : '']} />
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


export const FamilyCode = () => {
  const familyCode = useSelector(state => state.pageSettings.familyCode);
  const dispatch = useDispatch()
  const [MemberShipFamilyCodeError, setMemberShipFamilyCodeError] = useState(false)
  const [ShowModal, setShowModal] = useState(true)
  const { height, width } = Dimensions.get('screen')
  const [MembershipFamilyCode, setMembershipFamilyCode] = useState("")
  return (
    <Modal
      animationType='fade'
      visible={familyCode}
      transparent={true}
      onRequestClose={() => {
        dispatch(setFamilyCode(!familyCode))
      }}
    >
      <View style={{
        position: 'absolute', justifyContent: 'center', alignItems: 'center',
        height: height, width: width, padding: 16,backgroundColor: 'rgba(0, 0, 0, 0.357)'
      }}>
        <View style={{
          width: '100%', backgroundColor: 'white',
          shadowColor: '#000', shadowOpacity: 0.7, shadowRadius: 10, shadowOffset: {
            height: 3, width: 3
          }, borderRadius: 10,elevation:10
        }}>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'flex-end', padding: 15 }}>
            <MaterialCommunityIcons name='close' size={28} onPress={() => {
              dispatch(setFamilyCode(!familyCode))
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
  )
}

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
    marginBottom: 10,
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