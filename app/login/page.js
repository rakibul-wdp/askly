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
      <form onSubmit={handleLoginSubmit} className='absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-accent p-5 rounded-lg'>
        <h2 className='text-xl font-bold mb-3'>Welcome back</h2>
        <input type="text" placeholder="Type here" className="input input-bordered w-full mb-5" />
        <input type="password" placeholder="Type here" className="input input-bordered w-full" />
        <p className='my-3'>Forget your password?</p>
        <input className='btn btn-primary normal-case w-full mb-3' type="submit" value="Login" />
        <p>Don't have an account? <Link href="/signup">Sign up</Link></p>
      </form>
    </section>
  )
}

export default Login;