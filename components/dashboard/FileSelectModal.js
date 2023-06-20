import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CrossImg from "../../public/assets/images/dashboard/cross.svg";
import Image from 'next/image';
import { dashboardDocuments } from '@/mockData/dashboardDocuments';
import FileImg from "../../public/assets/images/dashboard/file.svg";

const FileSelectModal = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-5xl h-[70vh] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex items-center justify-between mb-14"
                >
                  <h4>My Documents</h4>
                  <div className='flex items-center'>
                    <button className='btn btn-primary'>Done</button>
                    <Image onClick={closeModal} className='cursor-pointer' src={CrossImg} width={30} height={30} alt='cross icon' />
                  </div>
                </Dialog.Title>
                <div className='grid grid-cols-6 gap-5 w-full mt-2'>
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default FileSelectModal;