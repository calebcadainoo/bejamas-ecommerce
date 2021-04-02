/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import '../styles/ProductListFilter.css'
import CloseIcon from '../ico/close.svg'
import CheckBox from './form-elements/CheckBox'
import { useDataLayerValue } from '../context-api/DataLayer'
import { actionTypes } from '../context-api/reducer'
import RadioCheckBox from './form-elements/RadioCheckBox'

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

  // const detectRangeType = (value) => {
  //   const stringArray = value[0].split(" ")
  //   const lowerRange = stringArray[0]
  //   const upperRange = stringArray[2]
  //   console.log('lowerRange: ', lowerRange)
  //   console.log('upperRange: ', upperRange)
  // }

  const updatePriceFilter = (filterString) => {
    const stringArray = filterString[0].split(" ")
    let lowerRange = stringArray[0]
    if (lowerRange === "") lowerRange = 0
    lowerRange = parseInt(lowerRange)

    let upperRange = stringArray[2]
    if (upperRange === "") upperRange = 0
    if (upperRange === "") upperRange = 0
    upperRange = parseInt(upperRange)

    let filterArr = products
    let priceArrFilter = filterArr.filter((product) => product.price > lowerRange && product.price < upperRange)
    if (upperRange === 0) priceArrFilter = filterArr.filter((product) => product.price > lowerRange)

    console.log('lowerRange: ', lowerRange)
    console.log('upperRange: ', upperRange)
    console.log('priceArrFilter: ', priceArrFilter)
    // detectRangeType(filterString)
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
          <RadioCheckBox func={setPriceFilter} name="price" value=" - 20" text="Lower than $20" count="p1" />
          <RadioCheckBox func={setPriceFilter} name="price" value="20 - 100" text="$20 - $100" count="p2" />
          <RadioCheckBox func={setPriceFilter} name="price" value="100 - 200" text="$100 - $200" count="p3" />
          <RadioCheckBox func={setPriceFilter} name="price" value="200 - " text="More than $200" count="p4" />
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
