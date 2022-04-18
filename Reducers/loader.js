const initialState='SearchHotel';

const loader =(state=initialState, action) => {
    if(action.type =='SET_LOADER') {
        return state=action.playload
    }
    return state
}
export default loader