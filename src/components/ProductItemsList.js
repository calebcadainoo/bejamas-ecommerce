import React, { useState } from 'react'
import ProductItem from './ProductItem'
import ReactPaginate from 'react-paginate'

function ProductItemsList() {
  // const data = 
  // const [productList, setProductList] = useState(JsonData.slice(0, 50))
  const [pageNum, setPageNum] = useState(0)

  const productsPerPage = 4
  const MAX_LENGTH = 5
  const pagesVisited = pageNum * productsPerPage
  // const displayProducts = productList
  //   .slice(pagesVisited, (pagesVisited + productsperPage))
  //   .map((product => {
  //     <div>Product</div>
  //   }))

  const pageCounter = Math.ceil(20 / productsPerPage)
  const [hidePrev, setHidePrev] = useState("hidebx")
  const [hideNext, setHideNext] = useState("")

  const changePage = ({selected}) => {
    setPageNum(selected)
    if (selected > 0) setHidePrev("")
    if (selected === MAX_LENGTH - 1) setHideNext("hidebx")
    console.log('PAGINATION: ', selected)
  }

  return (
    <div className="paduct-list-conatainer">
      <aside className="product-items-list">
        {/* call display products to list the products */}
        {/* { displayProducts } */}
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
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
