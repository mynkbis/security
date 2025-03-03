
import { Twitter, FacebookIcon, InstagramIcon, LucideLinkedin } from "lucide-react"
import { Link } from "react-router-dom"
import logo from "../assets/logo1.jpeg"
import QuoteModal from "./Modal/Joinus"
import { useState } from "react"
export default function Footer() {
   const [show, setShow]=useState(false)
    const handleJoin=()=>{
      setShow(!show)
    }
  return (
    <footer className=" w-full flex justify-center bg-[#2f3c6e] text-white py-12 px-4 md:px-6 pb-40">
      <div className="  flex flex-wrap justify-center w-full">
        {/* Left Column */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <div className="space-y-2">
            <p className="font-semibold"> 4 Guell Lane</p>
            <p>Clyde North,VIC 3978</p>
            <p className="mt-4">+61 422 446 444</p>
            <p>Operations@nforcesecurity.net</p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
          <h2 className="text-xl font-bold mb-4 !text-white">Quick Links</h2>
          <ul className="space-y-2">
            <li>
            <Link to="/about" className="!text-white">
                About Us
             </Link>
            </li>
            <li>
            <Link to="/contactus" className="hover:text-blue-400 !text-white">
                Contact Us
             </Link>
            </li>
            <li>
            <Link to="/services" className="hover:text-blue-400 !text-white">
              Our Services
             </Link>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          {/* Logo */}
          <img
            src={logo}
            alt="N Force Security"
            className="h-20 w-50 mb-2"
          />

          {/* Follow Us */}
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4 mb-8">
            <Link to="https://www.facebook.com/share/15f9PRKU5R/ " className="hover:text-blue-400 transition-colors">
              <FacebookIcon className="text-white" size={24} />
           </Link>
           <Link to="" className="hover:text-blue-400 transition-colors">
              <Twitter size={24} />
           </Link>
           <Link to="#" className="hover:text-blue-400 transition-colors">
              <LucideLinkedin size={24} />
           </Link>
           <Link to="https://www.instagram.com/nforce11" className="hover:text-blue-400 transition-colors">
              <InstagramIcon className="text-white" size={24} />
           </Link>
          </div>
          <QuoteModal isOpen={show} onClose={() => handleJoin()} />
        </div>
      </div>
    </footer>
  )
}

