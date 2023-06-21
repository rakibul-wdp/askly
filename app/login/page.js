"use client";

import Navbar from '@/components/common/Navbar';
import Link from 'next/link';
import React from 'react'

const Login = () => {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className='relative h-screen' style={{
      background: `linear-gradient(134.56deg, rgba(155, 126, 234, 0.2) 10.8%, rgba(255, 127, 127, 0.2) 88.78%)`,
    }}>
      <Navbar />
      <form onSubmit={handleLoginSubmit} className='absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-accent p-5 rounded-lg w-[90%] sm:w-[70%] md:w-[50%] lg:w-[45%] xl:w-[40%] 2xl:w[30%]' style={{
        background: `linear-gradient(134.56deg, rgba(155, 126, 234, 0.1) 10.8%, rgba(255, 127, 127, 0.1) 88.78%)`,
      }}>
        <h2 className='text-2xl font-bold mb-3'>Welcome back</h2>
        <input type="email" placeholder="Type here" className="input input-bordered w-full mb-5" />
        <input type="password" placeholder="Type here" className="input input-bordered w-full" />
        <p className='my-3.5 underline'>Forget your password?</p>
        <input className='btn btn-primary normal-case w-full mb-3.5' type="submit" value="Login" />
        <p>Don't have an account? <Link className='underline' href="/signup">Sign up</Link></p>
      </form>
    </section>
  )
}

export default Login;