import React from 'react'
import { useEffect } from 'react'
import Header from '../../components/Layout/Header'
import { loadScripts } from '../../_utils'

const MyTransPage = () => {
    useEffect(()=> {
        document.onload=loadScripts()
    })
    return (
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
        <div className="cart-main-area section-padding--lg bg--white">
            <div className="container">
                <div className="row">
                <div className="col-md-12 col-sm-12 ol-lg-12">
                    <form action="#">               
                    <div className="table-content wnro__table table-responsive">
                        <table>
                        <thead>
                            <tr className="title-top">
                            <th className="product-name">Product</th>
                            <th className="product-subtotal">Date</th>
                            <th className="product-remove">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>                        
                                <td className="product-name"><a href="#">Natoque penatibus</a></td>
                                <td className="product-price"><span className="amount">$165.00</span></td>
                                <td className="product-quantity"><input type="number" defaultValue={1} /></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </form> 
                </div>
                </div>
        </div>  
        </div>
        </>
    )
}
export default MyTransPage