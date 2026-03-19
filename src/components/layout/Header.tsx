'use client'

import React from 'react'
import Buttons from '../ui/Butons'
import TextCop from '../ui/TextCop'
import NavText from '../ui/NavText'
import ThemeToggle from '../ui/ThemeToggle'

export default function Header() {
  return (
    <div className="sticky top-0 left-0 z-50 w-full h-18 flex items-center justify-between px-8 bg-white/30 dark:bg-black/30 backdrop-blur-md border-b border-white/20 shadow-sm">
       <div className='flex justify-center items-center gap-1 md:gap-2'>
        <img src="/logo.jpg" alt="Logo" className='w-12 h-10' />
        <a href='#Hero'>
          <span className='font-bold text-yellow-500 text-xl'>Fitness</span><span className='font-bold text-xl'>Center</span>
        </a>
        
       </div> 
       <div className='flex gap-4 md:gap-16'>
        <NavText text="About" variant="primary" to="#About" />
        <NavText text="Services" variant="primary" to="#Services" />
        <NavText text="Contact" variant="primary" to="#Contact" />
       </div> 
       
       <div className='flex items-center gap-6'>
        <ThemeToggle />
        <Buttons title={<NavText to='#Contact' text="Join Now" variant="ternary" />}variant="primary" />
       </div> 
    </div>
  )
}
