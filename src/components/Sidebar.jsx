import React, { useState } from 'react'
import { SIDEBAR_LINKS } from '../Utils/SidebarLinks.js'
import logo from '../assets/logo.jpeg'
import logo2 from '../assets/logo2.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const[activeLink,setActiveLink] = useState(0);
    const handleLinkClick = ((index)=>{
        setActiveLink(index)
    })

  return (
    <div className='w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white'>
    <div className='mb-8'>
        <img src={logo} alt="logo" className='w-28 hidden md:flex'/>
        <img src={logo2} alt="logo2" className='w-8 flex md:hidden'/>
    </div>

    <ul>
        {
            SIDEBAR_LINKS.map((link,index)=>{
                return <li 
                    key={index} 
                    className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${activeLink===index?"bg-indigo-200 placeholder text-indigo-500":""}`}>
                    <Link 
                    to={link.path} 
                    className='flex items-center md:space-x-5'
                    onClick={()=>handleLinkClick(index)}>
                    <span>{link.icon()}</span>
                    <span className='text-sm text-gray-500 hidden md:flex'>{link.name}</span>
                    </Link>
                </li>

            })
        }
    </ul>

    <div className='w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center'>
       
            <p className='flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full'>
                <span>?</span><span>Need Help</span>
            </p>
        
    </div>

    </div>

  )
}

export default Sidebar