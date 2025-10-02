import {
  Twitter,
  FacebookIcon,
  InstagramIcon,
  LucideLinkedin,
  X,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import QuoteModal from "./Modal/Joinus";
import { useState } from "react";
import twitterLogo from "../assets/twitter.png";
export default function Footer() {
  const [show, setShow] = useState(false);
  const handleJoin = () => {
    setShow(!show);
  };
  return (
    <footer className=" w-full  flex justify-center bg-[#02278a] text-white py-12 px-4 md:px-6 pb-40">
      <div className=" max-w-7xl flex flex-wrap justify-center w-full">
        <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center">
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

        <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <div className="flex items-center flex-col  space-x-4">
            <Link className="flex items-center space-x-2">
              <Mail
                size={20}
                fill="white"
                className="text-blue-900 rounded-xl"
              />
              <span className="text-white">Operations@nforcesecurity.net</span>
            </Link>
            <Link to="" className="flex items-center space-x-2 ml-2 mr-2">
              <Phone
                size={20}
                fill="white"
                className="text-blue-900 rounded-xl"
              />
              <span className="text-white">+61 422 446 444</span>
            </Link>
              <Link to="" className="flex items-center space-x-2 ml-2 mr-2">
              <Phone
                size={20}
                fill="white"
                className="text-blue-900 rounded-xl"
              />
             <span className="text-white">+61 0479 007 444</span>
            </Link>
              <Link to="" className="flex items-center space-x-2 ml-2 mr-2">
              <Phone
                size={20}
                fill="white"
                className="text-blue-900 rounded-xl"
              />
              <span className="text-white">+61 0451 447 444</span>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/4 flex flex-col items-center">
          {/* Logo */}
          <img
            src={logo}
            alt="N Force Security"
            className="h-12 w-40 mb-2 shadow-xl rounded-full"
          />

          {/* Follow Us */}
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4 mb-8 items-baseline">
            <Link
              to="https://www.facebook.com/share/15f9PRKU5R/ "
              className="hover:text-blue-400 transition-colors"
            >
              <FacebookIcon
                className="text-white bg-blue-500 rounded-sm p-0.5 shadow-xl"
                size={24}
              />
            </Link>
            <Link
              to="https://x.com/nforcesec?t=UfNgyuksSZTt6owADPPxPA&s=08 "
              className="hover:text-blue-400 shadow-xl transition-colors"
            >
              <div className="shadow-3xl">
                <img
                  src={twitterLogo}
                  className="rounded-full w-[26px] shadow-xl"
                />
              </div>
            </Link>
            {/* <Link to="#" className="hover:text-blue-400 transition-colors">
              <LucideLinkedin size={24} />
           </Link> */}
            <Link
              to="https://www.instagram.com/nforce11"
              className="hover:text-blue-400 "
            >
              <InstagramIcon
                className="text-white bg-gradient-to-t from-purple-500 to-pink-500 rounded-lg shadow-xl"
                size={24}
              />
            </Link>
          </div>
          <QuoteModal isOpen={show} onClose={() => handleJoin()} />
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center">
          <div className="flex items-left text-left flex-col  space-x-4">
            Master license Number - 998-410-81S
            <br />
            Labour Hire License Number -
            <br />
            VICLHL06708
            <br />
            ABN - 18 650 158 955
            <br />
            ACN - 650 158 955
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-6 items-center">
          <h1 className="text-lg md:text-2xl ">Acknowledgement of Country</h1>
          <span className="text-center">
            N-Force Security Company respectfully acknowledges the Traditional
            Custodians of the lands on which we operate across Australia. We
            recognise the Gadigal People of the Eora Nation in Sydney, the
            Jagera People of the Yuggera Nation in Brisbane, and the Wurundjeri
            People of the Woiwurrung Nation in Melbourne and regional Victoria.
            We pay our deepest respects to Australia’s First Peoples, and to
            Elders past, present, and emerging.
          </span>
        </div>
        <span className="mt-6">
          Copyright ©2025 N-Force Security. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
