import React from 'react'
import Footer from '../component/Footer'

const Guards = () => {
  return (
    <div className="bg-[#002B4E]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-white py-6 mb-8">
          Our Services
        </h1>
        {/* Service List */}
        <div className="space-y-12">
          {/* Service 1: Security Guards */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#002B4E] mb-4">1. Security Guards</h2>
            <p className="text-blue-900">
              Our professional security guards provide round-the-clock protection for businesses, residential areas, and commercial properties. Trained in risk assessment, conflict resolution, and emergency response, our guards ensure a safe and secure environment. They act as a visible deterrent to criminal activity, maintaining order and enforcing security policies. Whether you need armed or unarmed security, we tailor our services to meet your specific needs. Our personnel undergo extensive background checks and continuous training to stay prepared for any situation. We offer static guards, access control monitoring, and concierge security solutions. With a strong presence, our guards help prevent unauthorized entry, theft, and vandalism. Choose reliable security that enhances safety and provides peace of mind.
            </p>
          </div>

          {/* Service 2: Crowd Control and Events */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#002B4E] mb-4">2. Crowd Control and Events</h2>
            <p className="text-blue-900">
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

          {/* Service 3: Mobile Patrols */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#002B4E] mb-4">3. Mobile Patrols</h2>
            <p className="text-blue-900">
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

          {/* Service 4: Construction, Infrastructure, and Building Environment Security */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#002B4E] mb-4">4. Construction, Infrastructure, and Building Environment Security</h2>
            <p className="text-blue-900">
              Construction sites and infrastructure projects are vulnerable to theft, vandalism, and unauthorized access.
              Our security solutions ensure that equipment, materials, and personnel remain safe throughout the project
              lifecycle. We deploy trained security guards to monitor entry points, conduct regular patrols, and enforce
              safety protocols. Our team is equipped to handle fire watch services, emergency response, and conflict
              resolution. We also integrate CCTV surveillance and alarm systems for enhanced site monitoring. By
              implementing strict access control measures, we reduce risks associated with trespassing and liability
              concerns. Protect your construction investment with our reliable security services.
            </p>
          </div>

          {/* Service 5: Retail Security and Loss Prevention Security Services */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#002B4E] mb-4">5. Retail Security and Loss Prevention Security Services</h2>
            <p className="text-blue-900">
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
      <Footer/>
    </div>
  )
}

export default Guards
