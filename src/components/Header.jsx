import React from 'react'
import {HiOutlineShoppingCart} from 'react-icons/hi'


const Header = () => {
  return (
    <header className='fixed z-50 w-screen bg-red-400 p-6 px-16'>
          
          
           <div className='hidden h-full  md:flex w-full'> 
                <div className='flex items-center gap-2'>
                        <img className='object-cover w-8' src='./img/logo.png' alt='logo'/> 
                        <p className='text-headingColor text-xl font-bold'> City </p>

                </div>
                <ul className='flex items-center gap-8 ml-auto'> 
                        <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 ease-in-out'> Home</li>
                        <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 ease-in-out'> Menu</li>
                        <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 ease-in-out'> Home </li>
                        <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 ease-in-out'>Service </li>
                </ul>
                <div className='relative flex items-center justify-center'>
                    <HiOutlineShoppingCart className='text-textColor text-2xl ml-10 cursor-pointer'/>
                    <div className=' absolute  -top-2 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                        <p className=' text-xs  text-white font-semibold'>
                            5 </p>    
                     </div> 
                </div> 
            </div>





        {/* mobile */}
        <div className='flex md:hidden  h-full w-full bg-blue-400 '></div>
   
    </header>
  )
}

export default Header