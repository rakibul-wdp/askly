import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import TermsOfServiceContent from '@/components/termsOfService/TermsOfServiceContent';
import React from 'react'

const TermsOfService = () => {
  return (
    <div style={{
      background: `linear-gradient(134.56deg, rgba(155, 126, 234, 0.2) 10.8%, rgba(255, 127, 127, 0.2) 88.78%)`,
    }}>
      <Navbar />
      <TermsOfServiceContent />
      <Footer />
    </div>
  )
}

export default TermsOfService;