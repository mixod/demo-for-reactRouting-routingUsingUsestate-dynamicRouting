import { Route, Routes } from "react-router-dom";
import Nav from "./Content/Nav";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Desc from "./Pages/Contact/Description/Desc";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:desc" element={<Desc />} />
      </Routes>
    </div>
  );
}

export default App;
