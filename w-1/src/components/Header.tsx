import React from 'react'
import person from "../assets/icons8-person-24.png"
import cart from "../assets/icons8-cart-32.png"
import img1 from "../assets/shutterstock_1562566168.png"

function Header() {
  return (
    <>
      <div>
          <div className='bg-red-700 h-[80%]'>
               <div className=' text-white flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between p-10'>
                <div> <h1 className='font-bold text-2xl'>KFC</h1></div>
                <div className=' font-semibold flex flex-col items-center justify-center sm:flex sm:flex-row gap-y-4 sm:gap-x-8 sm:items-center'>
                    <p>ABOUT US</p>
                    <p>FIND US</p>
                    <p>ALL CAMPAINGNS</p>
                    <img className='bg-white rounded-full' src={person} alt="" />
                    <img className='bg-white rounded-full' src={cart} alt="" />
                </div>
               </div>

               <div className='flex'>
                <div className=' text-white pt-11 pl-12  w-[60%] '>
                    <h1 className='text-5xl font-bold'>BARGAIN <br />BUCKET MENU <br />CAMPAING</h1><br />
                    <p className=' sm:w-[47%]'>orginal receipe chicken and fries,and pienty of it.Sometimes that's all you need to turn on average day in to a great one</p><br />
                    <button className='border-2 rounded-full font-bold hover:bg-black hover:text-white hover:cursor-pointer px-5 py-2 sm:px-9 sm:py-2 '>ORDER NOW</button>
                </div>

                <div className=' w-[40%] p-4 '>
                  <img className='sm:-mt-16 sm:-ml-28' src={img1} alt="" />
                </div>

               </div>
              </div>
      </div>
      
    </>
  )
}

export default Header
