import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './component/SharedLayout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import { useEffect } from 'react';
import ContactPage from './pages/ContactUs';
import Guards from './pages/Guards';
import NotFound from './pages/Notfound';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Guards />} />
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