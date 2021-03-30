/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ProductItem from './ProductItem'
import ReactPaginate from 'react-paginate'
import JsonData from '../sample-data.json'
import { useDataLayerValue } from '../context-api/DataLayer'

function ProductItemsList() {
  const [{ products }, dispatch] = useDataLayerValue()
  const [productList, setProductList] = useState(products.slice(0, products.length))
  const [pageNum, setPageNum] = useState(0)

  console.log(products)

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
    console.log('PAGINATION: ', selected)
    console.log('COUNTER: ', pageCounter)
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
