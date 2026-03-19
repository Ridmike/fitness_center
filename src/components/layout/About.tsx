import React from 'react'
import TextCop from '../ui/TextCop'

export default function About() {
  const features = [
    "Premium Equipment from Industry Leaders",
    "Certified Elite-Level Trainers",
    "Customized Nutritional Planning"
  ]

  return (
    <div className='container mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8' id="About">
        {/* Image Section */}
        <div className='w-full lg:w-1/2 relative'>
            <img src="/aboutSec.jpeg" alt="About" className='w-full h-auto sm:h-80 md:h-96 object-cover rounded-xl border-4 border-slate-700' />
            <div className='absolute -bottom-8 sm:-bottom-12 -right-3 sm:-right-6 bg-yellow-500 rounded-lg px-4 sm:px-6 py-2 text-center shadow-lg'>
              <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>5+</p>
              <p className='text-white font-semibold text-xs sm:text-sm'>Years of Experience</p>
            </div>
        </div>

        {/* Content Section */}
        <div className='w-full lg:w-1/2 mt-8 sm:mt-10 lg:mt-0'>
            <TextCop text="ABOUT US" variant="secondary" className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-2 sm:mb-3' />
            <TextCop text="Elevating Human Performance Every Day" variant="ternary" className='text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4' />
            <TextCop text="At Transform Fitness, we provide a high-energy environment equipped with state-of-the-art technology to help you reach your peak performance. Our philosophy centers on functional movement, science-based training and an unwavering commitment to our members' results." variant="secondary" className='text-sm sm:text-base md:text-lg font-medium text-gray-300 mb-4 sm:mb-6' />
            
            <div className='space-y-1.5 sm:space-y-2'>
              {features.map((feature, index) => (
                <div key={index} className='flex items-center gap-2 sm:gap-3'>
                  <span className='text-yellow-500 text-lg sm:text-xl shrink-0'>✓</span>
                  <p className='text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base'>{feature}</p>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}
