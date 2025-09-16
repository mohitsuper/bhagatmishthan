import React, { useState } from 'react'

export default function ProductDeailesDes({SingleProductInfo}) {
  const [activeImage,setActiveImage] = useState(0)
  return (
      <section className="p-6 flex flex-wrap lg:flex-nowrap gap-10">
        {/* Product Images Section */}
        <div className="flex gap-4 basis-full lg:basis-[40%]">
          {/* Sub Images */}
          <div className="flex flex-col gap-3 overflow-y-auto max-h-[500px] w-[80px]">
            {SingleProductInfo?.subImage && SingleProductInfo?.subImage?.map((v, i) => (
              <div key={i} className="border p-1 rounded hover:shadow">
                <img
                  src={v}
                  alt={`sub-${i}`}
                  onClick={()=>setActiveImage(i)}   loading="lazy" 
                  className="object-cover w-full h-20 rounded"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="h-[500px] flex-1">
            <img
              src={SingleProductInfo?.subImage && SingleProductInfo?.subImage[activeImage]}
              alt="Main Product"
              className="rounded-lg shadow-md h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="basis-full lg:basis-[60%] ">
          <h2 className="text-2xl font-semibold mb-4">{SingleProductInfo?.title}</h2>
          <h3 className="my-2">
            <i className="fa-solid fa-star text-yellow-500 mx-1"></i>
            <i className="fa-solid fa-star text-yellow-500 mx-1"></i>
            <i className="fa-solid fa-star text-yellow-500 mx-1"></i>
            <i className="fa-solid fa-star text-yellow-500 mx-1"></i>
            <i className="fa-solid fa-star text-yellow-500 mx-1"></i>
            <span className="text-indigo-400">(12 Customer Reviews)</span>
          </h3>
          <div className="my-2 mb-7">
              <h3 className="text-xl font-semibold my-2">Description</h3>
              <p className="text-[1.1rem] text-gray-700 lowercase">1. PISTACHIO KHALEEJI - 4 PC. 2. ALMOND KHALEEJI - 4 PC. 3. WALNUT KHALEEJI - 4 PC. 4. CASHEW KHALEEJI - 4 PC.</p>
          </div>
          <div className="my-2 mb-7">
              <h3 className="text-xl font-semibold my-2">NUTS -</h3>
              <p className="text-[1.1rem] text-gray-700 lowercase">1. CASHEW - 200 G 2. ALMOND - 210 G 3. PISTACHIO - 170 G</p>
          </div>
          
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>High quality material</li>
            <li>Eco-friendly and durable</li>
            <li>Modern design</li>
            <li>Affordable price</li>
          </ul>

          <button className="mt-6 bg-[#442DD7] text-white px-6 py-2 rounded hover:bg-[#3a24c2] transition duration-200">
            Buy Now
          </button>
        </div>
      </section>  )
}
