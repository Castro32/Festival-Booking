import './App.css';
import About from './Components/About/About';
import Contact from './Components/Partners/Partners';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Partners from './Components/Partners/Partners';
import PastEvents from './Components/Past Events/PastEvents';
import Footer from './Components/Footer/Footer';




function App() {
  return (

    <div>
      <BrowserRouter>
      <Navbar/>
      <Home/>
      <Partners/> 
      <About/>
      <Routes>
        
      </Routes>
     
      <PastEvents/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
