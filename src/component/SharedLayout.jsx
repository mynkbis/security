import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header';
import QuoteModal from './Modal/Joinus';
import Footer from './Footer';
const SharedLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="flex flex-col flex-1 overflow-x-auto">
      <div className='z-20'>
      <Header />
      </div>
      <main className="h-screen overflow-auto bg-botpulseOutletBg z-10">
            <Outlet />
      </main>
      <button className="hover:bg-[#02278a] text-blue-900 bg-white px-3 py-1 cursor-pointer rounded-md uppercase border hover:border-2-[#002B4E]common-shadow hover:text-white font-bold fixed bottom-4 right-6 z-10" onClick={() => setIsModalOpen(true)}>
       <span onClick={() => setIsModalOpen(true)}  className='cursor-pointer'> Join Us </span>
      </button>
        <Footer/>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};


export default SharedLayout