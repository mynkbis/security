import React from "react";
import guard from "../assets/images/guard.jpeg";
import Footer from "../component/Footer";
const Services = () => {
  return (
    <div className="relative">
      {/* Hero section with background */}
      <div className="relative md:h-screen bg-[#02278a]">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${guard})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Content */}
        <div className="relative h-full">
          <div className="max-w-7xl mx-auto px-6 py-32">
            <div className="">
              <h1 className="text-sm sm:text-3xl font-bold text-white mb-6 leading-tight cursor-pointer">
                Our Services
              </h1>
              <p className="text-xs sm:text-lg text-white mb-8 px-4 cursor-pointer sm:leading-9">
                <or>
                  <li> Security Guards</li>
                  <li> Crowd Control and Events</li>
                  <li> Mobile Patrols</li>
                  <li> Construction, Infrastructure, and Building</li>
                  <li> Environment Security</li>
                  <li>
                    {" "}
                    Retail Security and Loss Prevention Security Services
                  </li>
                </or>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
