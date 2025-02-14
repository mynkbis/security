import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import event from "../assets/images/event.jpeg"
import Footer from '../component/Footer';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-[#002B4E]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={event}
            alt="Security Team"
            className="w-full h-[30vh] object-cover"
          />
          <div className="absolute inset-0 bg-[#002B4E]/80"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative container mx-auto px-14 py-12 md:py-16">
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-white max-w-2xl sm:leading-relaxed">
            We're here to help you with all your security needs. Whether you have a question, need more
            information about our services, or are ready to partner with us, the SWC Security team is ready
            to assist.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white flex-grow">
        <div className="container mx-auto px-6 py-12">
          {/* Contact Info */}
          <div className="mb-12 space-y-6 px-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#002B4E] p-2 rounded-full">
                <Phone size={20} className="text-white" />
              </div>
              <span className="text-blue-900 text-sm md:text-lg">+61 422 446 444</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#002B4E] p-2 rounded-full">
                <Mail size={20} className="text-white" />
              </div>
              <span className="text-blue-900 text-sm md:text-lg">Operations@nforcesecurity.net</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#002B4E] p-2 rounded-full">
                <MapPin size={20} className="text-white" />
              </div>
              <span className="text-blue-900 text-sm md:text-lg">4 Guell Lane, Clyde North, VIC 3978</span>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">Write to us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-blue-900 font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full text-black p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#002B4E] focus:border-[#002B4E]"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-blue-900 font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full text-black p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#002B4E] focus:border-[#002B4E]"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-blue-900 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full text-black p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#002B4E] focus:border-[#002B4E]"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-blue-900 font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 text-black border border-gray-300 rounded focus:ring-2 focus:ring-[#002B4E] focus:border-[#002B4E]"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-blue-900 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full text-black p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#002B4E] focus:border-[#002B4E]"
                  placeholder="Your message"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-[#002B4E] text-white hover:bg-blue-800 cursor-pointer px-8 py-3 rounded font-medium transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;