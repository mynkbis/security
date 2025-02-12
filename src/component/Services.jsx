import patrol from "../assets/images/patrol.jpeg"
import cam from "../assets/images/cam.jpeg"
import construction from "../assets/images/construction.jpeg"
import event from "../assets/images/event.jpeg"
import general from "../assets/images/general.jpeg"
import security from "../assets/images/security.jpeg"
import guard from "../assets/images/guard.jpeg"


const services = [
  {
    title: "Mobile Patrol",
    description:
      "Watchful Eyes, Total Security. Our CCTV camera services provide 24/7 surveillance for your peace of mind. Uncompromising protection, round the clock.",
    image: patrol,
  },
  {
    title: "CCTV surveillance",
    description:
      "Operating a 24-hour grade one monitoring center. Partnering with Engage Security. Burglary and intrusions alarms are the most commonly monitored alarm types.",
    image: cam,
  },
  {
    title: "Construction Security Service",
    description:
      "Experience Security with a Personal Touch. Our Concierge Security Service offers the perfect blend of protection and hospitality, ensuring your safety.",
    image: construction
  },
    {
      title: "Event Security",
      description:
        "Your Safety, Our Priority. Experience elite protection with our highly trained bodyguards. We’re your trusted shield, ensuring your personal security & peace of mind.",
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
        "Construction site theft is a prevalent issue in the industry, with valuable equipment and machinery being easy targets for thieves.",
      image: security
    },
    {
      title: "Security Guard Service",
      description:
        "Our Crowd Control division is not just about providing a physical security presence, our priority is to develop a service that will integrate seamlessly with your venue.",
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
                className="w-full h-60  rounded-t-lg"
              />
              <h3 className="text-lg font-bold mt-4 text-blue-900">{service.title}</h3>
              <p className="text-blue-900 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  