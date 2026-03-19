import React, { useState } from 'react'
import FormInput from '../ui/FormInput'
import FormMessage from '../ui/FormMessage'
import Buttons from '../ui/Butons'
import { formValidation } from '../../lib/FormValidations'
import TextCop from '../ui/TextCop'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues(prev => ({
      ...prev,
      [name]: value
    }))

    // Validate on change if field was touched
    if (touched[name]) {
      const error = formValidation(name, value)
      setErrors(prev => ({
        ...prev,
        [name]: error
      }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))
    const error = formValidation(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {}

    Object.keys(values).forEach(name => {
      const error = formValidation(name, (values as any)[name])
      if (error) {
        newErrors[name] = error
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const resetForm = () => {
    setValues({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
    setErrors({})
    setTouched({})
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      console.log('Form submitted:', values)
      alert('Form submitted successfully!')
      resetForm()
    } else {
      alert('Please fix the errors in the form')
    }
  }

  return (
    <div className='py-4 px-4 md:px-8' id="Contact">
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
        {/* Contact Info */}
        <div className='flex flex-col justify-start'>
          <div className='flex items-center gap-2 mb-4'>
            <TextCop text="GET IN" variant="secondary" className='text-3xl md:text-5xl font-bold' />
            <TextCop text="TOUCH" variant="primary" className='text-3xl md:text-5xl font-bold' />
          </div>
          
          <p className='dark:text-gray-300 text-gray-500 mb-6 max-w-sm'>Have questions about our memberships or programs? We're here to help you start your transformation.</p>

          <div className='space-y-8'>
            
            <div className='flex gap-4 items-start'>
              <div className='bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-3 mt-1'>
                <MapPin className='text-yellow-500' size={24} />
              </div>
              <div>
                <h4 className='dark:text-white font-semibold mb-2'>Location</h4>
                <p className='dark:text-gray-300 text-gray-500 text-sm'>171/1, Sathsara Mawatha,</p>
                <p className='dark:text-gray-300 text-gray-500 text-sm'>Malabe, 10115</p>
              </div>
            </div>

            <div className='flex gap-4 items-start'>
              <div className='bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-3 mt-1'>
                <Phone className='text-yellow-500' size={24} />
              </div>
              <div>
                <h4 className='dark:text-white font-semibold mb-2'>Phone</h4>
                <p className='dark:text-gray-300 text-gray-500 text-sm'>+94 76 636 8845</p>
              </div>
            </div>

            <div className='flex gap-4 items-start'>
              <div className='bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-3 mt-1'>
                <Mail className='text-yellow-500' size={24} />
              </div>
              <div>
                <h4 className='dark:text-white font-semibold mb-2'>Email</h4>
                <p className='dark:text-gray-300 text-gray-500 text-sm'>ridmikew@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <FormInput
                label="NAME"
                name="name"
                type="text"
                placeholder="John Doe"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
                variant="primary"
              />
              <FormInput
                label="EMAIL"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                variant="primary"
              />
            </div>

            <FormInput
              label="PHONE"
              name="phone"
              type="tel"
              placeholder="07X XXX XXXX"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phone}
              variant="primary"
            />

            <FormMessage
              label="MESSAGE"
              name="message"
              placeholder="How can we help you?"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.message}
              variant="primary"
            />

            <div className='flex w-full gap-4 pt-4'>
              <Buttons
                title="Send Message"
                variant="primary"
                type="submit"
                className='w-1/2'
              />
              <Buttons
                title="Reset"
                variant="secondary"
                type="button"
                onClick={resetForm}
                className='w-1/2'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
