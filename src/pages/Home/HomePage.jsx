import React, {useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import HeaderContent from "../../components/Layout/Header/HeaderContent"
import {loadScripts} from '../../_utils/'
import {gett} from '../../store/listitem'
import SingleProduct from '../../components/SingleProduct'
import Header from '../../components/Layout/Header'

const HomePage = () => {
	const [categories,setCategories] = useState("IT")
	const dispatch = useDispatch()
   
	const listItem = useSelector(state => state.listitem)

	useEffect(() => {
		dispatch(gett())
		document.onload = loadScripts()
	}, [])
	if(listItem) {
	}
	return <React.Fragment>
			<Header/>
			<HeaderContent/>
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
				<div className="row mt--50">
					{listItem ? listItem.slice(5,8).map((val,i) => {
						return <SingleProduct key={val._id + i} prod={val}/>
					}) : <></>}	
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
							<h2 className="title__be--2"><span className="color--theme">On Sale Products</span></h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
						</div>
					</div>
				</div>
				<div className="row mt--50">
					<div className="col-md-12 col-lg-12 col-sm-12">
						<div className="product__nav nav justify-content-center" role="tablist" >
                            <a className="nav-item nav-link active" data-toggle="tab" role="tab" onClick={() => setCategories("IT")}>IT</a>
                            <a className="nav-item nav-link" data-toggle="tab" role="tab" onClick={() => setCategories("Love")}>Love</a>
                            <a className="nav-item nav-link" data-toggle="tab" role="tab" onClick={() => setCategories("Politics")}>Politics</a>
                            <a className="nav-item nav-link" data-toggle="tab" role="tab" onClick={() => setCategories("Cook")}>Cook</a>
                        </div>
					</div>
				</div>
				<div className="tab__container mt--60">
					<div className="row">	
							{
								(() => {
									let temp = listItem ? listItem.filter((val,i) => {
										return val.info.category == categories}) : null
									return temp ? temp.slice(0,3).map(val => {
										return <SingleProduct key={val._id} prod={val}/>
									}) : <></>
								})()		
							}
						</div>
					</div>					
		 	</div>
		</section>
		</React.Fragment>
}

export default HomePage