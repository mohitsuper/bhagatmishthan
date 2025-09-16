import React from 'react'
import f1 from '../../assets/images/imgi_5_jaipurbhagat.jpg'
import f2 from '../../assets/images/imgi_6_chogni-laddu-bhagat.jpg'

export default function FemouseProduct() {
    let FemouseProductData =[
      {
        img:f1,
        title:"Jaipur's Favourite",
        subtitle:"Doodh Laddu from 6 decades"
      },
      {
        img:f2,
        title:"Sawamani / Prasad Offering",
        subtitle:"Chogni Laddu"
      }
    ]
  return (
    <div className='w-full h-full flex justify-center items-center py-15 px-5'>
        <div className='flex gap-4'>
          {
            FemouseProductData.map((item, index) => {
              return(
                <div key={index} 
                style={{
                  backgroundImage:`url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: '80% top  right',
                }} 
                className='xl:w-[40rem] xl:h-[15rem] h-full w-full py-[35px] px-10 flex-col text-white rounded-sm'>
                  <h1 className='font-bold xl:text-[1.8rem] text-[1.5rem]'>{item.title}</h1>
                  <h5 className='xl:text-[1.5rem] text-[1.2rem] mb-5'>{item.subtitle}</h5>
                  <button className='bg-red-400 px-15 py-3 rounded-sm text-[1.1rem] xl:text-xxl '>SHOP NOW</button>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

