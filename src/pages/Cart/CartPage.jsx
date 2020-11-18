import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {discardAll, discardFromCart} from '../../store/cartitem'
import Header from '../../components/Layout/Header/index'
import {loadScripts} from "../../_utils/"
import {Link, Redirect} from 'react-router-dom'
import {sendTrans} from '../../api/'
const TableBody = () => {
  const dispatch = useDispatch()
  const cartitem = useSelector(state => {return state.cartitem})
  return cartitem ? 
  cartitem.map(val => {
  return (
      <tr>
        <td className="product-thumbnail"><a href="#"><img src={val.pictures[0]} height={180} /></a></td>
        <td className="product-name"><a href="#">{val.name}</a></td>
        <td className="product-price"><span className="amount">{val.price*(val.sale/100)}</span></td>
        <td className="product-remove"><a href="#" onClick={() => dispatch(discardFromCart(val,cartitem))}>X</a></td>
      </tr>
  )}) : <></>
}
const CartPage = () => {
  const dispatch = useDispatch()
  const checkoutCart = async (item,user) => {
    await sendTrans(item,user)
    await dispatch(discardAll())
  }
  const user = useSelector(state => {return state.user})
  const cartitem = useSelector(state => {return state.cartitem})
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
        
        {/* Cart Page Area*/}
        <div className="cart-main-area section-padding--lg bg--white">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 ol-lg-12">
              <form action="#">               
                <div className="table-content wnro__table table-responsive">
                  <table>
                    <thead>
                      <tr className="title-top">
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TableBody />
                    </tbody>               
                  </table>
                </div>
              </form> 
              <div className="cartbox__btn">
                <ul className="cart__btn__list d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                  {/* <li><a href="#">Update Cart</a></li> */}
                  <li><Link to="/Shop">Update Cart</Link></li>
                  <li><Link to="/MyTran" onClick={() => checkoutCart(cartitem,user)}>Check Out</Link></li>
                  {/* <li><a href="#">Check Out</a></li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div>Please transfer payment to us via the following accounts:</div>
              <div>+ Momo: <b>0898546564</b> - Tran Ha Nam</div>
              <div>+ Vietcombank: <b>1675643657657</b> - Hoang Hoa Tham Branch</div>
              <div>+ BIDV: <b>1675643657657</b> - Binh Thanh Branch</div>
              <div>Syntax: <b>"Email Address - Your Name - Pay For YourBook's Name"</b></div>
              <div>Example: <b>"tranhanam1999hn@gmail.com - Tran Ha Nam - Pay For Cong Nghe Phan Mem, Thuong Mai Dien Tu"</b></div>
            </div>
            <div className="col-lg-6">
              <div className="cartbox__total__area">
                <div className="cartbox-total d-flex justify-content-between">
                  <ul className="cart__total__list">
                    <li>Cart total</li>
                    <li>Sub Total</li>
                  </ul>
                  <ul className="cart__total__tk">
                    <li>${cartitem ? cartitem.reduce((sum,val) => {																										
													return parseInt(sum += (val.price*(val.sale/100)))
												},0
											) : '$0'}</li>
                    <li>10% VAT for each book</li>
                  </ul>
                </div>
                <div className="cart__total__amount">
                  <span>Grand Total</span>
                      <span>${cartitem ? cartitem.reduce((sum,val) => {																										
													return parseInt(sum += (val.price*(val.sale/100) + val.price*(val.sale/100)*0.1))
												},0
											) : '$0'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </>
    )
}
export default CartPage