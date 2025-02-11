import React from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
const TopBanner = () => {
  return (
    <div className="hidden md:block bg-blue-900 w-full py-2 px-4">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center text-sm text-white">
      <div className="flex items-center space-x-4">
        <Link className="flex items-center space-x-2">
          <Mail size={20} fill='white' className='text-blue-900 rounded-xl'/>
          <span className='text-white'>Operations@nforcesecurity.net</span>
        </Link> |
        <Link to="tel:1300660324" className="flex items-center space-x-2 ml-2 mr-2">
          <Phone size={20} fill='white' className='text-blue-900 rounded-xl' />
          <span className='text-white'>+61 422 446 444</span>
        </Link> |
      </div>
      <span className=" text-white font-bold px-4 py-1 rounded cursor-pointer">
        Join Us
      </span>
    </div>
  </div>
  )
}

export default TopBanner