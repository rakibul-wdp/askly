import { dashboardLinkedAccounts } from '@/mockData/dashboardLinedAccounts';
import Image from 'next/image';
import React from 'react'

const DashboardLinkedAccounts = () => {
  return (
    <section>
      <h1 className='text-5xl font-bold text-center py-14' style={{ color: "rgba(0, 0, 0, 0.6)" }}>Coming Soon</h1>
      <h5 className='text-xl font-medium mb-4'>My Accounts</h5>
      <div className='grid grid-cols-5'>
        {
          dashboardLinkedAccounts.map((account) => (
            <div className='w-full' key={account.id}>
              <Image className='rounded-2xl' src={account.img} width={250} height={250} alt='linked accounts' />
              {account.id === 5 ? <button className='btn btn-neutral normal-case w-[80%] my-3'>Sign out</button> : <button className='btn btn-neutral normal-case w-[80%] mt-3'>Sign in</button>}
              {account.id === 5 && <button className='btn btn-neutral btn-outline normal-case w-[80%]'>Remove</button>}
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default DashboardLinkedAccounts;