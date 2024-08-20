import React from 'react'
import Particl from './Particles'
import AlienEffect from './AlienEffect'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'

const Alien = () => {
  return (
    <div className='h-[88vh] bg-[url("/images/black.png")] bg-cover bg-center'>
        <Particl />
        <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
            <div>
                <h1 className='text-[35px] md:text-[50px] text-white font-bold'>

                    HI! I&apos;M <span className='text-yellow-400'>KELVIN</span>
                </h1> 
                <AlienEffect />
                <p className='mt-[2rem] text-[20px] text-[#ffffff92]'>
                    Hellow, It&apos;s Kelvin. I am currently taking my first degree at University of Dar es salaam
                    studying bachelor degree of Science in computer science.
                </p>
                <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                    <a href='/cv/CV_Kelvin.pdf' download={'CV_Kelvin.pdf'}>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px]
                        font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                            <p> Download CV</p>
                            <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                        </button>
                    </a>
                </div>
            </div>
            <div className='w-[500px] hidden bg-[url("/images/me1.jpg")] relative lg:flex items-center rounded-full h-[500px]'> </div>
        </div>
    </div>
  )
}

export default Alien