// import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// import React, { useState } from 'react'
// import { ScrollView } from 'react-native-gesture-handler';
// import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// const { width, height } = Dimensions.get('screen');


// const ActionSheet = () => {
//   const [alignment, setAlignment] = useState(new Animated.Value(0));

//   const bringUpActionSheet = () => {
//     Animated.timing(alignment, {
//       toValue: 0,
//       duration: 300,
//       useNativeDriver: false
//     }).start();
//   }

//   const hideTheActionSheet = () => {
//     Animated.timing(alignment, {
//       toValue: 1,
//       duration: 300,
//       useNativeDriver: false
//     }).start();
//   }

//   const actionSheetInterpolate = alignment.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-(height / 2.4) + 50, 0]
//   })

//   const actionSheetStyle = {
//     bottom: actionSheetInterpolate
//   };

//   const gestureHandler = (e) => {
//     if (e.nativeEvent.contentOffset.y < 0) bringUpActionSheet();
//     else if (e.nativeEvent.contentOffset.y > 0) hideTheActionSheet();
//   }
//   // -----------


//   const [Ratings, setRatinga] = useState([
//     {
//       text: '5-4',
//       color: '#64B557'
//     },
//     {
//       text: '4-3',
//       color: '#E476FF'
//     },
//     {
//       text: '3-2',
//       color: '#FBDD72'
//     },
//     {
//       text: '2-1',
//       color: '#E47668'
//     },
//   ]);
//   const [Categories, setCategories] = useState([
//     {
//       text: 'Delux',
//     },
//     {
//       text: 'Villas',
//     },
//     {
//       text: 'Form House',
//     },
//   ]);
//   const [activeRatingIndex, setActiveRatingIndex] = useState(1);
//   const [activeCategoryIndex, setActiveCategoryIndex] = useState(1);

//   // Which Screen
//   const [activeSheet, setActiveSheet] = useState('Filter')

//   const [sortBy, serSortBy] = useState([
//     'Popularity', 'Rating', 'More Amenities'
//   ])
//   const [sortByIndex, setSortByIndex] = useState(1);
//   return (
//     <Animated.View style={[styles.bottomSheetContainer, actionSheetStyle]}>
//       <View style={{ height: 6, marginBottom: 20, marginTop: 20 }}>
//         <ScrollView onScroll={(e) => gestureHandler(e)} scrollEventThrottle={60} style={[styles.grabber]}></ScrollView>
//       </View>
//       {
//         activeSheet === 'Filter' &&
//         <View>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
//             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Filters</Text>
//             <View>
//               <TouchableOpacity>
//                 <Text style={{ fontSize: 15, color: '#FB444B' }}>Clear all</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View>
//             <View>
//               <Text style={{ fontSize: 17, fontWeight: '400', marginTop: 5, marginBottom: 15 }}>Ratings</Text>
//             </View>
//             <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//               {
//                 Ratings.map((rating, index) => {
//                   return (
//                     <TouchableOpacity
//                       onPress={() => setActiveRatingIndex(index)}
//                       key={rating.text} style={[{
//                         flexDirection: 'row', alignItems: 'center', paddingTop: 10,
//                         paddingBottom: 10, paddingLeft: 10, flexWrap: 'wrap',
//                         justifyContent: 'space-evenly', borderRadius: 30, margin: 5, paddingRight: 15
//                       },
//                       rating.text === Ratings[activeRatingIndex].text ? { backgroundColor: '#64B657', borderColor: '#64B657', borderWidth: 1 } : { backgroundColor: 'white', borderColor: 'rgb(130,130,130)', borderWidth: 1 }
//                       ]}>
//                       <MaterialCommunityIcons size={20} style={[, rating.text === Ratings[activeRatingIndex].text ? { color: 'white' } : { color: rating.color }]} name="star" />
//                       <Text style={[{ marginLeft: 10, },
//                         rating.text === Ratings[activeRatingIndex].text ? { color: 'white' } : { color: 'gray' }]
//                       }>&nbsp;{rating.text}</Text>
//                     </TouchableOpacity>
//                   );
//                 })
//               }
//             </View>
//           </View>
//           <View>
//             <Text style={{ fontSize: 17, fontWeight: '400', marginTop: 15, marginBottom: 15 }}>Categories</Text>
//             <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//               {
//                 Categories.map((category, index) => {
//                   return (
//                     <TouchableOpacity key={index}
//                       onPress={() => setActiveCategoryIndex(index)}
//                       style={[{
//                         paddingLeft: 20, paddingRight: 20, paddingBottom: 10, paddingTop: 10,
//                         borderRadius: 20, borderWidth: 1, borderColor: 'rgb(200,200,200)', margin: 5
//                       },
//                       category.text === Categories[activeCategoryIndex].text ? {
//                         borderColor: 'red'
//                       } : null
//                       ]}>
//                       <Text style={[category.text === Categories[activeCategoryIndex].text ? { color: 'red' } : { color: 'gray' }]}>{category.text}</Text>
//                     </TouchableOpacity>
//                   );
//                 })
//               }
//             </View>
//           </View>
//           <TouchableOpacity
//             onPress={() => setActiveSheet('SortResult')}
//             style={{
//               backgroundColor: '#FB444B', justifyContent: 'center', alignItems: 'center'
//               , paddingBottom: 15, paddingTop: 15, paddingLeft: 20, paddingRight: 20,
//               borderRadius: 25, marginTop: 35
//             }}>
//             <Text style={{ color: 'white', fontSize: 17 }}>APPLY</Text>
//           </TouchableOpacity>
//         </View>
//       }


//       {
//         activeSheet === 'SortResult' &&
//         <View style={{ justifyContent: 'flex-start', width: '100%',padding:10 }}>
//           <Text style={{ textAlign: 'left', width: '100%', margin: 10, fontSize: 18, fontWeight: '600' }}>Sort By</Text>
//           <View>
//             {
//               sortBy.map((sort, index) => {
//                 return (
//                   <TouchableOpacity
//                   key={index}
//                     onPress={() => setSortByIndex(index)}
//                     style={{ flexDirection: 'row', margin: 10,alignItems:'center',justifyContent:'space-between' }}>
//                     <Text style={[{ fontSize: 15, }, sort === sortBy[sortByIndex] ? { color: 'red' } : { color: 'gray' }]}>{sort}</Text>
//                     <View style={sort === sortBy[sortByIndex]?{height:10,width:10,borderRadius:10,backgroundColor:'red'}:{}}></View>
//                   </TouchableOpacity>
//                 );
//               })
//             }
//           </View>
//         </View>
//       }
//     </Animated.View>
//   )
// }

// export default ActionSheet

// const styles = StyleSheet.create({
//   bottomSheetContainer: {
//     padding: 5,
//     position: 'absolute',
//     backgroundColor: 'rgb(255,255,255)',
//     width: width,
//     // height: height / 2.4,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     alignItems: 'center',
//     shadowOffset: {
//       height: 0,
//       width: 0,

//     },
//     elevation: 10,
//     shadowColor: 'rgb(140,140,140)',
//     shadowRadius: 10,
//     shadowOpacity: 0.8,
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25
//   },
//   grabber: {
//     height: '100%',
//     borderWidth: 1,
//     width: 55,
//     borderRadius: 20,
//     backgroundColor: 'rgb(150,150,150)',
//     borderColor: 'rgb(150,150,150)',
//   },
//   activeRating: {

//   },
//   activeCategory: {

//   }
// })
