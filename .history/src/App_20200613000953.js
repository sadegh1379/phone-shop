import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './component/Navbar/Navbar';
import Detail from './component/Detail';
import PageNotFound from './component/PageNotFound';
import Products from './component/Products';
import CartList from './component/cart/cartList'
import {Switch , Route } from 'react-router-dom';
import Payment from './component/payment/Payment';
import MainNavbar from './component/Navbar/MainNavbar';
import Footer from './component/footer/Footer';
import UserLogin from './component/login/UserLogin'

function App() {
  return (

    <div dir="rtl"  className="app">
      <MainNavbar/>
      <Navbar/>
      <Switch>
      <Route path="/login" exact component={UserLogin}/>
            <Route path="/" exact component={Products}/>
            <Route path="/detail" exact component={Detail}/>
            <Route path="/cartlist" exact component={CartList}/>
            <Route path="/payment" exact component={Payment}/>
            <Route path="/login" exact component={UserLogin}/>

            <Route component={PageNotFound}/>
      </Switch>

      <Footer/>
      
    </div>
  );
}

export default App;
