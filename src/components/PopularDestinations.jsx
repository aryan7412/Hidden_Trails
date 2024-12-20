import React from 'react'

const destinations =[
    {
        image: '/Images/image.png',
        title: 'Chilika Lake',
        description: 'Chilika Lake, a brackish water lagoon in Odisha, India'
    },
    {
        image: '/Images/image.png',
        title: 'Chilika Lake',
        description: 'Chilika Lake, a brackish water lagoon in Odisha, India'
    },
    {
        image: '/Images/image.png',
        title: 'Chilika Lake',
        description: 'Chilika Lake, a brackish water lagoon in Odisha, India'
    },
    {
        image: '/Images/image.png',
        title: 'Chilika Lake',
        description: 'Chilika Lake, a brackish water lagoon in Odisha, India'
    },

];
const PopularDestinations = () => {
  return (
    <div className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-8'>Popular Destination</h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {destinations.map((city, index) => (
                 <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'>
                    <img src={city.image} alt={city.title} className='w-full h-48 object-cover transform transition duration-300 hover:scale-110' />
                    <div className='p-4'>
                        <h3 className='text-4xl font-bold mb-2'>{city.title}</h3>
                        <p className='text-gray-600'>{city.description}</p>
                    </div>
                 </div>   
                ))}
            </div>
        </div>
    </div>
  )
}

export default PopularDestinations