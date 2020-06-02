import React from 'react';
import AlertButton from './component/alert/Alert';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './component/Navbar/Navbar';
import Detail from './component/Detail';
import PageNotFound from './component/PageNotFound';
import Products from './component/Products';
import CartList from './component/cart/cartList'
import {Switch , Route } from 'react-router-dom';
import Example from './component/static/Loading';
function App() {
  return (

    <div dir="rtl"  className="app">
      <Navbar/>
      <Switch>
            <Route path="/" exact component={Products}/>
            <Route path="/detail" exact component={Detail}/>
            <Route path="/cartlist" exact component={CartList}/>
            <Route component={PageNotFound}/>
      </Switch>
      <Example/>
    </div>
  );
}

export default App;
