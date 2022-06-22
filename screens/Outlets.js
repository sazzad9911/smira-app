import React from 'react';
import {View,ScrollView,StyleSheet,Image,Text,Linking,TouchableOpacity} from 'react-native';
import {postData, url} from '../action'

const Outlets = (props) => {
    const id=props.route.params.id;
    const [Outlets, setOutlets]= React.useState()
    React.useEffect(() => {
        postData(url + '/getData',{
            tableName: 'outlets',
            condition: `brand_id=${id}`
        }).then((response) => {
            if(Array.isArray(response)){
              return  setOutlets(response)
            }
            console.log(response.message)
        })
    },[])
    return (
        <ScrollView>
            {
                Outlets?(
                    Outlets.map((doc, i)=>(
                        <View key={i} style={styles.container}>
                        <Text style={styles.headLine}>Outlet {i+1}</Text>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL(doc.location)
                        }}>
                        <Image style={styles.image} source={require('../assets/Final.png')}/>
                        </TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                        <Text style={styles.headerText}>Phone: </Text>
                            <Text style={styles.text}>{doc.phone}</Text>
                        </View>
                        <View style={{
                            flexDirection:'row',
                            width: '100%',
                        }}>
                            <Text style={styles.headerText}>Address: </Text>
                            <Text style={styles.text}>{doc.address}</Text>
                        </View>
                        </View>
                    ))
                ):(<></>)
            }
        </ScrollView>
    );
};

export default Outlets;

const styles = StyleSheet.create({
    container: {
        margin:20
    },
    image: {
        width:'100%',
        borderRadius: 10,
        height:180
    },
    headLine: {
        fontFamily:'PlusJakartaSansBold',
        fontSize:20,
        marginBottom:20
    },
    headerText:{
        fontFamily:'PlusJakartaSansBold',
        color:'#808080',
        marginTop:2,
        marginBottom:2,
        
    },
    text:{
        fontFamily:'PlusJakartaSans',
        color:'#808080',
        marginTop:4,
        marginBottom:4,
        marginRight: 20,
    }
})