import React from 'react'
import { SIDEBAR_LINKS } from '../Utils/SidebarLinks.js'
import logo from '../assets/logo.jpeg'
import logo2 from '../assets/logo2.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div>
    <div>
        <img src={logo} alt="logo" className='w-28 hidden md:flex'/>
        <img src={logo2} alt="logo2" className='w-8 flex md:hidden'/>
    </div>


    <ul>
        {
            SIDEBAR_LINKS.map((link,index)=>{
                return <li>
                    <Link to={link.name}>
                    <span>{link.icon()}</span>
                    <span>{link.name}</span>
                    </Link>
                </li>

            })
        }
    </ul>

    <div>
       
            <p><span>?</span><span>Need Help</span> </p>
        
    </div>

    </div>

  )
}

export default Sidebar