import React from 'react'
import AppLogo from '../ico/bejamas-logo.svg'
import CartImage from '../ico/shopping-cart.svg'

function ProductNavBar() {
  return (
    <div className="product-nav flex">
      <img src={AppLogo} alt="Bejamas Logo"/>
      {/* cart */}
      <div className="product-cart">
        <img className="nav-cart-icon" src={CartImage} alt="Cart"/>
        <div className="nav-cart-counter">
          4
        </div>
      </div>
    </div>
  )
}

export default ProductNavBar
