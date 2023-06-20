import React from 'react';
import ContactImg from "../../public/assets/images/help/contact.svg";
import Image from 'next/image';

const Contact = () => {
  return (
    <section className='flex items-center justify-between px-24 pb-14 pt-5'>
      <div className='w-[48%]'>
        <form>
          <input type="text" placeholder="Full Name" className="input input-bordered input-primary w-full mb-5" style={{ background: "rgba(255, 127, 127, 0.02)" }} />
          <input type="email" placeholder="Email" className="input input-bordered input-primary w-full mb-5" style={{ background: "rgba(255, 127, 127, 0.02)" }} />
          <input type="number" placeholder="Phone Number" className="input input-bordered input-primary w-full mb-5" style={{ background: "rgba(255, 127, 127, 0.02)" }} />
          <textarea className="textarea textarea-bordered textarea-primary w-full" placeholder="Write your message here" style={{ background: "rgba(255, 127, 127, 0.02)" }}></textarea>
          <input className='btn btn-primary normal-case w-full mt-3 mb-5' type="submit" value="Send" />
        </form>
      </div>
      <div className='w-[42%]'>
        <p>At Askly, we're committed to providing you with an exceptional experience using our platform. If you have any questions, feedback, or need assistance with our product, our friendly and knowledgeable support team is available 24/7 to assist you. Please don't hesitate to contact us with any inquiries. We appreciate your input and look forward to helping you get the most out of Askly</p>
        <Image src={ContactImg} width={700} height={200} alt='contact with us' />
      </div>
    </section>
  )
}

export default Contact;