/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../styles/ProductHeader.css'
import JsonData from '../sample-data.json'

function ProductHeader() {
  let productHeader = {}
  const productData = Object.entries(JsonData)[0][1]
  productData.map((product) => {
    return (product?.details?.recommendations) ? (
      productHeader = product
      ) : ('')
    })

  return (
    <header className="product-header">
      {/* product title */}
      <div className="product-title flex">
        <div className="app-title">
          {productHeader?.name}
        </div>
        <button className="btn product-title-btn hide-on-mobile">Add to Cart</button>
      </div>

      {/* image holder */}
      <div className="product-image-box">
        <img src={productHeader?.image.src} alt={productHeader?.image.alt} />
        <div className="product-tag abs-bottom-left">
          Photo of The Day
        </div>
      </div>
      <button className="btn product-title-btn show-on-mobile">Add to Cart</button>

      {/* description */}
      <div className="product-summary-box flex">
        <div className="product-description-box">
          <div className="app-title pad-y-15">
            About The {productHeader?.name}
          </div>
          <div className="product-category pad-y-7">{productHeader?.category}</div>
          <p className="centroid-500">
            {productHeader?.details?.description}
          </p>
        </div>

        <div className="product-recommend-box text-right">
          <div className="app-title pad-y-15">
            People also buy
          </div>
					<div className="product-recommend-pics">
						{
              productHeader?.details?.recommendations.map((recommended, keyId) => {
                return <div key={keyId} className="recommended-pic-box"><img src={recommended?.src} alt={recommended?.alt} title={recommended?.alt} /></div>
              })
            }
					</div>
					<div className="clr-fix"></div>
          <p>
						Size: {`${productHeader?.details?.dimensions?.width} x ${productHeader?.details?.dimensions?.height}`} pixel
          </p>
          <p>
						Size: {(productHeader?.details.size) / 1024} MB
          </p>
        </div>
      </div>
    </header>
  )
}

export default ProductHeader
