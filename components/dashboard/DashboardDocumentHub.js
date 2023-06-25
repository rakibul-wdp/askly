import React from 'react';
import { dashboardDocuments } from '@/mockData/dashboardDocuments';
import FileImg from "../../public/assets/images/dashboard/file.svg";
import Image from 'next/image';

const DashboardDocumentHub = () => {
  return (
    <section>
      <div className='flex flex-wrap justify-center md:justify-end gap-3 my-14 md:mr-10'>
        <button className='btn btn-outline normal-case btn-wide border-dashed'>Drag your files here</button>
        <button className='btn btn-primary normal-case btn-wide'>Upload</button>
        <button className='btn normal-case bg-base-100 w-full md:w-auto max-w-[16rem] px-10'>Delete</button>
      </div>
      <h4 className='text-xl text-primary font-medium mb-14 px-3 sm:px-5 md:px-8'>My Documents</h4>
      <div className='text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 md:gap-10 px-3 sm:px-5 md:px-8'>
        {
          dashboardDocuments.map((document) => (
            <div className='flex justify-center' key={document.id}>
              <input type="checkbox" defaultChecked={`${document.checked ? "checked" : ""}`} className="checkbox checkbox-primary -mt-6 mr-5" />
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