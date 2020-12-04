import React, {useEffect, useState} from "react"
import {useSelector, useDispatch, Provider} from "react-redux"
import {gett} from "../../store/listitem"
import {loadScripts} from "../../_utils"
import Paginator from '../../components/Pagination/'
import Header from '../../components/Layout/Header'
import _ from 'lodash/array'

const ShopPage = () => {
    let a = []
    const [page,setPage] = useState(1)
    const dispatch = useDispatch()
    const listItem = useSelector(state => state.listitem)
    const [sortedProd,setSorted] = useState(listItem)
    const [active, setActive] = useState(0)
    useEffect(() => {                
        dispatch(gett())
        document.onload = loadScripts() 
    }, [])
    useEffect(() => {
        setSorted(listItem)  
    }, [listItem])
    
    for(let i = 1; i <= Math.ceil(sortedProd.length/9);i++) {
        a.push(i)
    }
    const checkFilter = () => {  
        let valueTop = document.getElementById('amountTop').value
        let valueBot = document.getElementById('amountBot').value 
        // setSorted(listItem.slice().sort((a,b) => {
        //     return (a.price - a.price * (a.sale/100)) - (b.price - b.price * (b.sale/100))
        // }))
        setSorted(listItem.slice().filter(prod => {
            return ((prod.price - prod.price * (prod.sale/100)) <= parseInt(valueTop)) && ((prod.price - prod.price * (prod.sale/100)) >= parseInt(valueBot))
        })) 
    }
    const filterByCategory = (category) => {
        setSorted(sortedProd.slice().filter(prod => {
            console.log('cac ', prod.info.category == category)
            return prod.info.category == category
        }))
    }
    const filterByName = (name) => {
        setSorted(listItem.slice().filter(prod => {
            return prod.name.toLowerCase().includes(name.toLowerCase())
        }))
    }
    return(
        <>
        <Header/>
        {/* Start Search Popup */}
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
                            <h2 className="bradcaump-title">Shop Grid</h2>
                            <nav className="bradcaump-content">
                                <a className="breadcrumb_item" href="index.html">
                                    Home
                                </a>
                                <span className="brd-separetor">/</span>
                                <span className="breadcrumb_item active">Shop Grid</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* End Bradcaump area */}
        {/* Start Shop Page */}
        <div className="page-shop-sidebar left--sidebar bg--white section-padding--lg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40">
                        <div className="shop__sidebar">
                            <aside className="wedget__categories pro--range">
                                <h3 className="wedget__title">Filter by price</h3>
                                <div className="content-shopby">
                                    <div className="price_filter s-filter clear">
                                        <form action="#" method="GET">
                                            <div id="slider-range" />
                                            <div className="slider__range--output" id="rangeAmount">
                                                <div className="price__output--wrap">
                                                    <div className="price--output">
                                                        <span style={{float:'left'}}>Amount: </span>
                                                        <input style={{float:'left'}} type="text" id="amountBot" readOnly />
                                                        <input style={{float:'left'}} type="text" id="amountTop" readOnly />
                                                    </div>
                                                    <div className="price--filter">
                                                        <a href="#" onClick={() => checkFilter()}>Filter</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </aside>
                            <aside className="wedget__categories poroduct--tag">
                                <h3 className="wedget__title">Product Tags</h3>
                                <ul>
                                    <li>
                                        <a href="#" onClick={() => filterByCategory('Love')}>Love</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => filterByCategory('Politics')}>Politics</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => filterByCategory('Cook')}>Cookbooks</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => filterByCategory('Fun')}>Fun</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => filterByCategory('Relationship')}>Relationship</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => filterByCategory('Kids')}>Kids</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => filterByCategory('Math')}>Math</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => filterByCategory('Love')}>Comic</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => filterByCategory('Love')}>Fiction</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => filterByCategory('Love')}>Fantasy</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => filterByCategory('Love')}>Music</a>
                                    </li>
                                </ul>
                            </aside>
                            <aside className="wedget__categories sidebar--banner">
                                <img src="images/others/banner_left.jpg" alt="banner images" />
                                <div className="text">
                                    <h2>new products</h2>
                                    <h6>
                                    save up to <br /> <strong>40%</strong>off
                                    </h6>
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div className="col-lg-9 col-12 order-1 order-lg-2">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shop__list__wrapper d-flex flex-wrap flex-md-nowrap justify-content-between">
                                    <div className="shop__list">
                                        <span>Search: </span>
                                        <input className="shot__byselect form" placeholder="" onChange={(e) => filterByName(e.target.value)}/>                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab__container">
                            <div className="shop-grid tab-pane fade show active" id="nav-grid" role="tabpanel">
                                <div className="row">
                                    {
                                        sortedProd == [] ? <></> : 
                                        <Paginator childrenItem = {sortedProd} 
                                                page={page}/>
                                    }
                                </div>
                                <ul className="wn__pagination">
                                    {
                                        (() => {
                                            return (listItem == []) ? <></> : a.map((val,i) => {
                                                    return <li className = {i == active ? "active" : null}onClick={() => setPage(val)}>
                                                        <a href="#" onClick={() => setActive(i)}>{val}</a>
                                                    </li>
                                            })                                                            
                                        })()
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Shop Page */}
        
        </>
    )
}

export default ShopPage