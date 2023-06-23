import React from 'react';
import LocationImg from "../../public/assets/icons/location.svg";
import PhoneNumberImg from "../../public/assets/icons/phoneNumber.svg";
import EmailImg from "../../public/assets/icons/email.svg";
import LinkedInImg from "../../public/assets/images/about/linkedin.svg";
import TwitterImg from "../../public/assets/images/about/twitter.svg";
import FacebookImg from "../../public/assets/images/about/facebook.svg";
import Image from 'next/image';

const Address = () => {
  return (
    <section className='py-8 md:py-14 px-3 sm:px-5 md:px-8 lg:px-14 xl:px-20 2xl:px-24' style={{
      background: `linear-gradient(134.56deg, rgba(155, 126, 234, 0.2) 10.8%, rgba(255, 127, 127, 0.2) 88.78%)`,
    }}>
      <div className='flex flex-col md:flex-row items-center justify-between md:gap-8 lg:gap-24 xl:gap-32 max-w-screen-2xl mx-auto'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7252.222508415827!2d89.39886162704492!3d24.654298586606103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdb32dfd789943%3A0xe7f2b001cc8988c1!2sMamursahi!5e0!3m2!1sen!2sbd!4v1674903560564!5m2!1sen!2sbd"
          title="location"
          className='w-full sm:w-[90%] md:w-[50%] lg:w-[75%] xl:w-[70%]'
          height="600"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className='mt-10 md:mt-0 md:w-[50%] lg:w-[75%] xl:w-[50%]'>
          <div className='flex items-center p-3.5 rounded-lg' style={{ background: "rgba(253, 253, 253, 0.4)" }}>
            <Image src={LocationImg} width={20} height={24} alt='location' />
            <span className='text-xl font-bold ml-4'>Location</span>
          </div>
          <div className='flex items-center p-3.5 rounded-lg my-4' style={{ background: "rgba(253, 253, 253, 0.4)" }}>
            <Image src={PhoneNumberImg} width={20} height={20} alt='phone number' />
            <span className='text-xl font-bold ml-4'>Phone Number</span>
          </div>
          <div className='flex items-center p-3.5 rounded-lg' style={{ background: "rgba(253, 253, 253, 0.4)" }}>
            <Image src={EmailImg} width={20} height={20} alt='email' />
            <span className='text-xl font-bold ml-4'>Email</span>
          </div>
          <h4 className='text-xl font-bold my-3'>Want to talk to us?</h4>
          <form>
            <div className='relative my-5 w-full border border-primary rounded-lg px-3 py-2.5 bg-[#ff7f7f05] z-0' >
              <label htmlFor="" className='absolute -top-2.5 left-2 px-1 text-primary z-10' style={{ backgroundColor: "#ff7f7f05" }}>Email</label>
              <div className='flex items-center w-full'>
                <Image src={EmailImg} width={20} height={20} alt='mail icons' />
                <input type="email" placeholder='example@gmail.com' className='w-full outline-none bg-[#ff7f7f05] ml-2 text-primary' />
              </div>
            </div>
            <textarea className="textarea textarea-bordered textarea-primary w-full" placeholder="Write your message here..." rows={4} style={{ background: "rgba(255, 127, 127, 0.02)" }}></textarea>
            <input className='btn btn-primary normal-case w-full mt-3 mb-5' type="submit" value="Send" />
          </form>
          <div className='flex items-center justify-between'>
            <h2 className='text-4xl font-bold'>Follow us</h2>
            <div className='flex items-center justify-center'>
              <Image src={LinkedInImg} width={50} height={50} alt='linkedin' />
              <Image className='mx-3' src={TwitterImg} width={50} height={50} alt='twitter' />
              <Image src={FacebookImg} width={50} height={50} alt='facebook' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Address;