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
import Main
function App() {
  return (

    <div dir="rtl"  className="app">
      <Navbar/>
      <Switch>
            <Route path="/" exact component={Products}/>
            <Route path="/detail" exact component={Detail}/>
            <Route path="/cartlist" exact component={CartList}/>
            <Route path="/payment" exact component={Payment}/>

            <Route component={PageNotFound}/>
      </Switch>
      
    </div>
  );
}

export default App;
