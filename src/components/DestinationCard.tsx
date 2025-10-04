
import type { destination } from '../types/destination';

const DestinationCard = (destination: destination) => {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
      <img src={destination.image} alt={destination.name} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h2 className='text-xl font-bold'>{destination.name}</h2>
        <p className='text-gray-600'>{destination.location}</p>
        <p className='text-gray-500'>{destination.description}</p>
      </div>
    </div>
  )
}

export default DestinationCard