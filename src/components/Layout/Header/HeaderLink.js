import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {logout} from '../../../store/user'
const HeaderLink = () => {
	const dispatch = useDispatch()
	const user = useSelector(state => {return state.user})
	const cartitem = useSelector(state => {return state.cartitem})
    return(
        <header id="wn__header" className="header__area sticky__header">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 col-sm-6 col-6 col-lg-2">
						<div className="logo">
							<Link to="/">
								<img src="images/logo/logo.png" alt="logo images"/>
							</Link>
						</div>
					</div>
					<div className="col-lg-8 d-none d-lg-block">
						<nav className="mainmenu__nav">
							<ul className="meninmenu d-flex justify-content-start">
								<li className="drop with--one--item"><Link to="/">Home</Link></li>
								<li className="drop"><Link to="/Shop">Shop</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col-md-6 col-sm-6 col-6 col-lg-2">
						<ul className="header__sidebar__right d-flex justify-content-end align-items-center">
							<li className="shop_search"><a className="search__active" href="#"></a></li>
							<li className="wishlist"><a href="#"></a></li>
							<li className="shopcart">
								<a className="cartbox_active" href="#">
									<span className="product_qun">
										{cartitem ? cartitem.length : 0}
									</span>
								</a>
								<div className="block-minicart minicart__active">
									<div className="minicart-content-wrapper">
										<div className="micart__close">
											<span>close</span>
										</div>
										<div className="items-total d-flex justify-content-between">
											<span>{cartitem ? cartitem.length : 0} items</span>
											<span>Cart Subtotal</span>
										</div>
										<div className="total_amount text-right">
											<span>${cartitem ? cartitem.reduce((sum,val) => {																										
													return parseInt(sum += (val.price*(val.sale/100)))
												},0
											) : '$0'}</span>
										</div>
										<div className="mini_action cart">
											<Link className="cart__btn" to="/Cart">View and edit cart</Link>
										</div>
									</div>
								</div>
							</li>
							<li className="setting__bar__icon"><a className="setting__active" href="#"></a>
								<div className="searchbar__content setting__block">
									<div className="content-inner">
										<div className="switcher-currency">
											<strong className="label switcher-label">
												{user 
												? 	(
														<>
															<img width="150" height="150" src={user.photoUser}/>
															<p>{user.fullName}</p>
														</>
													) 
												: <span>Guest</span>}
											</strong>
											<div className="switcher-options">
												<div className="switcher-currency-trigger">
													<div className="setting__menu">
														{	
															user ? 
																<>
																	<span><Link to="/Profile">Profile</Link></span>
																	<span><Link to="/MyBook">My Book</Link></span>
																	<span><Link to="/MyTran">My Tran</Link></span>
																	<span><a onClick={() => {
																		try {
																			dispatch(logout())
																			localStorage.removeItem('user')
																			return (
																				<Redirect to="/"/>
																			)																		
																		}
																		catch (err) {
																			console.log('err ', err)
																		}}}>Signout</a></span>
																</>
															: 
																<>
																	<span><Link to="/Account">Sign In</Link></span>
																	<span><a href="#">Create An Account</a></span>
																</>
														}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="row d-none">
					<div className="col-lg-12 d-none">
						<nav className="mobilemenu__nav">
							<ul className="meninmenu">
								<li><a href="index.html">Home</a></li>
								<li><a href="#">Pages</a>
									<ul>
										<li><a href="about.html">About Page</a></li>
										<li><a href="portfolio.html">Portfolio</a>
											<ul>
												<li><a href="portfolio.html">Portfolio</a></li>
												<li><a href="portfolio-details.html">Portfolio Details</a></li>
											</ul>
										</li>
										<li><a href="my-account.html">My Account</a></li>
										<li><Link to="/Cart">Cart</Link></li>
										<li><a href="checkout.html">Checkout Page</a></li>
										<li><a href="wishlist.html">Wishlist Page</a></li>
										<li><a href="error404.html">404 Page</a></li>
										<li><a href="faq.html">Faq Page</a></li>
										<li><a href="team.html">Team Page</a></li>
									</ul>
								</li>
								<li><a href="shop-grid.html">Shop</a>
									<ul>
										<li><a href="shop-grid.html">Shop Grid</a></li>
										<li><a href="single-product.html">Single Product</a></li>
									</ul>
								</li>
								<li><a href="blog.html">Blog</a>
									<ul>
										<li><a href="blog.html">Blog Page</a></li>
										<li><a href="blog-details.html">Blog Details</a></li>
									</ul>
								</li>
								<li><a href="contact.html">Contact</a></li>
							</ul>
						</nav>
					</div>
				</div>
	            <div className="mobile-menu d-block d-lg-none">
	            </div>
			</div>		
		</header>
    )
}

export default HeaderLink