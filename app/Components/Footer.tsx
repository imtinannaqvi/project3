import React from 'react';
import { FaFacebookF, FaTwitter,FaEnvelope, FaGooglePlusG } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img 
          src="/back.jpg" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />

        {/* Content Container */}
        <div className="relative z-10 text-center p-8 bg-white/80 rounded-lg shadow-xl max-w-lg mx-4">
          <h1 className='text-black text-4xl font-bold mb-4'>
            Get The <span className='text-cyan-500'>Latest Updates</span> From Us
          </h1>
          
          <form action="" className="flex flex-col gap-4 items-center">
            <label htmlFor="email" className="text-gray-700 italic">
              – Subscribe to our newsletter –
            </label>
            <input 
              type="email" 
              id="email"
              placeholder='Enter Your Email Id' 
              className="border-2 border-cyan-500 p-3 w-full rounded focus:outline-none"
            />
            <button className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Section */}
      <footer className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6 w-32">
              <img src="/logo-1.webp" alt="" />
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Regular dental checkups help in detection of early warning signs of certain health related issues. Visit your dentists regularly and stay healthy.
            </p>
            <h3 className="text-xl font-bold text-gray-800">Trusted by 15,000 People</h3>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Useful <span className="text-cyan-500">Links</span></h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3 text-gray-600 cursor-pointer">
                <li className="hover:text-cyan-500">• Home</li>
                <li className="hover:text-cyan-500">• About</li>
                <li className="hover:text-cyan-500">• Services</li>
                <li className="hover:text-cyan-500">• Health Info</li>
                <li className="hover:text-cyan-500">• Appointments</li>
              </ul>
              <ul className="space-y-3 text-gray-600 cursor-pointer">
                <li className="hover:text-cyan-500">• Dental Care</li>
                <li className="hover:text-cyan-500">• Cleaning Facilities</li>
                <li className="hover:text-cyan-500">• Whitening Care</li>
                <li className="hover:text-cyan-500">• Dental Implants</li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Address */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact <span className="text-cyan-500">Address</span></h3>
            <p className="text-gray-600 mb-6">64C East Crest, Melane Plaza,<br />DanyBoyle, TT 33546</p>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Call <span className="text-cyan-500">Us</span></h3>
            <p className="text-gray-600 mb-6 text-lg font-semibold">335-565-2900</p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaGooglePlusG].map((Icon, i) => (
                <div key={i} className="bg-white p-3 rounded-full shadow-md text-gray-500 hover:bg-cyan-500 hover:text-white transition-colors cursor-pointer">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>
      <div className='text-center py-10'>
      <h1 className='text-3xl font-bold mb-6'>
        <span className='text-cyan-500'>NewsLetter</span> Subscription
      </h1>
      
      <div className='relative inline-block w-full max-w-sm'>
        {/* Icon container */}
        <div className='absolute inset-y-0 left-0 flex items-center pl-2 text-cyan-500'>
          <FaEnvelope />
        </div>
        
        {/* Input with border-bottom */}
        <input 
          type="text"
          placeholder='Email Id' 
          className='w-full pl-10 text-cyan-500 py-2 bg-transparent border-b-2 border-gray-300 focus:border-cyan-500 outline-none transition-colors'
        />
      </div>
    </div>
        
        {/* Copyright */}
        <div className="text-center mt-12 text-gray-400 text-sm border-t pt-8">
            © 2026 Dental - All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;