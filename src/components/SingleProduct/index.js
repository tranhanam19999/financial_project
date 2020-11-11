import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {Modal, ModalHeader, ModalBody} from 'reactstrap'
import {importToCart} from '../../store/cartitem'
const SingleProduct = ({prod}) => {
    const dispatch = useDispatch()
    const cartitem = useSelector(state => {return state.cartitem})
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    let newPrice = prod ? prod.price*(prod.sale/100) : null
    const handleItem = () => {
        let temp = cartitem.some(val => {
            return val == prod  
        })
        if(temp)
            alert('Duplicate Item!')
        else
            dispatch(importToCart(prod))
    }
    return(
        <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="product__thumb">
                <a className="first__img" href="single-product.html">
                <img src="images/books/1.jpg" alt="product image" />
                </a>
                <a
                className="second__img animation1"
                href="single-product.html"
                >
                <img src="images/books/2.jpg" alt="product image" />
                </a>
                {prod.sale >= 50 ? 
                    <div className="hot__box">
                        <span className="hot-label">BEST SALE</span>
                    </div> : <></>
                }
            </div>
            <div className="product__content content--center">
                <h4>
                    <a href="single-product.html">{prod.name}</a>
                </h4>
                <ul className="prize d-flex">
                <li>${prod.price*(prod.sale/100)}</li>
                <li className="old_prize">${prod.price}</li>
                </ul>
                <div className="action">
                <div className="actions_inner">
                    <ul className="add_to_links">
                    <li>
                        <a className="cart" href="cart.html">
                        <i className="bi bi-shopping-bag4" />
                        </a>
                    </li>
                    <li>
                        <a className="wishlist" style={{cursor:'pointer'}} onClick={() => handleItem()}>
                        <i className="bi bi-shopping-cart-full" />
                        </a>
                    </li>
                    <li>
                        <a className="compare" href="#">
                        <i className="bi bi-heart-beat" />
                        </a>
                    </li>
                    <li>
                        <a
                        data-toggle="modal"
                        title="Quick View"
                        style={{cursor:'pointer'}}
                        className="quickview modal-view detail-link"
                        onClick={toggle}
                        >
                        <i className="bi bi-search" />
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="product__hover--content">
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
                    <li>
                    <i className="fa fa-star-o" />
                    </li>
                    <li>
                    <i className="fa fa-star-o" />
                    </li>
                </ul>
                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} size="lg">
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className = "col-lg-6 col-12">
                            <img src={prod ? prod.pictures[0] : null} width={300} height={300}></img>
                        </div>
                        <div className = "col-lg-6 col-12">
                            <div className="row">
                                <h2>{prod ? prod.name : null}</h2>
                            </div>
                            <div className="row">
                                <span className="rating__and__review">
                                    {prod ? prod.sale : null}% OFF
                                </span>
                            </div>
                            <div className="row">
                                <div className="price-box-3">
                                    <div className="s-price-box">
                                        <span className="new-price">{prod ? newPrice : null} VND</span>
                                        <span className="old-price">{prod ? prod.price : null} VND</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="quick-desc">
                                    {prod.info.description}
                                </div>
                            </div>
                            <div className="row">
                                <div className="addtocart-btn">
                                    <a style={{cursor:'pointer'}}onClick={() => handleItem()}>Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        {/* <ViewModal /> */}
        </div>
    )
}

export default SingleProduct