"use client";

import React from 'react';
import { Tab } from '@headlessui/react'
import AccountBody from './AccountBody';
import AccountEditSubscription from './AccountEditSubscription';
import AccountReferFriend from './AccountReferFriend';

const categories = {
  "Account": [
    {
      id: 1,
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>,
      body: <AccountBody />
    },
  ],
  "Edit Subscription": [
    {
      id: 2,
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" /></svg>,
      body: <AccountEditSubscription />
    },
  ],
  "Refer a Friend": [
    {
      id: 3,
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z" /></svg>,
      body: <AccountReferFriend />
    },
  ],
}

const AccountMain = () => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const changePassword = Object.keys(categories).map((category) => category);

  const changeIcons = Object.keys(categories).map(category => categories[category][0].id);

  return (
    <div className="w-full pt-10 pb-8">
      <Tab.Group as="div" className="flex lg:flex-row flex-col justify-between">
        <Tab.List className="flex flex-col justify-between w-full lg:w-[18%] lg:h-[72vh] space-x-1 rounded-l-xl bg-[#FCEDF0] p-1 lg:pt-5">
          <div className='flex lg:flex-col px-4 sm:px-14 md:px-32 lg:px-0'>
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 lg:pl-4 font-medium leading-5',
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
          <div className='hidden lg:block'>
            {changePassword[0] === "Account" && <Tab className="btn btn-primary btn-outline normal-case w-[12rem] ml-3 mb-2">
              Change Password
            </Tab>
            }
            <Tab className="btn btn-primary btn-outline normal-case w-[12rem] ml-3 mb-2">
              Delete Account
            </Tab>
          </div>
        </Tab.List>
        <Tab.Panels className="w-full">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-r-xl p-3 lg:h-[72vh]',
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
        <div className='lg:hidden flex items-center justify-around flex-col sm:flex-row w-[14rem] md:w-[14rem] mx-auto'>
          <button className='btn btn-primary btn-outline normal-case w-full'>Change Password</button>
          <button className='btn btn-primary btn-outline normal-case w-full'>Delete Account</button>
        </div>
      </Tab.Group>
    </div>
  )
}

export default AccountMain;