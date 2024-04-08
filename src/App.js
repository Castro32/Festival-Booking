import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Booking from './Components/Booking/Booking';
import About from './Components/About/About';
import Partners from './Components/Partners/Partners';
import PastEvents from './Components/Past Events/PastEvents';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

function App() {
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
          {/* Route for the Booking component */}
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
