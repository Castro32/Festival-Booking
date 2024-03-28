import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
  return (

    <div>
      <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      
      <Routes>
        <Route path='/faqs' element={<About />} />
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      <Contact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
