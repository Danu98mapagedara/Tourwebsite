
import Testinormal from '@/components/Testinormal'
import About from '../components/About'
import DestinationCard from '../components/DestinationCard'
import { tours } from '../data/tours'
import Homeswiper from '@/components/Homeswiper'
import HeroSection from '@/components/HeroSection'
import TravelEssentials from '@/components/TravelEssentials'
import WhyChooseUs from '@/components/WhyChooseUs'
const Home = () => {
  return (
    <div className='px-3  w-full position-relative h-auto  '>
    {/* homebanner */}
      <div className='home-banner'>
      <Homeswiper/>
      </div>
        <HeroSection />
      <TravelEssentials />
      <WhyChooseUs/>
    <div className='h-auto bg-linear-to-t from-sky-500 to-indigo-500  align-items-center justify-content-center py-5 px-5'>
        <div className='text-center  text-purple-500 text-3xl font-styleitalic'>Travel Destinations</div>
        <div className='text-center mt-3 text-4xl font-bold'>Top Destinations</div>  
        <div className='text-center mt-3 text-gray-600'>Discover amazing places at exclusive deals more than 100000 + around  the  world  </div>

       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5'>
         {tours.map(destination =>(
            <DestinationCard key={destination.id} {...destination} />
        )) }
        </div>   
    </div>
   <div>
             <About/>
            <Testinormal/>
   </div>
  <div>

  </div>
    </div>
  )
}

export default Home