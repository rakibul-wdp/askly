import React from 'react'

const DashboardSession = () => {
  return (
    <section>
      <div className='text-end my-14 mr-10'>
        <button className='btn btn-primary btn-outline normal-case'>Record Session</button>
        <button className='btn btn-primary btn-outline normal-case mx-5'>Share Session</button>
        <button className='btn btn-primary btn-outline normal-case'>End Session</button>
      </div>
      <div className='w-[98%] mx-auto h-36 rounded-lg' style={{ background: "rgba(132, 33, 192, 0.1)" }}></div>
      <div className='flex items-center justify-between mx-3 mt-5'>
        <div className='flex items-center'>
          <button className='btn btn-primary btn-outline normal-case'>Save</button>
          <button className='btn btn-primary btn-outline normal-case ml-3'>Export</button>
        </div>
        <button className='btn btn-primary btn-outline normal-case'>Share</button>
      </div>
      <input type="text" placeholder="Full Name" className="input input-bordered input-primary w-full mt-[30%]" style={{ background: "rgba(255, 127, 127, 0.02)" }} />
    </section>
  )
}

export default DashboardSession;