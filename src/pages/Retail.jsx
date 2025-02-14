import React from 'react'
import security from "../assets/images/security.jpeg"
import Footer from '../component/Footer'
const RetailSecurity = () => {
  return (
    <div className="relative">
      {/* Hero section with background */}
      <div className="relative h-screen bg-[#002B4E]">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${security})`,
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
            Retail Security and Loss Prevention Security Services
              </h1>
              <p className="text-sm sm:text-lg text-white mb-8 cursor-pointer sm:leading-9 hover:scale-105">
              Retail businesses face constant threats of shoplifting, fraud, and internal theft. Our retail security
              and loss prevention services safeguard your store, employees, and customers while minimizing financial
              losses. We provide trained security officers who monitor suspicious activities, conduct bag checks, and
              assist with conflict de-escalation. Our team implements access control, CCTV monitoring, and undercover
              security to prevent theft before it happens. Whether you're managing a shopping mall, boutique, or
              supermarket, we customize security strategies to suit your business model. With proactive loss prevention
              measures, we help improve store operations and customer confidence.
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

export default RetailSecurity