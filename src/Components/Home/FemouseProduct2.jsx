import React from 'react'
import f3 from '../../assets/images/imgi_16_wedding-sweets.jpg'
import f4 from '../../assets/images/imgi_17_Mithainama.jpg'
export default function FemouseProduct2() {
   let FemouseProductData =[
   {
     img:f3,
     title:"Jaipur's Favourite",
     subtitle:"Doodh Laddu from 6 decades"
   },
   {
     img:f4,
   }
 ]
 
  return (
    <div className={`w-full h-full flex justify-center items-center px-5`}>
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
                className={`xl:w-[40rem] xl:h-[15rem] h-full w-full ${(!item.title)?"pt-[140px]":"py-[35px]"}  px-10 flex-col text-white rounded-sm`}>
                  <h1 className='font-bold xl:text-[1.8rem] text-[1.5rem]'>{item && item.title}</h1>
                  <h5 className='xl:text-[1.5rem] text-[1.2rem] mb-5'>{item && item.subtitle}</h5>
                  <button className={`${(!item.title && !item.subtitle)?"bg-red-500":"bg-red-400"} flex gap-2 justify-center items-center bg-red-400 px-15 py-3 rounded-sm text-[.7rem] xl:text-xxl`}>{(!item.title && !item.subtitle)?(<><svg xmlns="http://www.w3.org/2000/svg" className="ionicon" fill="white" viewBox="0 0 512 512"><path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"></path></svg> YOUTUBE</>):"SHOP NOW"}</button>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

