import React from 'react';
import Footer from '../component/Footer';
import security from "../assets/images/security.jpeg"
const AboutUs = () => {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute w-full">
        <img
          src={security}
          alt="Security Professionals"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="max-w-4xl px-10 py-10">
          <h1 className="text-white text-6xl font-bold mb-6 leading-tight">
            Building Trust
            <br />
            Through Protection
          </h1>
          
          <p className="text-white text-xl leading-relaxed">
            N-Force Security is a leading provider of integrated security and facilities solutions across Melbourn, dedicated to 
            safeguarding businesses and communities. We understand that security is fundamentally about people, and 
            we take pride in our role in protecting our clients' well-being every day with our experienced team and 
            innovative technologies.
          </p>
        </div>

        {/* Additional content section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pb-4 px-4">
          <div className="bg-[#002B4E] backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-white text-2xl font-semibold mb-4">Experienced Team</h3>
            <p className="text-white/90">
              Our security professionals are highly trained and certified, bringing years of expertise to protect your assets.
            </p>
          </div>

          <div className="bg-[#002B4E] backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-white text-2xl font-semibold mb-4">Integrated Solutions</h3>
            <p className="text-white/90">
              We provide comprehensive security solutions that combine advanced technology with human expertise.
            </p>
          </div>

          <div className="bg-[#002B4E] backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-white text-2xl font-semibold mb-4">Client Focus</h3>
            <p className="text-white/90">
              Your security is our priority. We work closely with you to understand and meet your specific needs.
            </p>
          </div>
        </div>
      <Footer/>
    </div>
    </div>
  );
};

export default AboutUs;