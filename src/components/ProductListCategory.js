import React from 'react'
import '../styles/ProductListCategory.css'
import CloseIcon from '../ico/close.svg'

function ProductListCategory() {
  return (
    <aside className="product-list-category">
      <div className="product-list-category-title flex">
        <div className="heavy-text">Category</div>
        <img src={CloseIcon} alt="close"/>
      </div>

			<div className="product-list-category-group">
					<input type="checkbox" name="category" id="c1" value="people" />
				<label htmlFor="c1" className="form-checkbox">People</label>
			</div>
    </aside>
  )
}

export default ProductListCategory
