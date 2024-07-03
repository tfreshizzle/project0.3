import React from 'react';
import './landing_style.css';
import image1 from './images/soldier5.png';
import image2 from './images/soldier6.png';
import image3 from './images/soldiers.png';
import image4 from './images/soldiers2.png';
import image5 from './images/soldiers3.png';
// Continue importing images as needed

const LandingPage = ({ navigateToMap }) => {
  const images = [image1, image2, image3, image4, image5]; // Add all imported images to this array

  return (
    <div className="landing-container">
      <header className="top-bar">
        <h1>HEROCARE</h1>
      </header>
      <section className="hero">
        <h2>ברוכים הבאים ל- HEROCARE</h2>
        <p> תומכים בכוחותינו וביחד ננצח</p>
        <button className="cta-button" onClick={navigateToMap}>מצא טיפול</button>
      </section>
      <div className="carousel">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
        ))}
      </div>
      <section className="info-section">
        <div className="info-content">
          <h3>למד עוד על השירותים שלנו</h3>
          <p>אנחנו מציאים מגוון מטפלים במגוון שירותים במסגרת מענק טיפול של צהל. </p>
        </div>
        <img src={images[0]} alt="Service Image" className="info-image"/>
      </section>
      <footer>
        <p>ברוך הבא לרשת מציאת טיפולים, תודה על שירותך</p>
      </footer>
    </div>
  );
};

export default LandingPage;
