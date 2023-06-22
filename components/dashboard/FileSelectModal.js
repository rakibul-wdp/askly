import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CrossImg from "../../public/assets/images/common/cross.svg";
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
                  as="h4"
                  className="text-lg font-medium leading-6 text-gray-900 flex items-center justify-between mb-14"
                >
                  <h3>My Documents</h3>
                  <div className='flex items-center'>
                    <button className='btn btn-primary normal-case w-[7rem] mr-5 hidden sm:block'>Done</button>
                    <Image onClick={closeModal} className='cursor-pointer' src={CrossImg} width={30} height={30} alt='cross icon' />
                  </div>
                </Dialog.Title>
                <div className='text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 md:gap-10 mt-2'>
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
                <button className='btn btn-primary normal-case btn-wide mt-10 sm:hidden mx-[20%]'>Done</button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default FileSelectModal;