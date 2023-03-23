import AboutHero from '@/components/about/AboutHero';
import Address from '@/components/about/Address';
import Team from '@/components/about/Team';
import React from 'react'

const About = () => {
  return (
    <div>
      <AboutHero />
      <Team />
      <Address />
    </div>
  )
}

export default About;