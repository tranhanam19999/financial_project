import React, {useEffect,useState} from 'react'
import {loadScripts} from '../../_utils'
import Header from '../../components/Layout/Header'
import { getUsersTran } from '../../api/'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const MyBookPage = () => {
    const [listTran,setListTran] = useState()
    const user = useSelector(state => {return state.user})
    useEffect(() => {
        document.onload = loadScripts()
        handleData()
    },[])
    const handleData = async () => {
        const data = await getUsersTran(user)
        setListTran(data)
    }
    const handleCategory = (book) => {
        console.log(book.info.category)
        switch(book.info.category[0]) {
            case 'Love': return "cat--1" 
            case 'Politics': return "cat--2"
            case 'Fun': return "cat--3" 
            case 'Kids': return "cat--4"  
            case 'IT': return "cat--5" 
            case 'Cook': return "cat--6"
            case 'Others': return "cat--7"       
        }
    }
    return (
        <>
            <Header/>
            <div className="box-search-content search_active block-bg close__top">
                <form id="search_mini_form" className="minisearch" action="#">
                <div className="field__search">
                    <input type="text" placeholder="Search entire store here..." />
                    <div className="action">
                    <a href="#">
                        <i className="zmdi zmdi-search" />
                    </a>
                    </div>
                </div>
                </form>
                <div className="close__wrap">
                <span>close</span>
                </div>
            </div>
            {/* End Search Popup */}
            {/* Start Bradcaump area */}
            <div className="ht__bradcaump__area bg-image--6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">My Book Page</h2>
                                <nav className="bradcaump-content">
                                    <Link className="breadcrumb_item" to="/">
                                        Home
                                    </Link>
                                    <span className="brd-separetor">/</span>
                                    <span className="breadcrumb_item active">My Book Page</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="wn__portfolio__area gallery__masonry__activation bg--white mt--40 pb--100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="gallery__menu">
                                <button data-filter="*" className="is-checked">Filter - All</button>
                                <button data-filter=".cat--1">Love</button>
                                <button data-filter=".cat--2">Politics</button>
                                <button data-filter=".cat--3">Fun</button>
                                <button data-filter=".cat--4">Kids</button>
                                <button data-filter=".cat--5">IT</button>
                                <button data-filter=".cat--6">Cook</button>
                                <button data-filter=".cat--7">Others</button>
                            </div>
                        </div>
                    </div>
                    <div className="row masonry__wrap">
                        {listTran == null ? <></> : listTran.map(val => {
                        if(val.status == 'SUCCESS') {
                            return val.product.map(book => {
                                return(<div className={"col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 gallery__item" +  " " + handleCategory(book)}>
                                <div className="portfolio">
                                    <div className="thumb">
                                        <a href="portfolio-details.html">
                                            <img src="images/portfolio/md-img/1.jpg" alt="portfolio images" />
                                        </a>
                                    <div className="search">
                                        <a href={book.link ?  book.link.full : null} data-lightbox="grportimg" data-title="My caption"><i className="zmdi zmdi-cloud-download"/></a>
                                    </div>
                                    <div className="link">
                                        <a href="portfolio-details.html"><i className="fa fa-link" /></a>
                                    </div>
                                    </div>
                                    <div className="content">
                                        <h6><a href="portfolio-details.html">{book.name}</a></h6>
                                        <p>{book.name}</p>
                                    </div>
                                </div>
                            </div>)})}}) }
                        {/* End Single Portfolio */}
                    </div>
                </div>
            </section>
        </>
    )
}
export default MyBookPage