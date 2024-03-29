import './App.css';
import About from './Components/About/About';
import Contact from './Components/Partners/Partners';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Partners from './Components/Partners/Partners';




function App() {
  return (

    <div>
      <BrowserRouter>
      <Navbar/>
      <Home/>
      <Partners/>
     <About/>
      
      <Routes>
        <Route path='faqs' element={<About />} />
        <Route path='partners' element={<Partners/>}/>
      </Routes>
      <Contact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
