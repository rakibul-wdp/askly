import Navbar from '@/components/common/Navbar';
import HomeHero from '@/components/home/HomeHero';
import HomeMain from '@/components/home/HomeMain';

export default function Home() {
  return (
    <main className='relative'>
      <Navbar />
      <HomeHero />
      <HomeMain />
    </main>
  )
}
