import React from 'react'
import ProductHeader from './components/ProductHeader'
import ProductNavBar from './components/ProductNavBar'
import './styles/App.css'

function App() {
  return (
    <div className="App centroid pad-x-20">
      <ProductNavBar />
      <ProductHeader />
    </div>
  )
}

export default App
