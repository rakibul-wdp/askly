"use client";

import React, { Fragment, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import AsklyLogo from "../../public/assets/images/common/asklyLogo.png";
import CrossIcon from "../../public/assets/images/common/cross.svg";
import MenuIcon from "../../public/assets/images/common/menu.svg";
import PrimaryButton from './PrimaryButton';
import { usePathname } from "next/navigation";
import { Popover, Transition } from '@headlessui/react';

const NavLink = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'Help',
    href: '/help',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: <PrimaryButton >Sign Up</PrimaryButton>,
    href: '/signup',
  },
]

const Navbar = ({ navText }) => {
  const pathname = usePathname();

  return (
    <nav className="navbar absolute top-0 left-0 right-0 mt-3 max-w-screen-2xl mx-auto flex items-center justify-between px-3 sm:px-5 md:px-8 lg:px-14 xl:px-20 2xl:px-24">
      <div className="navbar-start w-fit">
        <Link href="/" className="text-xl">
          <Image src={AsklyLogo} width={250} height={250} alt='askly logo' />
        </Link>
      </div>
      <div className="navbar-end w-full">
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-medium">
            <li className='md:w-[15%] lg:w-fit md:mx-auto'><Link href="/" className={`${pathname == "/" ? "text-primary" : (navText ? "text-white" : "text-[#171717]")}`}>Home</Link></li>
            <li className='md:w-[18%] lg:w-fit md:mx-auto'><Link href="/pricing" className={`${pathname == "/pricing" ? "text-primary" : (navText ? "text-white" : "text-[#171717]")}`}>Pricing</Link></li>
            <li className='md:w-[10%] lg:w-fit md:mx-auto'><Link href="/help" className={`${pathname == "/help" ? "text-primary" : (navText ? "text-white" : "text-[#171717]")}`}>Help</Link></li>
            <li className='md:w-[24%] lg:w-fit md:mx-auto'><Link href="/about" className={`${pathname == "/about" ? "text-primary" : (navText ? "text-white" : "text-[#171717]")}`}>About</Link></li>
          </ul>
        </div>
        <Link className='hidden md:block' href="/signup"><PrimaryButton >Sign Up</PrimaryButton></Link>

        <div className="px-4 md:hidden">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75`}
                >
                  {
                    open ? <Image src={CrossIcon} width={30} height={30} alt='cross icon' /> : <Image src={MenuIcon} width={30} height={30} alt='menu icon' />
                  }
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-28 z-10 mt-3 w-60 -translate-x-1/2 transform sm:px-0">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                        {NavLink.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <div className="ml-4">
                              <p className="font-medium">
                                {item.name}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;