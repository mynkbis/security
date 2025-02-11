import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import QuoteModal from './Modal/Joinus';
const SharedLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="flex flex-col flex-1 overflow-x-auto relative">
      <div className='z-10'>
      <Header />
      </div>
      <main className="flex-1 overflow-auto no-scrollbar bg-botpulseOutletBg z-10">
        <div className="min-h-[calc(100vh-150px)] flex flex-col bg-botpulseOutletBg">
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </main>
      <button className="bg-blue-900 px-4 py-2 cursor-pointer rounded-md uppercase text-white font-bold fixed bottom-4 right-4 z-20" onClick={() => setIsModalOpen(true)}>
       <span onClick={() => setIsModalOpen(true)}  className='cursor-pointer'> Join Us </span>
      </button>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};


export default SharedLayout