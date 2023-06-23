import React from 'react'
import PricingCard from '@/components/pricing/PricingCard';
import Footer from '@/components/common/Footer';

const Pricing = () => {
  return (
    <div>
      <PricingCard />
      <Footer bg={true} />
    </div>
  )
}

export default Pricing;