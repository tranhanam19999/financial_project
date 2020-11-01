import React, {useEffect} from 'react';
import Layout from './components/Layout'
import HomePage from './pages/Home/HomePage'
import Shop from './pages/Shop'
import ContactPage from './pages/Contact/ContactPage'
import AccountPage from './pages/Account/AccountPage'
import CartPage from './pages/Cart/CartPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import {Route} from 'react-router-dom'
import Header from "../src/components/Layout/Header/"
import Footer from "../src/components/Layout/Footer/"
function App() {
  	return (
		<div className="App">
			<div className="wrapper" id="wrapper">
				<Header/> 					
					<Route exact path="/" component={HomePage} />
						{/* <Layout Pages = {HomePage}/> */}
							
					{/* </Route> */}
					<Route exact path="/Contact" component={Layout} >
						{/* <Layout Pages = {ContactPage}/> */}
					</Route>
					<Route exact path="/Account" component={Layout}>
						<Layout Pages = {AccountPage}/>
					</Route>
					<Route exact path="/Cart" component={Layout}>
						<Layout Pages = {CartPage}/>
					</Route>
					<Route exact path="/Shop" component={Shop}/>
					<Route exact path="/Profile" component={ProfilePage}/>
						{/* <Layout Pages = {ProfilePage}/> */}
					{/* </Route> */}
				<Footer/>
			</div>
		</div>
  	);
}

export default App;
