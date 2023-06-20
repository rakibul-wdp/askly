"use client";

import React from 'react';
import { Tab } from '@headlessui/react'
import DashboardLinkedAccounts from './DashboardLinkedAccounts';
import DashboardDocumentHub from './DashboardDocumentHub';
import DashboardAsk from './DashboardAsk';

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
      <Tab.Group as="div" className="flex justify-between">
        <Tab.List className="flex flex-col items-center justify-between w-[18%] h-screen space-x-1 bg-[#FCEDF0] p-1 px-10">
          <div>
            <button className='btn btn-large p-3'>Logo</button>
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
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-[80%] rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 btn btn-outline',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Account management
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-[80%] rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 btn btn-outline',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Sign out
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

export default DashboardSideNav;