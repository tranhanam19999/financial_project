import React, {useEffect} from 'react'
import {loadScripts} from '../../_utils'
import Header from "./Header"
import Footer from "./Footer"


const Layout = ({Pages}) => {
    useEffect(() => {
        document.onload = loadScripts()
    },[Pages])

    return(
        <div>      
            <Header/> 
                <Pages/>  
            <Footer/>
        </div>
    )
}

export default Layout;