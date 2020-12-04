import React, {useState, useEffect} from 'react'
import { loadScripts } from '../../_utils'
import Header from '../../components/Layout/Header/'
import {forgotPassword} from '../../api/'

const ForgotPassword = () => {
    const [email,setEmail] = useState('')
    useEffect(() => {
        document.onload = loadScripts()
    },[])
    const dispatchInfo = async () => {
        if(email == '') {
            alert('Please provide a valid email!')
        }
        else {
            let res = await forgotPassword({email})
            if (res == 'success') {
                alert('Please check your email!')
                window.location.href = '/Account'
            }
            else {
                alert('No email match!')
            }
        }
    }
    return (
        <>
            <Header/>
            <div className="ht__bradcaump__area bg-image--6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">Forgot Password</h2>
                                <nav className="bradcaump-content">
                                    <a className="breadcrumb_item" href="index.html">
                                        Home
                                    </a>
                                    <span className="brd-separetor">/</span>
                                    <span className="breadcrumb_item active">Forgot Password</span>
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
                                <div className="account__form">
                                    <div className="input__box">
                                        <h3 className="account__title">Your Email</h3>
                                        <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="form__btn">
                                        <button onClick={() => dispatchInfo()}>Send Email</button>
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
export default ForgotPassword