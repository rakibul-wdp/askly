import React from 'react';
import { pricing } from '@/mockData/pricing';
import Navbar from '../common/Navbar';
import SecondaryButton from '../common/SecondaryButton';

const PricingCard = () => {
  return (
    <section className='px-3 sm:px-5 md:px-8 lg:px-14 xl:px-20 2xl:px-24' style={{
      background: `linear-gradient(134.56deg, rgba(155, 126, 234, 0.2) 10.8%, rgba(255, 127, 127, 0.2) 88.78%)`,
    }}>
      <Navbar navText={false} />
      <div className='pt-32 pb-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 max-w-screen-2xl mx-auto'>
        {
          pricing.map((price) => (
            <div className={`${price.id === 4 ? "border border-primary" : "border border-white"} p-5 rounded-lg`} style={{
              background: price.id === 4 ? "#FDFDFD" : "linear-gradient(134.56deg, rgba(155, 126, 234, 0.05) 10.8%, rgba(255, 127, 127, 0.05) 88.78%)"
            }} key={price.id}>
              <h2 className='text-3xl font-bold'>{price.pricingName}</h2>
              <div className="divider"></div>
              <ul className="list-disc list-outside ml-8 mb-32">
                {
                  price.description.map((item) => (
                    <li className='font-medium' key={item.id}>{item.listItem}</li>
                  ))
                }
              </ul>
              {price.id === 4 ? <button className='btn btn-primary normal-case w-full'>Buy Now</button> : <SecondaryButton>Buy Now</SecondaryButton>}
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default PricingCard;