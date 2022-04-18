import {combineReducers, createStore} from 'redux'
import brands from './Reducers/brands';
import deals from './Reducers/deals';
import hotels from './Reducers/hotels';
import recentSearch from './Reducers/recentSearch';
import loader from './Reducers/loader';
import user from './Reducers/user';

const combine=combineReducers({
    brands: brands,
    deals: deals,
    hotels: hotels,
    recentSearch: recentSearch,
    loader: loader,
    user: user,
})

const store=createStore(combine);

export default store;