import AccountMain from '@/components/account/AccountMain';
import AccountNav from '@/components/account/AccountNav';
import Footer from '@/components/common/Footer';
import React from 'react'

const Account = () => {
  return (
    <div style={{
      background: `linear-gradient(134.56deg, rgba(155, 126, 234, 0.2) 10.8%, rgba(255, 127, 127, 0.2) 88.78%)`,
    }}>
      <AccountNav />
      <AccountMain />
      <Footer />
    </div>
  )
}

export default Account;