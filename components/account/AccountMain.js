"use client";

import React, { useState } from 'react';
import { Tab } from '@headlessui/react'
import UserIcon from "../../public/assets/icons/User.svg";
import DUserIcon from "../../public/assets/icons/DActive.svg";
import DollarIcon from "../../public/assets/icons/Dollar.svg";
import DDollarIcon from "../../public/assets/icons/DActiveDollar.svg";
import ShareIcon from "../../public/assets/icons/Share.svg";
import DShareIcon from "../../public/assets/icons/DActiveShare.svg";
import AccountBody from './AccountBody';
import AccountEditSubscription from './AccountEditSubscription';
import AccountReferFriend from './AccountReferFriend';
import Image from 'next/image';

const categories = [
  {
    id: 1,
    navTitle: "Account",
    activeIcon: UserIcon,
    icon: DUserIcon,
    body: <AccountBody />
  },
  {
    id: 2,
    navTitle: "Edit Subscription",
    activeIcon: DollarIcon,
    icon: DDollarIcon,
    body: <AccountEditSubscription />
  },
  {
    id: 3,
    navTitle: "Refer a Friend",
    activeIcon: ShareIcon,
    icon: DShareIcon,
    body: <AccountReferFriend />
  },
]

const AccountMain = () => {
  const [active, setActive] = useState("");

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="w-full pt-10 pb-8">
      <Tab.Group as="div" className="flex lg:flex-row flex-col justify-between">
        <Tab.List className="flex flex-col justify-between w-full lg:w-[18%] lg:h-[72vh] space-x-1 rounded-l-xl bg-[#FCEDF0] p-1 lg:pt-5">
          <div className='flex flex-wrap justify-between lg:flex-col px-4 sm:px-14 md:px-32 lg:px-0'>
            {
              categories.map((category) => (
                <Tab
                  key={category.id}
                  className={({ selected }) =>
                    classNames(
                      'w-auto py-2.5 lg:pl-4 font-medium leading-5',
                      'lg:text-start',
                      selected
                        ? `${setActive(category.navTitle)} text-primary`
                        : `hover:text-primary`
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
          <div className='hidden lg:block'>
            {active === "Account" && <Tab className="btn btn-primary btn-outline normal-case w-[12rem] lg:w-[10rem] xl:w-[12rem] ml-3 mb-2">
              Change Password
            </Tab>}
            <Tab className="btn btn-primary btn-outline normal-case w-[12rem] lg:w-[10rem] xl:w-[12rem] ml-3 mb-2">
              Delete Account
            </Tab>
          </div>
        </Tab.List>
        <Tab.Panels className="w-full">
          {
            categories.map((category) => (
              <Tab.Panel
                key={category.id}
                className={classNames(
                  'rounded-r-xl p-3 lg:h-[72vh]',
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
        <div className='lg:hidden flex items-center justify-around flex-col sm:flex-row w-[16rem] mx-auto mt-10'>
          {
            active === "Account" && <button className='btn btn-primary btn-outline normal-case w-full mb-5 sm:mb-0 sm:mr-2'>Change Password</button>
          }
          <button className='btn btn-primary btn-outline normal-case w-full sm:ml-2'>Delete Account</button>
        </div>
      </Tab.Group>
    </div>
  )
}

export default AccountMain;