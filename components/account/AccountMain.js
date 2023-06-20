"use client";

import React from 'react';
import { Tab } from '@headlessui/react'
import AccountBody from './AccountBody';
import AccountEditSubscription from './AccountEditSubscription';
import AccountReferFriend from './AccountReferFriend';

const categories = {
  Account: [
    {
      id: 1,
      body: <AccountBody />
    },
  ],
  "Edit Subscription": [
    {
      id: 1,
      body: <AccountEditSubscription />
    },
  ],
  "Refer a Friend": [
    {
      id: 1,
      body: <AccountReferFriend />
    },
  ],
}

const AccountMain = () => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const changePassword = Object.keys(categories).map((category) => category);

  return (
    <div className="w-full lg:px-24 py-16 sm:px-0">
      <Tab.Group as="div" className="flex justify-between">
        <Tab.List className="flex flex-col justify-between w-[18%] h-[72vh] space-x-1 rounded-l-xl bg-[#FCEDF0] p-1">
          <div>
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 text-start',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </div>
          <div>
            {changePassword[0] === "Account" && <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 btn btn-outline',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Change Password
            </Tab>
            }
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 btn btn-outline',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Delete Account
            </Tab>
          </div>
        </Tab.List>
        <Tab.Panels className="w-full">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-r-xl bg-white p-3 h-[72vh]',
              )}
            >
              {
                posts.map((post) => (
                  <div key={post.id}>{post.body}</div>
                ))
              }
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default AccountMain;