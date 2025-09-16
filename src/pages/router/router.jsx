import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import ProductDeities from '../ProductDeities/ProductDeities'
import ShopPage from '../shop/ShopPage'
export default function Allrouter() {
  return (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/product/:slug' element={<ProductDeities/>}/>
            <Route path='/shop/:slug' element={<ShopPage/>}/>

          </Routes>
  )
}
