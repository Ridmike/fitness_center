import React from 'react'
import TextCop from '../ui/TextCop'

export default function Services() {

    const services = [
        {
            title: "Personal Training",
            image: "/personal.jpeg",
            icon: "👥"
        },
        {
            title: "Cardio Training",
            image: "/cardio.jpeg",
            icon: "🏃"
        },
        {
            title: "Strength Training",
            image: "/weight.jpeg",
            icon: "💪"
        },
        {
            title: "Yoga Classes",
            image: "/yoga.jpeg",
            icon: "🧘"
        }
    ]

  return (
    <div className='container mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8' id="Services">
        <div className='flex flex-col sm:flex-row gap-2 justify-center mb-2 sm:mb-3'>
            <TextCop text="PREMIUM" variant="primary" className='text-2xl sm:text-3xl md:text-5xl font-bold text-center' />
            <TextCop text="SERVICES" variant="secondary" className='text-2xl sm:text-3xl md:text-5xl font-bold text-center' />
        </div>
        <TextCop text="Tailored programs designed to challenge your limits and deliver measurable results" variant="secondary" className='text-xs sm:text-base md:text-lg font-medium text-center text-gray-300 mb-8 sm:mb-10 md:mb-12' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6'>
            {services.map((service, index) => (
                <div key={index} className='relative group overflow-hidden rounded-lg sm:rounded-xl '>
                    <img src={service.image} alt={service.title} className='w-full h-full object-cover rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300' />
                    <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent rounded-lg sm:rounded-xl'></div>
                    
                    <div className='absolute bottom-0 left-0 right-0 p-4 sm:p-5'>
                        <div className='flex items-center justify-center gap-2 sm:gap-3'>
                            <span className='text-xl sm:text-2xl'>{service.icon}</span>
                            <p className='text-sm sm:text-base md:text-lg font-semibold text-white line-clamp-2'>
                                {service.title}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
