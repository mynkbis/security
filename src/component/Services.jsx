import patrol from "../assets/images/patrol.jpeg"
import cam from "../assets/images/cam.jpeg"
import construction from "../assets/images/construction.jpeg"
import event from "../assets/images/event.jpeg"
import general from "../assets/images/general.jpeg"
import security from "../assets/images/security.jpeg"
import guard from "../assets/images/guard.jpeg"


const services = [
  {
    title: "CCTV surveillance",
    description:
      "Operating a 24-hour grade one monitoring center. Partnering with Engage Security. Burglary and intrusions alarms are the most commonly monitored alarm types.",
    image: cam,
  },
  {
    title: "Construction Security Service",
    description:
     "Our security solutions protect construction sites from theft, vandalism, and unauthorized access. We deploy trained guards to monitor entry points, patrol regularly, and enforce safety protocols. With fire watch services, emergency response, CCTV surveillance, and strict access control, we safeguard equipment, materials, and personnel throughout the project lifecycle.",
    image: construction
  },
    {
      title: "Event Security",
      description:
       "Our crowd control services ensure smooth, safe events like concerts, festivals, and sports. With trained security personnel skilled in crowd management, access control, and emergency planning, we work with organizers to prevent overcrowding and conflicts. We also offer VIP security, bag checks, and perimeter monitoring for enhanced safety.",
       image: event
    },
    {
      title: "General Security",
      description:
        "Event Security Excellence: We bring the assurance of a flawless gathering. Our skilled professionals guarantee a secure, seamless experience.",
      image: general
    },
    {
      title: "Retail Security Service",
      description:
       "Our retail security services protect stores from shoplifting, fraud, and internal theft. Trained officers monitor suspicious activities, conduct bag checks, and assist with conflict de-escalation. We implement access control, CCTV monitoring, and undercover security to prevent theft. Customizable strategies improve store operations and boost customer confidence.",
      image: security
    },
    {
      title: "Security Guard Service",
      description:
        "We offer 24/7 security for businesses, homes, and properties. Our trained guards provide armed or unarmed protection, focusing on risk assessment, emergency response, and theft prevention. With background checks and ongoing training, we ensure safety through static patrols, access control, and concierge services, offering peace of mind to clients.",
      image: guard
    },
  ];
  
  export default function OurServices() {
    return (
      <div className="bg-[#002B4E] text-black py-12 px-6 text-center">
        <h2 className="text-3xl text-white font-semibold hover:scale-105 cursor-pointer">Our Services</h2>
        <p className="max-w-2xl mx-auto mt-4 text-white hover:scale-105 cursor-pointer">
          “Elevate Your Safety with Our Premium Security Guards Services. Our expert team ensures unrivaled protection 
          for your assets, personnel, and peace of mind. From vigilant guards to advanced surveillance, 
          we deliver unwavering security solutions. Safeguard your future with the industry’s best – 
          because your safety is our priority.”
        </p>
  
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 cursor-pointer common-shadow transition ease-in">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80  rounded-t-lg"
              />
              <h3 className="text-lg font-bold mt-4 text-blue-900">{service.title}</h3>
              <p className="text-blue-900 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  