import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Book from "./pages/Book/Book";

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
          <Route
            path="/book"
            element={<Book scriptSrc="https://embed.ycb.me" />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
