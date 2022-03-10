import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Store from "./Store";
import Contact from "./Contact";
import News from "./News";
import Pages from "./Pages";
import Gallery from "./Gallery";

import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="store" element={<Store />} />
          <Route path="news" element={<News />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="pages" element={<Pages />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
