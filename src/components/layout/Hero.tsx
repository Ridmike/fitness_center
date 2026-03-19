import React from 'react'
import TextCop from '../ui/TextCop'
import Buttons from '../ui/Butons'
import { useNotification } from '@/src/providers/NotificationProvider'

export default function Hero() {

  const { showWarning } = useNotification()
  return (
    <div className='relative w-full h-screen' id='Hero'>
        <img src="/heroImg.jpeg" alt="Hero" className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 w-full h-full bg-black/70'></div>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center pl-8 md:pl-16 lg:pl-24'>
          <div className='max-w-md'>
            <TextCop text="UNLEASH YOUR POTENTIAL" variant="primary" className='text-yellow-500 bg-yellow-400/20 w-fit px-2 rounded-xl font-semibold text-sm md:text-base mb-4' />
            <TextCop text="TRANSFORM " variant="primary" className='text-4xl md:text-6xl font-bold text-white mb-2' />
            <TextCop text="YOUR BODY" variant="secondary" className='text-4xl md:text-6xl font-bold text-white mb-4' />
            <TextCop text="Join the most advanced fitness community in town, State-of-the-art facilities, expert trainers and a culture of excellence." variant="secondary" className='text-lg md:text-xl font-medium text-gray-200 mb-8' />
            <div className="flex gap-4">
                <Buttons title="Start Your Journey" variant="primary" onClick={() => showWarning('Warning!', 'This section is still under development!')} />
                <Buttons title="View Programs" variant="primary" onClick={() => showWarning('Warning!', 'This section is still under development!')} />
            </div>
          </div>
        </div>
    </div>
  )
}
