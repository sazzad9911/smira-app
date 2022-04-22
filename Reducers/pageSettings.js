const initialState ={
    familyCode:false,
}

const pageSettings=(state=initialState, action) => {
    if(action.type=='SET_FAMILY_CODE'){
        return state={familyCode:action.playload}
    }
    return state
}
export default pageSettings