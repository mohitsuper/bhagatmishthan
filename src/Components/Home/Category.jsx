import React from 'react'
import HomeHeading from '../../Commen-components/Heading/HomeHeading'
import { productCategory } from '../../data/Category/Category'
import { Link } from 'react-router-dom'

export default function Category() {

  return (
    <div className='pt-20 px-35'>
      <HomeHeading title={"Browse By Category"}/>
      <div className='grid xl:grid-cols-3 grid-cols-2 gap-5 pt-10'>
        {
          productCategory.map((v,i)=>
              (
                v?.img && (
                  <div key={i} className='relative'>
                    <img src={v?.img} loading="lazy"  alt={v?.title} className='w-full h-60 rounded-md'/>
                    <div className='absolute top-20  left-60'>
                    <h2 className='text-[1.5rem] uppercase font-bold text-white w-40'>{v?.title}</h2>
                    <button className='bg-red-400 px-5 text-white mt-4 py-2 rounded-md'>
                      <Link to={`/shop${v.path}`}>Add To Card</Link>
                      </button>
                    </div>
                  </div>
                )
              )
            
          )
        }
      </div>
    </div>
  )
}
