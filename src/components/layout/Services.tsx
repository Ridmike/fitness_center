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
    <div className='py-16 px-4' id="Services">
        <div className='flex gap-2 justify-center mb-2'>
            <TextCop text="PREMIUM" variant="primary" className='text-3xl md:text-5xl font-bold text-center' />
            <TextCop text="SERVICES" variant="secondary" className='text-3xl md:text-5xl font-bold text-center' />
        </div>
        <TextCop text="Tailored programs designed to challenge your limits and deliver measurable results" variant="secondary" className='text-base md:text-lg font-medium text-center text-gray-300 mb-12' />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10 px-4'>
            {services.map((service, index) => (
                <div key={index} className='relative group overflow-hidden rounded-xl'>
                    <img src={service.image} alt={service.title} className='w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300' />
                    <div className='absolute inset-0 bg-linear-to-t from-black/80 to-transparent rounded-xl'></div>
                    
                    <div className='absolute bottom-0 left-0 right-0 p-4'>
                        <div className='flex items-center justify-center gap-3'>
                            <span className='text-2xl'>{service.icon}</span>
                            <p className='text-lg font-semibold text-white'>
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
