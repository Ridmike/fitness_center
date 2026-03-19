import React from 'react'
import TextCop from '../ui/TextCop'

export default function About() {
  const features = [
    "Premium Equipment from Industry Leaders",
    "Certified Elite-Level Trainers",
    "Customized Nutritional Planning"
  ]

  return (
    <div className='flex gap-8 md:gap-16 items-center py-4 md:py-16 px-4' id="About">
        <div className='w-1/2 relative'>
            <img src="/aboutSec.jpeg" alt="About" className='w-full h-full object-cover rounded-xl border-4 border-slate-700' />
            <div className='absolute -bottom-12 -right-6 bg-yellow-500 rounded-lg px-6 py-2 text-center shadow-lg'>
              <p className='text-4xl font-bold text-white'>5+</p>
              <p className='text-white font-semibold text-sm'>Years of Experience</p>
            </div>
        </div>
        <div className='w-1/2'>
            <TextCop text="ABOUT US" variant="secondary" className='text-sm md:text-xl font-semibold mb-2' />
            <TextCop text="Elevating Human Performance Every Day" variant="ternary" className='text-2xl md:text-4xl font-bold mb-4' />
            <TextCop text="At Transform Fitness, we provide a high-energy environment equipped with state-of-the-art technology to help you reach your peak performance. Our philosophy centers on functional movement, science-based training and an unwavering commitment to our members' results." variant="secondary" className='text-base md:text-lg font-medium text-gray-300 mb-4' />
            
            <div className='space-y-2 '>
              {features.map((feature, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <span className='text-yellow-500 text-xl'>✓</span>
                  <p className='text-gray-600 font-medium'>{feature}</p>
                </div>
              ))}
            </div>

        </div>
    </div>
  )
}
