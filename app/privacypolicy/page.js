import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import PrivacyPolicyContent from '@/components/privacyPolicy/PrivacyPolicyContent';
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div style={{
      background: `linear-gradient(134.56deg, rgba(155, 126, 234, 0.2) 10.8%, rgba(255, 127, 127, 0.2) 88.78%)`,
    }}>
      <Navbar navText={false} />
      <PrivacyPolicyContent />
      <Footer bg={true} />
    </div>
  )
}

export default PrivacyPolicy;