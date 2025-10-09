import type  {Accommodation } from '../data/accommodation'
import  {accommodations} from '../data/accommodation'
import  {useParams} from 'react-router-dom'
import { FaMapMarkerAlt, FaHeart, FaShareAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const AvailabilityPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
 const availabletour:Accommodation|undefined=accommodations.find((a)=>a.id===id)

 if (!availabletour) {
    return <div className='text-red-500 text-2xl'>Accommodation Not Found</div>;
  }
  return (
    <div className='container mx-auto p-5 mt-5 flex-column align-items-center justify-content-center bg-pink-100'>  
      
      <div className="flex-1">
        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 mb-1">
          {Array.from({ length: availabletour.rating }).map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>

        {/* Hotel Name */}
        <h2 className="text-2xl font-bold text-gray-900">{availabletour.name}</h2>

        {/* Address */}
        <div className="flex items-center text-gray-700 mt-1">
          <FaMapMarkerAlt className="text-blue-600 mr-2" />
          <span className="text-sm">
            {availabletour.address} –{" "}
            <span className="text-blue-700 font-semibold cursor-pointer hover:underline">
              {availabletour.locationText}
            </span>{" "}
            – Railway access
          </span>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-4">
          <FaHeart className="text-blue-500 cursor-pointer" title="Add to favorites" />
          <FaShareAlt className="text-blue-500 cursor-pointer" title="Share" />

          <button onClick={() => navigate(`/reserve/${availabletour.id}`)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Reserve
          </button>
        </div>

        {availabletour.priceMatch && (
          <div className="text-blue-600 text-sm mt-1 cursor-pointer hover:underline">
            💰 We Price Match
          </div>
        )}
      </div>
  
      <div className="grid gap-3 justify-content-center align-items-center m-auto mt-5 bg-pink-200 p-3 rounded-lg">
        <div>
          <img className="h-50%  justify-content-center align-items-center m-auto rounded-lg" src={availabletour.image[0]} alt="" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={availabletour.image[1]} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={availabletour.image[2]} alt="" />
          </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={availabletour.image[3]} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={availabletour.image[4]} alt="" />
        </div>
       
    </div>
</div>

   <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 text-gray-700">
  {/* Left side - About Section */}
  <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md">
    <h2 className="text-2xl font-bold mb-4 text-gray-900">About this property</h2>

    <ul className="space-y-4 leading-relaxed">
      {availabletour.about?.map((point, index) => (
        <li key={index}>
          <span className="font-semibold text-gray-900">
            {point.split(":")[0]}:
          </span>{" "}
          {point.split(":")[1]}
        </li>
      ))}
    </ul>

    {/* Most Popular Facilities */}
    <h3 className="text-xl font-semibold mt-10 mb-4 text-gray-900">
      Most popular facilities
    </h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {[
        { icon: "🏊‍♂️", name: "Indoor swimming pool" },
        { icon: "🚌", name: "Airport shuttle" },
        { icon: "🚭", name: "Non-smoking rooms" },
        { icon: "🛎️", name: "Room service" },
        { icon: "🅿️", name: "Free parking" },
        { icon: "📶", name: "Free WiFi" },
        { icon: "👨‍👩‍👧‍👦", name: "Family rooms" },
        { icon: "❄️", name: "Air conditioning" },
        { icon: "☕", name: "Tea/coffee maker in all rooms" },
        { icon: "🍳", name: "Fabulous breakfast" },
      ].map((facility, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition"
        >
          <span className="text-2xl">{facility.icon}</span>
          <span>{facility.name}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Right side - Property Highlights */}
  <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 shadow-sm">
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      Property highlights
    </h3>
    <p className="font-semibold text-blue-800 mb-2">Perfect for a 1-night stay!</p>
    <p className="text-gray-600 mb-4 text-sm">
      Situated in the heart of {availabletour.location}, this property has an
      excellent location score.
    </p>

    <h4 className="font-semibold text-gray-800 mb-2">Breakfast info</h4>
    <p className="text-sm text-gray-600 mb-4">
      Continental, Full English/Irish, Vegetarian, Vegan, Halal, Asian
    </p>

    <h4 className="font-semibold text-gray-800 mb-2">Rooms with:</h4>
    <ul className="list-disc list-inside text-sm text-gray-600 mb-6 space-y-1">
      <li>City view</li>
      <li>Lake view</li>
      <li>Landmark view</li>
      <li>Mountain view</li>
      <li>Free private parking</li>
    </ul>

    <button onClick={() => navigate(`/reserve/${availabletour.id}`)} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
      Reserve
    </button>
  </div>
</div>




  </div>
)
}
export default AvailabilityPage