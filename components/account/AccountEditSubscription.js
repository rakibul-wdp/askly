import React from 'react';
import BigArrowImg from "../../public/assets/images/account/bigArrow.svg";
import Image from 'next/image';

const AccountEditSubscription = () => {
  return (
    <section className='flex flex-col md:flex-row justify-between p-5'>
      <div className='border border-white p-5 rounded-lg w-[80%] sm:w-[60%] md:w-[35%] mx-auto md:mx-0'>
        <div className='flex items-center justify-end -mt-[2px] -mr-[2px]'>
          <p className='text-center px-5 py-2 rounded-2xl -mt-5 -mr-5 bg-gradient-to-b from-purple-600 to-red-600 text-white'>Current plan</p>
        </div>
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
        <button className='mt-32 mb-5 text-primary mx-auto flex items-center'>Cancel</button>
      </div>
      <Image className='mx-auto my-10 md:my-0 rotate-90 md:-rotate-0' src={BigArrowImg} width={50} height={50} alt='starter to advance arrow' />
      <div className='border border-white p-5 rounded-lg w-[80%] sm:w-[60%] md:w-[35%] mx-auto md:mx-0'>
        <h2 className='text-3xl font-bold'>Advanced</h2>
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
        <button className='mt-32 btn btn-primary btn-outline normal-case w-full'>Upgrade now</button>
      </div>
      <button className='btn btn-primary btn-outline normal-case mx-auto mt-10 md:mt-0'>More plans &gt;</button>
    </section>
  )
}

export default AccountEditSubscription;