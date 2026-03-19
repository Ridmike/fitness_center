import React from 'react'
import Buttons from '../ui/Butons'
import TextCop from '../ui/TextCop'

export default function Header() {
  return (
    <div className='bg-white dark:bg-black w-full h-16 flex items-center justify-between px-8 shadow-md'>
       <div className='flex justify-center items-center gap-1 md:gap-2'>
        <img src="/logo.jpg" alt="Logo" className='w-12 h-10' />
        <TextCop text="Fitness" variant="primary" /><TextCop text="Center" variant="secondary" />
        </div> 
       <div className='flex gap-4 md:gap-10'>
        <TextCop text="About" variant="primary" />
       <TextCop text="Services" variant="primary" />
       <TextCop text="Trainers" variant="primary" />
       <TextCop text="Contact" variant="primary" /></div> 
       
       <div>
        <Buttons title="Join Now" variant="primary" onClick={() => alert("Button Pressed")} />
        </div> 
    </div>
  )
}
