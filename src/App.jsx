import Nav from "./content/Nav";
import { Route, Routes } from "react-router";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Contact from "./page/Contact/Contact";
import Descs from "./page/Contact/description/Descs";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:descs" element={<Descs />} />
      </Routes>
    </div>
  );
}

export default App;
