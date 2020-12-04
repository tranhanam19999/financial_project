import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { getUserById } from '../../api'
import { login } from '../../store/user'

const VerifyEmail = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        getUserByParams()
    },[])
    const getUserByParams = async () => {
        let id = props.match.params.id
        let user = await getUserById({id})
        console.log('im user ', user)
        if(user) {
            await dispatch(login(user.local.email,user.local.password))
            window.location.href = "/Profile"
        }
    }
    return (
        <></>
    )
}
export default VerifyEmail