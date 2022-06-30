import React from 'react';
import {View,Text,TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native'
import { textColor } from './../assets/color';
import {useSelector,useDispatch} from 'react-redux'
import ActivitiesCart from './../components/ActivitiesCart';
import {postData, url,setLoader} from '../action'

const ActivitiesNearYou = ({ navigation}) => {
    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    const [banner,setBanner] =React.useState(null)
    React.useEffect(() => {
        postData(url + '/getData', {
          tableName:'banner',
        }).then(data => {
          if(Array.isArray(data)){
            return setBanner(data)
          }
          console.log(data.message)
        })
      },[])
    return (
        <View style={{
            width: '100%',
            marginTop: 15, paddingBottom: 10,
            backgroundColor: 'white'
          }}>
            <View style={{
              width: '95%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Text style={{
                fontFamily: 'PlusJakartaSansBold',
                fontSize: 16,
                paddingHorizontal: 5,
                paddingVertical: 15,
                paddingLeft: 16,
                color: textColor(darkMode)
              }}>Super Saver Deals</Text>
              <TouchableOpacity onPress={() => {
                navigation.navigate('Category Single', { title: 'Salon',search: 'all'})
                dispatch(setLoader('Games'))
  
              }}>
                <Text style={{
                  fontFamily: 'PlusJakartaSans',
                  color: '#FC444B',
                  fontSize: 14
                }}>See more</Text>
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false} horizontal={true}>
              {
                banner ? (
                  banner.map((doc, i) => (
                    <ActivitiesCart key={i} onPress={() => {
                        navigation.navigate('Category Single', { title: 'Salon',search:doc.brands })
                        dispatch(setLoader('Salon'))
                      }} data={doc} />
                  ))
                ) : (<ActivityIndicator size="large" color="#FA454B" />)
              }
              <View style={{ width: 10 }}></View>
            </ScrollView>
          </View>
    );
};

export default ActivitiesNearYou;