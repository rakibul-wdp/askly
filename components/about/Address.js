import React from 'react';
import LocationImg from "../../public/assets/images/about/location.svg";
import PhoneNumberImg from "../../public/assets/images/about/phoneNumber.svg";
import EmailImg from "../../public/assets/images/about/email.svg";
import LinkedInImg from "../../public/assets/images/about/linkedin.svg";
import TwitterImg from "../../public/assets/images/about/twitter.svg";
import FacebookImg from "../../public/assets/images/about/facebook.svg";
import Image from 'next/image';

const Address = () => {
  return (
    <section className='px-24 py-14 flex items-center justify-between' style={{
      background: `linear-gradient(134.56deg, rgba(155, 126, 234, 0.2) 10.8%, rgba(255, 127, 127, 0.2) 88.78%)`,
    }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7252.222508415827!2d89.39886162704492!3d24.654298586606103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdb32dfd789943%3A0xe7f2b001cc8988c1!2sMamursahi!5e0!3m2!1sen!2sbd!4v1674903560564!5m2!1sen!2sbd"
        title="location"
        width="40%"
        height="600"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div>
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
          <input type="email" placeholder="Type here" className="input input-bordered input-primary w-full mb-5" style={{ background: "rgba(255, 127, 127, 0.02)" }} />
          <textarea className="textarea textarea-bordered textarea-primary w-full" placeholder="Bio" style={{ background: "rgba(255, 127, 127, 0.02)" }}></textarea>
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
    </section>
  )
}

export default Address;