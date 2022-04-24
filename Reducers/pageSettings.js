const initialState ={
    familyCode:false,
    bottomSheet:null,
    loader:false,
    action:true,
}

const pageSettings=(state=initialState, action) => {
    if(action.type=='SET_FAMILY_CODE'){
        return state={familyCode:action.playload,
            bottomSheet:state.bottomSheet,loader:state.loader,action:state.action}
    }else if(action.type=='SET_BOTTOM_SHEET'){
        return state={familyCode:state.familyCode,
            bottomSheet:action.playload,loader:state.loader,action:state.action}
    }else if(action.type =='SET_ANIMATED_LOADER'){
        return state={familyCode:state.familyCode,
            bottomSheet:state.bottomSheet,loader:action.playload,action:state.action}
    }else if(action.type =='SET_ACTION'){
        return state={familyCode:state.familyCode,
            bottomSheet:state.bottomSheet,loader:state.loader,action:action.playload}
    }
    return state
}
export default pageSettings