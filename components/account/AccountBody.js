import React from 'react'

const AccountBody = () => {
  return (
    <section className='flex flex-col md:flex-row justify-around py-5'>
      <div className='w-[80%] sm:w-[60%] md:w-[35%] mx-auto md:mx-0'>
        <h4 className='mb-3 font-medium'>Account Details</h4>
        <input type="text" placeholder="User Name" className="input input-bordered input-primary w-full mb-5" style={{ background: "rgba(255, 127, 127, 0.02)" }} />
        <input type="email" placeholder="Email" className="input input-bordered input-primary w-full mb-5" style={{ background: "rgba(255, 127, 127, 0.02)" }} />
        <h4 className='mb-3 font-medium'>Referral credit</h4>
        <h3 className='w-full p-4 rounded-lg font-bold' style={{ background: "rgba(255, 127, 127, 0.05)" }}>5$</h3>
      </div>
      <div className="divider md:divider-horizontal"></div>
      <div className='border border-white p-5 rounded-lg w-[80%] sm:w-[60%] md:w-[35%] mx-auto md:mx-0'>
        <p className='text-end bg-primary text-white ml-[60%] px-5 py-2 rounded-2xl -mt-5 -mr-5'>Current plan</p>
        <h2 className='text-3xl font-bold'>Starter</h2>
        <div className="divider"></div>
        <ul className="list-disc list-outside ml-8 font-medium">
          <li>1 Team</li>
          <li>1 Installed Agent</li>
          <li>Real-Time Feedback</li>
          <li>Video Dedicated Support</li>
          <li>Attacked Targets Per Month</li>
          <li>Team Collaboration Tools</li>
          <li>Automated Updated Features</li>
          <li>24/7 Life time Support</li>
        </ul>
        <button className='mt-32 btn mx-auto flex items-center'>Cancel</button>
      </div>
    </section>
  )
}

export default AccountBody;