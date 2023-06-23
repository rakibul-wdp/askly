import React from 'react';
import UserIcon from "../../public/assets/icons/User.svg";
import MailIcon from "../../public/assets/icons/email.svg";
import Image from 'next/image';

const AccountBody = () => {
  return (
    <section className='flex flex-col md:flex-row justify-around py-5'>
      <div className='w-[80%] sm:w-[60%] md:w-[35%] mx-auto md:mx-0'>
        <h4 className='mb-3 font-medium'>Account Details</h4>

        <div className='relative my-7 w-full border border-primary rounded-lg px-3 py-2.5 bg-[#ff7f7f05] z-0' >
          <label htmlFor="" className='absolute -top-2.5 left-2 px-1 text-primary z-10 bg-[#e9def3f0]'>User Name</label>
          <div className='flex items-center w-full'>
            <Image src={UserIcon} width={20} height={20} alt='mail icons' />
            <input type="text" placeholder='rakibul-wdp' className='w-full outline-none bg-[#ff7f7f05] ml-2 text-primary' />
          </div>
        </div>

        <div className='relative mb-8 w-full border border-primary rounded-lg px-3 py-2.5 bg-[#ff7f7f05] z-0' >
          <label htmlFor="" className='absolute -top-2.5 left-2 px-1 text-primary z-10 bg-[#e9def3f0]'>Email</label>
          <div className='flex items-center w-full'>
            <Image src={MailIcon} width={20} height={20} alt='mail icons' />
            <input type="email" placeholder='example@gmail.com' className='w-full outline-none bg-[#ff7f7f05] ml-2 text-primary' />
          </div>
        </div>

        <h4 className='mb-3 font-medium'>Referral credit</h4>
        <h3 className='w-full p-4 rounded-lg font-bold' style={{ background: "rgba(255, 127, 127, 0.05)" }}>5$</h3>
      </div>
      <div className="divider md:divider-horizontal"></div>
      <div className='border border-white p-5 rounded-lg w-[80%] sm:w-[60%] md:w-[35%] mx-auto md:mx-0'>
        <p className='text-end ml-[60%] px-5 py-2 rounded-2xl -mt-5 -mr-5 bg-gradient-to-b from-purple-600 to-red-600 text-white'>Current plan</p>
        <h2 className='text-3xl font-bold'>Starter</h2>
        <div className="divider"></div>
        <ul className="list-disc list-outside ml-8 font-medium">
          <li>1 Team</li>
          <li>1 Installed Agent</li>
          <li>Real-Time Feedback</li>
          <li>Video Dedicated Support</li>
          <li>Attacked Targets Per Month</li>
          <li>Team Collaboration Tools</li>
          <li>Automated Updated Features</li>
          <li>24/7 Life time Support</li>
        </ul>
        <button className='mt-32 btn mx-auto flex items-center'>Cancel</button>
      </div>
    </section>
  )
}

export default AccountBody;