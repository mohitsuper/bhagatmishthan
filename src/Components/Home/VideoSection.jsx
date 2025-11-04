import React from 'react'
import HomeHeading from '../../Commen-components/Heading/HomeHeading'

export default function VideoSection() {
const videoUrl =[
    "https://www.youtube.com/embed/PwzmpY8cdn0",
    "https://www.youtube.com/embed/wz_D2Pwrhxk",
    "https://www.youtube.com/embed/3gmgHSRC6fQ",
    "https://www.youtube.com/embed/SyPaW4dD7AQ",
]
  return (
    <div className='pt-20 px-35 mb-10'>
        <HomeHeading title={"Video Gallery"}/>
        <div className='video-section pt-15'>
            <div className='grid grid-cols-4 gap-5'>
                {
                    videoUrl.map((v,i)=>{
                        return (
                            <div className='video-box rounded-md' key={i}>
                                <iframe style={{width:"100%"}} height="455" src={v}></iframe>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
