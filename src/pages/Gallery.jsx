import React from 'react'

const images = [
    '/Images/gall-1.jpeg',
    '/Images/gall-2.jpeg',
    '/Images/gall-3.jpeg',
    '/Images/gall-4.jpeg',
]
const Gallery = () => {
  return (
    <div>
    <div className='relative h-screen bg-cover bg-center h-96' style={{backgroundImage : "url('/Images/hero.png')"}}>
    <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Gallery</h1>
    </div>
</div>
    <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {images.map (image => (
            <div className='rounded-lg overflow-hidden shadow-md transform transtion duration-300 hover:scale-105'>
                <img src={image} alt="" className='w-full h-full object-cover' />
            </div>
        ))}
        </div>
    </div>
</div>
  )
}

export default Gallery