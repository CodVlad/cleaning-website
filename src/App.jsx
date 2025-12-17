
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './Component/HomePage'
import About from './Component/About'
import Contacte from "./Component/Contacte";
import Servicii from "./Component/Servicii";
import Pret from "./Component/Pret";
import NewsList from "./Component/NewsList"
import ScrollToTop from "./Component/ScrollToTop";

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacte" element={<Contacte/>}/>
        <Route path="/newslist" element={<NewsList/>}/>
        <Route path="/servicii" element={<Servicii/>}/>
        <Route path="/pret" element={<Pret/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
