import React from 'react'
import TextCop from '../ui/TextCop'
import Buttons from '../ui/Butons'
import { useNotification } from '@/src/providers/NotificationProvider'

export default function Hero() {

  const { showWarning } = useNotification()
  return (
    <div className='relative w-full min-h-screen md:h-screen flex items-center' id='Hero'>
        <img src="/heroImg.jpeg" alt="Hero" className='absolute inset-0 w-full h-full object-cover' />
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative z-10 w-full container mx-auto flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-0'>
          <div className='max-w-2xl'>
            <TextCop text="UNLEASH YOUR POTENTIAL" variant="primary" className='text-yellow-500 bg-yellow-400/20 w-fit px-2 sm:px-3 rounded-xl font-semibold text-xs sm:text-sm md:text-base mb-3 sm:mb-4' />
            <TextCop text="TRANSFORM " variant="primary" className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-2' />
            <TextCop text="YOUR BODY" variant="secondary" className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6' />
            <TextCop text="Join the most advanced fitness community in town, State-of-the-art facilities, expert trainers and a culture of excellence." variant="secondary" className='text-base sm:text-lg md:text-xl font-medium text-gray-200 mb-6 sm:mb-8 max-w-xl' />
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Buttons title="Start Your Journey" variant="primary" onClick={() => showWarning('Warning!', 'This section is still under development!')} className='w-full sm:w-auto' />
                <Buttons title="View Programs" variant="primary" onClick={() => showWarning('Warning!', 'This section is still under development!')} className='w-full sm:w-auto' />
            </div>
          </div>
        </div>
    </div>
  )
}
