import React from 'react';
import Link from 'next/link';
import AsklyLogo from "../../public/assets/images/common/asklyLogo.png";
import Image from 'next/image';

const Footer = ({ bg }) => {
  return (
    <footer className="pt-2 pb-8 px-3 sm:px-5 md:px-8 lg:px-14 xl:px-20 2xl:px-24" style={{ background: bg ? "linear-gradient(90deg, rgba(132, 33, 192, 0.10) 0%, rgba(132, 33, 192, 0.10) 100%)" : "#FDFDFD" }}>
      <div className='flex lg:items-center justify-between max-w-screen-2xl mx-auto'>
        <div className="flex flex-col xl:flex-row xl:items-center">
          <Image className='w-ful max-w-[150px] lg:max-w-[180px] xl:max-w-[200px]' src={AsklyLogo} alt='askly logo' />
          <p className='lg:text-lg xl:text-xl font-medium mt-2 md:mt-0'>Copyright © 2023 - All right reserved</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center text-base md:text-lg xl:text-xl">
          <Link href="/about">About</Link>
          <Link className='my-2 lg:my-0 lg:mx-5' href="/about#contact">Contact</Link>
          <Link href="/help#faq">FAQ</Link>
          <Link className='my-2 lg:my-0 lg:mx-5' href="/privacypolicy">Privacy Policy</Link>
          <Link href="/termsofservice">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;