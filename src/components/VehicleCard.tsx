
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import type { Vehicle } from "../data/vehicle";

const VehicleCard = () => {

const vehicles=useSelector((state:RootState)=>state.vehicles.filteredVehicles);
const navigate=useNavigate();
  return (
    <div className="grid grid-cols-3 gap-4">
    {vehicles.length > 0 ? (
      vehicles.map((vehicle: Vehicle) => (
        <div
          key={vehicle.id}
          className="border p-4 m-2 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h2 className="font-bold text-lg">{vehicle.name}</h2>
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-40 object-cover rounded-md"
          />
          <p className="mt-2">Type: {vehicle.name}</p>
          <p>Transmission: {vehicle.transmission}</p>
          <p>Seats: {vehicle.numberofSeats}</p>
          <p>Price per day: Rs. {vehicle.pricePerDay}</p>
            <button
            onClick={() => navigate(`/booking/${vehicle.id}`)}
            className="p-2 bg-blue-600 text-white mt-2"
          >Book</button>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500">No vehicles found.</p>
    )}
  </div>
  )
}

export default VehicleCard