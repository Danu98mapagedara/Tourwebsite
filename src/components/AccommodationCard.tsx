
import type  {Accommodation} from '../data/accommodation';
import { NavLink} from 'react-router-dom';

type  AccommodationProps = {
    hotel: Accommodation
}
const AccommodationCard: React.FC<AccommodationProps> = ({ hotel }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
      <img src={hotel.image[0]}  alt={hotel.name} className="w-full h-48 object-cover" />
   

      <div className="p-4 flex justify-between items-start">
        <div className="">
        <h3 className="text-xl font-semibold">{hotel.name}</h3>
        <p className="text-gray-500">{hotel.location}</p>
        <p className="text-yellow-500 mb-2">⭐ {hotel.stars} Stars</p>
        <p className="text-blue-600 font-semibold">
          LKR {hotel.price.toLocaleString()} / night
        </p>
         <ul className="mt-2 text-sm text-gray-600 list-disc pl-5">
          {hotel.facilities.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        </div>
        <div>
          <NavLink to={`/accommodation/${hotel.id}`}>
            <button className='p-2 bg-blue-500 cursor-pointer border-r-blue-500 hover:bg-blue-600'>See Availability</button>
          </NavLink>
      
        </div>
       
      
      </div>
      </div>
  )
}

export default AccommodationCard