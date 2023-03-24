import AboutHero from '@/components/about/AboutHero';
import Address from '@/components/about/Address';
import Team from '@/components/about/Team';
import Footer from '@/components/common/Footer';
import React from 'react'

const About = () => {
  return (
    <div>
      <AboutHero />
      <Team />
      <Address />
      <Footer />
    </div>
  )
}

export default About;