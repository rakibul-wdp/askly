import React from 'react';
import { dashboardDocuments } from '@/mockData/dashboardDocuments';
import FileImg from "../../public/assets/images/dashboard/file.svg";
import Image from 'next/image';

const DashboardDocumentHub = () => {
  return (
    <section>
      <div className='text-end my-14 mr-10'>
        <button className='btn btn-outline border-dashed'>Drag your files here</button>
        <button className='btn btn-primary normal-case mx-3'>Upload</button>
        <button className='btn bg-base-100'>Delete</button>
      </div>
      <h4 className='text-xl text-primary font-medium mb-14'>My Documents</h4>
      <div className='grid grid-cols-6 w-[80%]'>
        {
          dashboardDocuments.map((document) => (
            <div className='flex justify-center' key={document.id}>
              <input type="checkbox" checked={`${document.checked ? "checked" : ""}`} className="checkbox checkbox-primary -mt-6 mr-5" />
              <div>
                <Image src={FileImg} width={100} height={100} alt='file' />
                <h5>{document.filetTitle}</h5>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default DashboardDocumentHub;