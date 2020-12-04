import {createSlice} from '@reduxjs/toolkit'
import {getUser, updateUser} from '../api'
const initialUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null

const slice = createSlice ({
    name: 'user',
    initialState: initialUser,
    reducers: {
        loginSuccess: (state,action) => {
            state = action.payload
            return state
        },
        logoutSuccess: (state, action) => {
            state =  null
            return state
        },
        updateSuccess: (state, action) => {
            state = action.payload
            return state
        }
    }
})
export default slice.reducer

export const {loginSuccess, logoutSuccess, updateSuccess} = slice.actions
export const login = ( username, password ) => async dispatch => {
    try {
      const res = await getUser(username, password)
      console.log('im res ', res[0])
      if(res[0] != null) {
        if (res[0]._id != null) {
          dispatch(loginSuccess(res[0]))
          localStorage.setItem('user', JSON.stringify(res[0]))
        }
      }
      else {
        alert('Check your email or password!')
      }
    } catch (e) {
      return console.error(e.message);
    }
}
export const logout = () => async dispatch => {
    try {
      return dispatch(logoutSuccess())
    } catch (e) {
      return console.error(e.message);
    }
}
export const updateProfile = (user) => async dispatch => {
  try {
    const res = await updateUser(user)
    dispatch(updateSuccess(res))
  }
  catch (e) {
    return console.error(e.message);
  }
}