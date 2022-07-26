import React from 'react';
import {View,Text,ScrollView,ActivityIndicator} from 'react-native';
import {HotelMemberCart} from '../screens/Hotel'
import {postData, url,setHotels} from '../action'
import { useSelector,useDispatch } from 'react-redux';
import { textColor } from './../assets/color';

const FeaturedHotel = ({ navigation}) => {
    const [Hotel,setHotel]=React.useState(null)
    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.pageSettings.darkMode)


    React.useEffect(() => {
        postData(url + "/getData", {
          tableName: 'hotels',
          orderColumn: 'popularity',
          limit:10
        }).then(data => {
          if (Array.isArray(data)) {
            dispatch(setHotels(data));
            return setHotel(data)
          }
          console.log(data.message)
        })
      }, [])
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
              }}>Featured Hotels</Text>
              {
                /*
               <TouchableOpacity style={style.outline} onPress={() => {
                navigation.navigate('Category Single', { title: 'Popular Hotels' })
                dispatch(setLoader('SearchHotel'))
    
              }}>
                <AntDesign name="right" size={20} color="black" />
              </TouchableOpacity>
                */
              }
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false} horizontal={true}>
              <View style={{ width: 10, }}></View>
              {
                Hotel ? (
                  Hotel.map(d => (
                    <HotelMemberCart key={d.id} data={d} navigation={navigation} />
                  ))
                ) : (
                  <ActivityIndicator size="large" color="#FA454B" />
                )
              }
            </ScrollView>
          </View>
    );
};

export default FeaturedHotel;