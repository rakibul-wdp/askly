"use client"

import React, { useEffect } from 'react'
import { homeMain } from '@/mockData/homeMain';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HomeMain = () => {

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className='pt-10 pb-32' style={{ background: "linear-gradient(90deg, rgba(132, 33, 192, 0.1) 0%, rgba(132, 33, 192, 0.1) 100%)" }}>
      {
        homeMain.map((item) => (
          <div key={item.id} className={`flex flex-col-reverse ${item.id === 2 ? "lg:flex-row-reverse my-24" : "lg:flex-row"} items-center justify-center gap-5 md:gap-14 lg:gap-32 relative right-0 left-0 max-w-screen-2xl mx-auto pl-3 sm:px-5 md:px-8 lg:px-14 xl:px-20 2xl:px-24 overflow-y-hidden`} data-aos={item.id === 1 ? "fade-right" : (item.id === 2 ? "fade-left" : "fade-up")}
          >
            <span className={`absolute -top-[2rem] sm:-top-[4rem] md:-top-[6rem] xl:top-[3rem] right-[10rem] sm:right-[25rem] md:right-[30rem] ${item.id === 2 ? "lg:right-[45rem] xl:right-[53rem]" : "lg:right-[5rem] xl:right-[20rem]"} z-0 text-[15rem] md:text-[20rem] lg:text-[24rem] text-base-100 font-bold`}>{item.id}</span>
            <Image src={item.img} className={`w-[80%] lg:w-[50%]`} alt='home main section images' />
            <div className={`w-[95%] sm:w-[90%] md:w-[70%] lg:w-[50%] relative z-10`}>
              <h2 className='text-2xl sm:text-3xl md:text-4xl text-primary font-bold mb-5'>{item.title}</h2>
              <ul className='list-disc list-outside ml-5'>
                {
                  item.description.map((list) => (
                    <li key={list.id} className={`${list.id === 2 && "lg:my-3"} font-medium`}>{list.listItem}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default HomeMain;
