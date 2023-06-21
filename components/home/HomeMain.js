import { homeMain } from '@/mockData/homeMain';
import Image from 'next/image';
import React from 'react'

const HomeMain = () => {
  return (
    <div className='bg-[#F2E3EF] pt-10 pb-32'>
      {
        homeMain.map((item) => (
          <div key={item.id} className={`flex flex-col-reverse ${item.id === 2 ? "md:flex-row-reverse my-24" : "md:flex-row"} items-center justify-center gap-32 relative right-0 left-0 max-w-screen-2xl mx-auto pl-3 sm:px-5 md:px-8 lg:px-14 xl:px-20 2xl:px-24`}>
            <span className="absolute top-0 right-[45rem] z-0 text-[24rem] text-base-100 font-bold">{item.id}</span>
            <Image src={item.img} sizes='10vw' height={602} width={624} alt='home main section images' />
            <div className='w-full sm:w-[90%] md:w-[70%] lg:w-[30%] relative z-10'>
              <h2 className='text-3xl text-primary font-bold mb-5'>{item.title}</h2>
              <ul className='list-disc list-outside ml-5'>
                {
                  item.description.map((list) => (
                    <li key={list.id} className={`${list.id === 2 && "my-3"} font-medium`}>{list.listItem}</li>
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