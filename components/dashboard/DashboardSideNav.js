"use client";

import React from 'react';
import { Tab } from '@headlessui/react'
import AsklyLogo from "../../public/assets/images/common/asklyLogo.png";
import DashboardLinkedAccounts from './DashboardLinkedAccounts';
import DashboardDocumentHub from './DashboardDocumentHub';
import DashboardAsk from './DashboardAsk';
import Image from 'next/image';

const categories = {
  "Ask!": [
    {
      id: 1,
      body: <DashboardAsk />
    },
  ],
  "Document Hub": [
    {
      id: 1,
      body: <DashboardDocumentHub />
    },
  ],
  "Linked Accounts": [
    {
      id: 1,
      body: <DashboardLinkedAccounts />
    },
  ],
}

const DashboardSideNav = () => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="w-full sm:px-0">
      <Tab.Group as="div" className="flex flex-col lg:flex-row justify-between">
        <Tab.List className="flex flex-col justify-between w-full lg:w-[18%] lg:h-screen space-x-1 bg-[#FCEDF0] p-1 px-10 lg:px-3 xl:px-5 2xl:px-10">
          <div className='flex lg:flex-col px-4 sm:px-14 md:px-32 lg:px-0'>
            <Image className='lg:my-10' src={AsklyLogo} width={250} height={250} alt='askly logo' />
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 font-medium leading-5',
                    'lg:text-start',
                    selected
                      ? 'text-primary'
                      : 'hover:text-primary'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </div>
          <div className='hidden lg:block -ml-20'>
            <Tab className="btn btn-primary btn-outline normal-case w-[12rem] lg:w-[10rem] xl:w-[12rem] 2xl:ml-3 mb-2">Account management</Tab>
            <Tab className="btn btn-primary normal-case w-[12rem] lg:w-[10rem] xl:w-[12rem] 2xl:ml-3 mb-2">Sign out</Tab>
          </div>
        </Tab.List>
        <Tab.Panels className="w-full">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-r-xl p-3 lg:h-screen',
              )}
              style={{
                background: `linear-gradient(134.56deg, rgba(155, 126, 234, 0.04) 10.8%, rgba(255, 127, 127, 0.04) 88.78%)`,
              }}
            >
              {
                posts.map((post) => (
                  <div key={post.id}>{post.body}</div>
                ))
              }
            </Tab.Panel>
          ))}
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