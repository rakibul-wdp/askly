import { teamMembers } from '@/mockData/teamMembers';
import Image from 'next/image';
import React from 'react'

const Team = () => {
  return (
    <section className='flex justify-between gap-10 pt-24 pl-32' style={{
      background: `linear-gradient(90deg, rgba(132, 33, 192, 0.1) 0%, rgba(132, 33, 192, 0.1) 100%);`,
    }}>
      <div>
        <h2 className='text-3xl text-primary font-bold mb-5 -mt-14'>Our Team Members</h2>
        <p>Our team is made up of talented individuals from different backgrounds and with diverse skill sets. We believe that this diversity is what makes us strong and enables us to tackle complex challenges with creativity and innovation.</p>
        <p className='my-5'>Our team is committed to continuous learning and growth. We stay up-to-date with the latest technologies and industry trends, and we encourage each other to pursue personal and professional development.</p>
        <p>We are proud of the work we do and the impact it has on our clients and their users. Thank you for being a part of our team and for your contribution to our shared mission.</p>
      </div>
      <div>
        {
          teamMembers.map((member) => (
            <div className='w-[70%] flex justify-between rounded-lg mb-5' style={{ background: "rgba(132, 33, 192, 0.1)" }} key={member.id}>
              <Image src={member.img} width={100} height={100} alt='team member' />
              <div className='px-5'>
                <div className='flex items-center justify-between mb-3'>
                  <h4>{member.name}</h4>
                  <p>{member.designation}</p>
                </div>
                <p className='text-sm'>{member.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Team;