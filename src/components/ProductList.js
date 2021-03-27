import React from 'react'
import '../styles/ProductList.css'
import ProductListCategory from './ProductListCategory'

function ProductList() {
  return (
    <section className="product-list flex">
      <ProductListCategory />
    </section>
  )
}

export default ProductList
