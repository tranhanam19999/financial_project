import React , { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from "../../components/Layout/Header/"
import { loadScripts } from '../../_utils'
import {gett} from '../../store/listitem'
import {importToCart} from '../../store/cartitem'
import SingleProduct from '../../components/SingleProduct/'
const ProductDetailPage = (props) => {
  const dispatch = useDispatch()
  const listItem = useSelector(state => {return state.listitem})
  const cartitem = useSelector(state => {return state.cartitem})
  useEffect(() => {
    dispatch(gett())
    loadScripts()
  },[])
  let prod = props.location.state
  const handleItem = () => {
    let temp = cartitem.some(val => {
        return val == prod  
    })
    if(temp)
        alert('Duplicate Item!')
    else
        dispatch(importToCart(prod))
  }
  return !prod ? <p>Please Select A Product!</p> : (
  <>
  <Header/>
  <div className="ht__bradcaump__area bg-image--6">
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="bradcaump__inner text-center">
                      <h2 className="bradcaump-title">Product Detail</h2>
                      <nav className="bradcaump-content">
                          <a className="breadcrumb_item" href="index.html">
                              Home
                          </a>
                          <span className="brd-separetor">/</span>
                          <span className="breadcrumb_item active">Product Detail</span>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="maincontent bg--white pt--80 pb--55">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-12">
            <div className="wn__single__product">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="wn__fotorama__wrapper">
                    <div className="fotorama wn__fotorama__action" data-nav="thumbs">
                      <a href="1.jpg"><img src="images/product/1.jpg" alt="" /></a>
                      <a href="2.jpg"><img src="images/product/2.jpg" alt="" /></a>
                      <a href="3.jpg"><img src="images/product/3.jpg" alt="" /></a>
                      <a href="4.jpg"><img src="images/product/4.jpg" alt="" /></a>
                      <a href="5.jpg"><img src="images/product/5.jpg" alt="" /></a>
                      <a href="6.jpg"><img src="images/product/6.jpg" alt="" /></a>
                      <a href="7.jpg"><img src="images/product/7.jpg" alt="" /></a>
                      <a href="8.jpg"><img src="images/product/8.jpg" alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="product__info__main">
                    <h1>{prod.name}</h1>
                    <div className="product-reviews-summary d-flex">
                      <ul className="rating-summary d-flex">
                        <li><i className="zmdi zmdi-star-outline" /></li>
                        <li><i className="zmdi zmdi-star-outline" /></li>
                        <li><i className="zmdi zmdi-star-outline" /></li>
                        <li className="off"><i className="zmdi zmdi-star-outline" /></li>
                        <li className="off"><i className="zmdi zmdi-star-outline" /></li>
                      </ul>
                    </div>
                    <div className="price-box d-flex">
                      <span>{prod.price - prod.price* ( prod.sale / 100 )}đ</span>
                    </div>
                    <div className="product__overview">
                      <p>Author: <b>{prod.info.author}</b></p>
                      <p>Language: <b>{prod.info.language}</b></p>
                    </div>
                    <div className="box-tocart d-flex">
                      <div className="addtocart__actions">
                        <button className="tocart" onClick={() => handleItem()} title="Add to Cart">Add to Cart</button>
                      </div>
                      <div className="product-addto-links clearfix">
                        <a className="wishlist" href="#" />
                        <a className="compare" href="#" />
                      </div>
                    </div>
                    <div className="product_meta">
                      <span className="posted_in">Categories:  
                        <a href="#">{prod.info.category}</a>
                      </span>
                    </div>
                    <div className="product-share">
                      <ul>
                        <li className="categories-title">Contact Author:</li>
                        <li>
                          <a href="#">
                            <i className="icon-social-tumblr icons" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-social-facebook icons" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-social-linkedin icons" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product__info__detailed">
              <div className="pro_details_nav nav justify-content-start" role="tablist">
                <a className="nav-item nav-link active" data-toggle="tab" href="#nav-details" role="tab">Details</a>
                <a className="nav-item nav-link" data-toggle="tab" href="#nav-review" role="tab">Reviews</a>
              </div>
              <div className="tab__container">
                {/* Start Single Tab Content */}
                <div className="pro__tab_label tab-pane fade show active" id="nav-details" role="tabpanel">
                  <div className="description__attribute">
                    <p>{prod.info.description}</p>
                    <ul>
                      <li>• Publisher: <b>{prod.info.publisher}</b></li>
                      <li>• Year Published: <b>{prod.info.yearPublished}</b></li>
                      <li>• Number of Pages: <b>{prod.info.numberOfPages}</b></li>
                    </ul>
                  </div>
                </div>
                {/* End Single Tab Content */}
              </div>
            </div>
            <div className="wn__related__product pt--80 pb--50">
              <div className="section__title text-center">
                <h2 className="title__be--2">Related Products</h2>
              </div>
              <div className="row mt--60">
                <div className="productcategory__slide--2 arrows_style owl-carousel owl-theme">
                  {/* Start Single Product */}
                  {
                    !listItem ? <></> : 
                    (() => {
                      let temp = listItem.filter(value => {
                        return value.info.category[0] === prod.info.category[0]
                      })
                      return temp.map((val,i) => {
                        console.log('im val ', val)
                        return <SingleProduct key={val._id + i} prod={val}/>
                      })
                    })()
                  }
                  {/* Start Single Product */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 md-mt-40 sm-mt-40">
            <div className="shop__sidebar">
              <aside className="wedget__categories sidebar--banner">
                <img src="images/others/banner_left.jpg" alt="banner images" />
                <div className="text">
                  <h2>new products</h2>
                  <h6>save up to <br /> <strong>40%</strong>off</h6>
                </div>
              </aside>
              <hr/>
              <aside className="wedget__categories sidebar--banner">
                <img src="images/others/banner_left.jpg" alt="banner images" />
                <div className="text">
                  <h2>new products</h2>
                  <h6>save up to <br /> <strong>40%</strong>off</h6>
                </div>
              </aside>
              <hr/>
              <aside className="wedget__categories sidebar--banner">
                <img src="images/others/banner_left.jpg" alt="banner images" />
                <div className="text">
                  <h2>new products</h2>
                  <h6>save up to <br /> <strong>40%</strong>off</h6>
                </div>
              </aside>
              <hr/>
              <aside className="wedget__categories sidebar--banner">
                <img src="images/others/banner_left.jpg" alt="banner images" />
                <div className="text">
                  <h2>new products</h2>
                  <h6>save up to <br /> <strong>40%</strong>off</h6>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div> </>)
}
export default ProductDetailPage