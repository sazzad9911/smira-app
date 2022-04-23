const initialState ={
    familyCode:false,
    bottomSheet:null,
}

const pageSettings=(state=initialState, action) => {
    if(action.type=='SET_FAMILY_CODE'){
        return state={familyCode:action.playload,
            bottomSheet:state.bottomSheet}
    }else if(action.type=='SET_BOTTOM_SHEET'){
        return state={familyCode:state.familyCode,
            bottomSheet:action.playload}
    }
    return state
}
export default pageSettings