import React from 'react';
import Link from 'next/link';
import AsklyLogo from "../../public/assets/images/common/asklyLogo.png";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex lg:items-center justify-between pt-2 pb-10 bg-accent max-w-screen-2xl mx-auto px-3 sm:px-5 md:px-8 lg:px-14 xl:px-20 2xl:px-24">
      <div className="flex flex-col xl:flex-row xl:items-center">
        <Image src={AsklyLogo} width={250} height={250} alt='askly logo' />
        <p className='text-xl font-medium mt-2 md:mt-0'>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center text-xl">
        <Link href="/about">About</Link>
        <Link className='my-2 lg:my-0 lg:mx-5' href="#">Contact</Link>
        <Link href="#">FAQ</Link>
        <Link className='my-2 lg:my-0 lg:mx-5' href="/privacypolicy">Privacy Policy</Link>
        <Link href="/termsofservice">Terms of Service</Link>
      </div>
    </footer>
  )
}

export default Footer;