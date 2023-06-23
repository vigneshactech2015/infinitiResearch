import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import AllCategory from '../pages/AllCategory';
import ShopByCategory from '../pages/ShopByCategory';
import ProductListing from '../pages/ProductListing';

function Router() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/category/viewall" element={<AllCategory/>}/>
    <Route exact path="/shopbycategory" element={<ShopByCategory/>}/>
    <Route exact path="/productlisting" element={<ProductListing/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Router