import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg bg-dark navbar-dark sticky-nav"
        style={{ position: "sticky" }}
      >
        <div className="container">
          <a href="#navheader" className="navbar-brand">
            Jojo Bautista
          </a>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </nav>
      <main className="container-fluid">{renderPage()}</main>
      <footer className="bg-dark">
        <Footer />
      </footer>
    </div>
  );
}
