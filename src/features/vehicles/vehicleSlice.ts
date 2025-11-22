
import  type {Vehicle} from '../../data/vehicle'
import  vehicleData from '../../data/vehicle'
import { createSlice} from '@reduxjs/toolkit';
import  type{ PayloadAction } from '@reduxjs/toolkit';

interface FilterState{
    numberofSeats: number
    transmission: string
    mileage: string
    cartype: string 
}

interface VehicleState{
    vehicle: Vehicle[]
    filters: FilterState
    filteredVehicles: Vehicle[]
}

const initialState:VehicleState = {
    vehicle: vehicleData,
    filteredVehicles: vehicleData,
    filters:{
    cartype: "",
    numberofSeats: 0,
    transmission: "",
    mileage: "",
    }
}
const vehicleSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
       setFilter: (
      state,
      action: PayloadAction<{  key: keyof FilterState; value: FilterState[keyof FilterState] }>
    ) => {
     state.filters[action.payload.key] = action.payload.value;
     const{numberofSeats,transmission,mileage,cartype} =state.filters
       state.filteredVehicles=state.vehicle.filter((vehicledetails)=>{
        const matchesSeats=numberofSeats ? vehicledetails.numberofSeats ===numberofSeats:true;
        const matchesTransmission=transmission? vehicledetails.transmission===transmission:true;
        const matchesMileage=mileage? vehicledetails.mileage===mileage:true;
        const matchesCarType=cartype? vehicledetails.cartype===cartype:true;

        return matchesSeats && matchesTransmission  && matchesMileage && matchesCarType;
       });
    },
  clearFilters(state) {
      state.filters = {
        numberofSeats: 0,
        transmission: "",
        mileage: "",
        cartype: "",
      };
      state.filteredVehicles = state.vehicle;
    },
    }
})

export const {setFilter,clearFilters}= vehicleSlice.actions
export default vehicleSlice.reducer