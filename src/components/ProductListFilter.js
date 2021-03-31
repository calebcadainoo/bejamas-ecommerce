/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import '../styles/ProductListCategory.css'
import CloseIcon from '../ico/close.svg'
import CheckBox from './CheckBox'
import { useDataLayerValue } from '../context-api/DataLayer'
import { actionTypes } from '../context-api/reducer'

function ProductListFilter() {
  const [{ products, productsCurrent, mobileFilterBag }, dispatch] = useDataLayerValue()
  console.log('Filter List: ', productsCurrent)

  const FilterByCategory = (value) => {
    let filterArray = products.filter((product) => product.category === value)
    console.log(filterArray)
  }

  useEffect(() => {
    FilterByCategory("people")
  }, [])

  const CloseMobileFilter = () => {
    if (Math.max(window.innerWidth || document.documentElement.clientWidth) < 999) {
      return "hidebx"
		}
  }

  const [priceFilter, setPriceFilter] = useState([])
  const priceFilterArr = []
  const handleFilterForm = (e) => {
    e.preventDefault()
    console.log(e.target)
    console.log('priceFilter', priceFilter)
    console.log('priceFilterArr', priceFilterArr)
  }

  

  return (
    <aside className={`product-list-category`}>
      <div className="product-list-category-title flex">
        <div className="heavy-text">Category</div>
        <img onClick={() => CloseMobileFilter} src={CloseIcon} alt="close"/>
      </div>

      <form onSubmit={handleFilterForm}>
        <div className="product-list-category-group">
          <CheckBox func={setPriceFilter} funcVal={priceFilterArr} name="category" value="people" count="c1" />
          <CheckBox func={setPriceFilter} funcVal={priceFilterArr} name="category" value="premium" count="c2" />
          <CheckBox func={setPriceFilter} funcVal={priceFilterArr} name="category" value="pets" count="c3" />
          <CheckBox func={setPriceFilter} funcVal={priceFilterArr} name="category" value="food" count="c4" />
          <CheckBox func={setPriceFilter} funcVal={priceFilterArr} name="category" value="landmarks" count="c5" />
          <CheckBox func={setPriceFilter} funcVal={priceFilterArr} name="category" value="cities" count="c6" />
          <CheckBox func={setPriceFilter} funcVal={priceFilterArr} name="category" value="nature" count="c7" />
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

        <div className="flex">
          <input type="reset" className="product-tag uppercase" value="Clear" />
          <input type="submit" className="btn" value="Save" />
        </div>
      </form>
    </aside>
  )
}

export default ProductListFilter
