import React from 'react'
import DogImage from '../ico/dog-art.png'

function ProductItem() {
  return (
    <div className="product-item">
      <div className="product-item-image">
        <img src={DogImage} alt="dog"/>
				<div className="product-tag abs-top-left">Best Seller</div>
			  <button className="btn product-cart-btn">Add to Cart</button>
      </div>
			<div className="light-50 pad-y-10">Pets</div>
			<div className="heavy-text pad-y-7">Red Bench</div>
			<div className="light-50">$34.55</div>

    </div>
  )
}

export default ProductItem
