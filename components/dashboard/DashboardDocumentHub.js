import React from 'react'

const DashboardDocumentHub = () => {
  return (
    <section>
      <div className='text-end my-14 mr-10'>
        <button className='btn btn-outline border-dashed'>Drag your files here</button>
        <button className='btn btn-primary normal-case mx-3'>Upload</button>
        <button className='btn bg-base-100'>Delete</button>
      </div>
      <h4 className='text-xl text-primary font-medium'>My Documents</h4>
    </section>
  )
}

export default DashboardDocumentHub;