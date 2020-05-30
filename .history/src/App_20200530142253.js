import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './component/Navbar/Navbar';
import Detail from './component/Detail';
import PageNotFound from './component/PageNotFound';
import Products from './component/Products';
import CartList from './component/cart/cartList'

function App() {
  return (

    <div dir="rtl"  className="app">
      <Navbar/>
    <Detail
    </div>
  );
}

export default App;
