
import { Link } from 'react-router-dom';
import type { Tour } from '../data/tours';

const DestinationCard = (destination: Tour) => {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
      <img src={destination.image} alt={destination.name} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h2 className='text-xl font-bold'>{destination.name}</h2>

        <p className='text-gray-500'>{destination.overview}</p>

        <Link to={`/tour/${destination.id}`} className='text-blue-500 hover:underline'>
          View Details
        </Link>
      </div>
    </div>
  )
}

export default DestinationCard