import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Footer = () => {
  return (
    <div id='contacts' className='pt-[8rem] pb-[4rem] bg-[#02050a] '>
        <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols2 w-[80%] mx-auto gap-[3rem]'>
            <div data-aos="fade-right" className='flex item-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                    <MapIcon className='md:w-[5rem] w-[2rem] h-[2rem] text-black' />
                </div>
                <div>
                    <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>
                        Address
                    </h1>
                    <p className='text-[17px] w-[100%] text-white opacity-60'>
                        Boko, Dar es salaam <br /> Tanzania
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" className='flex item-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                    <DevicePhoneMobileIcon className='md:w-[5rem] w-[2rem] h-[2rem] text-black' />
                </div>
                <div>
                    <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>
                        Phone
                    </h1>
                    <p className='text-[17px] w-[100%] text-white opacity-60 font-normal'>
                        +255 689 1805 18 <br /> +255 769 1922 14
                    </p>
                </div>
            </div>
            <div data-aos="fade-left" className='flex item-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                    <EnvelopeIcon className='md:w-[5rem] w-[2rem] h-[2rem] text-black' />
                </div>
                <div>
                    <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>
                        Email Address
                    </h1>
                    <p className='text-[17px] w-[90%] text-white opacity-60'>
                        kelvinmaganigani@gmail.com
                    </p>
                </div>
            </div>
        </div>
        <div className='w-[80%] mt-[2rem] mx-auto grid grid-col-1 md:grid-col-2 items-center justify-between'>
            <div className='text-[16px] mb-[2rem] md:mb-0 text-white opacity-20'>
                Alien Web 2024 | All rights reserved
            </div>
            <div className='flex items-center space-x-10'>
                <p className='text-[16px] text-white opacity-20'>Terms & Condition</p>
                <p className='text-[16px] text-white opacity-20'>Privacy Policy</p>
                <p className='text-[16px] text-white opacity-20'>Sitemap</p>
            </div>
        </div>
    </div>
  )
}

export default Footer