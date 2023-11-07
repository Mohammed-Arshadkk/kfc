import React from 'react'
import kfc from "../assets/unnamed.png"
import vedeo from "../assets/KFC_Chicken_Buckets_for_Rs.199(1080p).mp4"

function Kfc() {
  return (
    <>
      <div className='flex justify-center pt-10 relative'>
      <img src={kfc} alt="" />
      </div>
         
        <div className='bg-[#FE1718] flex justify-around py-32 mt-10'>
            <h1 className='text-7xl sm:text-9xl font-bold text-white'>FINGER <br />LINGER <br />GO</h1>
        <div className='flex  justify-center '>
            <video className=' h-96 w-96 top-[50%]' autoPlay loop playsInline muted src={vedeo}></video>
        </div>
        </div>
      
    </>
  )
}

export default Kfc
