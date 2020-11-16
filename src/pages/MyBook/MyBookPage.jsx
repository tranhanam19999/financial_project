import React, {useEffect} from 'react'
import {loadScripts} from '../../_utils'
import Header from '../../components/Layout/Header'
const MyBookPage = () => {
    useEffect(() => {
        document.onload = loadScripts()
    })
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
                        <h2 className="bradcaump-title">Cart Page</h2>
                        <nav className="bradcaump-content">
                        <a className="breadcrumb_item" href="index.html">
                            Home
                        </a>
                        <span className="brd-separetor">/</span>
                        <span className="breadcrumb_item active">Cart Page</span>
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
                        <button data-filter=".cat--1">Company News</button>
                        <button data-filter=".cat--2">Computers</button>
                        <button data-filter=".cat--3">General News</button>
                        <button data-filter=".cat--4">Hipster Content</button>
                        <button data-filter=".cat--5">Just Food</button>
                    </div>
                    </div>
                </div>
                <div className="row masonry__wrap">
                    {/* Start Single Portfolio */}
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 gallery__item cat--1">
                    <div className="portfolio">
                        <div className="thumb">
                        <a href="portfolio-details.html">
                            <img src="images/portfolio/md-img/1.jpg" alt="portfolio images" />
                        </a>
                        <div className="search">
                            <a href="images/portfolio/big-2/1.jpg" data-lightbox="grportimg" data-title="My caption"><i className="zmdi zmdi-search" /></a>
                        </div>
                        <div className="link">
                            <a href="portfolio-details.html"><i className="fa fa-link" /></a>
                        </div>
                        </div>
                        <div className="content">
                        <h6><a href="portfolio-details.html">Coffee &amp; Cookie Time</a></h6>
                        <p>road theme</p>
                        </div>
                    </div>
                    </div>
                    {/* End Single Portfolio */}
                    {/* Start Single Portfolio */}
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 gallery__item cat--2">
                    <div className="portfolio">
                        <div className="thumb">
                        <a href="portfolio-details.html">
                            <img src="images/portfolio/md-img/2.jpg" alt="portfolio images" />
                        </a>
                        <div className="search">
                            <a href="images/portfolio/big-2/2.jpg" data-lightbox="grportimg" data-title="My caption"><i className="zmdi zmdi-search" /></a>
                        </div>
                        <div className="link">
                            <a href="portfolio-details.html"><i className="fa fa-link" /></a>
                        </div>
                        </div>
                        <div className="content">
                        <h6><a href="portfolio-details.html">Coffee &amp; Cookie Time</a></h6>
                        <p>road theme</p>
                        </div>
                    </div>
                    </div>
                    {/* End Single Portfolio */}
                    {/* Start Single Portfolio */}
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 gallery__item cat--3">
                    <div className="portfolio">
                        <div className="thumb">
                        <a href="portfolio-details.html">
                            <img src="images/portfolio/md-img/3.jpg" alt="portfolio images" />
                        </a>
                        <div className="search">
                            <a href="images/portfolio/big-2/3.jpg" data-lightbox="grportimg" data-title="My caption"><i className="zmdi zmdi-search" /></a>
                        </div>
                        <div className="link">
                            <a href="portfolio-details.html"><i className="fa fa-link" /></a>
                        </div>
                        </div>
                        <div className="content">
                        <h6><a href="portfolio-details.html">Coffee &amp; Cookie Time</a></h6>
                        <p>road theme</p>
                        </div>
                    </div>
                    </div>
                    {/* End Single Portfolio */}
                    {/* Start Single Portfolio */}
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 gallery__item cat--4">
                    <div className="portfolio">
                        <div className="thumb">
                        <a href="portfolio-details.html">
                            <img src="images/portfolio/md-img/4.jpg" alt="portfolio images" />
                        </a>
                        <div className="search">
                            <a href="images/portfolio/big-2/1.jpg" data-lightbox="grportimg" data-title="My caption"><i className="zmdi zmdi-search" /></a>
                        </div>
                        <div className="link">
                            <a href="portfolio-details.html"><i className="fa fa-link" /></a>
                        </div>
                        </div>
                        <div className="content">
                        <h6><a href="portfolio-details.html">Coffee &amp; Cookie Time</a></h6>
                        <p>road theme</p>
                        </div>
                    </div>
                    </div>
                    {/* End Single Portfolio */}
                    {/* Start Single Portfolio */}
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 gallery__item cat--5">
                    <div className="portfolio">
                        <div className="thumb">
                        <a href="portfolio-details.html">
                            <img src="images/portfolio/md-img/5.jpg" alt="portfolio images" />
                        </a>
                        <div className="search">
                            <a href="images/portfolio/big-2/1.jpg" data-lightbox="grportimg" data-title="My caption"><i className="zmdi zmdi-search" /></a>
                        </div>
                        <div className="link">
                            <a href="portfolio-details.html"><i className="fa fa-link" /></a>
                        </div>
                        </div>
                        <div className="content">
                        <h6><a href="portfolio-details.html">Coffee &amp; Cookie Time</a></h6>
                        <p>road theme</p>
                        </div>
                    </div>
                    </div>
                    {/* End Single Portfolio */}
                    {/* Start Single Portfolio */}
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 gallery__item cat--2">
                    <div className="portfolio">
                        <div className="thumb">
                        <a href="portfolio-details.html">
                            <img src="images/portfolio/md-img/6.jpg" alt="portfolio images" />
                        </a>
                        <div className="search">
                            <a href="images/portfolio/big-2/2.jpg" data-lightbox="grportimg" data-title="My caption"><i className="zmdi zmdi-search" /></a>
                        </div>
                        <div className="link">
                            <a href="portfolio-details.html"><i className="fa fa-link" /></a>
                        </div>
                        </div>
                        <div className="content">
                        <h6><a href="portfolio-details.html">Coffee &amp; Cookie Time</a></h6>
                        <p>road theme</p>
                        </div>
                    </div>
                    </div>
                    {/* End Single Portfolio */}
                    {/* Start Single Portfolio */}
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 gallery__item cat--3">
                    <div className="portfolio">
                        <div className="thumb">
                        <a href="portfolio-details.html">
                            <img src="images/portfolio/md-img/7.jpg" alt="portfolio images" />
                        </a>
                        <div className="search">
                            <a href="images/portfolio/big-2/1.jpg" data-lightbox="grportimg" data-title="My caption"><i className="zmdi zmdi-search" /></a>
                        </div>
                        <div className="link">
                            <a href="portfolio-details.html"><i className="fa fa-link" /></a>
                        </div>
                        </div>
                        <div className="content">
                        <h6><a href="portfolio-details.html">Coffee &amp; Cookie Time</a></h6>
                        <p>road theme</p>
                        </div>
                    </div>
                    </div>
                    {/* End Single Portfolio */}
                    {/* Start Single Portfolio */}
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 gallery__item cat--4">
                    <div className="portfolio">
                        <div className="thumb">
                        <a href="portfolio-details.html">
                            <img src="images/portfolio/md-img/8.jpg" alt="portfolio images" />
                        </a>
                        <div className="search">
                            <a href="images/portfolio/big-2/3.jpg" data-lightbox="grportimg" data-title="My caption"><i className="zmdi zmdi-search" /></a>
                        </div>
                        <div className="link">
                            <a href="portfolio-details.html"><i className="fa fa-link" /></a>
                        </div>
                        </div>
                        <div className="content">
                        <h6><a href="portfolio-details.html">Coffee &amp; Cookie Time</a></h6>
                        <p>road theme</p>
                        </div>
                    </div>
                    </div>
                    {/* End Single Portfolio */}
                    {/* Start Single Portfolio */}
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 gallery__item cat--5">
                    <div className="portfolio">
                        <div className="thumb">
                        <a href="portfolio-details.html">
                            <img src="images/portfolio/md-img/9.jpg" alt="portfolio images" />
                        </a>
                        <div className="search">
                            <a href="images/portfolio/big-2/2.jpg" data-lightbox="grportimg" data-title="My caption"><i className="zmdi zmdi-search" /></a>
                        </div>
                        <div className="link">
                            <a href="portfolio-details.html"><i className="fa fa-link" /></a>
                        </div>
                        </div>
                        <div className="content">
                        <h6><a href="portfolio-details.html">Coffee &amp; Cookie Time</a></h6>
                        <p>road theme</p>
                        </div>
                    </div>
                    </div>
                    {/* End Single Portfolio */}
                    {/* Start Single Portfolio */}
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 gallery__item cat--2">
                    <div className="portfolio">
                        <div className="thumb">
                        <a href="portfolio-details.html">
                            <img src="images/portfolio/md-img/10.jpg" alt="portfolio images" />
                        </a>
                        <div className="search">
                            <a href="images/portfolio/big-2/1.jpg" data-lightbox="grportimg" data-title="My caption"><i className="zmdi zmdi-search" /></a>
                        </div>
                        <div className="link">
                            <a href="portfolio-details.html"><i className="fa fa-link" /></a>
                        </div>
                        </div>
                        <div className="content">
                        <h6><a href="portfolio-details.html">Coffee &amp; Cookie Time</a></h6>
                        <p>road theme</p>
                        </div>
                    </div>
                    </div>
                    {/* End Single Portfolio */}
                    {/* Start Single Portfolio */}
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 gallery__item cat--3">
                    <div className="portfolio">
                        <div className="thumb">
                        <a href="portfolio-details.html">
                            <img src="images/portfolio/md-img/5.jpg" alt="portfolio images" />
                        </a>
                        <div className="search">
                            <a href="images/portfolio/big-2/1.jpg" data-lightbox="grportimg" data-title="My caption"><i className="zmdi zmdi-search" /></a>
                        </div>
                        <div className="link">
                            <a href="portfolio-details.html"><i className="fa fa-link" /></a>
                        </div>
                        </div>
                        <div className="content">
                        <h6><a href="portfolio-details.html">Coffee &amp; Cookie Time</a></h6>
                        <p>road theme</p>
                        </div>
                    </div>
                    </div>
                    {/* End Single Portfolio */}
                    {/* Start Single Portfolio */}
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 gallery__item cat--4">
                    <div className="portfolio">
                        <div className="thumb">
                        <a href="portfolio-details.html">
                            <img src="images/portfolio/md-img/7.jpg" alt="portfolio images" />
                        </a>
                        <div className="search">
                            <a href="images/portfolio/big-2/2.jpg" data-lightbox="grportimg" data-title="My caption"><i className="zmdi zmdi-search" /></a>
                        </div>
                        <div className="link">
                            <a href="portfolio-details.html"><i className="fa fa-link" /></a>
                        </div>
                        </div>
                        <div className="content">
                        <h6><a href="portfolio-details.html">Coffee &amp; Cookie Time</a></h6>
                        <p>road theme</p>
                        </div>
                    </div>
                    </div>
                    {/* End Single Portfolio */}
                </div>
                </div>
            </section>
        </>
    )
}
export default MyBookPage