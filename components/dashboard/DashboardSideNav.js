"use client";

import React, { useState } from 'react';
import { Tab } from '@headlessui/react'
import AsklyLogo from "../../public/assets/images/common/asklyLogo.png";
import UserIcon from "../../public/assets/icons/User.svg";
import DUserIcon from "../../public/assets/icons/DActive.svg";
import SearchIcon from "../../public/assets/icons/Search.svg";
import DSearchIcon from "../../public/assets/icons/DSearch.svg";
import FileIcon from "../../public/assets/icons/File.svg";
import DFileIcon from "../../public/assets/icons/DFile.svg";
import DashboardLinkedAccounts from './DashboardLinkedAccounts';
import DashboardDocumentHub from './DashboardDocumentHub';
import DashboardAsk from './DashboardAsk';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    navTitle: "Ask!",
    activeIcon: SearchIcon,
    icon: DSearchIcon,
    body: <DashboardAsk />
  },
  {
    id: 2,
    navTitle: "Document Hub",
    activeIcon: FileIcon,
    icon: DFileIcon,
    body: <DashboardDocumentHub />
  },
  {
    id: 3,
    navTitle: "Linked Accounts",
    activeIcon: UserIcon,
    icon: DUserIcon,
    body: <DashboardLinkedAccounts />
  },
]

const DashboardSideNav = () => {
  const [active, setActive] = useState("");

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="w-full sm:px-0">
      <div className='lg:hidden py-8' style={{ background: "rgba(132, 33, 192, 0.10)" }}>
        <Link href="/">
          <Image src={AsklyLogo} width={250} height={250} alt='askly logo' />
        </Link>
      </div>
      <Tab.Group as="div" className="flex flex-col lg:flex-row justify-between">
        <Tab.List className="flex flex-col justify-between w-full lg:w-[18%] lg:h-screen space-x-1 bg-[#FCEDF0] p-1 px-10 lg:px-3 xl:px-5 2xl:px-10">
          <div className='flex lg:flex-col px-4 sm:px-14 md:px-32 lg:px-0'>
            <Link href="/">
              <Image className='lg:my-10 hidden lg:block' src={AsklyLogo} width={250} height={250} alt='askly logo' />
            </Link>
            <div className='w-full flex flex-wrap justify-between items-center lg:flex-col lg:justify-center lg:items-start'>
              {
                categories.map((category) => (
                  <Tab
                    key={category.id}
                    className={({ selected }) =>
                      classNames(
                        'w-auto py-2.5 font-medium leading-5',
                        'lg:text-start',
                        selected
                          ? `${setActive(category.navTitle)} text-primary`
                          : 'hover:text-primary'
                      )
                    }
                  >
                    <div className='flex items-center justify-start gap-1'>
                      {<Image src={active === category.navTitle ? category.activeIcon : category.icon} width={20} height={20} alt='icon' />}
                      {category.navTitle}
                    </div>
                  </Tab>
                ))
              }
            </div>
          </div>
          <div className='hidden lg:block -ml-20'>
            <Tab className="btn btn-primary btn-outline normal-case w-[12rem] lg:w-[10rem] xl:w-[12rem] 2xl:ml-3 mb-2">Account management</Tab>
            <Tab className="btn btn-primary normal-case w-[12rem] lg:w-[10rem] xl:w-[12rem] 2xl:ml-3 mb-2">Sign out</Tab>
          </div>
        </Tab.List>
        <Tab.Panels className="w-full">
          {
            categories.map((category) => (
              <Tab.Panel
                key={category.id}
                className={classNames(
                  'rounded-r-xl p-3 lg:h-screen',
                )}
                style={{
                  background: `linear-gradient(134.56deg, rgba(155, 126, 234, 0.04) 10.8%, rgba(255, 127, 127, 0.04) 88.78%)`,
                }}
              >
                {category.body}
              </Tab.Panel>
            ))
          }
        </Tab.Panels>
        <div className='lg:hidden flex items-center justify-around flex-col sm:flex-row w-[16rem] mx-auto mt-10 mb-14'>
          <button className='btn btn-primary btn-outline normal-case w-full mb-5 sm:mb-0 sm:mr-2'>Account Management</button>
          <button className='btn btn-primary normal-case w-full sm:ml-2'>Sign Out</button>
        </div>
      </Tab.Group>
    </div>
  )
}

export default DashboardSideNav;