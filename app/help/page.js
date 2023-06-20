import Footer from '@/components/common/Footer';
import Contact from '@/components/help/Contact';
import FAQ from '@/components/help/FAQ';
import React from 'react'

const Help = () => {
  return (
    <div style={{
      background: `linear-gradient(134.56deg, rgba(155, 126, 234, 0.2) 10.8%, rgba(255, 127, 127, 0.2) 88.78%)`,
    }}>
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default Help;