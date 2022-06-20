import React from "react";
import Greece from "./images/greece.jpeg";
import Italy from "./images/italy.jpeg";
import Francisco from "./images/francisco.jpeg";
import Navagio from "./images/navagio.jpeg";
import Thailand from "./images/thailand.jpeg";
import Phiphi from "./images/phiphi.jpeg";

function Section() {
  return (
    <div className="main">
      <section className="section">
        <div className="section__title">
          <h2 style={{ marginBottom: "10px" }}>Start Your Jorney</h2>
          <p>The most searched countries in March</p>
        </div>
        <div className="section__container">
          <div className="section__container__col">
            <div className="section__container__col__img">
              <img src={Greece} alt="" />
            </div>
            <div className="section__container__text">
              <p>Santorini, Greece</p>
            </div>
          </div>

          <div className="section__container__col">
            <div className="section__container__col__img">
              <img src={Italy} alt="" />
            </div>
            <div className="section__container__text">
              <p>Vernazza, Italy</p>
            </div>
          </div>

          <div className="section__container__col">
            <div className="section__container__col__img">
              <img src={Francisco} alt="" />
            </div>
            <div className="section__container__text">
              <p>San Francisco</p>
            </div>
          </div>

          <div className="section__container__col">
            <div className="section__container__col__img">
              <img src={Navagio} alt="" />
            </div>
            <div className="section__container__text">
              <p>Navagio, Greece</p>
            </div>
          </div>

          <div className="section__container__col">
            <div className="section__container__col__img">
              <img src={Thailand} alt="" />
            </div>
            <div className="section__container__text">
              <p>Ao Nang, Thailand</p>
            </div>
          </div>

          <div className="section__container__col">
            <div className="section__container__col__img">
              <img src={Phiphi} alt="" />
            </div>
            <div className="section__container__text">
              <p>Phi Phi Islands, Thailand</p>
            </div>
          </div>
        </div>
      </section>

      <div className="contact">
        <div className="contact__col">
          <div className="contact__col__heading">
            <h2>Browse Tours By Activity</h2>
          </div>
          <div className="contact__col__wrapper">
            <ul className="contact__col__item">
              <li className="contact__col__link">Outdoor Activites</li>
              <li className="contact__col__link">Cultural & Thematic Tours</li>
              <li className="contact__col__link">Family Friendly Tours</li>
              <li className="contact__col__link">Holiday & Seasonal Tours</li>
            </ul>
            <ul className="contact__col__item">
              <li className="contact__col__link">City Tours</li>
              <li className="contact__col__link">Indulgence & Luxury Tours</li>
              <li className="contact__col__link">Relaxation Tours</li>
              <li className="contact__col__link">Wild & Adventure Tours</li>
            </ul>
          </div>
        </div>

        <div className="contact__right__col">
          <div className="contact__right__col__heading">
            <h2>Newsletter</h2>
          </div>
          <p>Subscribe for updates & promotions</p>
          <div className="contact__right__col__input">
            <input type="search" placeholder="Enter a valid email address" />
            <button className="contact__right__col__btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
