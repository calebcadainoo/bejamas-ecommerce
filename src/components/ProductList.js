import React, { useEffect } from 'react'
import '../styles/ProductList.css'
import ProductItemsList from './ProductItemsList'
import ProductListFilter from './ProductListFilter'
import { useDataLayerValue } from '../context-api/DataLayer'
import { actionTypes } from '../context-api/reducer'

function ProductList() {
  const [{ products }, dispatch] = useDataLayerValue()
  useEffect(() => {
    const listOfProducts = products
    dispatch({
			type: actionTypes.GENERATE_PRODUCT_LIST,
			productsCurrent: listOfProducts
		})

    console.log('From LIST Side: ', listOfProducts)
  }, [])

  return (
    <section className="product-list flex">
      <ProductListFilter />
      <ProductItemsList />
    </section>
  )
}

export default ProductList
