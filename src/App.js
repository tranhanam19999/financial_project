import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderMain from './header/index'
import SBox from './containerHeader/subComponent/searchBox/index'
import SliderBox from './containerHeader/subComponent/slider/index'
import NewProduct from './sectionContainer/newProduct'
import NewsPaper from './sectionContainer/newsPaper'
import AllProduct from './sectionContainer/allProduct'
import RecentPost from './sectionContainer/recentPost'
import BestSold from './sectionContainer/bestSold'
import FooterContainer from './footerContainer/index'
import QuickView from './quickView/index'
function App() {
  return (
    <div className="App">
      <div className="wrapper" id="wrapper">
		<HeaderMain/>
		<SBox/>
        <SliderBox/>
		<NewProduct/>
		<NewsPaper/>
		<AllProduct/>
		<RecentPost/>
		<BestSold/>
		<FooterContainer/>
		<QuickView/>
      </div>
    </div>
  );
}

export default App;
