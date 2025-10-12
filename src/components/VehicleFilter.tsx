import type {AppDispatch } from '../app/store'  ;
import  { useDispatch } from 'react-redux'  ;
import { setFilter,clearFilters } from '@/features/vehicles/vehicleSlice';


const VehicleFilter = () => {
    const dispatch=useDispatch<AppDispatch>();

const handleClearFilters = () => {
    dispatch(clearFilters());       
}

  const handleCheckboxChange = (key: string, value: any) => {
    dispatch(setFilter({ key, value }));
  };
  return (
    <div className='bg-blue-100 p-4 rounded-lg shadow-md w-64'>
        <h2 className="text-2xl font-bold mb-4">Filter Vehicles</h2>

        {/* Filter by Transmission */}
        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Transmission type</label>
            <input type="checkbox"  onChange={()=>handleCheckboxChange("transmission", "automatic")} /> Automatic
            <br />
            <input type="checkbox"  onChange={()=>handleCheckboxChange("transmission", "manual")} /> Manual
        </div>

        {/* Filter by numberof seats  */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Number of Seats</label>
            <input type="checkbox"  onChange={()=>handleCheckboxChange("numberofSeats", "2")} /> 2
            <br />
            <input type="checkbox"  onChange={()=>handleCheckboxChange("numberofSeats", "4")} /> 4
        </div>
        {/* Filter by car type  */}
         <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Car  Type</label>
            <input type="checkbox"  onChange={()=>handleCheckboxChange("cartype", "small")} /> Small
            <br />
            <input type="checkbox"  onChange={()=>handleCheckboxChange("cartype", "large")} /> Large
            <input type="checkbox"  onChange={()=>handleCheckboxChange("cartype", "suv")} /> SUV
        </div>
        
               {/* Filter by milege  */}
         <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Mileage</label>
            <input type="checkbox"  onChange={()=>handleCheckboxChange("mileage", "limited")} /> limited
            <br />
            <input type="checkbox"  onChange={()=>handleCheckboxChange("mileage", "unlimited")} /> unlimited

        </div>

<button onClick={handleClearFilters}>Clear Filters</button>
    </div>
  )
}

export default VehicleFilter