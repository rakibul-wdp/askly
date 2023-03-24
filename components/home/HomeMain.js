import { homeMain } from '@/mockData/homeMain';
import Image from 'next/image';
import React from 'react'

const HomeMain = () => {
  return (
    <div className='bg-[#F2E3EF] pt-10 pb-32'>
      {
        homeMain.map((item) => (
          <div key={item.id} className={`flex flex-col-reverse ${item.id === 2 ? "lg:flex-row-reverse my-24" : "lg:flex-row"} items-center justify-center gap-5 md:gap-14 lg:gap-32 relative right-0 left-0 max-w-screen-2xl mx-auto pl-3 sm:px-5 md:px-8 lg:px-14 xl:px-20 2xl:px-24`}>
            <span className={`absolute -top-[4rem] md:-top-[2rem] xl:top-[3rem] right-[33rem] md:right-[35rem] ${item.id === 2 ? "lg:right-[45rem] xl:right-[53rem]" : "lg:right-[5rem] xl:right-[20rem]"} z-0 text-[15rem] md:text-[20] lg:text-[24rem] text-base-100 font-bold`}>{item.id}</span>
            <Image src={item.img} className='lg:w-[80%]' height={602} width={624} alt='home main section images' />
            <div className='w-[95%] sm:w-[90%] md:w-[70%] lg:w-[50%] relative z-10'>
              <h2 className='text-3xl md:text-4xl text-primary font-bold mb-5'>{item.title}</h2>
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

// home main section need to add animation
// 1st sub section will go left to right
// 2nd sub section will go right to left
// 3rd sub section will go bottom to up
// possible library data fase iso

// responsive is not done
// small device need to be responsive as figma