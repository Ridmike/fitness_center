'use client'

import React, { useState } from 'react'
import Buttons from '../ui/Butons'
import TextCop from '../ui/TextCop'
import NavText from '../ui/NavText'
import ThemeToggle from '../ui/ThemeToggle'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 left-0 z-50 w-full bg-white/30 dark:bg-black/30 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4  py-3 sm:py-4">
       {/* Logo */}
       <div className='flex justify-center items-center gap-1 md:gap-2'>
        <img src="/logo.jpg" alt="Logo" className='w-10 h-8 sm:w-12 sm:h-10' />
        <a href='#Hero' className='hidden sm:block'>
          <span className='font-bold text-yellow-500 text-lg sm:text-xl'>Fitness</span><span className='font-bold text-lg sm:text-xl'>Center</span>
        </a>
       </div> 

       {/* Desktop Navigation */}
       <div className='hidden md:flex gap-6 lg:gap-16'>
        <NavText text="About" variant="primary" to="#About" />
        <NavText text="Services" variant="primary" to="#Services" />
        <NavText text="Contact" variant="primary" to="#Contact" />
       </div> 
       
       {/* Right Section */}
       <div className='flex items-center gap-2 sm:gap-4 md:gap-6'>
        <ThemeToggle />
        <div className='hidden sm:block'>
          <Buttons title={<NavText to='#Contact' text="Join Now" variant="ternary" />}variant="primary" />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className='md:hidden p-2'
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
       </div>

       {/* Mobile Navigation */}
       {isOpen && (
         <div className='absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-white/20 md:hidden'>
           <div className='flex flex-col gap-3 px-4 py-4'>
             <a href="#About" className='py-2' onClick={() => setIsOpen(false)}>
               <NavText text="About" variant="primary" to="#About" />
             </a>
             <a href="#Services" className='py-2' onClick={() => setIsOpen(false)}>
               <NavText text="Services" variant="primary" to="#Services" />
             </a>
             <a href="#Contact" className='py-2' onClick={() => setIsOpen(false)}>
               <NavText text="Contact" variant="primary" to="#Contact" />
             </a>
             <div className='pt-2'>
               <Buttons title={<NavText to='#Contact' text="Join Now" variant="ternary" />}variant="primary" className='w-full' />
             </div>
           </div>
         </div>
       )}
      </div>
    </div>
  )
}
