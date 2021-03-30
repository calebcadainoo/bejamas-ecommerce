/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ProductItem from './ProductItem'
import ReactPaginate from 'react-paginate'
import JsonData from '../sample-data.json'

function ProductItemsList() {
  const productData = Object.entries(JsonData)[0][1]
  const [productList, setProductList] = useState(productData.slice(0, productData.length))
  const [pageNum, setPageNum] = useState(0)

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
    // setProductList("")
    if (selected > 0) setHidePrev("")
    if (selected === pageCounter - 1) setHideNext("hidebx")
    console.log('PAGINATION: ', selected)
    console.log('COUNTER: ', pageCounter)
  }

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
