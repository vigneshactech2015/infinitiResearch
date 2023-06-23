import React from 'react'
import ProductListingHeader from '../components/UI/ProductListing/ProductListingHeader';
import ProductListingNavbar from '../components/UI/ProductListing/ProductListingNavbar';
import ProductListingButton from '../components/UI/ProductListing/ProductListingButton';
import Stats from '../components/UI/ProductListing/Stats';
import Selection from '../components/UI/ProductListing/Selection';
import Products from '../components/UI/ProductListing/Products';


function ProductListing() {
  return (
    <div>
    <ProductListingHeader/>
    <ProductListingNavbar/>
    <ProductListingButton/>
    <Stats/>
    <Selection/>
    <Products/>
    </div>
  )
}

export default ProductListing