"use client";

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import AsklyLogo from "../../public/assets/images/common/asklyLogo.png";
import PrimaryButton from './PrimaryButton';
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar absolute top-0 left-0 right-0 mt-3 max-w-screen-2xl mx-auto">
      <div className="navbar-start">
        <Link href="/" className="text-xl">
          <Image src={AsklyLogo} width={250} height={250} alt='askly logo' />
        </Link>
      </div>
      <div className="navbar-end">
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-medium">
            <li><Link href="/" className={pathname == "/" ? "text-primary" : "text-[#171717]"}>Home</Link></li>
            <li><Link href="/pricing" className={pathname == "/pricing" ? "text-primary" : "text-[#171717]"}>Pricing</Link></li>
            <li><Link href="/help" className={pathname == "/help" ? "text-primary" : "text-[#171717]"}>Help</Link></li>
            <li><Link href="/about" className={pathname == "/about" ? "text-primary" : "text-[#171717]"}>About</Link></li>
          </ul>
        </div>
        <Link href="/signup"><PrimaryButton >Sign Up</PrimaryButton></Link>
      </div>
    </nav>
  )
}

export default Navbar;

/**
 
<div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>


 */