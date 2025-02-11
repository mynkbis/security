import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './component/SharedLayout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import { useEffect } from 'react';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<AboutUs />} />
            <Route path="/contactus" element={<AboutUs />} />
            <Route path="/join-us" element={<AboutUs />} />
            {/* <Route path="about" element={<About />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;