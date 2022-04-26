const initialState ={
    familyCode:false,
    bottomSheet:null,
    loader:false,
    action:true,
    darkMode:false,
    notification:true,
    language:'English (Default)',
}

const pageSettings=(state=initialState, action) => {
    if(action.type=='SET_FAMILY_CODE'){
        return state={familyCode:action.playload,
            bottomSheet:state.bottomSheet,
            loader:state.loader,action:state.action,darkMode:state.darkMode,
            notification:state.notification,language:state.language}
    }else if(action.type=='SET_BOTTOM_SHEET'){
        return state={familyCode:state.familyCode,
            bottomSheet:action.playload,
            loader:state.loader,action:state.action,darkMode:state.darkMode,
            notification:state.notification,language:state.language}
    }else if(action.type =='SET_ANIMATED_LOADER'){
        return state={familyCode:state.familyCode,
            bottomSheet:state.bottomSheet,
            loader:action.playload,action:state.action,darkMode:state.darkMode,
            notification:state.notification,language:state.language}
    }else if(action.type =='SET_ACTION'){
        return state={familyCode:state.familyCode,
            bottomSheet:state.bottomSheet,
            loader:state.loader,action:action.playload,darkMode:state.darkMode,
            notification:state.notification,language:state.language}
    }else if(action.type =='SET_THEME'){
        return state={familyCode:state.familyCode,
            bottomSheet:state.bottomSheet,
            loader:state.loader,action:state.action,darkMode:action.playload,
            notification:state.notification,language:state.language}
    }else if(action.type =='SET_NOTIFICATION'){
        return state={familyCode:state.familyCode,
            bottomSheet:state.bottomSheet,
            loader:state.loader,action:state.action,darkMode:state.darkMode,
            notification:action.playload,language:state.language}
    }else if(action.type =='SET_LANGUAGE'){
        return state={familyCode:state.familyCode,
            bottomSheet:state.bottomSheet,
            loader:state.loader,action:state.action,darkMode:state.darkMode,
            notification:state.notification,language:action.playload}
    }else if(action.type =='SET_PAGE_SETTINGS'){
        return state=action.playload
    }
    return state
}
export default pageSettings