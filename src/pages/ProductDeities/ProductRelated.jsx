import React from 'react'
import SIngleCard from '../../Commen-components/SingleCard/SIngleCard'
import BestSellerProduct from '../../Components/Home/BestSellerProduct'

export default function ProductRelated() {
  return (
      <section className="bg-gray-100 py-10 px-30">
        <h3 className="text-2xl font-bold text-[#442DD7] mb-6">
          Related Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Example Related Product */}
          {BestSellerProduct.length >0 && BestSellerProduct.slice(0,4).map((v,id) => {
            return(
                <div className='' key={id}>
                    <SIngleCard data={v}/>
                </div>
            )
          })}
        </div>
      </section>  
      
    )
}
