import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {logout} from '../../../store/user'
const HeaderLink = props => {
	const dispatch = useDispatch()
	const user = useSelector(state => {return state.user})
	const cartitem = useSelector(state => {return state.cartitem})
    return(
        <header id="wn__header" className="header__area header__absolute sticky__header">
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
								<li className="drop with--one--item"><a href="index.html">Home</a></li>
								<li className="drop"><Link to="/Shop">Shop</Link>
									<div className="megamenu mega03">
										<ul className="item item03">
											<li className="title">Shop Layout</li>
											<li><a href="shop-grid.html">Shop Grid</a></li>
											<li><a href="single-product.html">Single Product</a></li>
										</ul>
										<ul className="item item03">
											<li className="title">Shop Page</li>
											<li><a href="my-account.html">My Account</a></li>
											<li><a href="cart.html">Cart Page</a></li>
											<li><a href="checkout.html">Checkout Page</a></li>
											<li><a href="wishlist.html">Wishlist Page</a></li>
											<li><a href="error404.html">404 Page</a></li>
											<li><a href="faq.html">Faq Page</a></li>
										</ul>
										<ul className="item item03">
											<li className="title">Bargain Books</li>
											<li><a href="shop-grid.html">Bargain Bestsellers</a></li>
											<li><a href="shop-grid.html">Activity Kits</a></li>
											<li><a href="shop-grid.html">B&N classNameics</a></li>
											<li><a href="shop-grid.html">Books Under $5</a></li>
											<li><a href="shop-grid.html">Bargain Books</a></li>
										</ul>
									</div>
								</li>
								<li className="drop"><a href="shop-grid.html">Books</a>
									<div className="megamenu mega03">
										<ul className="item item03">
											<li className="title">Categories</li>
											<li><a href="shop-grid.html">Biography </a></li>
											<li><a href="shop-grid.html">Business </a></li>
											<li><a href="shop-grid.html">Cookbooks </a></li>
											<li><a href="shop-grid.html">Health & Fitness </a></li>
											<li><a href="shop-grid.html">History </a></li>
										</ul>
										<ul className="item item03">
											<li className="title">Customer Favourite</li>
											<li><a href="shop-grid.html">Mystery</a></li>
											<li><a href="shop-grid.html">Religion & Inspiration</a></li>
											<li><a href="shop-grid.html">Romance</a></li>
											<li><a href="shop-grid.html">Fiction/Fantasy</a></li>
											<li><a href="shop-grid.html">Sleeveless</a></li>
										</ul>
										<ul className="item item03">
											<li className="title">Collections</li>
											<li><a href="shop-grid.html">Science </a></li>
											<li><a href="shop-grid.html">Fiction/Fantasy</a></li>
											<li><a href="shop-grid.html">Self-Improvemen</a></li>
											<li><a href="shop-grid.html">Home & Garden</a></li>
											<li><a href="shop-grid.html">Humor Books</a></li>
										</ul>
									</div>
								</li>
								<li className="drop"><a href="shop-grid.html">Kids</a>
									<div className="megamenu mega02">
										<ul className="item item02">
											<li className="title">Top Collections</li>
											<li><a href="shop-grid.html">American Girl</a></li>
											<li><a href="shop-grid.html">Diary Wimpy Kid</a></li>
											<li><a href="shop-grid.html">Finding Dory</a></li>
											<li><a href="shop-grid.html">Harry Potter</a></li>
											<li><a href="shop-grid.html">Land of Stories</a></li>
										</ul>
										<ul className="item item02">
											<li className="title">More For Kids</li>
											<li><a href="shop-grid.html">B&N Educators</a></li>
											<li><a href="shop-grid.html">B&N Kids' Club</a></li>
											<li><a href="shop-grid.html">Kids' Music</a></li>
											<li><a href="shop-grid.html">Toys & Games</a></li>
											<li><a href="shop-grid.html">Hoodies</a></li>
										</ul>
									</div>
								</li>
								<li className="drop"><a href="#">Pages</a>
									<div className="megamenu dropdown">
										<ul className="item item01">
											<li><a href="about.html">About Page</a></li>
											<li className="label2"><a href="portfolio.html">Portfolio</a>
												<ul>
													<li><a href="portfolio.html">Portfolio</a></li>
													<li><a href="portfolio-details.html">Portfolio Details</a></li>
												</ul>
											</li>
											<li><a href="my-account.html">My Account</a></li>
											<li><a href="cart.html">Cart Page</a></li>
											<li><a href="checkout.html">Checkout Page</a></li>
											<li><a href="wishlist.html">Wishlist Page</a></li>
											<li><a href="error404.html">404 Page</a></li>
											<li><a href="faq.html">Faq Page</a></li>
											<li><a href="team.html">Team Page</a></li>
										</ul>
									</div>
								</li>
								<li className="drop"><a href="blog.html">Blog</a>
									<div className="megamenu dropdown">
										<ul className="item item01">
											<li><a href="blog.html">Blog Page</a></li>
											<li><a href="blog-details.html">Blog Details</a></li>
										</ul>
									</div>
								</li>
								<li><Link to="/Contact">Contact</Link></li>
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
															<img src={user.photoUser}/>
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