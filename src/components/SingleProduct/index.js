import React from "react"

const SingleProduct = ({course}) => {
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
                <div className="hot__box">
                <span className="hot-label">BEST SALLER</span>
                </div>
            </div>
            <div className="product__content content--center">
                <h4>
                    <a href="single-product.html">{course.name}</a>
                </h4>
                <ul className="prize d-flex">
                <li>$35.00</li>
                <li className="old_prize">$35.00</li>
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
                        <a className="wishlist" href="wishlist.html">
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
                        className="quickview modal-view detail-link"
                        href="#productmodal"
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
        </div>
    )
}

export default SingleProduct