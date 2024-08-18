import React, { useState } from 'react'
import Nav from '@/components/Nav'
import { BeakerIcon } from '@heroicons/react/24/solid'
import MobileNav from '@/components/MobileNav';
import Alien from '@/components/alien';

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);


  return (
    <div className='overflow-x-hidden'>
      <div>
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>

        <Alien />
      </div>
    </div>
  )
}

export default HomePage