import {
    Button, Image, ScrollView, StyleSheet, Text,
    Touchable, TouchableOpacity, View, Linking
} from 'react-native';
import React from 'react';
import {
    AntDesign, EvilIcons, Feather, FontAwesome,
    FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons,
    MaterialIcons, SimpleLineIcons
} from '@expo/vector-icons';
import profilePicture from '../assets/10.jpg'
import { Category } from './Bottom';
import { useSelector } from 'react-redux';
import { SvgXml } from 'react-native-svg';
import Background from '../assets/Background.png'
import { subTextColor, textColor, backgroundColor } from './../assets/color';

const DrawerMenu = ({ navigation }) => {
    const onNavigate = (screen) => {
        navigation.navigate(screen)
    }
    const [dropdown, setDropdown] = React.useState(false)
    const user = useSelector(state => state.user)
    const darkMode = useSelector(state => state.pageSettings.darkMode)

    const styles = StyleSheet.create({
        container: {
            padding: 20,
            paddingBottom: 50,
            paddingTop:0
        },
        profilePicture: {
            height: 65,
            width: 65,
            borderRadius: 32.5,
            marginRight: 13
        },
        metaContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 15,
            marginTop: 20
        },
        horiContainer: {
            flexDirection: 'column',
        },
        membership: {
            fontSize: 15,
            color: textColor(darkMode),
            marginTop: 5,
            fontWeight: '500'
        },
        navTab: {
            flexDirection: 'row',
            alignItems: "center",
        },
        tabIco: {
            margin: 15,
            color: 'rgb(170,170,170)'
        },
        tabIcoGold: {
            margin: 15,
            color: 'gold'
        },
        tabIco2: {
            color: 'rgb(255,255,255)'
        },
        tabIco3: {
            color: 'rgb(215,215,215)'
        },
        navTabText: {
            color: subTextColor(darkMode),
            fontSize: 16
        }
    });


    return (
        <ScrollView style={{ backgroundColor: backgroundColor(darkMode) }} showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View style={[styles.container]}>
                <TouchableOpacity style={[styles.metaContainer]}
                    onPress={() => onNavigate('Account')}>
                    <Image source={{
                        uri: user && user[0].image ?
                            user[0].image : 'https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png'
                    }}
                        style={[styles.profilePicture]} />

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '70%'
                    }}>
                        <View style={[styles.horiContainer]}>
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 20,
                                color: textColor(darkMode)
                            }}>{user && user[0].name ? user[0].name : '-'}</Text>
                            {
                                user && user[0].membership_type == 'gold' ? (
                                    <Text style={[styles.membership]}>
                                        <Text style={{ color: '#FFB92E', fontFamily: 'PlusJakartaSansBold', }}>Gold </Text>
                                        Member</Text>
                                ) : user && user[0].membership_type == 'platinum' ? (
                                    <Text style={[styles.membership]}>
                                        <Text style={{ color: '#A2B0CD', fontFamily: 'PlusJakartaSansBold', }}>Platinum </Text>
                                        Member</Text>
                                ) : user && user[0].membership_type == 'diamond' ? (
                                    <Text style={[styles.membership]}>
                                        <Text style={{ color: '#48A6DB', fontFamily: 'PlusJakartaSansBold', }}>Diamond </Text>
                                        Member</Text>
                                ) : user && user[0].membership_type == 'silver' ? (
                                    <Text style={[styles.membership]}>
                                        <Text style={{ color: '#FC444B', fontFamily: 'PlusJakartaSansBold', }}>Slider </Text>
                                        Member</Text>
                                ) :
                                    (
                                        <Text style={[styles.membership]}>
                                            <Text style={{ color: textColor(darkMode), fontFamily: 'PlusJakartaSansBold', }}>Non </Text>
                                            Member</Text>
                                    )
                            }
                        </View>
                        <MaterialIcons style={[styles.tabIco3, { marginLeft: 25 }]} name='navigate-next' size={35} />
                    </View>
                </TouchableOpacity>
                <View style={{
                    borderBottomColor: 'rgb(230,230,230)',
                    borderBottomWidth: 1,
                    marginTop: 10,
                    marginBottom: 10
                }}></View>
                <TouchableOpacity style={[styles.navTab]} onPress={() => {
                    if (user && user[0].membership_type) {
                        navigation.navigate('MemberShipInfo')
                    } else {
                        navigation.navigate('MemberShipOnboarding')
                    }
                }}>
                    <SvgXml
                        style={[styles.tabIco]}
                        xml={`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.35 6.00002V10.8C1.35 14.0309 3.96913 16.65 7.2 16.65H10.8C14.0309 16.65 16.65 14.0309 16.65 10.8V6.00002H1.35ZM0.9 4.65002C0.402944 4.65002 0 5.05297 0 5.55002V10.8C0 14.7765 3.22355 18 7.2 18H10.8C14.7764 18 18 14.7765 18 10.8V5.55002C18 5.05297 17.5971 4.65002 17.1 4.65002H0.9Z" fill="#D8D8D8"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6667 1.35H5.33332C3.36639 1.35 1.73243 2.77565 1.40839 4.64999H16.5916C16.2676 2.77565 14.6336 1.35 12.6667 1.35ZM5.33332 0C2.38781 0 0 2.38781 0 5.33333C0 5.70151 0.298477 5.99999 0.666666 5.99999H17.3333C17.7015 5.99999 18 5.70151 18 5.33333C18 2.38781 15.6122 0 12.6667 0H5.33332Z" fill="#D8D8D8"/>
                    </svg>`}
                        height="22"
                        width="22" />
                    <Text style={[styles.navTabText]}>Your Membership</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('WishList')}>
                    <SvgXml
                        style={[styles.tabIco]}
                        xml={`<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.60366 7.87647C2.83632 11.7112 7.7063 14.8119 9.0005 15.5793C10.2991 14.804 15.2043 11.669 16.3974 7.87999C17.1807 5.43075 16.4536 2.32833 13.5645 1.39734C12.1648 0.948112 10.5321 2.10064 9.40494 2.97273C9.16931 3.15383 8.84225 3.15735 8.60486 2.978C7.41088 2.08042 5.85115 0.938441 4.42946 1.39734C1.54475 2.32745 0.820273 5.42987 1.60366 7.87647ZM9.00138 17C8.89236 17 8.78421 16.9736 8.68574 16.92C8.41055 16.7697 1.92808 13.1969 0.348132 8.27911L0.347252 8.27823C-0.644504 5.18196 0.459792 1.29097 4.02502 0.141957C5.69904 -0.399582 7.52342 0.717782 8.99874 1.64877C10.4283 0.745035 12.3275 -0.383758 13.9681 0.141957C17.5368 1.29273 18.6446 5.18284 17.6538 8.27823C16.1248 13.1398 9.59485 16.7662 9.3179 16.9182C9.21943 16.9727 9.1104 17 9.00138 17Z" fill="#D8D8D8"/>
                    </svg>
                    `}
                        height="22"
                        width="22" />
                    <Text style={[styles.navTabText]}>Your Wishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Redeem History')}>
                    <SvgXml
                        style={[styles.tabIco]}
                        xml={`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6698 1.30412C15.1064 1.30412 14.6476 1.76057 14.6476 2.3231C14.6476 2.88475 15.1064 3.34295 15.6698 3.34295C16.2331 3.34295 16.6919 2.88475 16.6919 2.3231C16.6919 1.76057 16.2331 1.30412 15.6698 1.30412ZM15.6697 4.64714C14.385 4.64714 13.3394 3.60468 13.3394 2.32313C13.3394 1.04158 14.385 0 15.6697 0C16.9552 0 18 1.04158 18 2.32313C18 3.60468 16.9552 4.64714 15.6697 4.64714ZM4.54917 12.1746C4.40963 12.1746 4.26922 12.1302 4.15061 12.0398C3.86455 11.8199 3.81048 11.4103 4.03113 11.1252L6.64138 7.74307C6.74777 7.60483 6.90563 7.51527 7.07831 7.49354C7.25447 7.47093 7.42715 7.51962 7.56408 7.6283L10.0234 9.5541L12.175 6.78668C12.3965 6.50064 12.8064 6.4476 13.0924 6.67018C13.3785 6.89102 13.4308 7.30052 13.2093 7.58483L10.654 10.8713C10.5476 11.0087 10.3906 11.0982 10.2179 11.1191C10.0435 11.1426 9.87083 11.0921 9.73303 10.9852L7.2754 9.06026L5.06808 11.9198C4.939 12.0868 4.74539 12.1746 4.54917 12.1746ZM4.90915 17.9999H12.4128C15.3493 17.9999 17.322 15.9437 17.322 12.8833V6.76335C17.322 6.4034 17.029 6.11127 16.6679 6.11127C16.3069 6.11127 16.0138 6.4034 16.0138 6.76335V12.8833C16.0138 15.1995 14.6001 16.6958 12.4128 16.6958H4.90915C2.68787 16.6958 1.30818 15.2351 1.30818 12.8833V5.85653C1.30818 3.53513 2.72188 2.03622 4.90915 2.03622H11.2477C11.6088 2.03622 11.9018 1.74409 11.9018 1.38415C11.9018 1.0242 11.6088 0.732068 11.2477 0.732068H4.90915C1.97273 0.732068 0 2.79176 0 5.85653V12.8833C0 15.9437 1.97273 17.9999 4.90915 17.9999Z" fill="#D8D8D8"/>
                        </svg>
                        `}
                        height="22"
                        width="22" />
                    <Text style={[styles.navTabText]}>Redeem History</Text>
                </TouchableOpacity>
                {
                    /*
                    <TouchableOpacity style={[styles.navTab, {
                    justifyContent: 'space-between',
                }]} onPress={() => {
                    setDropdown(!dropdown)
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <SvgXml
                            style={[styles.tabIco]}
                            xml={`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5386 3.92309C11.5386 1.57662 11.5386 1.38462 14.077 1.38462C16.6155 1.38462 16.6155 1.57662 16.6155 3.94525C16.6155 4.96803 16.6155 5.70649 16.3654 6.01757C16.1208 6.32034 15.3943 6.46158 14.077 6.46158C12.7598 6.46158 12.0333 6.32127 11.7887 6.01849C11.5386 5.70649 11.5386 4.96803 11.5386 3.94617V3.92309ZM10.7114 6.8862C11.3529 7.68283 12.5206 7.84621 14.077 7.84621C15.6333 7.84621 16.801 7.68283 17.4425 6.8862C18.0001 6.19481 18.0001 5.2505 18.0001 3.92311C18.0001 1.27386 17.833 0 14.077 0C10.3209 0 10.1539 1.27386 10.1539 3.92311H10.8462L10.1539 3.94618C10.1539 5.25142 10.1539 6.19481 10.7114 6.8862ZM1.38473 3.9231C1.38473 1.57662 1.38473 1.38462 3.92321 1.38462C6.46169 1.38462 6.46169 1.57662 6.46169 3.94525V3.94526C6.46169 4.96803 6.46169 5.70649 6.21153 6.01757C5.96691 6.32034 5.24045 6.46158 3.92321 6.46158C2.60597 6.46158 1.8795 6.32127 1.63488 6.0185C1.38473 5.70649 1.38473 4.96803 1.38473 3.94617V3.9231ZM0.557611 6.88627C1.19915 7.68289 2.36686 7.84627 3.92317 7.84627C5.47949 7.84627 6.64719 7.68289 7.28874 6.88627C7.84628 6.19488 7.84628 5.25056 7.84628 3.92317C7.84628 1.27392 7.6792 6.25614e-05 3.92317 6.25614e-05C0.167147 6.25614e-05 6.86646e-05 1.27392 6.86646e-05 3.92317H0.692381L6.86646e-05 3.94625C6.86646e-05 5.25149 6.86646e-05 6.19488 0.557611 6.88627ZM3.92326 11.5386C1.38478 11.5386 1.38478 11.7306 1.38478 14.0771V14.1001C1.38478 15.122 1.38478 15.8605 1.63494 16.1725C1.87955 16.4752 2.60602 16.6155 3.92326 16.6155C5.2405 16.6155 5.96697 16.4743 6.21158 16.1715C6.46174 15.8605 6.46174 15.122 6.46174 14.0992C6.46174 11.7306 6.46174 11.5386 3.92326 11.5386ZM3.92311 18.0002C2.36679 18.0002 1.19909 17.8368 0.557543 17.0402C0 16.3488 0 15.4054 0 14.1002L0.692313 14.0771H0C0 11.4278 0.167078 10.154 3.92311 10.154C7.67913 10.154 7.84621 11.4278 7.84621 14.0771C7.84621 15.4045 7.84621 16.3488 7.28867 17.0402C6.64713 17.8368 5.47942 18.0002 3.92311 18.0002ZM11.5386 14.0771C11.5386 11.7306 11.5386 11.5386 14.077 11.5386C16.6155 11.5386 16.6155 11.7306 16.6155 14.0992C16.6155 15.122 16.6155 15.8605 16.3654 16.1715C16.1208 16.4743 15.3943 16.6155 14.077 16.6155C12.7598 16.6155 12.0333 16.4752 11.7887 16.1725C11.5386 15.8605 11.5386 15.122 11.5386 14.1001V14.0771ZM10.7114 17.0402C11.3529 17.8368 12.5206 18.0002 14.077 18.0002C15.6333 18.0002 16.801 17.8368 17.4425 17.0402C18.0001 16.3488 18.0001 15.4045 18.0001 14.0771C18.0001 11.4278 17.833 10.154 14.077 10.154C10.3209 10.154 10.1539 11.4278 10.1539 14.0771H10.8462L10.1539 14.1002C10.1539 15.4054 10.1539 16.3488 10.7114 17.0402Z" fill="#D8D8D8"/>
                        </svg>
                        `}
                            height="22"
                            width="22" />
                        <Text style={[styles.navTabText]}>Category</Text>
                    </View>
                    {
                        dropdown ?
                            (
                                <AntDesign name="up" size={20} color="rgb(170,170,170)" />
                            ) : (
                                <AntDesign name="down" size={20} color="rgb(170,170,170)" />
                            )
                    }
                </TouchableOpacity>
                    */
                }
                {
                    dropdown ?
                        (
                            <Category type="dropdown" close={() => {

                            }} navigation={navigation} />
                        ) : (
                            <View></View>
                        )
                }
                <View style={{ borderBottomColor: 'rgb(230,230,230)', borderBottomWidth: 1, marginTop: 10, marginBottom: 10 }}></View>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Home')}>
                    <SvgXml
                        style={[styles.tabIco]}
                        xml={`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5783 2.35247H12.805C12.6365 1.02739 11.5151 0 10.1615 0H7.83836C6.48476 0 5.36342 1.02739 5.1949 2.35247H3.43072C1.53887 2.35247 0 3.90718 0 5.81841V8.96338C0 9.20685 0.126963 9.43116 0.334067 9.55335C2.55846 10.8725 5.37441 11.6415 8.32456 11.743V13.3828C8.32456 13.7604 8.62696 14.0667 8.99956 14.0667C9.37216 14.0667 9.67456 13.7604 9.67456 13.3828V11.7428C12.6276 11.6403 15.4433 10.8715 17.6659 9.55335C17.8721 9.43116 18 9.20685 18 8.96338V5.82753C18 3.91083 16.4656 2.35247 14.5783 2.35247ZM10.1615 1.36777C10.768 1.36777 11.28 1.78593 11.431 2.35247H6.56889C6.71989 1.78593 7.23184 1.36777 7.83836 1.36777H10.1615ZM8.96021 10.3867C6.16529 10.3814 3.48117 9.73717 1.35066 8.5649V5.81841C1.35066 4.66127 2.28353 3.72024 3.4307 3.72024H14.5783C15.7209 3.72024 16.6493 4.66492 16.6493 5.82753V8.5649C14.5199 9.73608 11.8361 10.3802 9.03863 10.3867C9.0257 10.386 9.01267 10.3856 8.99956 10.3856C8.98635 10.3856 8.97323 10.386 8.96021 10.3867ZM3.7771 18H14.2223C16.0908 18 17.6638 16.5219 17.8052 14.6344L17.9763 12.3465C18.0042 11.9699 17.726 11.6408 17.3541 11.6125C16.9885 11.5979 16.658 11.866 16.6292 12.2435L16.4581 14.5304C16.3708 15.7085 15.3884 16.6322 14.2223 16.6322H3.7771C2.61102 16.6322 1.62953 15.7085 1.54129 14.5304L1.3711 12.2435C1.34229 11.866 1.01993 11.5988 0.646239 11.6125C0.274353 11.6408 -0.0047865 11.9699 0.0231275 12.3465L0.194213 14.6344C0.335584 16.5219 1.90867 18 3.7771 18Z" fill="#D8D8D8"/>
                        </svg>
                        `}
                        height="22"
                        width="22" />
                    <Text style={[styles.navTabText]}>Business with us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Settings')}>
                    <SvgXml
                        style={[styles.tabIco]}
                        xml={`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.49223 13.4898C5.28315 13.4377 5.06941 13.4125 4.85567 13.4125C4.42259 13.4125 3.99137 13.5176 3.62082 13.72C3.36881 13.8503 3.0664 13.8807 2.79199 13.8095C2.51664 13.7374 2.27864 13.5611 2.13303 13.317L1.54407 12.3718C1.24726 11.8941 1.4246 11.2799 1.93702 11.0037C2.70332 10.591 3.18027 9.82398 3.18027 9.00047C3.18027 8.17696 2.70332 7.40904 1.93889 6.99728C1.42367 6.71844 1.24633 6.1008 1.53567 5.63345L2.16756 4.6666C2.46531 4.18449 3.12987 4.01857 3.63855 4.28786C4.0007 4.48939 4.41792 4.59798 4.851 4.60232C6.20159 4.60232 7.31696 3.57988 7.33656 2.30987C7.3347 2.04057 7.44577 1.78779 7.64924 1.59754C7.85365 1.40817 8.12433 1.30306 8.41367 1.30306H9.58318C9.87533 1.30306 10.16 1.41338 10.3625 1.60797C10.566 1.80342 10.678 2.07011 10.6696 2.3672C10.6734 2.76245 10.79 3.15075 11.0047 3.48433C11.3398 4.0177 11.8774 4.39558 12.5186 4.5502C13.1608 4.70743 13.8291 4.61883 14.391 4.30958C14.9109 4.0342 15.5735 4.20012 15.8713 4.68224L16.4182 5.56482C16.4276 5.58567 16.4388 5.60565 16.4509 5.62476C16.7449 6.10428 16.5676 6.72017 16.0617 6.99555C15.6846 7.19708 15.3701 7.48983 15.1554 7.8373C14.8259 8.36459 14.7335 9.00481 14.9025 9.59118C15.0733 10.1888 15.4849 10.6875 16.0617 10.9967C16.3081 11.1279 16.4911 11.3503 16.5639 11.6065C16.6376 11.8628 16.5975 12.1408 16.4593 12.3623L15.8396 13.3239C15.539 13.8017 14.8754 13.9667 14.3555 13.6896C13.9943 13.4985 13.5845 13.3917 13.1589 13.3821C12.5093 13.3647 11.8597 13.6245 11.3949 14.0571C10.9235 14.4958 10.6659 15.0787 10.6696 15.6919C10.6668 16.247 10.1796 16.697 9.58318 16.697H8.41367C7.81445 16.697 7.32723 16.2444 7.32723 15.6798C7.3235 15.2854 7.20683 14.8988 6.99588 14.5679C6.67107 14.0406 6.12318 13.6479 5.49223 13.4898ZM8.41369 18H9.5832C10.9478 18 12.0632 16.968 12.0697 15.6919C12.0678 15.4226 12.1798 15.169 12.3842 14.9787C12.5858 14.792 12.8631 14.6851 13.1328 14.6851H13.1384C13.3195 14.6894 13.5015 14.7355 13.6592 14.8197C14.8418 15.4556 16.3623 15.0777 17.0446 13.9867L17.6643 13.0259C17.9938 12.4986 18.0862 11.8593 17.9173 11.2703C17.7483 10.6805 17.3255 10.1697 16.7589 9.86651C16.5079 9.73273 16.3296 9.51643 16.2549 9.25583C16.1821 9.00043 16.2223 8.72246 16.3669 8.48878C16.4603 8.33763 16.5956 8.21254 16.7627 8.12306C17.9107 7.49848 18.3233 6.1303 17.7054 5.04358C17.6942 5.01839 17.6811 4.99406 17.6662 4.96887L17.0847 4.03156C16.4024 2.92833 14.8819 2.54785 13.6872 3.18286C13.4399 3.31924 13.1487 3.35399 12.8705 3.28971C12.5924 3.22195 12.3581 3.0569 12.2097 2.82235C12.1201 2.68076 12.0706 2.51918 12.0688 2.37933C12.0884 1.75822 11.8317 1.14579 11.3669 0.699291C10.9011 0.255393 10.2515 0 9.5832 0H8.41369C7.75006 0 7.12657 0.240625 6.65709 0.678442C6.18947 1.11713 5.93279 1.69828 5.93653 2.30375C5.92719 2.85276 5.44091 3.29926 4.85942 3.29926C4.68115 3.29752 4.50567 3.25235 4.3442 3.16288C3.15789 2.52874 1.63649 2.9127 0.963536 4.00203L0.330711 4.96887C-0.350648 6.07036 0.0544339 7.48545 1.23701 8.1248C1.57209 8.30462 1.78023 8.6408 1.78023 9.00043C1.78023 9.36007 1.57209 9.69538 1.23701 9.8752C0.0553672 10.5111 -0.350648 11.9227 0.331645 13.0242L0.915 13.9598C1.23421 14.494 1.77837 14.8971 2.40839 15.063C3.03935 15.228 3.72911 15.1542 4.31526 14.8502C4.55981 14.7181 4.85755 14.6808 5.12916 14.7485C5.40264 14.8163 5.63972 14.9865 5.78625 15.2246C5.87679 15.3661 5.92533 15.5295 5.92719 15.6867C5.92719 16.9628 7.04257 18 8.41369 18ZM7.24224 9.00063C7.24224 8.09719 8.03187 7.36142 9.00257 7.36142C9.97327 7.36142 10.7629 8.09719 10.7629 9.00063C10.7629 9.90406 9.97327 10.6381 9.00257 10.6381C8.03187 10.6381 7.24224 9.90406 7.24224 9.00063ZM5.84209 9.00062C5.84209 10.6224 7.25988 11.9411 9.00248 11.9411C10.7451 11.9411 12.1629 10.6224 12.1629 9.00062C12.1629 7.37878 10.7451 6.05838 9.00248 6.05838C7.25988 6.05838 5.84209 7.37878 5.84209 9.00062Z" fill="#D8D8D8"/>
                        </svg>
                        `}
                        height="22"
                        width="22" />
                    <Text style={[styles.navTabText]}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => {
                    Linking.openURL('https://www.google.com')
                }}>
                    <SvgXml
                        style={[styles.tabIco]}
                        xml={`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.56647 17.9996C4.18523 17.9996 3.80676 17.8731 3.48276 17.624C2.92336 17.192 2.6492 16.4788 2.76828 15.7608L3.41075 11.8593C3.43475 11.7143 3.38768 11.5674 3.28614 11.4643L0.557471 8.70109C0.0553082 8.19418 -0.124695 7.44501 0.0876165 6.74935C0.301774 6.04591 0.868554 5.54289 1.56734 5.43781L5.34094 4.86475C5.48679 4.84334 5.61233 4.74897 5.6751 4.6147L7.36159 1.06149C7.67268 0.406693 8.30038 0 9.00009 0C9.69979 0 10.3275 0.406693 10.6386 1.06149L12.326 4.61373C12.3897 4.74897 12.5143 4.84334 12.6592 4.86475L16.4328 5.43781C17.1316 5.54289 17.6984 6.04591 17.9126 6.74935C18.1249 7.44501 17.9439 8.19418 17.4418 8.70109L14.7131 11.4643C14.6116 11.5674 14.5654 11.7143 14.5894 11.8583L15.2328 15.7608C15.351 16.4798 15.0768 17.193 14.5165 17.624C13.9488 18.0628 13.2094 18.1222 12.5826 17.7777L9.21055 15.9359C9.07855 15.8639 8.9207 15.8639 8.7887 15.9359L5.41664 17.7787C5.14709 17.9266 4.85632 17.9996 4.56647 17.9996Z" fill="#FFC654"/>
                        </svg>
                        `}
                        height="22"
                        width="22" />
                    <Text style={[styles.navTabText]}>Rate us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Home')}>
                    <SvgXml
                        style={[styles.tabIco]}
                        xml={`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.35 5.3244C1.35 2.9097 2.8215 1.35 5.0985 1.35H12.9006C15.1776 1.35 16.65 2.9097 16.65 5.3244V12.6756C16.65 15.0903 15.1776 16.65 12.8997 16.65H5.0985C2.8215 16.65 1.35 15.0903 1.35 12.6756V5.3244ZM5.0985 18H12.8997C15.9507 18 18 15.8598 18 12.6756V5.3244C18 2.1402 15.9507 0 12.9006 0H5.0985C2.0484 0 0 2.1402 0 5.3244V12.6756C0 15.8598 2.0484 18 5.0985 18ZM7.4551 11.6127C7.5865 11.745 7.7602 11.8107 7.9321 11.8107C8.1049 11.8107 8.2777 11.745 8.4091 11.6127L12.6805 7.34129C12.9442 7.07759 12.9442 6.65099 12.6805 6.38729C12.4168 6.12359 11.9902 6.12359 11.7265 6.38729L7.9321 10.1808L6.2725 8.52299C6.0088 8.25929 5.5822 8.25929 5.3185 8.52299C5.0548 8.78669 5.0548 9.21329 5.3185 9.47699L7.4551 11.6127Z" fill="#D8D8D8"/>
                        </svg>
                        `}
                        height="22"
                        width="22" />
                    <Text style={[styles.navTabText]}>Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Talk To Us')}>
                    <SvgXml
                        style={[styles.tabIco]}
                        xml={`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70688 16.0191C5.22199 15.8239 4.76389 15.6397 4.27816 15.6397C3.79917 15.643 3.31609 15.8081 2.88866 15.9542L2.8729 15.9596L2.84987 15.9675C2.4908 16.0906 1.96681 16.2703 1.85286 16.1522C1.73434 16.0337 1.9178 15.4959 2.04008 15.1374L2.04129 15.1339L2.04243 15.1305C2.19039 14.6958 2.35786 14.2039 2.35786 13.7152C2.35786 13.2244 2.16859 12.7521 1.97262 12.2672C0.611741 9.3252 1.23481 5.81204 3.52444 3.52409C4.98582 2.06187 6.93125 1.25623 9.0023 1.25623C11.0725 1.25623 13.0171 2.06103 14.4793 3.52325C17.4992 6.54315 17.4992 11.4582 14.4793 14.4798C12.1905 16.7678 8.67737 17.3925 5.70688 16.0191ZM5.20856 17.1722C6.41367 17.73 7.70169 18.0005 8.98134 18.0005C11.3288 18.0005 13.646 17.0893 15.367 15.3675C18.8777 11.8568 18.8777 6.14532 15.367 2.63467C13.6686 0.935448 11.4075 0 9.00144 0C6.5954 0 4.33508 0.936286 2.63671 2.6355C-0.0239203 5.29445 -0.749165 9.3771 0.819407 12.7646C0.99025 13.1892 1.10163 13.484 1.10163 13.7152C1.10163 13.9966 0.975175 14.3684 0.852068 14.7285C0.602503 15.4596 0.292641 16.3683 0.964288 17.0407C1.63811 17.712 2.54869 17.3995 3.28045 17.1483L3.28155 17.1479C3.63831 17.0248 4.00764 16.8975 4.28232 16.8959C4.5193 16.8959 4.84873 17.0279 5.20096 17.1692L5.20856 17.1722ZM11.4669 9.34838C11.4669 9.8115 11.8454 10.1858 12.3077 10.1858C12.77 10.1858 13.1452 9.8115 13.1452 9.34838C13.1452 8.88526 12.77 8.51091 12.3077 8.51091H12.3001C11.8379 8.51091 11.4669 8.88526 11.4669 9.34838ZM8.95048 10.1858C8.4882 10.1858 8.10967 9.8115 8.10967 9.34838C8.10967 8.88526 8.47983 8.51091 8.94295 8.51091H8.95048C9.41276 8.51091 9.78795 8.88526 9.78795 9.34838C9.78795 9.8115 9.41276 10.1858 8.95048 10.1858ZM4.75203 9.34838C4.75203 9.8115 5.13056 10.1858 5.59284 10.1858C6.05512 10.1858 6.43031 9.8115 6.43031 9.34838C6.43031 8.88526 6.05512 8.51091 5.59284 8.51091H5.5853C5.12302 8.51091 4.75203 8.88526 4.75203 9.34838Z" fill="#D8D8D8"/>
                        </svg>
                        `}
                        height="22"
                        width="22" />
                    <Text style={[styles.navTabText]}>Talk to us</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onNavigate('MemberShipOnboarding')} style={{
                    backgroundColor: '#FF4449', height: 180, width: '100%',
                    marginTop: 20, borderRadius: 10,
                }}>
                    <Image style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        borderRadius: 10
                    }} source={Background} />
                    <View style={{ padding: 20 }}>
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 17 }}>Become a member and</Text>
                        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Save More</Text>
                        <View style={{ height: 20 }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <View>
                                <Text style={{ color: 'white', fontWeight: '600', fontSize: 15 }}>Deals worth of</Text>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 23 }}>₹1 lakh</Text>
                            </View>
                            <MaterialIcons style={[styles.tabIco2]} name='navigate-next' size={30} />
                        </View>
                    </View>

                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default DrawerMenu;

