import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h2>Travel.co</h2>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__link">Home</li>
          <li className="header__nav__link">Blog</li>
          <li className="header__nav__link">Contacts</li>
          <li className="header__nav__link">Page 1</li>
          <li className="header__nav__link">Page 2</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
