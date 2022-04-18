const initialState ={
    shortBy: "popularity",
    rating:null,
    category:null,
    brand: null,
}

const recentSearch=(state=initialState, action)=>{
    if(action.type =='SHORT'){
        return state={
            shortBy:action.playload,
            rating:state.rating,
            category:state.category,
            brand:state.brand,
        }
    }else if(action.type =='RATING'){
        return state={
            shortBy:state.shortBy,
            rating:action.playload,
            category:state.category,
            brand:state.brand,
        }
    }else if(action.type =='CATEGORY'){
        return state={
            shortBy:state.shortBy,
            rating:state.rating,
            category:action.playload,
            brand:state.brand,
        }
    }else if(action.type =='BRAND'){
        return state={
            shortBy:state.shortBy,
            rating:state.rating,
            category:state.category,
            brand:action.playload,
        }
    }
    return state
}

export default recentSearch