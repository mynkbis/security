import React from 'react'
import event from "../assets/images/event.jpeg"
import Footer from "../component/Footer"

const EventsSecurity = () => {
  return (
    <div className="relative">
      {/* Hero section with background */}
      <div className="relative h-screen bg-[#002B4E]">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${event})`,
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
                Crowd Control and Events
              </h1>
              <p className="text-lg text-white mb-8 cursor-pointer leading-9 hover:scale-105">
                Managing large crowds requires expertise, strategy, and a proactive approach to safety. Our crowd control
                services ensure smooth operations at concerts, festivals, sporting events, and corporate gatherings. We
                provide highly trained security personnel skilled in crowd management, access control, and emergency
                evacuation planning. Our team works closely with event organizers to implement effective security measures,
                reducing risks of overcrowding, conflicts, or disturbances. With strong communication and coordination, we
                enforce safety protocols while maintaining a welcoming atmosphere. We also offer VIP security, bag checks,
                and perimeter monitoring to enhance event security. Trust us to keep your event secure, organized, and
                hassle-free.
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

export default EventsSecurity