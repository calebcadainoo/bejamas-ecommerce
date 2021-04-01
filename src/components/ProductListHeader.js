/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import '../styles/ProductListHeader.css'
import SortIcon from '../ico/sort.svg'
import SettingsIcon from '../ico/setting-lines.svg'
import { useDataLayerValue } from '../context-api/DataLayer'
import { actionTypes } from '../context-api/reducer'

function ProductListHeader() {
	const [{productsCurrent, mobileFilterBag}, dispatch] = useDataLayerValue()

	
	const handleMobileFilterView = () => {
		if (Math.max(window.innerWidth || document.documentElement.clientWidth) < 999) {
			(mobileFilterBag === false) ? dispatch({
				type: actionTypes.SET_FILTER_MOBILE,
				mobileFilterBag: true
			}) : dispatch({
				type: actionTypes.SET_FILTER_MOBILE,
				mobileFilterBag: false
			})
		}

		console.log('Sort Filter: ', mobileFilterBag)
	}

	useEffect(() => {
		if (Math.max(window.innerWidth || document.documentElement.clientWidth) < 999) {
			dispatch({
				type: actionTypes.MOBILE_FILTER_BAG,
				mobileFilterBag: false
			})
			console.log('Less Than 999: ', mobileFilterBag)
		}
	}, [])

	window.addEventListener('resize', () => {
    if (Math.max(window.innerWidth || document.documentElement.clientWidth) < 999) {
			dispatch({
				type: actionTypes.MOBILE_FILTER_BAG,
				mobileFilterBag: false
			})
			console.log('Resize Than 999: ', mobileFilterBag)
		}
  })

	const [isAscending, setIsAscending] = useState(false)
	const sortAlphabetically = () => {
		if (isAscending === false) {
			productsCurrent.sort((a, b) => a.name.localeCompare(b.name))
			setIsAscending(true)
		}

		if (isAscending === true) {
			productsCurrent.sort((a, b) => b.name.localeCompare(a.name))
			setIsAscending(false)
		}

		dispatch({
			type: actionTypes.GENERATE_PRODUCT_LIST,
			productsCurrent: productsCurrent
		})
		// console.log('productCurrent: ', productsCurrent)
	}

  return (
    <header className="product-list-header flex">
      <div className="product-list-type-name">
        <span className="heavy-text">Photography</span>
				<span className="slash-pad"> / </span>
				<span className="light-50">Premium Photos</span>
      </div>

      <div className="product-list-sort-filter flex">
				{/* sort */}
				<div onClick={sortAlphabetically} className="product-list-sort flex">
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
				<div onClick={handleMobileFilterView} className="product-list-mobile-sort">
					<img src={SettingsIcon} alt="mobile settings"/>
				</div>
      </div>
    </header>
  )
}

export default ProductListHeader
