import React from 'react';
import RewardsImg from "../../public/assets/images/account/rewards.svg";
import CopyImg from "../../public/assets/images/account/copy.svg";
import MailIcon from "../../public/assets/icons/email.svg";
import Image from 'next/image';

const AccountReferFriend = () => {
  return (
    <section className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] mx-auto text-center py-5'>
      <Image className='inline border rounded-lg' src={RewardsImg} width={400} height={400} alt='rewards' />
      <h4 className='text-xl font-bold my-3'>Spread the Word and Earn Rewards</h4>
      <p className='text-sm font-medium w-[85%] mx-auto'>Get the most out of Askly by sharing it with your friends! Use your unique referral code or invite them directly by email and earn rewards for every new user that signs up.</p>
      <div className='flex items-center justify-between my-5 p-4 rounded-lg' style={{ background: "rgba(255, 127, 127, 0.05)" }}>
        <span></span>
        <h3 className='text-2xl font-bold'>xU4ta</h3>
        <Image src={CopyImg} width={20} height={20} alt='copy' />
      </div>
      <div className='flex items-center'>
        <div className='relative w-full border border-primary rounded-lg px-3 py-2.5 bg-[#ff7f7f05] z-0' >
          <label htmlFor="" className='absolute -top-2.5 left-2 px-1 text-primary z-10 bg-[#e9def3f0]'>Email</label>
          <div className='flex items-center w-full'>
            <Image src={MailIcon} width={20} height={20} alt='mail icons' />
            <input type="email" placeholder='example@gmail.com' className='w-full outline-none bg-[#ff7f7f05] ml-2 text-primary' />
          </div>
        </div>
        <button className='btn btn-primary ml-2'>Invite</button>
      </div>
    </section>
  )
}

export default AccountReferFriend;