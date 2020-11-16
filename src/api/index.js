export const getUser = (username, password) => {
    let user = {
        username, password
    }
    return fetch('http://localhost:4000/user/check', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        return res.json().then(value => {
            return value
        })
    })
}
export const updateUser = (user) => {
    console.log('im at update', user)
    return fetch('http://localhost:4000/user/updateUser', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        return res.json().then(value => {
            return value
        })
    })
}
export const getProd = async () => {
    let res = await fetch('http://localhost:4000/prod/getAll', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let value = await res.json()
    return value
    // console.log('data ',data)
    // return data 
}
export const sendTrans = async (items, user) => {
    let temp = {
        user,items
    }
    let res = await fetch('http://localhost:4000/tran/createTrans', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(temp)
    })
}
export default {getUser,updateUser,getProd}