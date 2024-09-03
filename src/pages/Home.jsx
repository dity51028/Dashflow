import React from 'react'
import ProjectStatistics from '../components/ProjectStatistics'
import PlatformCard from '../components/PlatformCard'
import { PROJECTS } from '../Utils/Project'
import { CLIENTS } from '../Utils/Clients'
import ProjectCard from '../components/ProjectCard'
import ClientCard from '../components/ClientCard'

const Home = () => {
  return (
    <div className='p-5'>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
      <ProjectStatistics/> 
      <PlatformCard/>
      <ProjectStatistics/> 
      <PlatformCard/>
      
      </div>

      <div >
        <div className='flex justify-between items-center py-4' >
          <h1 className='text-lg font-semibold'>Current Projects</h1>
          <p className='text-sm underline text-indigo-600'>See All</p>
        </div>

        <div className='grid md:grid-cols-2 xl:grid-cols-4'>
          {PROJECTS && PROJECTS.map((project,index)=> {
            return <ProjectCard project={project} key={index}/> 
        })}
        </div>

      </div>

      <div >
        <div className='flex justify-between items-center py-4' >
          <h1 className='text-lg font-semibold'>Current Clients</h1>
          <p className='text-sm underline text-indigo-600'>See All</p>
        </div>
       {/*<div className='grid md:grid-cols-2 xl:grid-cols-4'>
          {CLIENTS && CLIENTS.map((clients,index)=> {
            console.log(clients);
            return <ClientCard client={clients} key={index}/>
            } )}
        </div>
          */}
       
      </div>
    </div>
   
  )
}

export default Home