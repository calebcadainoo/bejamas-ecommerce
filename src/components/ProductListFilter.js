/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import '../styles/ProductListCategory.css'
import CloseIcon from '../ico/close.svg'
import CheckBox from './CheckBox'
import { useDataLayerValue } from '../context-api/DataLayer'
import { actionTypes } from '../context-api/reducer'

function ProductListFilter() {
  const [{ products }, dispatch] = useDataLayerValue()

  useEffect(() => {
    // FilterByCategory("people")
  }, [])

  const CloseMobileFilter = () => {
    if (Math.max(window.innerWidth || document.documentElement.clientWidth) < 999) {
      return "hidebx"
		}
  }

  const [categoryFilter, setCategoryFilter] = useState([])
  const [priceFilter, setPriceFilter] = useState([])
  const handleFilterForm = (e) => {
    e.preventDefault()
    console.log('categoryFilter', categoryFilter)
    console.log('priceFilter', priceFilter)
    updateFilter(categoryFilter)
    updatePriceFilter(priceFilter)
  }

  const updateFilter = (filterArr) => {
    let filterCategoryList = products
    let filteredArray = []
    filterArr.map((filter) => {
      return filterCategoryList.map((product) => {
        if (product.category === filter) return filteredArray.push(product)
      })
    })

    console.log('pump: ', filteredArray)
    
    if (filteredArray.length > 0) {
      dispatch({
        type: actionTypes.GENERATE_PRODUCT_LIST,
        productsCurrent: filteredArray
      })
    }
  }

  const updatePriceFilter = (filterString) => {
    console.log('filterString', filterString)
  }
  

  return (
    <aside className={`product-list-category`}> 
      <div className="product-list-category-title flex">
        <div className="heavy-text">Category</div>
        <img onClick={() => CloseMobileFilter} src={CloseIcon} alt="close"/>
      </div>

      <form onSubmit={handleFilterForm}>
        <div className="product-list-category-group">
          <CheckBox func={setCategoryFilter} name="category" value="people" count="c1" />
          <CheckBox func={setCategoryFilter} name="category" value="premium" count="c2" />
          <CheckBox func={setCategoryFilter} name="category" value="pets" count="c3" />
          <CheckBox func={setCategoryFilter} name="category" value="food" count="c4" />
          <CheckBox func={setCategoryFilter} name="category" value="landmarks" count="c5" />
          <CheckBox func={setCategoryFilter} name="category" value="cities" count="c6" />
          <CheckBox func={setCategoryFilter} name="category" value="nature" count="c7" />
        </div>
      

        <div className="product-list-category-title flex">
          <div className="heavy-text">Price range</div>
        </div>

        <div className="product-list-category-group">
          <CheckBox func={setPriceFilter} type="onlyOne" name="price" value="< 20" count="p1" />
          <CheckBox func={setPriceFilter} type="onlyOne" name="price" value="20 - 100" count="p2" />
          <CheckBox func={setPriceFilter} type="onlyOne" name="price" value="100 - 200" count="p3" />
          <CheckBox func={setPriceFilter} type="onlyOne" name="price" value="> 200" count="p4" />
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
