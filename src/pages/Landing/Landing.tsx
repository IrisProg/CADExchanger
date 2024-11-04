// Стили??? импорт
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./sections/Header/Header";
import Home from "../Home";
import Footer from "./sections/Footer/Footer";
import Contact from "../Contact";
import ServerMessage from "../ServerMessage";

function Landing() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={ <Contact />}/> 
            <Route path="/server" element={ <ServerMessage />}/>
        </Routes>
        
       
        <Footer />
      </Router>
    </>
  );
}

export default Landing;
