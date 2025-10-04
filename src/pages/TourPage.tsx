
import  { useParams } from 'react-router-dom'
import {  tours } from '@/data/tours'
import type {Tour} from '@/data/tours'

const TourPage = () => {
    const {id}=useParams<{id:string}>()
    const tour:Tour|undefined=tours.find((t)=>t.id===id);
  return (
    <div className='container mx-auto p-5 mt-3 flex-column align-items-center justify-content-center bg-pink-100' >
        {
            tour?(
               
                <div>
                    <img src={tour.image} alt={tour.name} className='w-full h-96 object-cover mt-3'/>
                      <h1 className='text-3xl font-bold mt-3'>{tour.name}</h1>
                        <p className='text-gray-600 mt-2'>{tour.overview}</p>
                        <h2 className='text-2xl font-bold mt-5'>Places to Visit</h2>
                        <ul className='list-disc list-inside mt-2 text-gray-600'>
                            {tour.places.map((place, index) => (
                                <li key={index}>{place}</li>
                            ))}
                        </ul>

                        <h2 className='text-2xl font-bold mt-5'>Facilities</h2>
                        <ul className='list-disc list-inside mt-2 text-gray-600'>
                            {Object.entries(tour.facilities).map(([key, value]) => (
                                <li key={key}>
                                    <span className='font-bold'>{key}:</span> {value}
                                </li>
                            ))}
                        </ul>
                </div>
              
            ):
        (<div className='text-red-500 text-2xl'>Tour Not Found</div>)
        }
    </div>

  


    
  )
}

export default TourPage