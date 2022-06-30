import React from 'react';
import {View,Text,ScrollView,ActivityIndicator} from 'react-native'
import ImageBanner from './../components/ImageBanner';
import { textColor } from './../assets/color';
import { useSelector,useDispatch } from 'react-redux';
import {postData, url,setLoader} from '../action'
import { useRoute } from '@react-navigation/native';

const PopularOnlineRestaurants = ({navigation}) => {
    const [PopularRestaurant,setPopularRestaurant]= React.useState(null)
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    const route = useRoute();
    const loader = useSelector(state => state.loader)
    const dispatch = useDispatch()
    React.useEffect(() => {
     postData(url + '/getData', {
          tableName: 'restaurant',
          orderColumn:'date'
        }).then(data => {
          if (Array.isArray(data)) {
           return setPopularRestaurant(data)
          }else{
            console.log(data)
            
          }
        })
      },[loader])
    return (
        <View style={{
            width: '100%',
            paddingBottom: 10,
            backgroundColor: 'white',
            marginTop: 10
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
              }}>Doorstep Deals</Text>
  
            </View>
            <ScrollView style={{ paddingBottom: 10 }} showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false} horizontal={true}>
              {
                PopularRestaurant ? (
                  PopularRestaurant.map((doc, i) => (
                    <ImageBanner key={i} onPress={() => {
                        navigation.navigate('Category Single', { title: 'Salon',search:doc.brands })
                        dispatch(setLoader('Salon'))
                      }} data={doc} />
                  ))
                ) : (<ActivityIndicator size="large" color="#FA454B" />)
              }
              <View style={{ width: 10, }}></View>
            </ScrollView>
          </View>
    );
};

export default PopularOnlineRestaurants;