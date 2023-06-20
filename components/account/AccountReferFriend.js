import React from 'react';
import RewardsImg from "../../public/assets/images/account/rewards.svg";
import CopyImg from "../../public/assets/images/account/copy.svg";
import Image from 'next/image';

const AccountReferFriend = () => {
  return (
    <section className='w-[50%] mx-auto text-center py-5'>
      <Image className='inline border rounded-lg' src={RewardsImg} width={400} height={400} alt='rewards' />
      <h4 className='text-xl font-bold my-3'>Spread the Word and Earn Rewards</h4>
      <p className='text-sm font-medium w-[85%] mx-auto'>Get the most out of Askly by sharing it with your friends! Use your unique referral code or invite them directly by email and earn rewards for every new user that signs up.</p>
      <div className='flex items-center justify-between my-5 p-4 rounded-lg' style={{ background: "rgba(255, 127, 127, 0.05)" }}>
        <span></span>
        <h3 className='text-2xl font-bold'>xU4ta</h3>
        <Image src={CopyImg} width={20} height={20} alt='copy' />
      </div>
      <div className='flex items-center'>
        <input type="email" placeholder="Email" className="input input-bordered input-primary w-full mr-2" style={{ background: "rgba(255, 127, 127, 0.02)" }} />
        <button className='btn btn-primary ml-2'>Invite</button>
      </div>
    </section>
  )
}

export default AccountReferFriend;