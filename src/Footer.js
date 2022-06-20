import React from "react";

const Footer = () => {
  return (
    <div className="main">
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__container__title">
            <h2>Discount 10-30% Off</h2>
          </div>
          <div className="footer__container__text">
            <p>
              Curabitur blandit tempus porttitor. Maecenas faucibus mollis
              interdum. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit.
            </p>
          </div>
          <button className="footer__container__btn">see tours</button>
        </div>
      </footer>
      <div className="main__footer__text">
        <h2 style={{ marginBottom: "10px" }}>Travel.co</h2>
        <p>
          Travel makes one modest. You see what a tiny place you occupy in the
          world.
        </p>
      </div>
    </div>
  );
};

export default Footer;
