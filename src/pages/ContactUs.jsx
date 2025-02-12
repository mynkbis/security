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
<>
<div className="h-screen overflow-auto">
      {/* Hero Section */}
      <div className="relative bg-[#002B4E] text-white">
        <div className="absolute inset-0">
          <img
            src={event}
            alt="Security Team"
            className="w-full h-[40vh] object-cover opacity-30"
          />
        </div>
        <div className=" w-full z-10 container mx-auto px-10 py-16">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            We're here to help you with all your security needs. Whether you have a question, need more
            information about our services, or are ready to partner with us, the SWC Security team is ready
            to assist.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#002B4E]">
        {/* Form Section */}
        <div className="p-8 lg:p-12 w-full">
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-3">
               <Phone size={20} fill='white' className='text-blue-900 rounded-xl' />
              <span>+61 422 446 444</span>
            </div>
            <div className="flex items-center gap-3">
               <Mail size={20} fill='white' className='text-blue-900 rounded-xl'/>
              <span> Operations@nforcesecurity.net</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin fill='white' className="text-blue-900" size={20} />
              <span> 4 Guell Lane, Clyde North, VIC 3978</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Write to us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="Your first name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="Your last name"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="Your phone number"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Your message"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-white hover:bg-[#002B4E] border cursor-pointer hover:text-white px-8 py-3 rounded font-medium text-blue-900 transition-colors"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
        <Footer/>
    </div>

       
        </>
  );
};

export default ContactPage;