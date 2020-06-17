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
import SinIn from './component/login/SinIn';
import SinUp from './component/login/SinUP';
import ForgetPassword from './component/login/ForgetPassword';
import UserPhone from './component/login/PhoneInput'

function App() {
  return (

    <div dir="rtl"  className="app">
      <MainNavbar/>
      <Navbar/>
      <Switchj>
            
            <Route path="/" exact component={SinIn}/>
            <Route path="/detail" exact component={Detail}/>
            <Route path="/cartlist" exact component={CartList}/>
            <Route path="/payment" exact component={Payment}/>
            <Route path="/login" exact component={SinIn}/>
            <Route path="/sinup" exact component={SinUp}/>
            <Route path="/forgetpassword" exact component={ForgetPassword}/>
            <Route path="/userphone" exact component={UserPhone}/>


            <Route component={PageNotFound}/>
      </Switch>

      <Footer/>
      
    </div>
  );
}

export default App;
