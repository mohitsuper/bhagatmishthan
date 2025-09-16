import React from 'react'
import HomeHeading from '../../Commen-components/Heading/HomeHeading'
import SIngleCard from '../../Commen-components/SingleCard/SIngleCard'
import { BestSellerProductData } from '../../data/product/BestSellingProduct'

export default function BestSellerProduct() {
  return (
    <div>
        <HomeHeading title={"Best Seller"}/>
        <AllBestSellerProduct BestSellerProductData={BestSellerProductData}/>
    </div>
  )
}

function AllBestSellerProduct({BestSellerProductData}){
    return(
        <div className="grid xl:grid-cols-4 grid-cols-2 gap-4 xl:px-35 px-5 py-5">
            {BestSellerProductData.map((item, index) => {
                 return(
                    <SIngleCard key={index} data={item} />
                 )
            })
           }
        </div>
    )
}
