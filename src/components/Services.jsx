import React from 'react'
import { FaHotel } from 'react-icons/fa';

const services = [
    {
        icon: <FaHotel className=" text-4xl text-blue-500" />,
        title: 'Hotel Booking',
        description: 'Book hotels at the best prices with our exclusive deals and discounts',
    },
    {
        icon: <FaHotel className=" text-4xl text-blue-500" />,
        title: 'Hotel Booking',
        description: 'Book hotels at the best prices with our exclusive deals and discounts',
    },
    {
        icon: <FaHotel className=" text-4xl text-blue-500" />,
        title: 'Hotel Booking',
        description: 'Book hotels at the best prices with our exclusive deals and discounts',
    },
    {
        icon: <FaHotel className=" text-4xl text-blue-500" />,
        title: 'Hotel Booking',
        description: 'Book hotels at the best prices with our exclusive deals and discounts',
    },


];
const Services = () => {
  return (
    <div className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-8'>Our Services</h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {services.map((service, index) => (
                 <div key={index} className='bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer transform transition duration-300 hover:scale-110'>
                    <div classsName='mb-4'>{service.icon}</div>
                    
                        <h3 className='text-4xl font-bold mb-2'>{service.title}</h3>
                        <p className='text-gray-600'>{service.description}</p>
                    
                 </div>   
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services