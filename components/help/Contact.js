import React from 'react';
import ContactImg from "../../public/assets/images/help/contact.svg";
import UserIcon from "../../public/assets/icons/User.svg";
import MailIcon from "../../public/assets/icons/email.svg";
import PhoneIcon from "../../public/assets/icons/phoneNumber.svg";
import Image from 'next/image';

const Contact = () => {
  return (
    <section className='flex flex-col-reverse md:flex-row items-center justify-between md:gap-10 lg:gap-24 pb-14 pt-10'>
      <div className='md:w-[50%] lg:w-[75%] xl:w-[50%]'>
        <form>
          <div className='relative w-full border border-primary rounded-lg px-3 py-2.5 bg-[#ff7f7f05] z-0' >
            <label htmlFor="" className='absolute -top-2.5 left-2 px-1 text-primary z-10 bg-[#e9def3f0]'>Full Name</label>
            <div className='flex items-center w-full'>
              <Image src={UserIcon} width={20} height={20} alt='mail icons' />
              <input type="text" placeholder='Rakibul Islam' className='w-full outline-none bg-[#ff7f7f05] ml-2 text-primary' />
            </div>
          </div>

          <div className='relative my-7 w-full border border-primary rounded-lg px-3 py-2.5 bg-[#ff7f7f05] z-0' >
            <label htmlFor="" className='absolute -top-2.5 left-2 px-1 text-primary z-10 bg-[#e9def3f0]'>Email</label>
            <div className='flex items-center w-full'>
              <Image src={MailIcon} width={20} height={20} alt='mail icons' />
              <input type="email" placeholder='example@gmail.com' className='w-full outline-none bg-[#ff7f7f05] ml-2 text-primary' />
            </div>
          </div>

          <div className='relative mb-7 w-full border border-primary rounded-lg px-3 py-2.5 bg-[#ff7f7f05] z-0' >
            <label htmlFor="" className='absolute -top-2.5 left-2 px-1 text-primary z-10 bg-[#e9def3f0]'>Phone Number</label>
            <div className='flex items-center w-full'>
              <Image src={PhoneIcon} width={20} height={20} alt='mail icons' />
              <input type="text" placeholder='+1 568 123-4567' className='w-full outline-none bg-[#ff7f7f05] ml-2 text-primary' />
            </div>
          </div>

          <textarea className="textarea textarea-bordered textarea-primary w-full" placeholder="Write your message here" rows={3} style={{ background: "rgba(255, 127, 127, 0.02)" }}></textarea>
          <input className='btn btn-primary normal-case w-full mt-3' type="submit" value="Send" />
        </form>
      </div>
      <div className='md:w-[50%] lg:w-[75%] xl:w-[50%] mb-10 md:mb-0'>
        <p className='mb-5'>At Askly, we're committed to providing you with an exceptional experience using our platform. If you have any questions, feedback, or need assistance with our product, our friendly and knowledgeable support team is available 24/7 to assist you. Please don't hesitate to contact us with any inquiries. We appreciate your input and look forward to helping you get the most out of Askly</p>
        <Image src={ContactImg} width={700} height={450} alt='contact with us' />
      </div>
    </section>
  )
}

export default Contact;