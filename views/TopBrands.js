import React from 'react';
import {View,Text,TouchableOpacity,ActivityIndicator,ScrollView} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Brands from './../components/Brands';
import { postData, url,setBrands} from '../action'
import {useDispatch} from 'react-redux'
import { AntDesign } from '@expo/vector-icons';

const TopBrands = ({ navigation}) => {
    const dispatch = useDispatch()
    const [Brand, setBrand]= React.useState(null)

    React.useEffect(() => {
        postData(url + "/getData", {
          tableName: "top_brands",
        }).then(data => {
          if (Array.isArray(data)) {
            setBrand(data);
          }
          console.log(data.message)
        })
      }, [])
    return (
        <LinearGradient style={{ width: '100%', marginTop: 15, flexDirection: 'column' }}
          colors={['#E00006', '#FB8B97']}
          start={[0, 1]} end={[1, 0]}
        >
          <View style={{
            flex: 1, justifyContent: 'center',
            paddingLeft: 20, paddingTop: 20, paddingBottom: 8
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: 23,
            }}>
              <View>
                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'PlusJakartaSansBold' }}>Save on Top Brands</Text>
                <Text style={{
                  color: 'white', marginBottom: 4,
                  fontFamily: 'PlusJakartaSans', fontSize: 12
                }}>Save big on most popular brands with us</Text>
              </View>

              <TouchableOpacity style={{
                 borderRadius: 15,
                 height: 28, width: 28,
                 justifyContent: 'center',
                 alignItems: 'center',
                 backgroundColor: '#D8D8D8'
              }} onPress={() => {
                navigation.navigate('OurBrand')
              }}>
                <AntDesign name="right" size={20} color="black" />
              </TouchableOpacity>

            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} style={{
              flex: 3,
              marginBottom: 10, marginTop: 5
            }} horizontal={true}>
            <View style={{ width: 4 }}></View>
            {
              Brand ? (
                Brand.map(d => (
                  <View key={d.id} style={{
                    marginLeft:-6
                  }}>
                  <Brands  data={d} img={d.image} />
                  </View>
                ))
              ) : (
                <ActivityIndicator size="large" color="#FA454B" />
              )
            }
          </ScrollView>
          <View style={{ height: 0 }}></View>
        </LinearGradient>
    );
};

export default TopBrands;