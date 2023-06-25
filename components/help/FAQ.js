"use client";

import React from 'react'
import Navbar from '../common/Navbar';
import { Disclosure } from '@headlessui/react';
import ArrowIcon from "../../public/assets/images/help/arrow.svg";
import Image from 'next/image';
import { FAQHelp } from '@/mockData/FAQHelp';

const FAQ = () => {
  return (
    <section id='faq'>
      <Navbar navText={false} />
      <div className='pt-32'>
        <h2 className='text-3xl md:text-4xl font-bold text-center'>Frequently Asked Questions</h2>
        <div className="w-full pt-12">
          <div className="mx-auto w-full rounded-2xl py-2">
            {
              FAQHelp.map((faq) => (
                <Disclosure defaultOpen={faq.id === 1} as="div" className={`${faq.id !== 1 && "mt-2"} ${faq.id === 1 ? "border-y" : "border-b"} border-gray-300`} key={faq.id}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-lg text-left font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>{faq.question}</span>
                        <Image className={`${open && 'rotate-180 transform'}`} src={ArrowIcon} width={10} height={10} alt='arrow icon' />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">{faq.answer}</Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ;