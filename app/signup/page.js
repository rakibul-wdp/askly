"use client";

import React, { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import Link from 'next/link';
import UserIcon from "../../public/assets/icons/User.svg";
import MailIcon from "../../public/assets/icons/email.svg";
import LockIcon from "../../public/assets/icons/Lock.svg";
import GiftIcon from "../../public/assets/icons/Gift.svg";
import EyeIcon from "../../public/assets/icons/Eye.svg";
import Image from 'next/image';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className='relative h-screen' style={{
      background: `linear-gradient(134.56deg, rgba(155, 126, 234, 0.2) 10.8%, rgba(255, 127, 127, 0.2) 88.78%)`,
    }}>
      <Navbar navText={false} />
      <form onSubmit={handleLoginSubmit} className='absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-accent p-5 rounded-lg w-[90%] sm:w-[70%] md:w-[50%] lg:w-[45%] xl:w-[40%] 2xl:w-[30%]' style={{
        background: `linear-gradient(134.56deg, rgba(155, 126, 234, 0.1) 10.8%, rgba(255, 127, 127, 0.1) 88.78%)`,
      }}>
        <h4 className='text-2xl mb-3'>Get more out of your files with our search tool – sign up today</h4>
        <div className='flex items-center justify-center mt-7'>
          <div className='relative w-full border border-primary rounded-lg px-3 py-2.5 mr-2 bg-[#ff7f7f05] z-0' >
            <label htmlFor="" className='absolute -top-2.5 left-2 px-1 text-primary z-10' style={{ backgroundColor: "#ff7f7f05" }}>First name</label>
            <div className='flex items-center w-full'>
              <Image src={UserIcon} width={20} height={20} alt='mail icons' />
              <input type="text" placeholder='Rakibul' className='w-full outline-none bg-[#ff7f7f05] ml-2 text-primary' />
            </div>
          </div>
          <div className='relative w-full border border-primary rounded-lg px-3 py-2.5 ml-2 bg-[#ff7f7f05] z-0' >
            <label htmlFor="" className='absolute -top-2.5 left-2 px-1 text-primary z-10' style={{ backgroundColor: "#ff7f7f05" }}>Last name</label>
            <div className='flex items-center w-full'>
              <Image src={UserIcon} width={20} height={20} alt='mail icons' />
              <input type="text" placeholder='Islam' className='w-full outline-none bg-[#ff7f7f05] ml-2 text-primary' />
            </div>
          </div>
        </div>

        <div className='relative mt-7 w-full border border-primary rounded-lg px-3 py-2.5 bg-[#ff7f7f05] z-0' >
          <label htmlFor="" className='absolute -top-2.5 left-2 px-1 text-primary z-10' style={{ backgroundColor: "#ff7f7f05" }}>User name</label>
          <div className='flex items-center w-full'>
            <Image src={UserIcon} width={20} height={20} alt='mail icons' />
            <input type="text" placeholder='rakibul-wdp' className='w-full outline-none bg-[#ff7f7f05] ml-2 text-primary' />
          </div>
        </div>
        <span className='text-sm'>username (must start with a letter) - (letters, numbers, and underscores)</span>

        <div className='relative mt-5 w-full border border-primary rounded-lg px-3 py-2.5 bg-[#ff7f7f05] z-0' >
          <label htmlFor="" className='absolute -top-2.5 left-2 px-1 text-primary z-10' style={{ backgroundColor: "#ff7f7f05" }}>Email</label>
          <div className='flex items-center w-full'>
            <Image src={MailIcon} width={20} height={20} alt='mail icons' />
            <input type="email" placeholder='example@gmail.com' className='w-full outline-none bg-[#ff7f7f05] ml-2 text-primary' />
          </div>
        </div>

        <div className='relative mt-7 w-full border border-primary rounded-lg px-3 py-2.5 bg-[#ff7f7f05]' >
          <label htmlFor="" className='absolute -top-3 left-2 z-10 px-1 text-primary'>Password</label>
          <div className='flex items-center w-full'>
            <Image src={LockIcon} width={20} height={20} alt='lock icons' />
            <input type={showPassword ? "text" : "password"} placeholder='********' className='w-full outline-none bg-[#ff7f7f05] ml-2 text-primary' />
            <Image onClick={() => setShowPassword(!showPassword)} className='cursor-pointer' src={EyeIcon} width={20} height={20} alt='eye icons' />
          </div>
        </div>

        <p>password requirements</p>
        <div className='flex items-center justify-between text-sm'>
          <p>8 characters minimum Must contain one lower-case letter</p>
          <div className="form-control">
            <input type="checkbox" defaultChecked="checked" className="checkbox checkbox-success checkbox-xs" />
          </div>
        </div>
        <div className='flex items-center justify-between text-sm'>
          <p>one upper-case letter</p>
          <div className="form-control">
            <input type="checkbox" defaultChecked="checked" className="checkbox checkbox-success checkbox-xs" />
          </div>
        </div>
        <div className='flex items-center justify-between text-sm mb-5'>
          <p>one digit and one special character</p>
          <div className="form-control">
            <input type="checkbox" defaultChecked="checked" className="checkbox checkbox-success checkbox-xs" />
          </div>
        </div>

        <div className='relative mt-5 mb-7 w-full border border-primary rounded-lg px-3 py-2.5 bg-[#ff7f7f05] z-0' >
          <label htmlFor="" className='absolute -top-2.5 left-2 px-1 text-primary z-10' style={{ backgroundColor: "#ff7f7f05" }}>Referral code (optional)</label>
          <div className='flex items-center w-full'>
            <Image src={GiftIcon} width={20} height={20} alt='mail icons' />
            <input type="text" placeholder='Ux123' className='w-full outline-none bg-[#ff7f7f05] ml-2 text-primary' />
          </div>
        </div>

        <input className='btn btn-primary normal-case w-full mb-3' type="submit" value="Sign Up" />
        <p>Already have an account? <Link className='underline' href="/login">Login</Link></p>
      </form>
    </section>
  )
}

export default SignUp;