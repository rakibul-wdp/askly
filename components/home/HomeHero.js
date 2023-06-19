import React from 'react'

const HomeHero = () => {
  return (
    <section className='bg-neutral h-screen'>
      <div className='absolute bottom-10 right-10 text-right'>
        <div className='mb-10 text-3xl font-bold'><span className='text-primary'>“Ask more,</span> <span className='bg-gradient-to-b from-purple-600 to-red-600 bg-clip-text text-transparent'>search less”</span></div>
        <button className='btn btn-primary normal-case'>Get Started</button>
      </div>
    </section>
  )
}

export default HomeHero;