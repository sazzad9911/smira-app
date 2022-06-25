import {combineReducers, createStore} from 'redux'
import brands from './Reducers/brands';
import deals from './Reducers/deals';
import hotels from './Reducers/hotels';
import recentSearch from './Reducers/recentSearch';
import loader from './Reducers/loader';
import user from './Reducers/user';
import pageSettings from './Reducers/pageSettings';
import membership from './Reducers/membership';
import notification from './Reducers/notification';

const combine=combineReducers({
    brands: brands,
    deals: deals,
    hotels: hotels,
    recentSearch: recentSearch,
    loader: loader,
    user: user,
    pageSettings: pageSettings,
    membership: membership,
    notification:notification
})

const store=createStore(combine);

export default store;