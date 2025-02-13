import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './component/SharedLayout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import { useEffect } from 'react';
import ContactPage from './pages/ContactUs';
import Guards from './pages/Guards';
import NotFound from './pages/Notfound';
import EventsSecurity from './pages/Events';
import Infra from './pages/Infra';
import MobilePetrol from './pages/Mobile';
import RetailSecurity from './pages/Retail';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services">
            <Route path="guards" element={<Guards/>}/>
            <Route path="crowd-control" element={<EventsSecurity/>}/>
            <Route path="mobile-patrol" element={<MobilePetrol/>}/>
            <Route path="infra-security" element={<Infra/>}/>
            <Route path="retail-security" element={<RetailSecurity/>}/>            
            </Route>
            <Route path="/contactus" element={<ContactPage />} />
            {/* <Route path="about" element={<About />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;