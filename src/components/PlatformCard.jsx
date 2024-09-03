import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { AiOutlineAndroid } from "react-icons/ai";
import { FaTabletScreenButton } from "react-icons/fa6";
import { AiOutlineApple } from "react-icons/ai";




const PlatformCard = () => {
  return (
    <div className='p-5 bg-white rounded-xl'>
      <h1 className='text-2xl font-bold text-gray-700'>Platform</h1>
      <div className='p-2 grid grid-cols-2 gap-8'>
        <div className='space-y-2 text-grey-500'>
          <h1 className='text-2xl font-bold'>58</h1>
          <p className='flex items-center space-x-2'>
           <CiGlobe/> <span>Website</span>
          </p>
        </div>

        <div className='space-y-2 text-grey-500'>
          <h1 className='text-2xl font-bold'>87</h1>
          <p className='flex items-center space-x-2'>
           <AiOutlineApple/> <span>ios</span>
          </p>
        </div>

        <div className='space-y-2 text-grey-500'>
          <h1 className='text-2xl font-bold'>46</h1>
          <p className='flex items-center space-x-2'>
           <AiOutlineAndroid/> <span>Website</span>
          </p>
        </div>

        <div className='space-y-2 text-grey-500'>
          <h1 className='text-2xl font-bold'>36</h1>
          <p className='flex items-center space-x-2'>
           <FaTabletScreenButton/> <span>Website</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PlatformCard