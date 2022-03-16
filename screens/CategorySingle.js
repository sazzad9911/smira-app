import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Cards from '../components/Cards'
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import picture from '../assets/tub.png'

const CategorySingle = (props) => {
    const title = props.route.params.title;

    return (
        <View style={styles.body}>
            <View style={styles.content}>
                <Ionicons name="md-checkmark-done-circle-outline" size={20} color='rgba(100, 182, 87, 1)' />
                <Text style={{
                    fontSize: 14,
                    color: '#000000',
                    fontWeight: '500',
                }}>
                    Free for Members
                </Text>
            </View>
            <ScrollView>
                <View >
                    <Cards navigation={props.navigation} img={picture} title="On the go"
                        address="Alibaug, Maharashtra" />
                    <Cards navigation={props.navigation} img={picture} title="On the go"
                        address="Alibaug, Maharashtra" />
                </View>
            </ScrollView>
        </View>
    );
};

export default CategorySingle;

const styles = StyleSheet.create({
    body: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,

    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
        marginTop: 50,
        marginBottom: 30
    }
})