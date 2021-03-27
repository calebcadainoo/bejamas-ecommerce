import React from 'react'
import '../styles/ProductListCategory.css'
import CloseIcon from '../ico/close.svg'
import CheckBox from './CheckBox'

function ProductListCategory() {
  return (
    <aside className="product-list-category">
      <div className="product-list-category-title flex">
        <div className="heavy-text">Category</div>
        <img src={CloseIcon} alt="close"/>
      </div>

			<div className="product-list-category-group">
        <CheckBox value="people" count="c1" />
        <CheckBox value="premium" count="c2" />
        <CheckBox value="pets" count="c3" />
        <CheckBox value="food" count="c4" />
        <CheckBox value="landmarks" count="c5" />
        <CheckBox value="cities" count="c6" />
        <CheckBox value="nature" count="c7" />
			</div>

      <div className="product-list-category-title flex">
        <div className="heavy-text">Price range</div>
      </div>

			<div className="product-list-category-group">
        <CheckBox value="lower than $20" count="p1" />
        <CheckBox value="$20 - $100" count="p2" />
        <CheckBox value="$100 - $200" count="p3" />
        <CheckBox value="More than $200" count="p4" />
			</div>
    </aside>
  )
}

export default ProductListCategory
