import React, {useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ProductItem from '../../components/ProductItem'
import HeaderContent from "../../components/Layout/Header/HeaderContent"
import {loadScripts} from '../../_utils/'
import {gett} from '../../store/listitem'
const MapVipper = (props) => {
	console.log('hi ' ,props)
	return props.data ? props.data.map((val,i) => {
		if(val.sale >= 40)
				return <ProductItem singleItem={val} key={val._id}/>
	}) : <p>a</p>
}
const HomePage = () => {
	const dispatch = useDispatch()
   
	const listItem = useSelector(state => state.listitem)

	useEffect(() => {
		dispatch(gett())
		console.log('dispatch ', dispatch(gett()))
		document.onload = loadScripts()
	}, [])
	if(listItem) {
		console.log('Hello!')
	}
	return <React.Fragment>
			{console.log(listItem)}
			<HeaderContent/>
            <section className="wn__product__area brown--color pt--80  pb--30">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section__title text-center">
							<h2 className="title__be--2" onClick={() => dispatch(gett())}>New <span className="color--theme">Products</span></h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
						</div>
					</div>
				</div>
				<div className="furniture--4 border--round arrows_style owl-carousel owl-theme row mt--50">
					{listItem ? <MapVipper data={listItem}/> : <></>}
					{/* <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>					 */}
				</div>  
			</div>
			</section>
        {/* NewsPaper Section */}
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
		{/* End NewsPaper Section */}
		{/* All Product Section */}
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
						<div className="product__nav nav justify-content-center" role="tablist" >
                            <a className="nav-item nav-link active" data-toggle="tab" role="tab">ALL</a>
                            <a className="nav-item nav-link" data-toggle="tab" role="tab">IT</a>
                            <a className="nav-item nav-link" data-toggle="tab" role="tab">Love</a>
                            <a className="nav-item nav-link" data-toggle="tab" role="tab">Politics</a>
                            <a className="nav-item nav-link" data-toggle="tab" role="tab">Cook</a>
                        </div>
					</div>
				</div>
				<div className="tab__container mt--60">
					<div className="product__indicator--4 arrows_style owl-carousel owl-theme">						
							{/* {listItem ? 
							<>
							 {listItem.slice(0,9).map((val,i) => {
								console.log('value ', val)
								return <div className="single__product" key={val._id}>
											<ProductItem singleItem={val} type="All" /> 
											<ProductItem singleItem={listItem[i+10]} type="All"/>
										</div>})}
								
							</>											
							: <React.Fragment></React.Fragment> } */}
							<ProductItem/>
							<ProductItem/>
						</div>
					</div>					
				  {/* <div className="row single__tab tab-pane fade show active" id="nav-all" role="tabpanel">
						<ProductItem type = 'All'/>
					</div>
					<div className="row single__tab tab-pane fade" id="nav-biographic" role="tabpanel">
						<ProductItem type = 'IT'/>
					</div>
					<div className="row single__tab tab-pane fade" id="nav-adventure" role="tabpanel">
						<ProductItem type = 'Love'/>
					</div>
					<div className="row single__tab tab-pane fade" id="nav-children" role="tabpanel">
						<ProductItem type = 'Politics'/>
					</div>
					<div className="row single__tab tab-pane fade" id="nav-cook" role="tabpanel">
						<ProductItem type = 'Cook'/>
					</div> */}
				{/* </div>  */}
		 	</div>
		</section>
			{/* <AllProduct/> */}
		{/* End AllProduct Section */}
		{/* </Layout> */}
		</React.Fragment>
}

export default HomePage