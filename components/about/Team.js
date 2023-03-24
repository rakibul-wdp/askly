import { teamMembers } from '@/mockData/teamMembers';
import Image from 'next/image';
import React from 'react'

const Team = () => {
  return (
    <section className='pt-24 px-3 sm:px-5 md:px-8 lg:px-14 xl:px-20 2xl:px-24' style={{
      background: `linear-gradient(90deg, rgba(132, 33, 192, 0.2) 0%, rgba(132, 33, 192, 0.2) 100%)`,
    }}>
      <div className='max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between lg:gap-10'>
        <div>
          <h2 className='text-3xl md:text-4xl text-center lg:text-start text-primary font-bold lg:mb-5 -mt-14'>Our Team Members</h2>
          <p className='font-medium hidden lg:block'>Our team is made up of talented individuals from different backgrounds and with diverse skill sets. We believe that this diversity is what makes us strong and enables us to tackle complex challenges with creativity and innovation.</p>
          <p className='my-5 font-medium hidden lg:block'>Our team is committed to continuous learning and growth. We stay up-to-date with the latest technologies and industry trends, and we encourage each other to pursue personal and professional development.</p>
          <p className='font-medium hidden lg:block'>We are proud of the work we do and the impact it has on our clients and their users. Thank you for being a part of our team and for your contribution to our shared mission.</p>
        </div>
        <div>
          {
            teamMembers.map((member) => (
              <div className='flex justify-between rounded-lg mb-5' style={{ background: "rgba(132, 33, 192, 0.1)" }} key={member.id}>
                <Image src={member.img} className='w-[200px]' alt='team member' />
                <div className='px-5 py-2'>
                  <div className='flex items-center justify-between mb-3'>
                    <h4 className='text-lg font-medium'>{member.name}</h4>
                    <p className='text-lg'>{member.designation}</p>
                  </div>
                  <p className='text-sm'>{member.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Team;