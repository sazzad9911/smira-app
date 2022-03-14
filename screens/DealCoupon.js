import React from 'react';
import { View ,Text,ScrollView, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const DealCoupon = (props) => {
    return (
        <View>
            <AntDesign onPress={()=>props.close(false)} style={styles.icon} name="leftcircle" size={30} color="black" />
            <ScrollView>

            </ScrollView>
        </View>
    );
};

export default DealCoupon;
const styles = StyleSheet.create({
    icon:{
        position: 'absolute',
        top:20,
        left:20,
    }
})