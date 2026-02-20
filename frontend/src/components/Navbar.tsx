import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <img src="/images/logo.png" alt="Aristos Logo" />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>Global Reach</li>
        <li>About Us</li>
      </ul>

      <button className="btn btn-dark">Book Consultation</button>
    </nav>
  );
};

export default Navbar;
