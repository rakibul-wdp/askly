import React from 'react'

const DashboardSession = () => {
  return (
    <section>
      <div className='flex flex-col items-center md:items-end justify-center md:justify-end sm:flex-row my-14 md:mr-10'>
        <button className='btn btn-primary btn-outline btn-wide sm:w-[10rem] xl:w-[16rem] normal-case'>Record Session</button>
        <button className='btn btn-primary btn-outline btn-wide sm:w-[10rem] xl:w-[16rem] my-5 sm:my-0 normal-case mx-5'>Share Session</button>
        <button className='btn btn-primary btn-outline btn-wide sm:w-[10rem] xl:w-[16rem] normal-case'>End Session</button>
      </div>
      <div className='w-[98%] mx-auto h-36 rounded-lg' style={{ background: "rgba(132, 33, 192, 0.1)" }}></div>
      <div className='flex items-center justify-between mx-3 mt-5'>
        <div className='flex items-center'>
          <button className='btn btn-primary btn-outline w-[7rem] normal-case'>Save</button>
          <button className='btn btn-primary btn-outline w-[7rem] normal-case ml-3'>Export</button>
        </div>
        <button className='btn btn-primary btn-outline w-[7rem] normal-case'>Share</button>
      </div>
      <div className='text-center'>
        <input type="text" placeholder="Full Name" className="input input-bordered input-primary w-[98%] mt-[29%]" style={{ background: "rgba(255, 127, 127, 0.02)" }} />
      </div>
    </section>
  )
}

export default DashboardSession;