import React from 'react';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Category } from '../components/Bottom';
import HotelBooking from '../components/HotelBooking';
import ShortBy from '../components/ShortBy';
import Filter from '../components/Filter';
import { backgroundColor, subTextColor, textColor } from './../assets/color';
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { setBottomSheet } from '../action'

const BottomDrawer = (props) => {
    const bottomSheetRef = React.useRef();
    const bottomSheet = useSelector(state => state.pageSettings.bottomSheet)
    const pageSettings = useSelector(state => state.pageSettings)
    const navigation = props.navigation
    const dispatch = useDispatch()
    const handleSheetChanges = React.useCallback((index) => {
        if (index === -1 || index == false) {
            dispatch(setBottomSheet(null))
        }
    }, []);
    return (
        <BottomSheet backgroundStyle={{ backgroundColor: textColor(!pageSettings.darkMode) }}
            handleIndicatorStyle={{ backgroundColor: subTextColor(pageSettings.darkMode) }}
            ref={bottomSheetRef}
            index={bottomSheet ? 1 : -1}
            snapPoints={props.snapPoints}
            onChange={handleSheetChanges}
            enableHandlePanningGesture={true}
            enablePanDownToClose={true}
        >
            <BottomSheetScrollView style={{
                backgroundColor: textColor(!pageSettings.darkMode),
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                
            }}>
                {
                    bottomSheet == 'category' ? (
                        <Category navigation={navigation}
                            close={() => {handleSheetChanges }} />
                    ) : bottomSheet == 'calendar' ? (
                        <HotelBooking close={() => {handleSheetChanges }} navigation={navigation} />
                    ) : bottomSheet == 'filter' ? (
                        <Filter close={() => {handleSheetChanges }} />
                    ) : bottomSheet == 'shortBy' ? (
                        <ShortBy />
                    ) : (
                        <Text style={{ textAlign: 'center' }}>Nothing</Text>
                    )
                }
                <View style={{ height: 10 }}></View>
            </BottomSheetScrollView>
        </BottomSheet>
    );
};

export default BottomDrawer;