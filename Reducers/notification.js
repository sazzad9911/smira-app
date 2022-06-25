const initialState=false;

const notification =(state=initialState, action) => {
    if(action.type =='SET_NOTIFICATIONS') {
        return state=action.playload
    }
    return state
}
export default notification