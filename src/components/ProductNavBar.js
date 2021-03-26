import React, { useState } from 'react'
import AppLogo from '../ico/bejamas-logo.svg'
import CartImage from '../ico/shopping-cart.svg'
import DogImage from '../ico/dog-art.png'

function ProductNavBar() {
	const [isCartVisisble, setIsCartVisisble] = useState(false)
	const toggleCartBag = () => {
		return(isCartVisisble === false) ? setIsCartVisisble(true) : setIsCartVisisble(false)
	}

	const setCartBag = (value) => {
		return (value === false) ? 'hidebx' : ''
	}

  return (
    <div className="product-nav flex">
      <img src={AppLogo} alt="Bejamas Logo"/>
      {/* cart */}
      <div className="product-cart">
        <img onClick={() => toggleCartBag()} className="nav-cart-icon" src={CartImage} alt="Cart"/>
        <div onClick={() => toggleCartBag()} className="nav-cart-counter">
          4
        </div>
      </div>

			{/* product cart bag */}
      <aside className={`product-cart-bag ${setCartBag(isCartVisisble)}`}>
        <div onClick={() => toggleCartBag()} className="close-btn" title="Close"></div>
        <div className="clr-fix"></div>
        {/* product */}
        <div className="product-bag-tile flex">
          <div className="product-bag-info">
            <div className="product-name">
              Samurai King Resting
            </div>
            <div className="product-bag-price">
              $1000.00
            </div>
          </div>
          <div className="product-bag-image-box">
            <img src={DogImage} alt="Cart"/>
          </div>
        </div>
        {/* clear button */}
        <button className="btn btn-transp-back">
          Clear
        </button>
      </aside>
    </div>
  )
}

export default ProductNavBar
