import React from 'react'
import DogImage from '../ico/dog-art.png'

function ProductHeader() {
  return (
    <header className="product-header">
      {/* image holder */}
      <div className="product-image-box">
        <img src={DogImage} alt="product"/>
        <div className="product-tag abs-bottom-left">
          Photo of The Day
        </div>
      </div>

      {/* description */}
    </header>
  )
}

export default ProductHeader
