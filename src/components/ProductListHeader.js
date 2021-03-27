import React from 'react'
import '../styles/ProductListHeader.css'
import SortIcon from '../ico/sort.svg'
import SettingsIcon from '../ico/setting-lines.svg'

function ProductListHeader() {
  return (
    <header className="product-list-header flex">
      <div className="product-list-type-name">
        <span className="heavy-text">Photography</span>
				<span className="slash-pad"> / </span>
				<span className="light-50">Premium Photos</span>
      </div>

      <div className="product-list-sort-filter flex">
				{/* sort */}
				<div className="product-list-sort flex">
					<img className="light-50" src={SortIcon} alt="sort"/>
					<div className="light-text">Sort</div>
				</div>
				{/* price */}
				<select name="priceOrder" className="priceOrder">
					<option value="">Price</option>
					<option value="Ascending">Ascending</option>
					<option value="Descending">Descending</option>
				</select>
				{/* mobile tap filter */}
				<div className="product-list-mobile-sort">
					<img src={SettingsIcon} alt="mobile settings"/>
				</div>
      </div>
    </header>
  )
}

export default ProductListHeader
