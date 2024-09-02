import React from 'react'
import ProjectStatistics from '../components/ProjectStatistics'
import PlatformCard from '../components/PlatformCard'

const Home = () => {
  return (
    <div className='p-5'>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
      <ProjectStatistics/> 
      <PlatformCard/>
      <ProjectStatistics/> 
      <PlatformCard/>
      
      </div>
      
    </div>
   
  )
}

export default Home