import React from 'react'
import fb from "../../assets/icons8-facebook-30.png"
import tw from "../../assets/icons8-twitter-30.png"
import ee from "../../assets/icons8-remind-app-50.png"

function Spicy() {
  return (
    <>
    <div className='h- bg-cover mt-8 ' style={{backgroundImage:`url(https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg)`}}>
        <div className='  p-28 flex items-center justify-center gap-10 md:flex  flex-col md:p-48 md:gap-10 '>
        <input className='w-[50%] h-9 border-2 border-black rounded-full text-center' type="text" placeholder='Enter Your Email' />
        <input className='w-[50%] h-9 border-2 border-black rounded-full text-center' type="text " placeholder='Password' />
        <button className='border-2 w-[20%] h-9 font-bold bg-red-500  border-white rounded-full hover:bg-black hover:text-white '>LOG IN</button>
        </div>
        <div className='flex md:flex justify-center md:flex-row gap-6 -mt-44 py-20'>
            <img className='w-6 md:w-10' src={fb} alt="" />
            <img className='w-6 md:w-10' src={tw} alt="" />
            <img className='w-6 md:w-10' src={ee} alt="" />
        </div>
    </div>
      
    </>
  )
}

export default Spicy
