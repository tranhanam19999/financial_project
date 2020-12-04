import React, {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {login} from '../../store/user'
import { Link, Redirect } from 'react-router-dom'
import { loadScripts } from '../../_utils'
import Header from '../../components/Layout/Header/'
import {verifyEmail} from '../../api/'
const AccountPage = () => {
    const [usn, setUSN] = useState('')
    const [pwd, setPWD] = useState('')
    const [newEmail,setNewEmail] = useState('')
    const [newPWD,setNewPWD] = useState('')   
    const [newPWD2,setNewPWD2] = useState('')
    useEffect(() => {
        loadScripts()
    },[])
    const dispatchInfo = e => {
        e.preventDefault()
        dispatch(login(usn , pwd))
    }
    const registerEmail = async () => {
        if(newEmail == '') {
            alert('Enter your email!')
        }
        else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(newEmail) == false) {
            alert('Please provide a valid email!')
        }
        else if(newPWD != newPWD2) {
            alert('Your password doesnt match!')
        }
        else {
            const res = await verifyEmail(newEmail,newPWD)
            console.log(res)
            if(res == 'failed') {
                alert('Someone already using your email')
            }    
            else {
                alert('We have send you an email!')
                window.location.href = "/"
            }
                
        }
    }
    const dispatch = useDispatch()
    const {user} = useSelector(state => {return state})
    if (user) {
        return (
            <>
                <Redirect to="/"/>
            </>
        )
    }
    else return (
        <>
            <Header/>
            <div className="ht__bradcaump__area bg-image--6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">Account</h2>
                                <nav className="bradcaump-content">
                                    <a className="breadcrumb_item" href="index.html">
                                        Home
                                    </a>
                                    <span className="brd-separetor">/</span>
                                    <span className="breadcrumb_item active">Account</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                        </div>
                                        <Link className="forget_pass" to="/ForgotPassword">Lost your password?</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="my__account__wrapper">
                                <h3 className="account__title">Register</h3>
                                <div className="account__form">
                                    <div className="input__box">
                                        <label>Email address <span>*</span></label>
                                        <input type="email" onChange={(e) => setNewEmail(e.target.value)}  />
                                    </div>
                                    <div className="input__box">
                                        <label>Password<span>*</span></label>
                                        <input onChange={(e) => setNewPWD(e.target.value)} type="password" />
                                    </div>
                                    <div className="input__box">
                                        <label>Retype Password<span>*</span></label>
                                        <input onChange={(e) => setNewPWD2(e.target.value)} type="password" />
                                    </div>
                                    <div className="form__btn">
                                        <button onClick={() => registerEmail()}>Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AccountPage