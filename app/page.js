import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import HomeHero from '@/components/home/HomeHero';
import HomeMain from '@/components/home/HomeMain';

export default function Home() {
  return (
    <main>
      <div className='relative'>
        <Navbar />
        <HomeHero />
      </div>
      <HomeMain />
      <Footer />
    </main>
  )
}
