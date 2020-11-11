import React , {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import { updateUser } from '../../api/'
import Header from '../../components/Layout/Header'
import {loadScripts} from '../../_utils/'
const ProfilePage = () => {
    const {user} = useSelector(state => {return state})
    const [initialUser,setInitialUser] = useState(user);
    useEffect(() => {
        document.onload = loadScripts()
    },[])
    const onChangePicture = e => {
        if (e.target.files[0]) {
            const reader = new FileReader()
            reader.onload = () => {
                document.getElementById('img_avatar').src = reader.result
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    }
    const changeDataUser = async () => {
        const res = await updateUser(initialUser)
        localStorage.removeItem('user')
        localStorage.setItem('user', JSON.stringify(res))
        window.location.reload()
    }
    if (user)
        return (
            <>
            <Header/>
            <div className="ht__bradcaump__area bg-image--6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">Profile Page</h2>
                                <nav className="bradcaump-content">
                                    <a className="breadcrumb_item" href="index.html">
                                        Home
                                    </a>
                                    <span className="brd-separetor">/</span>
                                    <span className="breadcrumb_item active">Profile</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="wn__checkout__area section-padding--lg bg__white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="customer_details">
                                <h3>Profile</h3>
                                <div className="customar__field">
                                <div className="margin_between">
                                        <div className="input_box space_between">
                                            <label>Avatar <span>*</span></label>
                                            <img id="img_avatar" src={user.photoUser} width={100} height={96}></img>         
                                            <input className="" onChange={(e) => onChangePicture(e)} type="file"/>                           
                                        </div>                                   
                                    </div>
                                    <div className="margin_between">
                                        <div className="input_box space_between">
                                            <label>Full name <span>*</span></label>
                                            <input type="text" defaultValue={user.fullName} onChange={(e) => setInitialUser(
                                                                                            {
                                                                                                ...initialUser,
                                                                                                fullName: e.target.value
                                                                                            })}/>
                                        </div>
                                    </div>                               
                                    <div className="input_box">
                                        <label>Address <span>*</span></label>
                                        <input type="text" defaultValue={user.address} onChange={(e) => setInitialUser({
                                            ...initialUser,
                                            address: e.target.value
                                        })}/>
                                    </div>                         
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="customer_details">
                                <div className="customar__field">
                                    <h3><br></br></h3>
                                    <div className="margin_between">
                                        <div className="input_box space_between">
                                            <label>Phone <span>*</span></label>
                                            <input type="text" defaultValue={user.phoneNumber} onChange={(e) => setInitialUser({
                                                ...initialUser,
                                                phoneNumber: e.target.value
                                            })}/>
                                        </div>                                      
                                    </div>
                                    <div className="margin_between">
                                        <div className="input_box space_between">
                                            <label>Your Password <span>*</span></label>
                                            <input type="email" defaultValue={user.local.password} 
                                                onChange={(e) => setInitialUser({
                                                    ...initialUser,
                                                    local: {
                                                        ...initialUser.local,
                                                        password: e.target.value
                                                    }
                                                })}/>
                                        </div>
                                    </div>
                                    <div className="margin_between">
                                        <div className="input_box space_between">
                                            <label>Bank ID <span>*</span></label>
                                            <input type="text" defaultValue={user.bankId}
                                                onChange={(e) => setInitialUser({
                                                    ...initialUser,
                                                    bankId: e.target.value
                                                })}/>
                                        </div>
                                    </div>
                                    <div className="margin_between">
                                        <div className="input_box space_between">
                                            <label>WorkPlace <span>*</span></label>
                                            <input type="text" defaultValue={user.workPlace}
                                                onChange={e => setInitialUser({
                                                    ...initialUser,
                                                    workPlace: e.target.value
                                                })}/>
                                        </div>
                                    </div>
                                    <div className="margin_between mt-5">
                                        <div className="input_box space_between row">
                                            <button className="col-6" style={{height:50}} onClick={() => changeDataUser()}>Save Changes!</button>  
                                            <span className="col-2"></span>
                                            <button className="col-4">Cancel!</button>                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    return (
        <>
            <p> You are not allowed to come here!</p>
        </>
    )
}

export default ProfilePage
