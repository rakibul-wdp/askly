import React from 'react'

const DashboardAsk = () => {
  return (
    <section>
      <div className='text-end my-14 mr-10'>
        <button className='btn btn-primary btn-outline'>Saved Session</button>
        <button className='btn btn-primary normal-case ml-5'>Select Files</button>
      </div>
      <h3 className='text-3xl font-medium text-center mb-5'>Select Files to Start a Session</h3>
      <input type="text" placeholder="Full Name" className="input input-bordered input-primary w-[80%] mx-32" style={{ background: "rgba(255, 127, 127, 0.02)" }} />
    </section>
  )
}

export default DashboardAsk;