import React from 'react'
import { TiAttachmentOutline } from "react-icons/ti";
import user1 from '../assets/user1.jpeg'
import user2 from '../assets/user2.jpeg'
import user3 from '../assets/user3.jpeg'

const ClientCard = ({clients}) => {
  return (
    <div className='p-6 bg-white rounded-xl space-y-5 '>
    <div>
        <h1 className='text-xl font-semibold text-grey-700'>{clients.name}</h1>
        <p className='text-sm text-gray-500'>{clients.title}</p>
    </div>
    <p className='text-xs p-2 rounded bg-gray-100'>{clients.date}</p>
    <div className='w-full bg-gray-200 rounded-full h-2'>
        <div className='w-[40%] bg-indigo-500 rounded-full h-2'></div>
    </div>

    <div className='flex justify-between items-center'>
        <div className='relative'>
            <img src={user1} alt="user1" className='w-8 h-8 rounded-full border-white ' />
            <img src={user2} alt="user2" className='w-8 h-8 rounded-full border-white absolute top-0 left-4' />
            <img src={user3} alt="user3" className='w-8 h-8 rounded-full border-white absolute top-0 left-8' />
        </div>
        <p className='flex space-x-1 items-center text-gray-400'>
          <TiAttachmentOutline/>  <span>{clients.files}files</span>
        </p>
    </div>

    </div>
  )
}

export default ClientCard