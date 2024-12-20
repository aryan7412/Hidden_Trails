import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
        <div className='relative h-screen bg-cover bg-center h-96' style={{backgroundImage : "url('/Images/hero.png')"}}>
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Contact</h1>
        </div>
    </div>
    <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
            <div className='bg-white rounded-lg shadow-md p-6'>
               <h3 className='text-xl font-bold mb-4'>Contact Details</h3>
               <div className='flex items-center mb-4'>
                    <FaEnvelope className='text-blue-500 mr-2' />
                    <p>hiddenTrails@xyz.com</p>
                </div> 
                <div className='flex items-center mb-4'>
                    <FaPhone className='text-blue-500 mr-2' />
                    <p>123 456 7890</p>
                </div>
                <div className='flex items-center'>
                    <FaMapMarkedAlt className='text-blue-500 mr-2' />
                    <p>Bhubaneswar, India</p>
                </div> 
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
                <h3 className='text-xl font-bold mb-4'>Get in Touch</h3>
                <form>
                    <div className='mb-4'>
                        <label className='block text-gray-700 mb-2'>Name</label>
                        <input type="text" className='w-full p-2 border border-gray-300 rounded' placeholder='Enter Name' />
                    </div>
                    <div>
                        <label className='block text-gray-700 mb-2'>Email</label>
                        <input type="email"  className='w-full p-2 border border-gray-300 rounded' placeholder='Enter Email' />
                    </div>
                    <div>
                        <label className='block text-gray-700 mb-2'>Message</label>
                        <textarea  className='w-full p-2 border border-gray-300 rounded' placeholder="Write message" id=""></textarea>
                    </div>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact