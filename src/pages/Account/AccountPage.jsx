import React, {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {login} from '../../store/user'
import { Redirect } from 'react-router-dom'
const AccountPage = () => {
    const [usn, setUSN] = useState('')
    const [pwd, setPWD] = useState('')
    const dispatchInfo = e => {
        e.preventDefault()
        dispatch(login(usn , pwd))
    }
    const dispatch = useDispatch()
    const {user} = useSelector(state => {return state})
    if (user) {
        console.log(user)
        return (
            <>
                <Redirect to="/"/>
            </>
        )
    }
    else return (
        <section className="my_account_area pt--80 pb--55 bg--white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="my__account__wrapper">
                            <h3 className="account__title">Login</h3>
                            {/* <form onSubmit={(values => dispatch(login(values)))}> */}
                            <form onSubmit={(e) => dispatchInfo(e)}>
                                <div className="account__form">
                                    <div className="input__box">
                                        <label>Username or email address <span>*</span></label>
                                        <input type="text" name="username" onChange={(e) => setUSN(e.target.value)}/>
                                    </div>
                                    <div className="input__box">
                                        <label>Password<span>*</span></label>
                                        <input type="password" name="password" onChange={(e) => setPWD(e.target.value)}/>
                                    </div>
                                    <div className="form__btn">
                                        <button type="submit">Login</button>
                                        <label className="label-for-checkbox">
                                            <input id="rememberme" className="input-checkbox" name="rememberme" defaultValue="forever" type="checkbox" />
                                            <span>Remember me</span>
                                        </label>
                                    </div>
                                    <a className="forget_pass" href="#">Lost your password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                    <div className="my__account__wrapper">
                        <h3 className="account__title">Register</h3>
                        <form action="#">
                        <div className="account__form">
                            <div className="input__box">
                            <label>Email address <span>*</span></label>
                            <input type="email" />
                            </div>
                            <div className="input__box">
                            <label>Password<span>*</span></label>
                            <input type="password" />
                            </div>
                            <div className="form__btn">
                            <button type="button">Register</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default AccountPage