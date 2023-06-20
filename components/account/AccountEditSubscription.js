import React from 'react';
import BigArrowImg from "../../public/assets/images/account/bigArrow.svg";
import Image from 'next/image';

const AccountEditSubscription = () => {
  return (
    <section className='flex justify-between p-5'>
      <div className='border p-5 rounded-lg'>
        <button className='btn btn-primary'>Current plan</button>
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
        <button className='mt-32 btn'>Cancel</button>
      </div>
      <Image src={BigArrowImg} width={50} height={50} alt='starter to advance arrow' />
      <div className='border p-5 rounded-lg'>
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
        <button className='mt-32 btn btn-primary btn-outline'>Upgrade now</button>
      </div>
      <button className='btn btn-primary btn-outline'>More plans &gt;</button>
    </section>
  )
}

export default AccountEditSubscription;