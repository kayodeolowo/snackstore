import React, { useState } from 'react'
import {HiOutlineShoppingCart, HiOutlineLogout} from 'react-icons/hi'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../Firebase.config'
import { async } from '@firebase/util';
import { UseStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import {MdAdd} from 'react-icons/md'



const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user}, dispatch] = UseStateValue()
    const [isMenu, setIsMenu] = useState(false)
    
    const Login =async () => {
    if (!user) {
         const {
            user: {refreshToken, providerData}
        } =  await signInWithPopup(firebaseAuth, provider)
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0],   
        })
        localStorage.setItem('user', JSON.stringify(providerData[0]))
    } else {
         setIsMenu(!isMenu) //when clicked opens menu
    }
    }

    const logout = () => {
        setIsMenu(false)
        localStorage.clear()

        dispatch({
            type : actionType.SET_USER,
            user: null,
        })
    }


  return (
    <header className='fixed z-50 w-screen  p-3 px-4 md:p-6 md:px-16'>
          
          
           <div className='hidden h-full  md:flex w-full justify-between'> 
                <Link to='/'  className='flex items-center gap-2'>
                        <img className='object-cover w-8' src={Logo} alt='logo'/> 
                        <p className='text-headingColor text-xl font-bold'> City </p>

                </Link>
                <div className='flex items-center gap-8'>
                     
                    <motion.ul 
                     initial={{opacity:0, x:200}}
                                animate={{opacity:1, x:0}}
                                exit={{opacity:0, x:200 }}
                                 className='flex items-center gap-8  '> 
                            <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 ease-in-out'> Home</li>
                            <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 ease-in-out'> Menu</li>
                            <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 ease-in-out'> About Us </li>
                            <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 ease-in-out'>Service </li>
                    </motion.ul>

                    <div className='relative flex items-center justify-center'>
                        <HiOutlineShoppingCart className='text-textColor text-2xl ml-10 cursor-pointer'/>
                        <div className=' absolute  -top-2 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className=' text-xs  text-white font-semibold'>
                                5 </p>    
                        </div> 
                    </div> 

                    
                       <div className='relative'> 
                      
                             <motion.img
                            whileTap={{scale:0.6}}
                            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
                            src= {user ? user.photoURL : Avatar} 
                             alt='user'
                    
                             onClick={Login}/>

                             {
                                isMenu && (
                                 
                                    <motion.div 
                                initial={{opacity:0, scale:0.6}}
                                animate={{opacity:1, scale:1}}
                                exit={{opacity:0, scale:0.6 }} className='w-40 bg-gray-100 shadow-xl rounded-lg flex  flex-col absolute px-4 py-2 top-10 right-2'>
                                {
                                user && user.email === "officialkayodeolowo@gmail.com" && (
                                     <Link to='/createItem'> 
                                <p className='px- py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'> New Item <MdAdd/> </p>

                                </Link>
                                )
                               }

                                <p onClick={logout} className='px- py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'> logout <HiOutlineLogout/> </p>

                             </motion.div>
                             

                                )
                             }
                             
                            
                       </div>
                    
                </div>
            </div>





        {/* mobile */}
        <div className='flex items-center justify-between md:hidden  h-full w-full '>
            
                 <div className='relative flex items-center justify-center'>
                        <HiOutlineShoppingCart className='text-textColor text-2xl ml-10 cursor-pointer'/>
                        <div className=' absolute  -top-2 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className=' text-xs  text-white font-semibold'>
                                5 </p>    
                        </div> 
                    </div>
            <Link  to='/' className='flex items-center gap-2'> 

                <img src={Logo} className="w-8 object-cover"  alt=''/>
                <p className='text-headingColor text-xl font-bold'> City </p> 
            
            </Link>

             <div className='relative'> 
                      
                             <motion.img
                            whileTap={{scale:0.6}}
                            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
                            src= {user ? user.photoURL : Avatar} 
                             alt='user'
                    
                             onClick={Login}/>

                             {
                                isMenu && (
                                 
                                  <motion.div 
                                initial={{opacity:0, scale:0.6}}
                                animate={{opacity:1, scale:1}}
                                exit={{opacity:0, scale:0.6 }} 
                                className='w-40 bg-gray-100 shadow-xl 
                                rounded-lg flex  flex-col absolute px-4 
                                py-2 top-10 right-2'>
                               {
                                user && user.email === "officialkayodeolowo@gmail.com" && (
                                     <Link to='/createItem'> 
                                <p className='px-4 py-2 flex items-center gap-1 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'> New Item <MdAdd/> </p>

                                </Link>
                                )}

                              <ul  className='flex   flex-col    '> 
                                    <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 ease-in-out px-4 py-2'> Home</li>
                                    <li className='text-base px-4 py-2 text-textColor cursor-pointer hover:text-headingColor duration-100 ease-in-out'> Menu</li>
                                    <li className='text-base px-4 py-2 text-textColor cursor-pointer hover:text-headingColor duration-100 ease-in-out'> About Us </li>
                                    <li className='text-base px-4 py-2 text-textColor cursor-pointer hover:text-headingColor duration-100 ease-in-out'>Service </li>
                             </ul>

                                <p onClick={logout} className='px-4 py-2 flex items-center gap-1 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'> logout <HiOutlineLogout/> </p>

                             </motion.div>
                             

                                )
                             }
                             
                            
                       </div>

            



        </div>
   
    </header>
  )
}

export default Header