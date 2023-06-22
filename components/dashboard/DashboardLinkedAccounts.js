import { dashboardLinkedAccounts } from '@/mockData/dashboardLinedAccounts';
import Image from 'next/image';
import React from 'react'

const DashboardLinkedAccounts = () => {
  return (
    <section>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center py-14' style={{ color: "rgba(0, 0, 0, 0.6)" }}>Coming Soon</h1>
      <h5 className='text-xl font-medium mb-4 px-3 sm:px-5 md:px-8'>My Accounts</h5>
      <div className='text-center grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-10 px-3 sm:px-5 md:px-8'>
        {
          dashboardLinkedAccounts.map((account) => (
            <div className='w-full' key={account.id}>
              <Image className='rounded-2xl' src={account.img} width={250} height={250} alt='linked accounts' />
              {account.id === 5 ? <button className='btn btn-neutral normal-case w-full my-3'>Sign out</button> : <button className='btn btn-neutral normal-case w-full mt-3'>Sign in</button>}
              {account.id === 5 && <button className='btn btn-neutral btn-outline normal-case w-full'>Remove</button>}
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default DashboardLinkedAccounts;