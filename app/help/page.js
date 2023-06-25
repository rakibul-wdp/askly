import Footer from '@/components/common/Footer';
import Contact from '@/components/help/Contact';
import FAQ from '@/components/help/FAQ';
import React from 'react'

const Help = () => {
  return (
    <div className='mx-0' style={{
      background: `linear-gradient(134.56deg, rgba(155, 126, 234, 0.03) 10.8%, rgba(255, 127, 127, 0.2) 88.78%)`,
    }}>
      <div className='max-w-screen-2xl mx-auto px-3 sm:px-5 md:px-8 lg:px-14 xl:px-20 2xl:px-24'>
        <FAQ />
        <Contact />
      </div>
      <Footer bg={true} />
    </div>
  )
}

export default Help;