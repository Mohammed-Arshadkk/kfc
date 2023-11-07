import React from 'react'
import img1 from "../assets/images (1).jfif"
import img2 from "../assets/images.jfif"
import img3 from "../assets/images (2).jfif"
import img4 from "../assets/images (3).jfif"
import burger from "../assets/download.jfif"
import map from "../assets/604167decd808.png"



function List() {
  return (
    <>
      <div className=' flex justify-center pt-10'>
        <button className='border-2 px-12 py-2 bg-orange-500 text-white rounded-full font-bold hover:bg-black hover:text-white'>MENUS</button>
      </div>

    <div className=' border-black flex gap-2 flex-col items-center  font-bold text-center  md:flex justify-between md:flex-row  p-10'>  
     <div className='space-y-4'>
     <img className=' w-30 h-30' src={img1} alt="" />
     <p className='hover:cursor-pointer  '>FRIED CHICKEN</p>
     </div>
     <div className='space-y-4'>
     <img className=' w-30 h-30' src={img2} alt="" />
     <p className='hover:cursor-pointer  '>BROASTED CHICKEN</p>
     </div>
     <div className='space-y-4'>
     <img className=' w-30 h-30' src={img3} alt="" />
     <p className='hover:cursor-pointer  '>SPICY KFC</p>
     </div>
      <div className='space-y-4'>
      <img className=' w-30 h-30' src={img4} alt="" />
      <p className='hover:cursor-pointer  '>SPICY BROAST</p>
      </div>
      
      
    </div>
    

    <div className='flex flex-col gap-4 sm:flex sm:flex-row sm:gap-4 p-14 '>
        <div className= 'flex gap-2 sm:flex  hover:cursor-pointer hover:translate-y-[-20%] hover:duration-300 hover:shadow-yellow-400 shadow-2xl '>
            <div className='p-4'>
                <h1 className='text-2xl font-bold '>ANY DAY OFFERS</h1>
                <p>SPECIAL FRIED CHICKEN WITH SPICY TASTE</p>
                <p className='font-bold text-2xl text-red-600'>12.90 TL</p>
            </div>
            <div>
                <img className='mt-10' src={burger} alt="" />
            </div>
        </div>

        <div className=' bg-red-600 sm:flex flex-row text-white border-2 hover:cursor-pointer hover:translate-y-[-20%] hover:duration-300 hover:shadow-green-400 shadow-2xl  '>
                <div className='p-4  '>
                <h1 className='text-2xl font-bold '>OTHER FLAVOURS</h1>
                <p>SPECIAL FRIED CHICKEN WITH SPICY TASTE</p>
                <p className='font-bold text-2xl'>3.90 TL</p>
                </div>
                <div className='p-10'>
                    <img className='mt-10' src={img2}  alt="" />
                </div>
            </div>

            <div className='bg-gray-300 sm:flex w-[60%] hover:cursor-pointer hover:translate-y-[-20%] hover:duration-300 hover:shadow-blue-400 shadow-2xl'>
                <div className='p-10'>
                    <h1 className='text-2xl font-bold '>FIND A KFC STORE NEAR YOU</h1>
                </div>
                <div className='pr-10 mt-10'>
                    <img className='w-[70%]' src={map} alt="" />
                </div>
            </div>
    </div>
    </>
  )
}

export default List
