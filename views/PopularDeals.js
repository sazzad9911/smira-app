import React from 'react';
import {View,ScrollView,ActivityIndicator,Text} from 'react-native';
import NewDealCart from './../components/NewDealCart';
import {postData, url,setLoader} from '../action'
import {useDispatch,useSelector} from 'react-redux'
import { textColor } from './../assets/color';

const PopularDeals = ({ navigation}) => {
    const [Poster,setPoster]= React.useState(null)
    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.pageSettings.darkMode)

    React.useEffect(() => {
        postData(url +'/getData',{
          tableName: 'poster',
        }).then(data => {
          if(Array.isArray(data)){
            return setPoster(data)
          }
          console.log(data.message)
        })
      },[])
    return (
      <View style={{ backgroundColor: 'white', paddingBottom: 20 }}>
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
              paddingLeft: 18,
              color: textColor(darkMode)
            }}>Popular Deals</Text>

          </View>
          <ScrollView showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} horizontal={true} >
            <View style={{ width: 10 }}></View>
            {
              Poster ? (
                Poster.map((doc, i) => (
                  <NewDealCart key={i} onPress={() => {
                    navigation.navigate('Category Single', { title: 'Salon',search:doc.type })
                    dispatch(setLoader(doc.type))
                  }} data={doc} />
                ))
              ) : (<ActivityIndicator size="large" color="#FA454B" />)
            }
            <View style={{ width: 10 }}></View>
          </ScrollView>
        </View>
        
    );
};

export default PopularDeals;