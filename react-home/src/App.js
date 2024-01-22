import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cover from './Cover';
import Navbar from './Navbar';
import About from './About';
import Events from './Events';
import Footer from './Footer';
import Sponsorship from './Sponsorship';
import Aboutnav from './Aboutnav';


function App() {
  return (
    <div className="App">
      <Cover />
      <About />
      <Events />
      <Footer />
    </div>
  
  );
}

export default App;