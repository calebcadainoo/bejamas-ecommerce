import React, { useEffect } from 'react'
import '../styles/ProductListCategory.css'
import CloseIcon from '../ico/close.svg'
import CheckBox from './CheckBox'
import { useDataLayerValue } from '../context-api/DataLayer'
import { actionTypes } from '../context-api/reducer'

function ProductListFilter() {
  const [{ products, productsCurrent }, dispatch] = useDataLayerValue()
  console.log('Filter List: ', productsCurrent)

  const FilterByCategory = (value) => {

  }

  const CloseMobileFilter = () => {
    // if (Math.max(window.innerWidth || document.documentElement.clientWidth) < 999) {
		// 	(mobileFilterBag === false) ? dispatch({
		// 		type: actionTypes.SET_FILTER_MOBILE,
		// 		mobileFilterBag: true
		// 	}) : dispatch({
		// 		type: actionTypes.SET_FILTER_MOBILE,
		// 		mobileFilterBag: false
		// 	})
		// }
  }

  return (
    <aside className="product-list-category">
      <div className="product-list-category-title flex">
        <div className="heavy-text">Category</div>
        <img onClick={() => CloseMobileFilter} src={CloseIcon} alt="close"/>
      </div>

			<div className="product-list-category-group">
        <CheckBox name="category" value="people" count="c1" />
        <CheckBox name="category" value="premium" count="c2" />
        <CheckBox name="category" value="pets" count="c3" />
        <CheckBox name="category" value="food" count="c4" />
        <CheckBox name="category" value="landmarks" count="c5" />
        <CheckBox name="category" value="cities" count="c6" />
        <CheckBox name="category" value="nature" count="c7" />
			</div>

      <div className="product-list-category-title flex">
        <div className="heavy-text">Price range</div>
      </div>

			<div className="product-list-category-group">
        <CheckBox name="price" value="lower than $20" count="p1" />
        <CheckBox name="price" value="$20 - $100" count="p2" />
        <CheckBox name="price" value="$100 - $200" count="p3" />
        <CheckBox name="price" value="More than $200" count="p4" />
			</div>
    </aside>
  )
}

export default ProductListFilter
