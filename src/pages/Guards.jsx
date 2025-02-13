import React from 'react'
import Footer from '../component/Footer'
import guard from "../assets/images/guard.jpeg"
const Guards = () => {
  return (
 <div className="relative">
 {/* Hero section with background */}
 <div className="relative h-screen bg-[#002B4E]">
   <div className="absolute inset-0">
     <div 
       className="absolute inset-0"
       style={{
         backgroundImage: `url(${guard})`,
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
         Security Guards
         </h1>
         <p className="text-xs sm:text-lg text-white mb-8 cursor-pointer sm:leading-9 hover:scale-105">
         Our professional security guards provide round-the-clock protection for businesses, residential areas, and commercial properties. Trained in risk assessment, conflict resolution, and emergency response, our guards ensure a safe and secure environment. They act as a visible deterrent to criminal activity, maintaining order and enforcing security policies. Whether you need armed or unarmed security, we tailor our services to meet your specific needs. Our personnel undergo extensive background checks and continuous training to stay prepared for any situation. We offer static guards, access control monitoring, and concierge security solutions. With a strong presence, our guards help prevent unauthorized entry, theft, and vandalism. Choose reliable security that enhances safety and provides peace of mind.
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

export default Guards
