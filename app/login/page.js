"use client";

import React, { useState } from 'react'
import Navbar from '@/components/common/Navbar';
import Link from 'next/link';
import MailIcon from "../../public/assets/icons/email.svg";
import LockIcon from "../../public/assets/icons/Lock.svg";
import EyeIcon from "../../public/assets/icons/Eye.svg";
import Image from 'next/image';

const Login = () => {
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
        <h2 className='text-2xl font-bold mb-3'>Welcome back</h2>
        <div className='relative mt-7 w-full border border-primary rounded-lg px-3 py-2.5 bg-[#ff7f7f05] z-0' >
          <label htmlFor="" className='absolute -top-2.5 left-2 px-1 text-primary z-10' style={{ backgroundColor: "#ff7f7f05" }}>Email</label>
          <div className='flex items-center w-full'>
            <Image src={MailIcon} width={20} height={20} alt='mail icons' />
            <input type="email" placeholder='example@gmail.com' className='w-full outline-none bg-[#ff7f7f05] ml-2 text-primary' />
          </div>
        </div>

        <div className='relative my-6 w-full border border-primary rounded-lg px-3 py-2.5 bg-[#ff7f7f05]' >
          <label htmlFor="" className='absolute -top-3 left-2 z-10 px-1 text-primary'>Password</label>
          <div className='flex items-center w-full'>
            <Image src={LockIcon} width={20} height={20} alt='lock icons' />
            <input type={showPassword ? "text" : "password"} placeholder='********' className='w-full outline-none bg-[#ff7f7f05] ml-2 text-primary' />
            <Image onClick={() => setShowPassword(!showPassword)} className='cursor-pointer' src={EyeIcon} width={20} height={20} alt='eye icons' />
          </div>
        </div>

        <p className='my-3.5 underline'>Forget your password?</p>
        <input className='btn btn-primary normal-case w-full mb-3.5' type="submit" value="Login" />
        <p>Don't have an account? <Link className='underline' href="/signup">Sign up</Link></p>
      </form>
    </section>
  )
}

export default Login;