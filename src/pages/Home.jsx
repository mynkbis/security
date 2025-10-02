import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import GoogleReviews from '../component/Reviews';
import vid from "../../src/assets/vid/cities.mp4";
import SecurityServices from '../component/SecurityServices';
import OurServices from '../component/Services';

const Home = () => {
  return (
    <div className="text-red-600 h-screen">
      <main className="min-h-screen">
        {/* Background Video Section */}
        <div className="relative w-full h-[50vh] z-10">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            className="absolute inset-0 w-full h-full object-cover "
          >
            <source src={vid} type="video/mp4" />
          </video>

          {/* Dark Overlay (only on video) */}
          <div className="absolute inset-0 bg-black/40">
          </div>

          {/* Hero Content */}
          <div className="relative flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-white text-5xl font-bold mb-4 transform hover:scale-105 cursor-pointer">N-Force Security</h1>
            <div className="text-white/90 flex gap-2">
              <Link to="/" className="!text-white hover:underline transform hover:scale-105">Home</Link>
              <span>{">>"}</span>
              <Link to="/services/guards" className="!text-white hover:underline transform hover:scale-105">Services</Link>
              <span>{">>"}</span>
              <Link to="/services/crowd-control" className="!text-white transform hover:scale-105 cursor-pointer">Security</Link>
            </div>
          </div>
        </div>

        {/* Two Column Section */}
        <div className="flex flex-col md:flex-row relative z-10">
          {/* Left Column */}
          <div className="w-full md:w-1/2 bg-[#02278a] text-white p-12 lg:p-16 transition-transform transform cursor-pointer">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 hover:scale-105 ">Highly Skilled & Professional Team</h2>
            <p className="text-white/90 leading-relaxed hover:scale-105 ">
           Our security personnel are highly trained and committed to delivering reliable protection. They embody professionalism, discipline, and dedication, ensuring every assignment is managed with discretion and efficiency. With our team on-site, you can have confidence in your safety and peace of mind.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 bg-white p-12 lg:p-16 text-blue-900 transition-transform transform  cursor-pointer">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 hover:scale-105">Commitment to Excellence & Reliability</h2>
            <p className="leading-relaxed hover:scale-105">
             At N-Force Security, we are dedicated to delivering the highest standard of security solutions with a strong focus on excellence and reliability. With 16 years of combined management experience, our team provides tailored services to meet the unique needs of each client, helping to create safe and secure environments across Melbourne and regional Victoria.
            </p>
          </div>
        </div>

        {/* Serving Melbourne and Regional Victoria Section */}
        <div className="mx-auto px-4 relative bg-white z-10 border-2 border-blue-900 shadow-xl transition-transform transform hover:scale-105 ">
          <div className="mx-auto flex flex-col sm:flex-row">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 hover:scale-105 py-12 px-10 transform w-full sm:w-[50%] sm:whitespace-nowrap lg:text-4xl font-bold text-blue-900 cursor-pointer mb-6">Serving Melbourne and Regional Victoria</h2>
            <p className="text-blue-900 px-16 py-4 sm:py-16 leading-relaxedw-full sm:w-[50%] cursor-pointer">
             N-Force Security proudly serves Melbourne and regional Victoria, providing reliable security solutions tailored to each client’s needs. Our local team understands the unique challenges of different areas and delivers responsive, professional services to ensure safety and peace of mind for businesses, communities, and events.
            </p>
          </div>
        </div>
        <OurServices/>
        {/* Google Reviews Section */}
        <SecurityServices/>
        {/* <GoogleReviews /> */}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
