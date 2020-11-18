import React from 'react';
import HomePage from './pages/Home/HomePage'
import ShopPage from './pages/Shop/ShopPage'
import ContactPage from './pages/Contact/ContactPage'
import AccountPage from './pages/Account/AccountPage'
import CartPage from './pages/Cart/CartPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import MyBookPage from './pages/MyBook/MyBookPage'
import {Route} from 'react-router-dom'
import Footer from "../src/components/Layout/Footer/"
import MyTranPage from './pages/MyTran/MyTranPage';
function App() {
  	return (
		<div className="App">
			<div className="wrapper" id="wrapper">				
				<Route exact path="/" component={HomePage} />
				<Route exact path="/Contact" component={ContactPage} />
				<Route exact path="/Account" component={AccountPage}/>
				<Route exact path="/Cart" component={CartPage}/>
				<Route exact path="/Shop" component={ShopPage}/>
				<Route exact path="/Profile" component={ProfilePage}/>
				<Route exact path="/MyBook" component={MyBookPage}/>
				<Route exact path="/MyTran" component={MyTranPage}/>
				<Footer/>
			</div>
		</div>);
}

export default App;
