/* eslint-disable array-callback-return */
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

  const FilterByCategory = (value) => {
    let filterArray = products.filter((product) => product.category === value)
    // console.log(filterArray)
  }

  useEffect(() => {
    FilterByCategory("people")
  }, [])

  const CloseMobileFilter = () => {
    if (Math.max(window.innerWidth || document.documentElement.clientWidth) < 999) {
      return "hidebx"
		}
  }

  const [categoryFilter, setCategoryFilter] = useState([])
  const priceFilterArr = []
  const handleFilterForm = (e) => {
    e.preventDefault()
    console.log('categoryFilter', categoryFilter)
    updateFilter(categoryFilter)
  }

  const updateFilter = (filterArr) => {
    let filterCategoryList = products
    let pump = []
    filterArr.map((filter) => {
      return filterCategoryList.map((product) => {
        if (product.category === filter) return pump.push(product)
      })
    })

    console.log('pump: ', pump)
    
    // dispatch({
    //   type: actionTypes.GENERATE_PRODUCT_LIST,
    //   productCart: pump
    // })
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
