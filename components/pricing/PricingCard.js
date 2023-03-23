import { pricing } from '@/mockData/pricing';
import React from 'react'
import Navbar from '../common/Navbar';

const PricingCard = () => {
  return (
    <section className='h-[90vh]' style={{
      background: `linear-gradient(134.56deg, rgba(155, 126, 234, 0.2) 10.8%, rgba(255, 127, 127, 0.2) 88.78%)`,
    }}>
      <Navbar />
      <div className='pt-32 grid grid-cols-4 gap-10 px-32'>
        {
          pricing.map((price) => (
            <div className='p-5 rounded-lg' style={{
              background: `linear-gradient(0deg, #FDFDFD, #FDFDFD),
            linear-gradient(0deg, rgba(253, 253, 253, 0.2), rgba(253, 253, 253, 0.2));
            `}} key={price.id}>
              <h2 className='text-3xl font-bold'>{price.pricingName}</h2>
              <div className="divider"></div>
              <ul className="list-disc list-outside ml-8">
                {
                  price.description.map((item) => (
                    <li className='font-medium' key={item.id}>{item.listItem}</li>
                  ))
                }
              </ul>
              <button className='btn btn-outline btn-primary mt-32 w-full'>Buy Now</button>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default PricingCard;