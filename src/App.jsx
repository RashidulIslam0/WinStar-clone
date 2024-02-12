import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Book from "./pages/Book/Book";
import Seo from "./pages/SEO/Seo";
import Content from "./pages/Content/Content";
import Development from "./pages/development/Development";
import ChatWidget from "./pages/Chats";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/google-seo-ranking" element={<Seo />} />
          <Route path="/book" element={<Book />} />

          <Route path="/content-writing" element={<Content />} />
          <Route path="/web-design-developmen" element={<Development />} />
          <Route path="/chats" element={<ChatWidget />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
