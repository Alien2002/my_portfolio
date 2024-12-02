import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

interface ProjectCardProps {
    project: {
        title: string
        description: string
        image: string
        link: string
        status: string
        releasedDate: string
    }
}

const ProjectCard = ({project}: ProjectCardProps) => {
  const {title, description, image, link, status, releasedDate} = project
  return (
    <div data-aos="fade-right" data-aos-duration="1000">
        <Link href={link}>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 border-gray-700 p-2 rounded-lg shadow-md shadow-slate-400 transform cursor-pointer hover:-translate-y-6 transition-all duration-400'>
                <div>
                    <img className='rounded-lg' src={image} alt='project-image' />
                </div>
                <div className='flex flex-col' data-aos="fade-left" data-aos-duration="1500" >
                    <h2 className='text-xl font-bold text-white'>{title}</h2>
                    <p className='text-white min-h-[30%] md:min-h-[50%]'>{description}</p>
                    <div className='flex flex-col md:flex-row mt-2 justify-between w-[70%]'>
                        <div className=''>
                            <p className='text-white'>status:<br /> <span className='text-yellow-500'>{status}</span></p>
                        </div>
                        <p className='text-white'>First Released on:<br /> <span className='text-yellow-500'>{releasedDate}</span></p>
                    </div>
                    <div>
                        <p className='text-slate-500 text-right text-md'>Click to Visit the site <ArrowTopRightOnSquareIcon className='inline h-4 w-4 text-white'/></p>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProjectCard