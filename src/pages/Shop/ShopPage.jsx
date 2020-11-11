import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {gett} from "../../store/listitem"
import {loadScripts} from "../../_utils"
import Paginator from '../../components/Pagination/'
import SingleProduct from "../../components/SingleProduct"
import Header from '../../components/Layout/Header'
import _ from 'lodash/array'
const ShopPage = () => {
    const [page,setPage] = useState(1)
    // const [valueTop,setValueTop] = useState(0)
    // const [valueBot,setValueBot] = useState(0)
    const dispatch = useDispatch()
    
    let valueTop
    let valueBot
    const listItem = useSelector(state => state.listitem)
    useEffect(() => {          
        dispatch(gett())
        document.onload = loadScripts()
    }, [])
    let a = []
    for(let i = 1; i < Math.ceil(listItem.length/9);i++) {
        a.push(i)
    }
    const checkFilter = () => {
        valueTop = document.getElementById('amountTop').value
        valueBot = document.getElementById('amountBot').value
        console.log('valueTop ', valueTop)
        console.log('valueBot ', valueBot)
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
                    <aside className="wedget__categories poroduct--cat">
                        <h3 className="wedget__title">Product Categories</h3>
                    <ul>
                        <li>
                        <a href="#" onClick={() => {dispatch(gett())}}>
                            Biography <span>(3)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Business <span>(4)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Cookbooks <span>(6)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Health &amp; Fitness <span>(7)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            History <span>(8)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Mystery <span>(9)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Inspiration <span>(13)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Romance <span>(20)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Fiction/Fantasy <span>(22)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Self-Improvement <span>(13)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Humor Books <span>(17)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Harry Potter <span>(20)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Land of Stories <span>(34)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Kids' Music <span>(60)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Toys &amp; Games <span>(3)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            hoodies <span>(3)</span>
                        </a>
                        </li>
                    </ul>
                    </aside>
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
                                            <a onClick={() => checkFilter()}>Filter</a>
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
                        <a href="#">Biography</a>
                        </li>
                        <li>
                        <a href="#">Business</a>
                        </li>
                        <li>
                        <a href="#">Cookbooks</a>
                        </li>
                        <li>
                        <a href="#">Health &amp; Fitness</a>
                        </li>
                        <li>
                        <a href="#">History</a>
                        </li>
                        <li>
                        <a href="#">Mystery</a>
                        </li>
                        <li>
                        <a href="#">Inspiration</a>
                        </li>
                        <li>
                        <a href="#">Religion</a>
                        </li>
                        <li>
                        <a href="#">Fiction</a>
                        </li>
                        <li>
                        <a href="#">Fantasy</a>
                        </li>
                        <li>
                        <a href="#">Music</a>
                        </li>
                        <li>
                        <a href="#">Toys</a>
                        </li>
                        <li>
                        <a href="#">Hoodies</a>
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
                        <div
                        className="shop__list nav justify-content-center"
                        role="tablist"
                        >
                        <a
                            className="nav-item nav-link active"
                            data-toggle="tab"
                            href="#nav-grid"
                            role="tab"
                        >
                            <i className="fa fa-th" />
                        </a>
                        <a
                            className="nav-item nav-link"
                            data-toggle="tab"
                            href="#nav-list"
                            role="tab"
                        >
                            <i className="fa fa-list" />
                        </a>
                        </div>
                        <p>Showing 1–12 of 40 results</p>
                        <div className="orderby__wrapper">
                        <span>Sort By</span>
                        <select className="shot__byselect">
                            <option>Default sorting</option>
                            <option>HeadPhone</option>
                            <option>Furniture</option>
                            <option>Jewellery</option>
                            <option>Handmade</option>
                            <option>Kids</option>
                        </select>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="tab__container">
                    <div
                    className="shop-grid tab-pane fade show active"
                    id="nav-grid"
                    role="tabpanel"
                    >
                    <div className="row">
                        {
                            
                            // (valueTop == null || valueBot == null) ? 
                            // (() => {
                            //     return (listItem == []) ? <></> 
                            //     : listItem.map(item => {
                            //         return(<SingleProduct key={item._id} prod={item}/>)
                            //     })
                            // })()
                            listItem == [] ? <></> : 
                            <Paginator childrenItem = {listItem} page={page}/>
                            // (() => {
                            //     let childrenListItem = listItem ? _.chunk(listItem,6) : []
                            //     return ( childrenListItem == [] && listItem == []  && childrenListItem[page] == null)  ? <></> 
                            //     : childrenListItem[page].map(item => {
                            //         return(<SingleProduct key={item._id} prod={item}/>)
                            //     })
                            // })()

                            // : 
                            // (() => {
                            //     return (listItem == []) ? <></>
                            //     : listItem.map(item => {      
                            //         console.log(valueBot)                              
                            //         if(item.price > valueBot) {
                            //             console.log(item.price , ' ' , valueBot)
                            //             return <SingleProduct key={item._id} prod={item}/>
                            //         }
                            //     })
                            // })()
                        }
                    </div>
                    <ul className="wn__pagination">
                        {
                            (() => {
                                return (listItem == []) ? <></> : a.map((val,i) => {
                                        return <li onClick={() => setPage(val)}>
                                            <a href="#">{val}</a>
                                        </li>
                                })
                                                              
                            })()
                        }
                        {/* <li className="active">
                            <a href="#">1</a>
                        </li>
                        <li>
                            <a href="#">2</a>
                        </li>
                        <li>
                            <a href="#">3</a>
                        </li>
                        <li>
                            <a href="#">4</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="zmdi zmdi-chevron-right" />
                            </a>
                        </li> */}
                    </ul>
                    </div>
                    <div
                    className="shop-grid tab-pane fade"
                    id="nav-list"
                    role="tabpanel"
                    >
                    <div className="list__view__wrapper">
                        {/* Start Single Product */}
                        <div className="list__view">
                        <div className="thumb">
                            <a className="first__img" href="single-product.html">
                            <img src="images/product/1.jpg" alt="product images" />
                            </a>
                            <a
                            className="second__img animation1"
                            href="single-product.html"
                            >
                            <img src="images/product/2.jpg" alt="product images" />
                            </a>
                        </div>
                        <div className="content">
                            <h2>
                            <a href="single-product.html">Ali Smith</a>
                            </h2>
                            <ul className="rating d-flex">
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li>
                                <i className="fa fa-star-o" />
                            </li>
                            <li>
                                <i className="fa fa-star-o" />
                            </li>
                            </ul>
                            <ul className="prize__box">
                            <li>$111.00</li>
                            <li className="old__prize">$220.00</li>
                            </ul>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nam fringilla augue nec est tristique auctor. Donec non
                            est at libero vulputate rutrum. Morbi ornare lectus quis
                            justo gravida semper. Nulla tellus mi, vulputate
                            adipiscing cursus eu, suscipit id nulla.
                            </p>
                            <ul className="cart__action d-flex">
                            <li className="cart">
                                <a href="cart.html">Add to cart</a>
                            </li>
                            <li className="wishlist">
                                <a href="cart.html" />
                            </li>
                            <li className="compare">
                                <a href="cart.html" />
                            </li>
                            </ul>
                        </div>
                        </div>
                        {/* End Single Product */}
                        {/* Start Single Product */}
                        <div className="list__view mt--40">
                        <div className="thumb">
                            <a className="first__img" href="single-product.html">
                            <img src="images/product/2.jpg" alt="product images" />
                            </a>
                            <a
                            className="second__img animation1"
                            href="single-product.html"
                            >
                            <img src="images/product/4.jpg" alt="product images" />
                            </a>
                        </div>
                        <div className="content">
                            <h2>
                            <a href="single-product.html">Blood In Water</a>
                            </h2>
                            <ul className="rating d-flex">
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li>
                                <i className="fa fa-star-o" />
                            </li>
                            <li>
                                <i className="fa fa-star-o" />
                            </li>
                            </ul>
                            <ul className="prize__box">
                            <li>$111.00</li>
                            <li className="old__prize">$220.00</li>
                            </ul>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nam fringilla augue nec est tristique auctor. Donec non
                            est at libero vulputate rutrum. Morbi ornare lectus quis
                            justo gravida semper. Nulla tellus mi, vulputate
                            adipiscing cursus eu, suscipit id nulla.
                            </p>
                            <ul className="cart__action d-flex">
                            <li className="cart">
                                <a href="cart.html">Add to cart</a>
                            </li>
                            <li className="wishlist">
                                <a href="cart.html" />
                            </li>
                            <li className="compare">
                                <a href="cart.html" />
                            </li>
                            </ul>
                        </div>
                        </div>
                        {/* End Single Product */}
                        {/* Start Single Product */}
                        <div className="list__view mt--40">
                        <div className="thumb">
                            <a className="first__img" href="single-product.html">
                            <img src="images/product/3.jpg" alt="product images" />
                            </a>
                            <a
                            className="second__img animation1"
                            href="single-product.html"
                            >
                            <img src="images/product/6.jpg" alt="product images" />
                            </a>
                        </div>
                        <div className="content">
                            <h2>
                            <a href="single-product.html">Madeness Overated</a>
                            </h2>
                            <ul className="rating d-flex">
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li>
                                <i className="fa fa-star-o" />
                            </li>
                            <li>
                                <i className="fa fa-star-o" />
                            </li>
                            </ul>
                            <ul className="prize__box">
                            <li>$111.00</li>
                            <li className="old__prize">$220.00</li>
                            </ul>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nam fringilla augue nec est tristique auctor. Donec non
                            est at libero vulputate rutrum. Morbi ornare lectus quis
                            justo gravida semper. Nulla tellus mi, vulputate
                            adipiscing cursus eu, suscipit id nulla.
                            </p>
                            <ul className="cart__action d-flex">
                            <li className="cart">
                                <a href="cart.html">Add to cart</a>
                            </li>
                            <li className="wishlist">
                                <a href="cart.html" />
                            </li>
                            <li className="compare">
                                <a href="cart.html" />
                            </li>
                            </ul>
                        </div>
                        </div>
                        {/* End Single Product */}
                        {/* Start Single Product */}
                        <div className="list__view mt--40">
                        <div className="thumb">
                            <a className="first__img" href="single-product.html">
                            <img src="images/product/4.jpg" alt="product images" />
                            </a>
                            <a
                            className="second__img animation1"
                            href="single-product.html"
                            >
                            <img src="images/product/6.jpg" alt="product images" />
                            </a>
                        </div>
                        <div className="content">
                            <h2>
                            <a href="single-product.html">Watching You</a>
                            </h2>
                            <ul className="rating d-flex">
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li>
                                <i className="fa fa-star-o" />
                            </li>
                            <li>
                                <i className="fa fa-star-o" />
                            </li>
                            </ul>
                            <ul className="prize__box">
                            <li>$111.00</li>
                            <li className="old__prize">$220.00</li>
                            </ul>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nam fringilla augue nec est tristique auctor. Donec non
                            est at libero vulputate rutrum. Morbi ornare lectus quis
                            justo gravida semper. Nulla tellus mi, vulputate
                            adipiscing cursus eu, suscipit id nulla.
                            </p>
                            <ul className="cart__action d-flex">
                            <li className="cart">
                                <a href="cart.html">Add to cart</a>
                            </li>
                            <li className="wishlist">
                                <a href="cart.html" />
                            </li>
                            <li className="compare">
                                <a href="cart.html" />
                            </li>
                            </ul>
                        </div>
                        </div>
                        {/* End Single Product */}
                        {/* Start Single Product */}
                        <div className="list__view mt--40">
                        <div className="thumb">
                            <a className="first__img" href="single-product.html">
                            <img src="images/product/5.jpg" alt="product images" />
                            </a>
                            <a
                            className="second__img animation1"
                            href="single-product.html"
                            >
                            <img src="images/product/9.jpg" alt="product images" />
                            </a>
                        </div>
                        <div className="content">
                            <h2>
                            <a href="single-product.html">Court Wings Run</a>
                            </h2>
                            <ul className="rating d-flex">
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li className="on">
                                <i className="fa fa-star-o" />
                            </li>
                            <li>
                                <i className="fa fa-star-o" />
                            </li>
                            <li>
                                <i className="fa fa-star-o" />
                            </li>
                            </ul>
                            <ul className="prize__box">
                            <li>$111.00</li>
                            <li className="old__prize">$220.00</li>
                            </ul>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nam fringilla augue nec est tristique auctor. Donec non
                            est at libero vulputate rutrum. Morbi ornare lectus quis
                            justo gravida semper. Nulla tellus mi, vulputate
                            adipiscing cursus eu, suscipit id nulla.
                            </p>
                            <ul className="cart__action d-flex">
                            <li className="cart">
                                <a href="cart.html">Add to cart</a>
                            </li>
                            <li className="wishlist">
                                <a href="cart.html" />
                            </li>
                            <li className="compare">
                                <a href="cart.html" />
                            </li>
                            </ul>
                        </div>
                        </div>
                        {/* End Single Product */}
                    </div>
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