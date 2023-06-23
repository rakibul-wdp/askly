import React from 'react';
import AsklyLogo from "../../public/assets/images/common/asklyLogo.png";
import Image from 'next/image';
import Link from 'next/link';

const AccountNav = () => {
  return (
    <div className="navbar pt-8 md:pt-10">
      <div className="navbar-start">
        <Link href="/">
          <Image src={AsklyLogo} width={250} height={250} alt='askly logo' />
        </Link>
      </div>
      <div className="navbar-end">
        <Link href="/dashboard">
          <button className='btn btn-primary normal-case w-[7rem] md:btn-wide'>Dashboard</button>
        </Link>
        <button className='btn btn-primary btn-outline normal-case w-[6rem] md:w-[8rem] ml-4'>Sign out</button>
      </div>
    </div>
  )
}

export default AccountNav;