import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import user from './user'
import listitem from './listitem'
import cartitem from './cartitem'
const reducer = combineReducers({
    user,
    listitem,
    cartitem
})

const store = configureStore({
    reducer,
})
export default store