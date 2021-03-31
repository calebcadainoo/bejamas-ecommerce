/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem'
import ReactPaginate from 'react-paginate'
import { useDataLayerValue } from '../context-api/DataLayer'
import { actionTypes } from '../context-api/reducer'

function ProductItemsList() {
  const [{ products, productsCurrent }, dispatch] = useDataLayerValue()
  console.log('New List: ', productsCurrent)
  // useEffect(() => {
  //   const listOfProducts = products
  //   // dispatch({
	// 	// 	type: actionTypes.GENERATE_PRODUCT_LIST,
	// 	// 	productsCurrent: listOfProducts
	// 	// })

  //   console.log('From FILTER: ', listOfProducts)
  // }, [])
  const [productList, setProductList] = useState(productsCurrent.slice(0, productsCurrent.length))
  // const [productList, setProductList] = useState(productsCurrent.slice(0, productsCurrent.length))
  // if (typeof products != 'undefined') {
  //   dispatch({
  //     type: actionTypes.GENERATE_PRODUCT_LIST,
  //     productsCurrent: products
  //   })
  
    // console.log('CUR LIST: ', productsCurrent.slice(0, 3))
  // }
  // setProductList(products.slice(0, products.length))
  // console.log(productsCurrent)
  const [pageNum, setPageNum] = useState(0)

  // ==== PAGINATION ====
  const productsPerPage = 4
  const pagesVisited = pageNum * productsPerPage
  const displayProducts = productList
    .slice(pagesVisited, (pagesVisited + productsPerPage))
    .map(((product, keyId) => {
      return <ProductItem key={keyId} data={product} />
    }))

  const pageCounter = Math.ceil(productList.length / productsPerPage)
  const [hidePrev, setHidePrev] = useState("hidebx")
  const [hideNext, setHideNext] = useState("")

  const changePage = ({selected}) => {
    setPageNum(selected)
    if (selected > 0) setHidePrev("")
    if (selected >= pageCounter - 1) setHideNext("hidebx")
    if (selected < pageCounter - 1) setHideNext("")
  }
  // ==== END OF PAGINATION ==== 

  return (
    <div className="paduct-list-conatainer">
      <aside className="product-items-list">
        {/* call display products to list the products */}
        { displayProducts }
      </aside>

      <ReactPaginate 
        previousLabel={""}
        nextLabel={""}
        pageCount={pageCounter}
        onPageChange={changePage}
        containerClassName={"paginationHolder"}
        previousLinkClassName={"prevBtn"}
        previousClassName={`prevHolder ${hidePrev}`}
        nextLinkClassName={"nextBtn"}
        nextClassName={`nextHolder ${hideNext}`}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}

export default ProductItemsList
