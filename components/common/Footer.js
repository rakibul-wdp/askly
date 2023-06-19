import React from 'react'

const Footer = () => {
  return (
    <footer className="footer items-center px-4 pt-2 pb-10 bg-accent">
      <div className="items-center grid-flow-col">
        <h2 className='text-3xl font-bold uppercase'>Logo</h2>
        <p className='font-medium'>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>About</a>
        <a>Contact</a>
        <a>FAQ</a>
        <a>Privacy Policy</a>
        <a>Terms of Service</a>
      </div>
    </footer>
  )
}

export default Footer;