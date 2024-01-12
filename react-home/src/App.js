import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cover from './Cover';
import Navbar from './Navbar';
import About from './About';
import Events from './Events';
import Footer from './Footer';
import Sponsorship from './Sponsorship';


function App() {
  return (
  <Router>
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/Sponsorship" element={<Sponsorship />} />
        </Routes>
      <Cover />
      <About />
      <Events />
      <Footer />
      
    </div>
    </Router>
  
  );
}

export default App;