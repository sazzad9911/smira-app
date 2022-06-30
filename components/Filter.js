import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { setRating, setCategory, setBrand } from '../action';
import { useDispatch, useSelector } from 'react-redux';

const window = Dimensions.get('window')

const Filter = (props) => {
    const dispatch = useDispatch()
    const route = useSelector(state => state.loader);
    const brands = useSelector(state => state.brands);
    const [newBrands,setNewBrands]= React.useState([])

    const recentSearch = useSelector(state => state.recentSearch)
    const togglePush=(data)=>{
        if(!Array.isArray(recentSearch.brand)){
            let arr=[]
            arr.push(data)
            dispatch(setBrand(arr))
            return
        }
        let arr=recentSearch.brand.filter(brands=>brands==data)
        if(arr.length>0){
            const newArr=recentSearch.brand.filter(brands=>brands!=data)
            dispatch(setBrand(newArr))
        }else{
            let arr=recentSearch.brand
            arr.push(data)
            dispatch(setBrand(arr))
        }
        
    }
    
    return (
        <View style={{
            width: window.width - 30,
            margin: 15,
            justifyContent: 'center',
        }}>

            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                marginBottom: 30, alignItems: 'center'
            }}>
                <Text style={styles.text}>Filter</Text>
                <TouchableOpacity onPress={() => {
                    dispatch(setRating(null))
                    dispatch(setCategory(null))
                    dispatch(setBrand(null))
                }}>
                    <Text style={{ color: 'red', fontFamily: 'PlusJakartaSans', }}>Clear All</Text>
                </TouchableOpacity>

            </View>
            {
                route == 'Hotels' ? (
                    <>
                        <Text style={styles.headline}>Ratings</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
                            <Ratings color='#64B657' title='5-4' />
                            <Ratings color='#B2DBAC' title='4-3' />
                            <Ratings color='#FBDD73' title='3-2' />
                            <Ratings color='#E47768' title='2-1' />
                        </View>
                        <Text style={styles.headline}>Categories</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Category title='Deluxe' />
                            <Category title='Villas' />
                            <Category title='Farm House' />
                        </View>
                    </>
                ) : route == 'SearchDeal' ? (
                    <>
                        <Text style={styles.headline}>Brands</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {
                                brands ? (
                                    brands.map((b, i) => (
                                        <Brands press={(v)=>togglePush(v)} key={i} title={b.name} />
                                    ))
                                ) : (
                                    <View></View>
                                )
                            }
                        </View>
                    </>
                ) :  (
                    <>
                        <Text style={styles.headline}>Brands</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {
                                brands ? (
                                    brands.map((b, i) => (
                                        <Brands press={(v)=>togglePush(v)} key={i} title={b.name} />
                                    ))
                                ) : (
                                    <View></View>
                                )
                            }
                        </View>
                        {/* <Text style={styles.headline}>Distance</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Category title='0-5km'/>
                            <Category title='5-10km'/>
                            <Category title='10-15km'/>
                            <Category title='15+km'/>
                        </View> */}
                    </>
                )
            }
            <TouchableOpacity onPress={() => {
                props.close(false)
            }} style={{
                marginTop: route == 'SearchHotel' ? '10%' : '20%',
                backgroundColor: '#FC444B',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                height: 55
            }}>
                <Text style={{
                    color: '#ffff', margin: 10,
                    fontFamily: 'PlusJakartaSans', fontSize: 16
                }}>APPLY</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Filter;
const Ratings = (props) => {
    const ratings = useSelector(state => state.recentSearch.rating)
    const dispatch = useDispatch()

    return (
        <TouchableOpacity onPress={() => {
            dispatch(setRating(props.title[0]))
        }} style={{
            borderWidth: 1,
            borderRadius: 20,
            width: 100,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            margin: 5,
            backgroundColor: ratings == props.title[0] ? '#64B657' : '#ffff',
            borderColor: '#D8D8D8'

        }}>
            <AntDesign name="star" size={18} color={ratings == props.title[0] ? '#ffff' : props.color} />
            <Text style={{ marginLeft: 5, fontFamily: 'PlusJakartaSans', color: ratings == props.title[0] ? '#ffff' : '#808080', }}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const Category = (props) => {
    const category = useSelector(state => state.recentSearch.category)
    const dispatch = useDispatch()
    const [selectItem, setSelectItem]= React.useState(false)
    React.useEffect(()=>{
        if(!category) {
            setSelectItem(false)
        }

    },[category])

    return (
        <TouchableOpacity onPress={() => {
            dispatch(setCategory(props.title));
            setSelectItem(!selectItem)
        }} style={{
            borderWidth: 1,
            borderRadius: 25,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            margin: 5,
            color: '#808080',
            borderColor: selectItem  ? '#FC444B' : '#D8D8D8',
            padding: 10,
            minWidth: 100
        }}>
            <Text style={{
                fontFamily: 'PlusJakartaSans',
                color: selectItem  ? '#FC444B' : '#808080',
            }}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const Brands = (props) => {
    const brand = useSelector(state => state.recentSearch.brand)
    const dispatch = useDispatch()
    const [selectedItem, setselectedItem]= React.useState(false)
    const recentSearch = useSelector(state => state.recentSearch)
    const togglePush=(data)=>{
        if(!Array.isArray(recentSearch.brand)){
            let arr=[]
            arr.push(data)
            dispatch(setBrand(arr))
            return
        }
        let arr=recentSearch.brand.filter(brands=>brands==data)
        if(arr.length>0){
            const newArr=recentSearch.brand.filter(brands=>brands!=data)
            dispatch(setBrand(newArr))
        }else{
            let arr=recentSearch.brand
            arr.push(data)
            dispatch(setBrand(arr))
        }
        
    }

    React.useEffect(()=>{
        if(!brand) {
            setselectedItem(false)
        }
    },[brand])

    return (
        <TouchableOpacity onPress={() => {
           // dispatch(setBrand(props.title));
           togglePush(props.title)
            setselectedItem(!selectedItem)
        }} style={{
            borderWidth: 1,
            borderRadius: 20,
            minWidth: 100,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            margin: 5,
            backgroundColor: brand && brand.includes(props.title) ? '#64B657' : '#ffff',
            color: '#808080',
            borderColor: '#D8D8D8',
            padding: 10
        }}>
            <Text style={{ marginLeft: 5, color: brand && brand.includes(props.title) ? '#ffff' : '#808080', }}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        margin: 5,
        fontFamily: 'PlusJakartaSansBold'
    },
    headline: {
        fontSize: 18,
        margin: 5,
        fontFamily: 'PlusJakartaSans',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FC444B',
        width: window.width - 30,
        height: 50,
        borderRadius: 30,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffff',
        marginTop: '10%'
    }
})