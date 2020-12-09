import React, {useState} from 'react'
import {Modal, ModalHeader, ModalBody} from 'reactstrap'
import {Link} from 'react-router-dom'
import ViewModal from '../QuickView/'
const ProductItem = props => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    let newPrice = props.singleItem ? props.singleItem.price*(props.singleItem.sale/100) : null
    if(props.type)
             return (    <>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product product__style--3">
                            <div className="product__thumb">
                                <a className="first__img" href="single-product.html"><img src="images/books/1.jpg" alt="product image"/></a>
                                <a className="second__img animation1" href="single-product.html"><img src="images/books/2.jpg" alt="product image"/></a>
                                <div className="hot__box">
                                    <span className="hot-label">{props.singleItem ? props.singleItem.sale : 10}% Off</span>
                                </div>
                            </div>
                            <div className="product__content content--center content--center">
                                <h4><a>{props.singleItem ? props.singleItem.name : null}</a></h4>
                                <ul className="prize d-flex">
                                    <li>{props.singleItem ? props.singleItem.price*(props.singleItem.sale/100) : 0} VND</li>
                                    <li className="old_prize">{props.singleItem ? props.singleItem.price : null} VND</li>
                                </ul>
                                <div className="action">
                                    <div className="actions_inner">
                                        <ul className="add_to_links">
                                            <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
                                            <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
                                            <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                            <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" data-target=".bd-example-modal-lg" onClick={toggle}><i className="bi bi-search"></i></a></li>                               
                                        </ul>
                                    </div>
                                </div>
                                <div className="product__hover--content">
                                    <ul className="rating d-flex">
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                     <Modal isOpen={modal} toggle={toggle} size="lg">
                        <ModalHeader toggle={toggle}>Book Detail</ModalHeader>
                            <ModalBody>
                                <div className="row">
                                    <div className = "col-lg-6 col-12">
                                        <img src={props.singleItem ? props.singleItem.pictures : null} width={300} height={300}></img>
                                    </div>
                                    <div className = "col-lg-6 col-12">
                                        <div className="row">
                                            <h2>{props.singleItem ? props.singleItem.name : null}</h2>
                                        </div>
                                        <div className="row">
                                            <span className="rating__and__review">
                                                {props.singleItem ? props.singleItem.sale : null}% OFF
                                            </span>
                                        </div>
                                        <div className="row">
                                            <div className="price-box-3">
		                                        <div className="s-price-box">
                                                    <span className="new-price">{props.singleItem ? newPrice : null} VND</span>
                                                    <span className="old-price">{props.singleItem ? props.singleItem.price : null} VND</span>
		                                        </div>
		                                    </div>
                                        </div>
                                        <div className="row">
                                            <div className="quick-desc">
                                                {props.singleItem.info.description}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <button className="btn btn-primary">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                        </Modal>
                    <ViewModal />
                </>
              )
    else return(
        <div className="product product__style--3">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="product__thumb">
                    <a className="first__img" ><img src="images/books/1.jpg" alt="product image"/></a>
                    <a className="second__img animation1" ><img src="images/books/2.jpg" alt="product image"/></a>
                    <div className="hot__box">
                        <span className="hot-label">BEST OFFER 
                        {/* {props.singleItem ? props.singleItem.sale : null} */}
                        % OFF</span>
                    </div>
                </div>
                <div className="product__content content--center">
                    <h4><a> 
                        Cc
                        {/* {props.singleItem ? props.singleItem.name : null} */}
                    </a></h4>
                    <ul className="prize d-flex">
                        <li>
                            VND
                            {/* {props.singleItem ? props.singleItem.price*(props.singleItem.sale/100) : null} VND */}
                        </li>
                        <li className="old_prize">
                            {/* {props.singleItem ? props.singleItem.price : null}*/}
                            VND
                            </li>
                    </ul>
                    <div className="action">
                        <div className="actions_inner">
                            <ul className="add_to_links">
                                <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
                                <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
                                <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link"><i className="bi bi-search" onClick={toggle}></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="product__hover--content">
                        <ul className="rating d-flex">
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem