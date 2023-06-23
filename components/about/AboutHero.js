import React from 'react';
import AboutHeroImg from "../../public/assets/images/about/aboutHero.svg";
import Navbar from '../common/Navbar';

const AboutHero = () => {
  return (
    <section>
      <Navbar navText={true} />
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${AboutHeroImg.src})` }}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Our Mission is</h1>
            <p className="text-2xl font-bold mb-5">to help you unlock the full potential of your data</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero;