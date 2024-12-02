import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projectsList = {
    project1: {
      title: 'Online Shopping Website',
      description: 'This is a website for an online shopping store. It has a login and registration system, a cart system, and a payment gateway. It is built using React, Node.js, and MongoDB.',
      image: '/images/online-shopping.png',
      link: 'https://alien-e-shop.vercel.app/',
      status: 'In Progress',
      releasedDate: '20-08-2024'
    },
    project2: {
      title: 'Messenger Web Application',
      description: 'This is a messaging web application built using React, Node.js, and MongoDB. It has a chat system, a user authentication system, and a database for storing messages.',
      image: '/images/messenger.png',
      link: 'https://messenger-app-ochre.vercel.app/',
      status: 'In Progress',
      releasedDate: '10-09-2024'
    }
  }
  
  return (
    <div id='projects' className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading'>
            My <span className='text-yellow-400'>Projects</span>
        </h1>
            <div>
                <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 gap-[2rem] mb-5'>
                  <ProjectCard project={projectsList.project1} />
                  <ProjectCard project={projectsList.project2} />
                </div>
            </div>
    </div>
  )
}

export default Projects
