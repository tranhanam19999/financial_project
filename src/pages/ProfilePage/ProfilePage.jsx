import React , {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Header from '../../components/Layout/Header'
import {loadScripts} from '../../_utils/'
import {updateProfile, updateSuccess} from '../../store/user'
import { Link } from 'react-router-dom'
import {storage} from '../../firebase/firebase'

const ProfilePage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => {return state.user})
    const [initialUser,setInitialUser] = useState(user);
    const [img,setImg] = useState()
    useEffect(() => {
        document.onload = loadScripts()
    },[])
    const getInputImage = e => {
        if (e.target.files[0]) {
            const reader = new FileReader()
            reader.onload = () => {
                document.getElementById('img_avatar').src = reader.result
            }
            reader.readAsDataURL(e.target.files[0]);
            return e.target.files[0]
        }
    }
    const onChangePicture = async (e) => {
        let inputImg = await getInputImage(e)
        setImg(inputImg)
    }
    const getDownloadImageURLs = async (val,id, folder) => {
        const image = val
        const storageRef = storage.ref(`/${folder}/${id}`)
        const uploadTask = storageRef.put(image)
        const url = await new Promise((resolve, reject) => {
        uploadTask.on('state_changed', 
            snapShot => {
                console.log(snapShot)
            }, 
            error => reject(error),
            async () => {
                const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
                resolve(downloadUrl);
            })
        })
        return url
    }
    const changeDataUser = async () => {
        const temp = await getDownloadImageURLs(img,initialUser._id, 'NamsBookUser')
        localStorage.removeItem('user')
        await dispatch(updateProfile({...initialUser,photoUser:temp}))
        //NOTE FOR CLOSURE IF SET LIKE JSON.stringify(user)
        localStorage.setItem('user', JSON.stringify(initialUser))
        alert('Successfully Changed!')
    }
    if (user) {
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
                                            <input type="text" defaultValue={user.fullName} 
                                                onChange={(e) => setInitialUser(
                                                    {
                                                        ...initialUser,
                                                        fullName: e.target.value
                                                    })}
                                            />
                                        </div>
                                    </div>                               
                                    <div className="input_box">
                                        <label>Email: <span>*</span></label>
                                        <input type="text" defaultValue={user.local.email} onChange={(e) => setInitialUser({
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
                                            <input type="password" defaultValue={user.local.password} 
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
                                            <button className="btn btn-primary col-6" style={{height:50}} onClick={() => changeDataUser()}>Save Changes!</button>  
                                            <span className="col-2"></span>
                                            <button className="btn btn-danger col-4"><Link to="/">Cancel!</Link></button>
                                            {/* <button className="btn btn-danger col-4">Cancel!</button>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )}
    return (
        <>
            <p> You are not allowed to come here!</p>
        </>
    )
}

export default ProfilePage
