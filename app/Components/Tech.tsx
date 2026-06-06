import React from 'react'

const Tech = () => {
  return (
    // Applied the cyan background color and padding
    <div className='bg-cyan-500 py-20 px-6'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10'>
        
        {/* Left Side: Text and Buttons */}
        <div className='flex-1 text-white space-y-6'>
          <h1 className='text-4xl md:text-5xl font-bold'>
            Technology at your service!
          </h1>
          <p className='text-white/90 leading-relaxed text-lg'>
            Sed convallis, lorem quis viverra dictum, ex diam cursus justo, ut vehicula 
            lacus leo vel ante. Sed at egestas lorem. Etiam lobortis metus justo, 
            tempor commodo risus cursus sit amet. Donec at lacinia magna.
          </p>
          
          <div className='flex gap-4 pt-4'>
            <img src="/app-store-1.png" alt="App Store" className='h-12 cursor-pointer' />
            <img src="/app-store2.webp" alt="Google Play" className='h-12 cursor-pointer' />
          </div>
        </div>

        {/* Right Side: Device Image */}
        <div className='flex-1 flex justify-center'>
          <img src="/device-1.png" alt="Technology Device" className='max-w-full h-auto' />
        </div>
        
      </div>
    </div>
  )
}

export default Tech