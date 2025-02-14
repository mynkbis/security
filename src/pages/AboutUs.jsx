import React from 'react';
import Footer from '../component/Footer';
import security from "../assets/images/security.jpeg"
const AboutUs = () => {
  return (
    <div className="relative bg-[#002B4E]">
      {/* Background Image with Overlay */}
      <div className="absolute w-full">
        <img
          src={security}
          alt="Security Professionals"
          className="w-full h-[40vh] sm:h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-20">
        <h1 className="text-sm sm:text-3xl font-bold text-white mb-2 md:mb-6 leading-tight cursor-pointer hover:scale-105">
            Building Trust
            Through Protection
          </h1>
          <p className="text-sm sm:text-lg text-white mb-8 cursor-pointer sm:leading-9 hover:scale-105">
            N-Force Security is a leading provider of integrated security and facilities solutions across Melbourn, dedicated to 
            safeguarding businesses and communities. We understand that security is fundamentally about people, and 
            we take pride in our role in protecting our clients' well-being every day with our experienced team and 
            innovative technologies.
          </p>
        </div>

        {/* Additional content section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 pb-4 px-10 sm:px-40 md:px-20 lg:px-30">
          <div className="bg-white backdrop-blur-sm  p-8 rounded-lg">
            <h3 className="text-blue-900 text-sm sm:text-2xl font-semibold mb-4">Experienced Team</h3>
            <p className="text-blue-900 text-sm">
              Our security professionals are highly trained and certified, bringing years of expertise to protect your assets.
            </p>
          </div>

          <div className="bg-white backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-blue-900 text-sm sm:text-2xl font-semibold mb-4">Integrated Solutions</h3>
            <p className="text-blue-900">
              We provide comprehensive security solutions that combine advanced technology with human expertise.
            </p>
          </div>

          <div className="bg-white backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-blue-900 text-sm sm:text-2xl font-semibold mb-4">Client Focus</h3>
            <p className="text-blue-900">
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