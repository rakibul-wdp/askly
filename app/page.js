import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="btn btn-bg-1">Button</button>
      <h1 className='text-3xl font-bold text-neutral'>Hello World</h1>
    </main>
  )
}
