import {createSlice} from '@reduxjs/toolkit'
import { getProd } from '../api'

const slice = createSlice({
    name: 'listitem',
    initialState: [],
    reducers: {
        getProps: (state,action) => {
            state = action.payload
            return state
        }
    }
})
export default slice.reducer
const {getProps} = slice.actions
export const gett = () => async dispatch => {
    try {
        const res = await getProd()
        dispatch(getProps(res))
    }
    catch (e) {
        console.log('Error ', e.message)
    }
}
