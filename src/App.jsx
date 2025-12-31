import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import IntroButtons from "./Components/IntroButtons/IntroButtons";
import Navbar from "./Components/Navbar1/Navbar";

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <IntroButtons/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
