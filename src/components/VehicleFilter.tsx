import type {AppDispatch } from '../app/store'  ;
import  { useDispatch } from 'react-redux'  ;
import { setFilter,clearFilters} from '@/features/vehicles/vehicleSlice';


const VehicleFilter = () => {
    const dispatch=useDispatch<AppDispatch>();

const handleClearFilters = () => {
    dispatch(clearFilters());       
}

 const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: any,
    value: string | number
  ) => {
    if (e.target.checked) {
      dispatch(setFilter({ key, value }));
    } else {
      const resetValue = typeof value === "number" ? 0 : "";
      dispatch(setFilter({ key, value: resetValue }));
    }
    
  };


  
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Filter Vehicles</h2>

         {/* Transmission Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Transmission Type</label>
        <label><input type="checkbox"  onChange={(e) => handleCheckboxChange(e, "transmission", "automatic")}/> Automatic </label>
        <br />
        <label>  <input  type="checkbox"  onChange={(e) => handleCheckboxChange(e, "transmission", "manual")}/> Manual</label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Number of Seats</label>
        <label><input type="checkbox" onChange={(e) => handleCheckboxChange(e,"numberofSeats", 6)} /> 6</label><br />
        <label><input type="checkbox" onChange={(e) => handleCheckboxChange(e,"numberofSeats", 4)} /> 4</label>
      </div>

 <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Vehicle  Type</label>
        <label><input type="checkbox" onChange={(e) => handleCheckboxChange(e,"cartype", "small")} /> Small</label><br />
        <label><input type="checkbox" onChange={(e) => handleCheckboxChange(e,"cartype", "large")} /> Large</label>
      </div>

      <button onClick={handleClearFilters} className="bg-red-500 text-white px-3 py-1 rounded-md">Clear Filters</button>
    </div>



  )
}

export default VehicleFilter