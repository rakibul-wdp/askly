import React, { useState } from 'react'
import FileSelectModal from './FileSelectModal'
import DashboardSession from './DashboardSession';

const DashboardAsk = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState(false);

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      {!session ? <section>
        <div className='flex flex-wrap justify-center md:justify-end gap-5 my-14 md:mr-10'>
          <button onClick={() => setSession(true)} className='btn btn-primary normal-case btn-outline btn-wide'>Saved Session</button>
          <button onClick={openModal} className='btn btn-primary normal-case btn-wide'>Select Files</button>
        </div>
        <h3 className='text-3xl font-medium text-center mb-5 px-3 sm:px-5 md:px-8'>Select Files to Start a Session</h3>
        <div className='text-center'>
          <input type="text" placeholder="Full Name" className="input input-bordered input-primary w-[80%] px-3 sm:px-5 md:px-8" style={{ background: "rgba(255, 127, 127, 0.02)" }} />
        </div>

        <FileSelectModal isOpen={isOpen} closeModal={closeModal} />
      </section> : <DashboardSession />}
    </>
  )
}

export default DashboardAsk;