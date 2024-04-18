import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Booking from './Components/Booking/Booking';
import About from './Components/About/About';
import Partners from './Components/Partners/Partners';
import PastEvents from './Components/Past Events/PastEvents';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Purchase from './Purchase/Purchase';

function App() {
  const [calculateSubtotal, setSubtotal] = useState(0);

  const handlePurchase = (total) => {
    setSubtotal(total);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Define routes for each component */}
          <Route path="/*" element={<Home />} />
          <Route path="/faqs" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/purchase" element={<Purchase subtotal={calculateSubtotal} />} />
          {/* Route for the Booking component passing props */}
          <Route path="/booking" element={<Booking onSubtotalChange={handlePurchase} calculateSubtotal={calculateSubtotal} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;