import React from 'react'
import Hero from '../../Commen-components/Hero/Hero'
import FemouseProduct from '../../Components/Home/FemouseProduct'
import BestSellerProduct from '../../Components/Home/BestSellerProduct'
import FemouseProduct2 from '../../Components/Home/FemouseProduct2'
import Category from '../../Components/Home/Category'
import GiftingProduct from '../../Components/Home/GiftingProduct'
import VideoSection from '../../Components/Home/VideoSection'
import Footer from '../../Commen-components/Footer/Footer'
export default function HomePage() {
  return (
    <div className=''>
        <Hero/>
        <FemouseProduct/>
        <BestSellerProduct/>
        <FemouseProduct2 />
        <Category/>
        <GiftingProduct/>
        <VideoSection/>
    </div>
  )
}
