import React from 'react'
import patrol from "../assets/images/patrol.jpeg"
import Footer from '../component/Footer'
const MobilePetrol = () => {
  return (
    <div className="relative">
      {/* Hero section with background */}
      <div className="relative h-screen bg-[#002B4E]">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${patrol})`,
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
            <h1 className="text-sm sm:text-3xl font-bold text-white mb-6 leading-tight cursor-pointer hover:scale-105">
              Mobile Patrols
              </h1>
              <p className="text-xs sm:text-lg text-white mb-8 cursor-pointer sm:leading-9 hover:scale-105">
              Our mobile patrol security services provide a proactive approach to property protection, ensuring
              round-the-clock surveillance of commercial, industrial, and residential areas. Equipped with marked
              security vehicles, our patrol officers conduct scheduled and random inspections, deterring potential
              threats before they escalate. We monitor for suspicious activities, unauthorized access, and property
              damage, responding swiftly to security breaches. Our patrols include drive-by inspections, foot patrols,
              and lock-up/unlock services. With real-time GPS tracking and incident reporting, clients receive
              comprehensive updates on security status. Whether you need night patrols or weekend coverage, our flexible
              services offer the protection you need.
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

export default MobilePetrol