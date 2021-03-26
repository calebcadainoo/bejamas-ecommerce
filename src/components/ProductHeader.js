import React from 'react'
import DogImage from '../ico/dog-art.png'
import '../styles/ProductHeader.css'

function ProductHeader() {
  return (
    <header className="product-header">
      {/* product title */}
      <div className="product-title flex">
        <div className="product-name">
          Samurai King Resting
        </div>
        <button class="btn product-title-btn hide-on-mobile">Add to Cart</button>
      </div>

      {/* image holder */}
      <div className="product-image-box">
        <img src={DogImage} alt="product"/>
        <div className="product-tag abs-bottom-left">
          Photo of The Day
        </div>
      </div>
      <button class="btn product-title-btn show-on-mobile">Add to Cart</button>

      {/* description */}
    </header>
  )
}

export default ProductHeader
