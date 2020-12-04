import React from 'react';
import HomePage from './pages/Home/HomePage'
import ShopPage from './pages/Shop/ShopPage'
import AccountPage from './pages/Account/AccountPage'
import ForgotPassword from './pages/Account/ForgotPassword'
import CartPage from './pages/Cart/CartPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage'
import MyBookPage from './pages/MyBook/MyBookPage'
import {Route} from 'react-router-dom'
import Footer from "../src/components/Layout/Footer/"
import MyTranPage from './pages/MyTran/MyTranPage';
import VerifyMail from './components/VerifyMail/VerifyMail'
function App() {
  	return (
		<div className="App">
			<div className="wrapper" id="wrapper">				
				<Route exact path="/" component={HomePage} />
				<Route exact path="/Account" component={AccountPage}/>
				<Route exact path="/ForgotPassword" component={ForgotPassword}/>
				<Route exact path="/Auth/:id" component={VerifyMail}/>
				<Route exact path="/Cart" component={CartPage}/>
				<Route exact path="/Shop" component={ShopPage}/>
				<Route exact path="/Profile" component={ProfilePage}/>
				<Route exact path="/MyBook" component={MyBookPage}/>
				<Route exact path="/MyTran" component={MyTranPage}/>
				<Route exact path="/ProductDetail" component={ProductDetailPage}/>
				<Footer/>
			</div>
		</div>);
}

export default App;
