import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import ProductDetails from './pages/ProductDetails/Product-details';
import Basket from './pages/Basket/Basket';
import Checkout from './pages/Checkout/Checkout';
import Admin from './pages/Admin/Admin';
import AdminNewProduct from './pages/Admin/AdminNewProduct';
import SearchResultPage from './pages/SearchResult/SearchResultPage'


function App() {


  return (
    
      <BrowserRouter>

        <Routes>

          <Route index element={<Home />} />

          <Route path="/products/:id" element={<ProductDetails />} />

          <Route path="/search" element={<SearchResultPage />} />

          <Route path="/basket" element={<Basket />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/admin" element={<Admin />} />

          <Route path="/admin/new-product" element={<AdminNewProduct />} />

        </Routes>

      </BrowserRouter>

  )
}

export default App;