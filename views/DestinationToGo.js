import React from 'react';
import {View,Text,ScrollView,ActivityIndicator} from 'react-native';
import DestinationCart from './../components/DestinationCart';
import { textColor } from './../assets/color';
import { useSelector } from 'react-redux';
import {postData, url} from '../action'


const DestinationToGo = ({ navigation}) => {
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    const [Data,setData]= React.useState(null)
    React.useEffect(() => {
        postData(url + '/getData', {
          tableName: 'addresses',
        }).then(data => {
          if (Array.isArray(data)) {
            return setData(data)
          }
          console.log(data.message)
        })
      }, [])
    return (
        <View style={{
            width: '100%',
            marginTop: 10, paddingBottom: 10,
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
              }}>Destinations To Go</Text>
  
            </View>
            <View style={{ height: 10 }}></View>
            <ScrollView showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false} horizontal={true}>
              {
                Data ? (
                    Data.map((doc, i) => (
                    <DestinationCart navigation={navigation} data={doc} key={i} />
                  ))
                ) : (
                  <ActivityIndicator size="large" color="#FA454B" />
                )
              }
              <View style={{ width: 10, }}></View>
            </ScrollView>
            <View style={{ height: 10 }} />
          </View>
    );
};

export default DestinationToGo;