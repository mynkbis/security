const services = [
  {
    title: "Engage Operation Center",
    description:
      "Watchful Eyes, Total Security. Our CCTV camera services provide 24/7 surveillance for your peace of mind. Uncompromising protection, round the clock.",
    image: "https://picsum.photos/1000",
  },
  {
    title: "Alarm Monitoring Center",
    description:
      "Operating a 24-hour grade one monitoring center. Partnering with Engage Security. Burglary and intrusions alarms are the most commonly monitored alarm types.",
    image: "https://picsum.photos/1100",
  },
  {
    title: "Electronic Alarm Systems",
    description:
      "Experience Security with a Personal Touch. Our Concierge Security Service offers the perfect blend of protection and hospitality, ensuring your safety.",
    image: "https://picsum.photos/1200",
  },
    {
      title: "Government Sector",
      description:
        "Your Safety, Our Priority. Experience elite protection with our highly trained bodyguards. We’re your trusted shield, ensuring your personal security & peace of mind.",
      image: "https://picsum.photos/500",
    },
    {
      title: "Event Security",
      description:
        "Event Security Excellence: We bring the assurance of a flawless gathering. Our skilled professionals guarantee a secure, seamless experience.",
      image: "https://picsum.photos/200",
    },
    {
      title: "Construction Site Security",
      description:
        "Construction site theft is a prevalent issue in the industry, with valuable equipment and machinery being easy targets for thieves.",
      image: "https://picsum.photos/204",
    },
    {
      title: "Our Crowd Controllers",
      description:
        "Our Crowd Control division is not just about providing a physical security presence, our priority is to develop a service that will integrate seamlessly with your venue.",
      image: "https://picsum.photos/400",
    },
    {
      title: "Our Security Officers",
      description:
        "Engage Security Professionals, a leading security and public safety services company, provides proactive security services and cutting-edge smart technology.",
      image: "https://picsum.photos/50",
    },
    {
      title: "Health Security",
      description:
        "Health security is paramount in safeguarding the well-being of individuals and communities. It encompasses a comprehensive approach to protect public health.",
      image: "https://picsum.photos/900"
    },
  ];
  
  export default function OurServices() {
    return (
      <div className="bg-[#002B4E] text-black py-12 px-6 text-center">
        <h2 className="text-3xl text-white font-semibold">Our Services</h2>
        <p className="max-w-2xl mx-auto mt-4 text-white">
          “Elevate Your Safety with Our Premium Security Guards Services. Our expert team ensures unrivaled protection 
          for your assets, personnel, and peace of mind. From vigilant guards to advanced surveillance, 
          we deliver unwavering security solutions. Safeguard your future with the industry’s best – 
          because your safety is our priority.”
        </p>
  
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-bold mt-4 text-blue-900">{service.title}</h3>
              <p className="text-blue-900 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  