import VehicleCard from '@/components/VehicleCard'
import VehicleFilter from '@/components/VehicleFilter'

const RentalPage = () => {
  return (
    <div className='flex mt-15 p-5 gap-5 align-items-center justify-content-center container mx-auto' >
        <div className='flex-1 '>
         <VehicleFilter />
        </div>
        <div className='flex-3'>
          <VehicleCard />
        </div>

    </div>
  )
}

export default RentalPage