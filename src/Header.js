import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <header className="header">
      <div className="header__logo">
        <h2>Travel.co</h2>
      </div>
      <nav className="header__nav">
        <ul
          className={
            isMobile ? "header__nav__list__mobile" : "header__nav__list"
          }
          onClick={() => setIsMobile(false)}
        >
          <li className="header__nav__link">
            <Link to="/home">Home</Link>
          </li>
          <li className="header__nav__link">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="header__nav__link">
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className="header__nav__link">
            <Link to="/page1">Page 1</Link>
          </li>
          <li className="header__nav__link">
            <Link to="/page2">Page 2</Link>
          </li>
        </ul>
      </nav>
      <button className="header__mobile" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </header>
  );
}

export default Header;
