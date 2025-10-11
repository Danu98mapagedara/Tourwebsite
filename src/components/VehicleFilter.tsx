import type {AppDispatch } from '../app/store'  ;
import  { useDispatch } from 'react-redux'  ;
import { setFilter,clearFilters } from '@/features/vehicles/vehicleSlice';


const VehicleFilter = () => {
    const dispatch=useDispatch<AppDispatch>();

const handleClearFilters = () => {
    dispatch(clearFilters());       
}


  return (
    <div className='bg-blue-100 p-4 rounded-lg shadow-md w-64'>
        <h2 className="text-2xl font-bold mb-4">Filter Vehicles</h2>

        {/* Filter by Transmission */}
        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Transmission type</label>
            <input type="checkbox"  onChange={dispatch(()=>{setFilter ({key:"transmission",value: "automatic"})})} /> Automatic
            <br />
            <input type="checkbox"  onChange={dispatch(()=>{setFilter ({key:"transmission",value: "manual"})})} /> Manual
        </div>

        {/* Filter by numberof seats  */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Number of Seats</label>
            <input type="checkbox"  onChange={dispatch(()=>{setFilter ({key:"numberofSeats",value: "2"})})} /> 2
            <br />
            <input type="checkbox"  onChange={dispatch(()=>{setFilter ({key:"numberofSeats",value: "4"})})} /> 4
        </div>

    </div>
  )
}

export default VehicleFilter