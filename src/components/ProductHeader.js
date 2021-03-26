import React from 'react'
import DogImage from '../ico/dog-art.png'
import '../styles/ProductHeader.css'

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
          <p className="product-description-text">
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

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic necessitatibus dignissimos odio, ratione, harum suscipit accusantium esse laboriosam assumenda, itaque similique voluptatibus tenetur dolor quasi. Eaque ea ad magni nihil!
          </p>
        </div>
      </div>
    </header>
  )
}

export default ProductHeader
