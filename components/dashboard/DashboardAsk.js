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
        <div className='text-end my-14 mr-10'>
          <button onClick={() => setSession(true)} className='btn btn-primary btn-outline'>Saved Session</button>
          <button onClick={openModal} className='btn btn-primary normal-case ml-5'>Select Files</button>
        </div>
        <h3 className='text-3xl font-medium text-center mb-5'>Select Files to Start a Session</h3>
        <input type="text" placeholder="Full Name" className="input input-bordered input-primary w-[80%] mx-32" style={{ background: "rgba(255, 127, 127, 0.02)" }} />

        <FileSelectModal isOpen={isOpen} closeModal={closeModal} />
      </section> : <DashboardSession />}
    </>
  )
}

export default DashboardAsk;