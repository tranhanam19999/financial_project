import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import user from './user'
import listitem from './listitem'
const reducer = combineReducers({
    user,
    listitem
})

const store = configureStore({
    reducer,
})
export default store