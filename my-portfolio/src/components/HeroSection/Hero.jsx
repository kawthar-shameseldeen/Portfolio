import React from 'react';
import './Hero.css';
import profile from '../../assets/me.png';
import brush   from '../../assets/Brush.png';
import badge from "../../assets/icon.png"
const HeroSection = () => {
  return (
    <section className="hero">
        {/* Left column */}
      <div className="hero-left">
        <h1 >Hey There,<br />I’m Kawthar</h1>
        <p className="hero-email">Kawtharshameseldeen5@gmail.com</p>

        <div className="hero-stats">
          <span className="stat-number">1</span>
          <span className="stat-label">YEAR EXPERIENCE</span>
        </div>
      </div>

      {/* Right column */}
      <div className="hero-right">
        {/* brush-stroke background */}
        <img src={brush} alt="brush stroke" className="brush" />

        {/* profile image */}
        <img src={profile} alt="Binjan" className="profile" />

        {/* short description (top-right) */}
        <p className="hero-desc">
        I develop elegant, scalable applications,
        <br />
        and I love bringing ideas to life through code. 
         
        </p>

        {/* badge (bottom-right) */}
        <div className="badge-container">
          <img src={badge} alt="IDF Badge" className="badge-icon" />
          <p className="badge-text">
            SE Factory CERTIFIED<br />
            PROFESSIONAL Full-Stack Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
