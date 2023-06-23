"use client";

import Navbar from '@/components/common/Navbar';
import Link from 'next/link';
import React from 'react'

const SignUp = () => {
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
        <div className='flex items-center justify-center'>
          <input type="text" placeholder="First name" className="input input-bordered w-full mb-5 mr-1" />
          <input type="text" placeholder="Last name" className="input input-bordered w-full mb-5 ml-1" />
        </div>
        <input type="text" placeholder="User name" className="input input-bordered w-full mb-5" />
        <input type="password" placeholder="Email" className="input input-bordered w-full mb-5" />
        <input type="password" placeholder="Password" className="input input-bordered w-full mb-5" />
        <p>password requirements</p>
        <div className='flex items-center justify-between text-sm'><p>8 characters minimum Must contain one lower-case letter</p><div className="form-control">
          <input type="checkbox" checked="checked" className="checkbox checkbox-success checkbox-xs" />
        </div></div>
        <div className='flex items-center justify-between text-sm'><p>one upper-case letter</p><div className="form-control">
          <input type="checkbox" checked="checked" className="checkbox checkbox-success checkbox-xs" />
        </div></div>
        <div className='flex items-center justify-between text-sm mb-5'><p>one digit and one special character</p><div className="form-control">
          <input type="checkbox" checked="checked" className="checkbox checkbox-success checkbox-xs" />
        </div></div>
        <input type="text" placeholder="Referral code" className="input input-bordered w-full mb-5" />
        <input className='btn btn-primary normal-case w-full mb-3' type="submit" value="Sign Up" />
        <p>Already have an account? <Link className='underline' href="/login">Login</Link></p>
      </form>
    </section>
  )
}

export default SignUp;