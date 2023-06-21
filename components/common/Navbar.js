import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import AsklyLogo from "../../public/assets/images/common/asklyLogo.png";

const Navbar = () => {
  return (
    <nav className="navbar absolute mt-5">
      <div className="navbar-start">
        <Link href="/" className="text-xl">
          <Image src={AsklyLogo} width={250} height={250} alt='askly logo' />
        </Link>
      </div>
      <div className="navbar-end">
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Pricing</a></li>
            <li><a>Help</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
        <Link href="/signup" className="btn btn-primary normal-case">Sign Up</Link>
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