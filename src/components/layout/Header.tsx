import React from 'react'
import Buttons from '../ui/Butons'
import TextCop from '../ui/TextCop'
import NavText from '../ui/NavText'

export default function Header() {
  return (
    <div className='bg-white dark:bg-black w-full h-16 flex items-center justify-between px-8 shadow-md'>
       <div className='flex justify-center items-center gap-1 md:gap-2'>
        <img src="/logo.jpg" alt="Logo" className='w-12 h-10' />
        <NavText text="Fitness" variant="primary" to="#Hero" /><NavText text="Center" variant="secondary" to="#Hero" />
       </div> 
       <div className='flex gap-4 md:gap-10'>
        <NavText text="About" variant="primary" to="#About" />
        <NavText text="Services" variant="primary" to="#Services" />
        <NavText text="Trainers" variant="primary" to="#Trainers" />
        <NavText text="Contact" variant="primary" to="#Contact" />
       </div> 
       
       <div>
        <Buttons title="Join Now" variant="primary" onClick={() => alert("Button Pressed")} />
       </div> 
    </div>
  )
}
