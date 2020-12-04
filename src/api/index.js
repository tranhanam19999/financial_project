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
export const getUsersTran = async(user) => {
    let res = await fetch('http://localhost:4000/tran/getUsersTran', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    let value = await res.json()
    return value
}
export const forgotPassword = async (email) => {
    let res = await fetch('http://localhost:4000/auth/forgotPassword', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(email)
    })
    let value = await res.json()
    return value
}
export const verifyEmail = async (email,password) => {
    let temp = {
        email,
        password
    }
    let res = await fetch('http://localhost:4000/auth/verifyEmail', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(temp)
    })
    let value = await res.json()
    return value
}
export const getUserById = async (id) => {
    console.log('im id ', id)
    let res = await fetch('http://localhost:4000/user/getUserById', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    })

    let value = await res.json()
    return value
}
export default {getUser,
                getUserById,
                updateUser,
                getProd,
                getUsersTran,
                forgotPassword,
                verifyEmail}