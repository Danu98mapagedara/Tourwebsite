import type {AppDispatch } from '../app/store'  ;
import  { useDispatch } from 'react-redux'  ;
import { setFilter,clearFilters } from '@/features/vehicles/vehicleSlice';


const VehicleFilter = () => {
    const dispatch=useDispatch<AppDispatch>();

const handleClearFilters = () => {
    dispatch(clearFilters());       
}

  const handleCheckboxChange = (key: any, value: any) => {
    dispatch(setFilter({ key, value }));
  };

  // for single-value filters (overwrite)
  const handleTransmissionCheckbox = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
    if (e.target.checked) {
      dispatch(setFilter({ key: 'transmission', value }));
    } else {
      dispatch(setFilter({ key: 'transmission', value: "" })); // clear on uncheck
    }
    // if your slice does not auto-apply, uncomment:
    // dispatch(applyfilters());
  };

  const handleSeatsCheckbox = (e: React.ChangeEvent<HTMLInputElement>, value: number) => {
    if (e.target.checked) {
      dispatch(setFilter({ key: 'numberofSeats', value })); // number, not string
    } else {
      dispatch(setFilter({ key: 'numberofSeats', value: 0 }));
    }
    // dispatch(applyfilters());
  };
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Filter Vehicles</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Transmission type</label>
        <label><input type="checkbox" onChange={(e) => handleTransmissionCheckbox(e, "automatic")} /> Automatic</label><br />
        <label><input type="checkbox" onChange={(e) => handleTransmissionCheckbox(e, "manual")} /> Manual</label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Number of Seats</label>
        <label><input type="checkbox" onChange={(e) => handleSeatsCheckbox(e, 6)} /> 6</label><br />
        <label><input type="checkbox" onChange={(e) => handleSeatsCheckbox(e, 4)} /> 4</label>
      </div>

      <button onClick={handleClearFilters} className="bg-red-500 text-white px-3 py-1 rounded-md">Clear Filters</button>
    </div>


  )
}

export default VehicleFilter