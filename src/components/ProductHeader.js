import React from 'react'
import DogImage from '../ico/dog-art.png'
import '../styles/ProductHeader.css'
import RecommendedImage1 from '../ico/recommend1.png'
import RecommendedImage2 from '../ico/recommend2.png'
import RecommendedImage3 from '../ico/recommend3.png'

function ProductHeader() {
  return (
    <header className="product-header">
      {/* product title */}
      <div className="product-title flex">
        <div className="app-title">
          Samurai King Resting
        </div>
        <button className="btn product-title-btn hide-on-mobile">Add to Cart</button>
      </div>

      {/* image holder */}
      <div className="product-image-box">
        <img src={DogImage} alt="product"/>
        <div className="product-tag abs-bottom-left">
          Photo of The Day
        </div>
      </div>
      <button className="btn product-title-btn show-on-mobile">Add to Cart</button>

      {/* description */}
      <div className="product-summary-box flex">
        <div className="product-description-box">
          <div className="app-title pad-y-15">
            About The Samurai King Resting
          </div>
          <div className="product-category pad-y-7">Pets</div>
          <p className="centroid-500">
            So how did the classical Latin become so incoherent? According 
            to McClintock, a 15th century typesetter likely scrambled part 
            of Cicero's De Finibus in order to provide placeholder text to 
            mockup various fonts for a type specimen book.
          </p>
        </div>

        <div className="product-recommend-box text-right">
          <div className="app-title pad-y-15">
            People also buy
          </div>
					<div className="product-recommend-pics">
						<div className="recommended-pic-box"><img src={RecommendedImage3} alt="recommended"/></div>
						<div className="recommended-pic-box"><img src={RecommendedImage2} alt="recommended"/></div>
						<div className="recommended-pic-box"><img src={RecommendedImage1} alt="recommended"/></div>
					</div>
					<div className="clr-fix"></div>
          <p>
						Size: 1020 x 1020 pixel
          </p>
          <p>
						Size: 15 MB
          </p>
        </div>
      </div>
    </header>
  )
}

export default ProductHeader
