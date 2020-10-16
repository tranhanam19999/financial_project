import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderMain from './header/index'
function App() {
  return (
    <div className="App">
      <div className="wrapper" id="wrapper">
		<HeaderMain/>
		<div className="brown--color box-search-content search_active block-bg close__top">
			<form id="search_mini_form" className="minisearch" action="#">
				<div className="field__search">
					<input type="text" placeholder="Search entire store here..."/>
					<div className="action">
						<a href="#"><i className="zmdi zmdi-search"></i></a>
					</div>
				</div>
			</form>
			<div className="close__wrap">
				<span>close</span>
			</div>
		</div>
        <div className="slider-area brown__nav slider--15 slide__activation slide__arrow01 owl-carousel owl-theme">
	        <div className="slide animation__style10 bg-image--1 fullscreen align__center--left">
	            <div className="container">
	            	<div className="row">
	            		<div className="col-lg-12">
	            			<div className="slider__content">
		            			<div className="contentbox">
		            				<h2>Buy <span>your </span></h2>
		            				<h2>favourite <span>Book </span></h2>
		            				<h2>from <span>Here </span></h2>
				                   	<a className="shopbtn" href="#">shop now</a>
		            			</div>
	            			</div>
	            		</div>
	            	</div>
	            </div>
            </div>
	        <div className="slide animation__style10 bg-image--7 fullscreen align__center--left">
	            <div className="container">
	            	<div className="row">
	            		<div className="col-lg-12">
	            			<div className="slider__content">
		            			<div className="contentbox">
		            				<h2>Buy <span>your </span></h2>
		            				<h2>favourite <span>Book </span></h2>
		            				<h2>from <span>Here </span></h2>
				                   	<a className="shopbtn" href="#">shop now</a>
		            			</div>
	            			</div>
	            		</div>
	            	</div>
	            </div>
            </div>
        </div>
		<section className="wn__product__area brown--color pt--80  pb--30">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section__title text-center">
							<h2 className="title__be--2">New <span className="color--theme">Products</span></h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
						</div>
					</div>
				</div>
				<div className="furniture--4 border--round arrows_style owl-carousel owl-theme row mt--50">
					<div className="product product__style--3">
						<div className="col-lg-3 col-md-4 col-sm-6 col-12">
							<div className="product__thumb">
								<a className="first__img" href="single-product.html"><img src="images/books/1.jpg" alt="product image"/></a>
								<a className="second__img animation1" href="single-product.html"><img src="images/books/2.jpg" alt="product image"/></a>
								<div className="hot__box">
									<span className="hot-label">BEST SALLER</span>
								</div>
							</div>
							<div className="product__content content--center">
								<h4><a href="single-product.html">robin parrish</a></h4>
								<ul className="prize d-flex">
									<li>$35.00</li>
									<li className="old_prize">$35.00</li>
								</ul>
								<div className="action">
									<div className="actions_inner">
										<ul className="add_to_links">
											<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
											<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
											<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
											<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
					<div className="product product__style--3">
						<div className="col-lg-3 col-md-4 col-sm-6 col-12">
							<div className="product__thumb">
								<a className="first__img" href="single-product.html"><img src="images/books/3.jpg" alt="product image"/></a>
								<a className="second__img animation1" href="single-product.html"><img src="images/books/4.jpg" alt="product image"/></a>
								<div className="hot__box color--2">
									<span className="hot-label">HOT</span>
								</div>
							</div>
							<div className="product__content content--center">
								<h4><a href="single-product.html">The Remainng</a></h4>
								<ul className="prize d-flex">
									<li>$35.00</li>
									<li className="old_prize">$35.00</li>
								</ul>
								<div className="action">
									<div className="actions_inner">
										<ul className="add_to_links">
											<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
											<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
											<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
											<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
					<div className="product product__style--3">
						<div className="col-lg-3 col-md-4 col-sm-6 col-12">
							<div className="product__thumb">
								<a className="first__img" href="single-product.html"><img src="images/books/5.jpg" alt="product image"/></a>
								<a className="second__img animation1" href="single-product.html"><img src="images/books/6.jpg" alt="product image"/></a>
								<div className="hot__box">
									<span className="hot-label">BEST SALLER</span>
								</div>
							</div>
							<div className="product__content content--center">
								<h4><a href="single-product.html">Bowen Greenwood</a></h4>
								<ul className="prize d-flex">
									<li>$40.00</li>
									<li className="old_prize">$35.00</li>
								</ul>
								<div className="action">
									<div className="actions_inner">
										<ul className="add_to_links">
											<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
											<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
											<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
											<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
					<div className="product product__style--3">
						<div className="col-lg-3 col-md-4 col-sm-6 col-12">
							<div className="product__thumb">
								<a className="first__img" href="single-product.html"><img src="images/books/7.jpg" alt="product image"/></a>
								<a className="second__img animation1" href="single-product.html"><img src="images/books/8.jpg" alt="product image"/></a>
								<div className="hot__box">
									<span className="hot-label">HOT</span>
								</div>
							</div>
							<div className="product__content content--center">
								<h4><a href="single-product.html">Lando</a></h4>
								<ul className="prize d-flex">
									<li>$35.00</li>
									<li className="old_prize">$50.00</li>
								</ul>
								<div className="action">
									<div className="actions_inner">
										<ul className="add_to_links">
											<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
											<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
											<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
											<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
					<div className="product product__style--3">
						<div className="col-lg-3 col-md-4 col-sm-6 col-12">
							<div className="product__thumb">
								<a className="first__img" href="single-product.html"><img src="images/books/9.jpg" alt="product image"/></a>
								<a className="second__img animation1" href="single-product.html"><img src="images/books/10.jpg" alt="product image"/></a>
								<div className="hot__box">
									<span className="hot-label">HOT</span>
								</div>
							</div>
							<div className="product__content content--center">
								<h4><a href="single-product.html">Doctor Wldo</a></h4>
								<ul className="prize d-flex">
									<li>$35.00</li>
									<li className="old_prize">$35.00</li>
								</ul>
								<div className="action">
									<div className="actions_inner">
										<ul className="add_to_links">
											<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
											<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
											<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
											<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
					<div className="product product__style--3">
						<div className="col-lg-3 col-md-4 col-sm-6 col-12">
							<div className="product__thumb">
								<a className="first__img" href="single-product.html"><img src="images/books/11.jpg" alt="product image"/></a>
								<a className="second__img animation1" href="single-product.html"><img src="images/books/2.jpg" alt="product image"/></a>
								<div className="hot__box">
									<span className="hot-label">BEST SALER</span>
								</div>
							</div>
							<div className="product__content content--center content--center">
								<h4><a href="single-product.html">Ghost</a></h4>
								<ul className="prize d-flex">
									<li>$50.00</li>
									<li className="old_prize">$35.00</li>
								</ul>
								<div className="action">
									<div className="actions_inner">
										<ul className="add_to_links">
											<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
											<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
											<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
											<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
				</div>
			</div>
		</section>

		<section className="wn__newsletter__area bg-image--2">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 offset-lg-5 col-md-12 col-12 ptb--150">
						<div className="section__title text-center">
							<h2>Stay With Us</h2>
						</div>
						<div className="newsletter__block text-center">
							<p>Subscribe to our newsletters now and stay up-to-date with new collections, the latest lookbooks and exclusive offers.</p>
							<form action="#">
								<div className="newsletter__box">
									<input type="email" placeholder="Enter your e-mail"/>
									<button>Subscribe</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="wn__bestseller__area bg--white pt--80  pb--30">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section__title text-center">
							<h2 className="title__be--2">All <span className="color--theme">Products</span></h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
						</div>
					</div>
				</div>
				<div className="row mt--50">
					<div className="col-md-12 col-lg-12 col-sm-12">
						<div className="product__nav nav justify-content-center" role="tablist">
                            <a className="nav-item nav-link active" data-toggle="tab" href="#nav-all" role="tab">ALL</a>
                            <a className="nav-item nav-link" data-toggle="tab" href="#nav-biographic" role="tab">BIOGRAPHIC</a>
                            <a className="nav-item nav-link" data-toggle="tab" href="#nav-adventure" role="tab">ADVENTURE</a>
                            <a className="nav-item nav-link" data-toggle="tab" href="#nav-children" role="tab">CHILDREN</a>
                            <a className="nav-item nav-link" data-toggle="tab" href="#nav-cook" role="tab">COOK</a>
                        </div>
					</div>
				</div>
				<div className="tab__container mt--60">
					<div className="row single__tab tab-pane fade show active" id="nav-all" role="tabpanel">
						<div className="product__indicator--4 arrows_style owl-carousel owl-theme">
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/1.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/2.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALER</span>
											</div>
										</div>
										<div className="product__content content--center content--center">
											<h4><a href="single-product.html">Ghost</a></h4>
											<ul className="prize d-flex">
												<li>$50.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/3.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/9.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALER</span>
											</div>
										</div>
										<div className="product__content content--center content--center">
											<h4><a href="single-product.html">Ghost</a></h4>
											<ul className="prize d-flex">
												<li>$50.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/5.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/6.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">HOT</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Doctor Wldo</a></h4>
											<ul className="prize d-flex">
												<li>$35.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/7.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/8.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">HOT</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Doctor Wldo</a></h4>
											<ul className="prize d-flex">
												<li>$35.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/9.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/7.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">HOT</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Lando</a></h4>
											<ul className="prize d-flex">
												<li>$35.00</li>
												<li className="old_prize">$50.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/11.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/5.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">HOT</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Lando</a></h4>
											<ul className="prize d-flex">
												<li>$35.00</li>
												<li className="old_prize">$50.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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

							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/8.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/4.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/12.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/7.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/3.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/5.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/2.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/7.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
						</div>
					</div>
					<div className="row single__tab tab-pane fade" id="nav-biographic" role="tabpanel">
						<div className="product__indicator--4 arrows_style owl-carousel owl-theme">
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/9.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/1.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/10.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/8.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/3.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/5.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/1.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/4.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/2.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/4.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/6.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/9.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/11.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/2.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/12.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/8.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/3.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/4.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/9.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/5.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
						</div>
					</div>
          </div>
					<div className="row single__tab tab-pane fade" id="nav-adventure" role="tabpanel">
						<div className="product__indicator--4 arrows_style owl-carousel owl-theme">
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/8.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/2.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/12.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/6.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/11.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/1.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/5.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/11.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/4.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/10.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/3.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/1.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/9.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/4.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/7.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/3.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/6.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/4.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/4.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/10.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
						</div>
					</div>
					<div className="row single__tab tab-pane fade" id="nav-children" role="tabpanel">
						<div className="product__indicator--4 arrows_style owl-carousel owl-theme">
							<div className="single__product">
	
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/3.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/1.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/6.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/4.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
                </div>
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/10.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/12.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/7.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/9.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/2.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/5.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/4.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/2.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/12.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/6.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/9.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/2.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/8.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/4.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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

								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/1.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/7.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
						</div>
					<div className="row single__tab tab-pane fade" id="nav-cook" role="tabpanel">
						<div className="product__indicator--4 arrows_style owl-carousel owl-theme">
							<div className="single__product">

								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/6.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/3.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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

								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/10.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/9.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
		
							</div>
							<div className="single__product">
						
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/9.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/6.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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

								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/8.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/2.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
		
							</div>
							<div className="single__product">

								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/3.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/7.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
				
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/9.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/4.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/2.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/7.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/6.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/4.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
							</div>
							<div className="single__product">
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/8.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/3.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
								<div className="col-lg-3 col-md-4 col-sm-6 col-12">
									<div className="product product__style--3">
										<div className="product__thumb">
											<a className="first__img" href="single-product.html"><img src="images/books/2.jpg" alt="product image"/></a>
											<a className="second__img animation1" href="single-product.html"><img src="images/books/6.jpg" alt="product image"/></a>
											<div className="hot__box">
												<span className="hot-label">BEST SALLER</span>
											</div>
										</div>
										<div className="product__content content--center">
											<h4><a href="single-product.html">Bowen Greenwood</a></h4>
											<ul className="prize d-flex">
												<li>$40.00</li>
												<li className="old_prize">$35.00</li>
											</ul>
											<div className="action">
												<div className="actions_inner">
													<ul className="add_to_links">
														<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
														<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
														<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
														<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
              </div>
							</div>
						</div>
				</div>
		</section>
		<section className="wn__recent__post bg--gray ptb--80">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section__title text-center">
							<h2 className="title__be--2">Our <span className="color--theme">Blog</span></h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
						</div>
					</div>
				</div>
				<div className="row mt--50">
					<div className="col-md-6 col-lg-4 col-sm-12">
						<div className="post__itam">
							<div className="content">
								<h3><a href="blog-details.html">International activities of the Frankfurt Book </a></h3>
								<p>We are proud to announce the very first the edition of the frankfurt news.We are proud to announce the very first of  edition of the fault frankfurt news for us.</p>
								<div className="post__time">
									<span className="day">Dec 06, 18</span>
									<div className="post-meta">
										<ul>
											<li><a href="#"><i className="bi bi-love"></i>72</a></li>
											<li><a href="#"><i className="bi bi-chat-bubble"></i>27</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 col-sm-12">
						<div className="post__itam">
							<div className="content">
								<h3><a href="blog-details.html">Reading has a signficant info  number of benefits</a></h3>
								<p>Find all the information you need to ensure your experience.Find all the information you need to ensure your experience . Find all the information you of.</p>
								<div className="post__time">
									<span className="day">Mar 08, 18</span>
									<div className="post-meta">
										<ul>
											<li><a href="#"><i className="bi bi-love"></i>72</a></li>
											<li><a href="#"><i className="bi bi-chat-bubble"></i>27</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 col-sm-12">
						<div className="post__itam">
							<div className="content">
								<h3><a href="blog-details.html">The London Book Fair is to be packed with exciting </a></h3>
								<p>The London Book Fair is the global area inon marketplace for rights negotiation.The year  London Book Fair is the global area inon forg marketplace for rights.</p>
								<div className="post__time">
									<span className="day">Nov 11, 18</span>
									<div className="post-meta">
										<ul>
											<li><a href="#"><i className="bi bi-love"></i>72</a></li>
											<li><a href="#"><i className="bi bi-chat-bubble"></i>27</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="best-seel-area pt--80 pb--60">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section__title text-center pb--50">
							<h2 className="title__be--2">Best <span className="color--theme">Seller </span></h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
						</div>
					</div>
				</div>
			</div>
			<div className="slider center">
				<div className="product product__style--3">
					<div className="product__thumb">
						<a className="first__img" href="single-product.html"><img src="images/best-sell-product/1.jpg" alt="product image"/></a>
					</div>
					<div className="product__content content--center">
						<div className="action">
							<div className="actions_inner">
								<ul className="add_to_links">
									<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
									<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
									<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
									<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
				<div className="product product__style--3">
					<div className="product__thumb">
						<a className="first__img" href="single-product.html"><img src="images/best-sell-product/2.jpg" alt="product image"/></a>
					</div>
					<div className="product__content content--center">
						<div className="action">
							<div className="actions_inner">
								<ul className="add_to_links">
									<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
									<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
									<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
									<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
				<div className="product product__style--3">
					<div className="product__thumb">
						<a className="first__img" href="single-product.html"><img src="images/best-sell-product/3.jpg" alt="product image"/></a>
					</div>
					<div className="product__content content--center">
						<div className="action">
							<div className="actions_inner">
								<ul className="add_to_links">
									<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
									<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
									<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
									<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
				<div className="product product__style--3">
					<div className="product__thumb">
						<a className="first__img" href="single-product.html"><img src="images/best-sell-product/4.jpg" alt="product image"/></a>
					</div>
					<div className="product__content content--center">
						<div className="action">
							<div className="actions_inner">
								<ul className="add_to_links">
									<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
									<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
									<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
									<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
				<div className="product product__style--3">
					<div className="product__thumb">
						<a className="first__img" href="single-product.html"><img src="images/best-sell-product/5.jpg" alt="product image"/></a>
					</div>
					<div className="product__content content--center">
						<div className="action">
							<div className="actions_inner">
								<ul className="add_to_links">
									<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
									<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
									<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
									<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
				<div className="product product__style--3">
					<div className="product__thumb">
						<a className="first__img" href="single-product.html"><img src="images/best-sell-product/6.jpg" alt="product image"/></a>
					</div>
					<div className="product__content content--center">
						<div className="action">
							<div className="actions_inner">
								<ul className="add_to_links">
									<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
									<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
									<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
									<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
				<div className="product product__style--3">
					<div className="product__thumb">
						<a className="first__img" href="single-product.html"><img src="images/best-sell-product/7.jpg" alt="product image"/></a>
					</div>
					<div className="product__content content--center">
						<div className="action">
							<div className="actions_inner">
								<ul className="add_to_links">
									<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
									<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
									<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
									<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
				<div className="product product__style--3">
					<div className="product__thumb">
						<a className="first__img" href="single-product.html"><img src="images/best-sell-product/8.jpg" alt="product image"/></a>
					</div>
					<div className="product__content content--center">
						<div className="action">
							<div className="actions_inner">
								<ul className="add_to_links">
									<li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
									<li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full"></i></a></li>
									<li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
									<li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search"></i></a></li>
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
		</section>
		<footer id="wn__footer" className="footer__area bg__cat--8 brown--color">
			<div className="footer-static-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="footer__widget footer__menu">
								<div className="ft__logo">
									<a href="index.html">
										<img src="images/logo/3.png" alt="logo"/>
									</a>
									<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered duskam alteration variations of passages</p>
								</div>
								<div className="footer__content">
									<ul className="social__net social__net--2 d-flex justify-content-center">
										<li><a href="#"><i className="bi bi-facebook"></i></a></li>
										<li><a href="#"><i className="bi bi-google"></i></a></li>
										<li><a href="#"><i className="bi bi-twitter"></i></a></li>
										<li><a href="#"><i className="bi bi-linkedin"></i></a></li>
										<li><a href="#"><i className="bi bi-youtube"></i></a></li>
									</ul>
									<ul className="mainmenu d-flex justify-content-center">
										<li><a href="index.html">Trending</a></li>
										<li><a href="index.html">Best Seller</a></li>
										<li><a href="index.html">All Product</a></li>
										<li><a href="index.html">Wishlist</a></li>
										<li><a href="index.html">Blog</a></li>
										<li><a href="index.html">Contact</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright__wrapper">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-12">
							<div className="copyright">
								<div className="copy__right__inner text-left">
									<p>Copyright <i className="fa fa-copyright"></i> <a href="https://freethemescloud.com/">Free themes Cloud.</a> All Rights Reserved</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12">
							<div className="payment text-right">
								<img src="images/icons/payment.png" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<div id="quickview-wrapper">
		    <div className="modal fade" id="productmodal" tabindex="-1" role="dialog">
		        <div className="modal-dialog modal__container" role="document">
		            <div className="modal-content">
		                <div className="modal-header modal__header">
		                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		                </div>
		                <div className="modal-body">
		                    <div className="modal-product">
		                        <div className="product-images">
		                            <div className="main-image images">
		                                <img alt="big images" src="images/product/big-img/1.jpg"/>
		                            </div>
		                        </div>
		                        <div className="product-info">
		                            <h1>Simple Fabric Bags</h1>
		                            <div className="rating__and__review">
		                                <ul className="rating">
		                                    <li><span className="ti-star"></span></li>
		                                    <li><span className="ti-star"></span></li>
		                                    <li><span className="ti-star"></span></li>
		                                    <li><span className="ti-star"></span></li>
		                                    <li><span className="ti-star"></span></li>
		                                </ul>
		                                <div className="review">
		                                    <a href="#">4 customer reviews</a>
		                                </div>
		                            </div>
		                            <div className="price-box-3">
		                                <div className="s-price-box">
		                                    <span className="new-price">$17.20</span>
		                                    <span className="old-price">$45.00</span>
		                                </div>
		                            </div>
		                            <div className="quick-desc">
		                                Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern look.
		                            </div>
		                            <div className="select__color">
		                                <h2>Select color</h2>
		                                <ul className="color__list">
		                                    <li className="red"><a title="Red" href="#">Red</a></li>
		                                    <li className="gold"><a title="Gold" href="#">Gold</a></li>
		                                    <li className="orange"><a title="Orange" href="#">Orange</a></li>
		                                    <li className="orange"><a title="Orange" href="#">Orange</a></li>
		                                </ul>
		                            </div>
		                            <div className="select__size">
		                                <h2>Select size</h2>
		                                <ul className="color__list">
		                                    <li className="l__size"><a title="L" href="#">L</a></li>
		                                    <li className="m__size"><a title="M" href="#">M</a></li>
		                                    <li className="s__size"><a title="S" href="#">S</a></li>
		                                    <li className="xl__size"><a title="XL" href="#">XL</a></li>
		                                    <li className="xxl__size"><a title="XXL" href="#">XXL</a></li>
		                                </ul>
		                            </div>
		                            <div className="social-sharing">
		                                <div className="widget widget_socialsharing_widget">
		                                    <h3 className="widget-title-modal">Share this product</h3>
		                                    <ul className="social__net social__net--2 d-flex justify-content-start">
		                                        <li className="facebook"><a href="#" className="rss social-icon"><i className="zmdi zmdi-rss"></i></a></li>
		                                        <li className="linkedin"><a href="#" className="linkedin social-icon"><i className="zmdi zmdi-linkedin"></i></a></li>
		                                        <li className="pinterest"><a href="#" className="pinterest social-icon"><i className="zmdi zmdi-pinterest"></i></a></li>
		                                        <li className="tumblr"><a href="#" className="tumblr social-icon"><i className="zmdi zmdi-tumblr"></i></a></li>
		                                    </ul>
		                                </div>
		                            </div>
		                            <div className="addtocart-btn">
		                                <a href="#">Add to cart</a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		      </div>
		    </div>
      </div>
    </div>
  );
}

export default App;
