import { homeMain } from '@/mockData/homeMain';
import Image from 'next/image';
import React from 'react'

const HomeMain = () => {
  return (
    <div className='bg-[#F2E3EF] py-10'>
      {
        homeMain.map((item) => (
          <div key={item.id} className={`flex ${item.id === 2 && "flex-row-reverse my-24"} items-center justify-center gap-32 relative`}>
            <span className="absolute top-0 right-[45rem] z-0 text-[24rem] text-base-100 font-bold">{item.id}</span>
            <Image src={item.img} height={602} width={624} alt='home main section images' />
            <div className='w-[30%] relative z-10'>
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