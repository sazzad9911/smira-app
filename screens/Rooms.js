import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native'
import bath from '../assets/tub.png';
import React from 'react'

const Rooms = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ padding: 15 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>9 Photos</Text>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <Image source={bath} style={{ height: 200, width: '95%', borderRadius: 10, marginTop: 5, marginBottom: 5 }} />
                    <Image source={bath} style={{ height: 200, width: '95%', borderRadius: 10, marginTop: 5, marginBottom: 5 }} />
                    <Image source={bath} style={{ height: 200, width: '95%', borderRadius: 10, marginTop: 5, marginBottom: 5 }} />
                    <Image source={bath} style={{ height: 200, width: '95%', borderRadius: 10, marginTop: 5, marginBottom: 5 }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Rooms

const styles = StyleSheet.create({})