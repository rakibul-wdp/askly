import React from 'react'
import PrimaryButton from '../common/PrimaryButton';

const HomeHero = () => {
  return (
    <section className='bg-neutral h-screen'>
      <div className='absolute bottom-10 right-0 left-0 md:right-2 lg:right-3 2xl:-right-5 text-center md:text-right max-w-screen-2xl pl-3 sm:px-5 md:px-8 lg:px-14 xl:px-20 2xl:px-24'>
        <div className='mb-10 text-3xl font-bold'>
          <span className='text-primary'>“Ask more,</span> <span className='bg-gradient-to-b from-purple-600 to-red-600 bg-clip-text text-transparent'>search less”</span>
        </div>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  )
}

export default HomeHero;