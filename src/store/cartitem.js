import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'cartitem',
    initialState: [],
    reducers: {
        importItem: (state,action) => {
            state.push(action.payload)
            // let temp = state.some(val => {
            //     return val == action.payload
            // })
            // if(!temp) 
            //     state.push(action.payload)
            // else
            //     alert('Duplicate Book!')
            return state
        },
        discardItem: (state,action) => {
            state = action.payload
            return state
        },
        discardAllItem: (state,action) => {
            state = []
            return state
        }
    }
})
export default slice.reducer
const {importItem, discardItem, discardAllItem} = slice.actions
export const importToCart = (item) => async dispatch => {
    try {
        dispatch(importItem(item))
    }
    catch (e) {
        return console.log('Error ', e.message)
    }
}
export const discardFromCart = (item,cartitem) => async dispatch => {
    try {
        let temp = cartitem.filter(val => {
            return val._id != item._id
        })
        //console.log(temp)
        dispatch(discardItem(temp))
    } 
    catch (e) {
        return console.log('Error ', e.message)
    }
}
export const discardAll = () => async dispatch => {
    try {
        dispatch(discardAllItem())
    }
    catch (e) {
        console.log('Error ', e.message)
    }
}