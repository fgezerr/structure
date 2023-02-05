import "./App.css"
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./pages/About/About";
import Referanslarimiz from "./pages/Referanslar/Referanslarimiz";
import OrtaklarCozum from "./pages/OrtaklarCozum/OrtaklarCozum";
import Contacts from "./pages/Contacts/Contacts";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import İndex from "./pages/Projelerimiz/İndex"
import ContactForMobile from "./components/ContactForMobile/ContactForMobile";
function App() {
  return (
    <div className="app">
      <Whatsapp/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/referanslarımız" element={<Referanslarimiz/>} />
        <Route path="/cozum-ortaklari" element={<OrtaklarCozum/>} />
        <Route path="/iletisim" element={<Contacts/>} />
        <Route path="/bitmisprojeler" element={<İndex/> } />
      </Routes> 
      <ContactForMobile/>
    </div>
  );
}

export default App;
