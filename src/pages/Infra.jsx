import React from 'react'
import construction from "../assets/images/construction.jpeg"
import Footer from '../component/Footer'
const Infra = () => {
  return (
    <div className="relative">
      {/* Hero section with background */}
      <div className="relative h-screen bg-[#002B4E]">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${construction})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        {/* Content */}
        <div className="relative h-full">
          <div className="max-w-7xl mx-auto px-6 py-32">
            <div className="">
              <h1 className="text-3xl font-bold text-white mb-6 leading-tight cursor-pointer hover:scale-105">
              Construction, Infrastructure, and Building Environment Security
              </h1>
              <p className="text-lg text-white mb-8 cursor-pointer leading-9 hover:scale-105">
              Construction sites and infrastructure projects are vulnerable to theft, vandalism, and unauthorized access.
              Our security solutions ensure that equipment, materials, and personnel remain safe throughout the project
              lifecycle. We deploy trained security guards to monitor entry points, conduct regular patrols, and enforce
              safety protocols. Our team is equipped to handle fire watch services, emergency response, and conflict
              resolution. We also integrate CCTV surveillance and alarm systems for enhanced site monitoring. By
              implementing strict access control measures, we reduce risks associated with trespassing and liability
              concerns. Protect your construction investment with our reliable security services.
            </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Infra