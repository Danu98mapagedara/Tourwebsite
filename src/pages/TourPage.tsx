
import  { NavLink, useParams } from 'react-router-dom'
import {  tours } from '@/data/tours'
import type {Tour} from '@/data/tours'

const TourPage = () => {
    const {id}=useParams<{id:string}>()
    const tour:Tour|undefined=tours.find((t)=>t.id===id);


  return (
    <div className='container mx-auto p-5 mt-3 flex-column align-items-center justify-content-center bg-pink-100' >
        { tour?(
                 <div className=''>
<img src={tour.image} alt={tour.name} className='w-full h-96 object-contain mt-3'/>
                    <div className='flex align-items-center justify-content-between mt-1 gap-5'>
                      <div><h1 className='text-3xl font-bold mt-3'>{tour.name}</h1>
   <p className='text-gray-600 mt-2'>{tour.overview}</p></div>
          <div className='mt-3 p-5 border-2 border-purple-500 rounded-lg h-1/2 bg-purple-600'>
                      <h3>{tour.days} Days</h3>
                    </div>
                      </div>  

<div className='flex align-items-center justify-content-between gap-8 mt-5'>
  <div>
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
  <div>
    <NavLink to={`/accommodation`}>
    <button className="p-2 bg-purple-600 text-white rounded-lg position-absolute mt-15 w-1/2 cursor-pointer ">Get your Vehicle & Accommodation Reservation</button>
           </NavLink >                 
    
  </div>
 <div>
  
 </div>
</div>            
                  </div>        
            ):
        (<div className='text-red-500 text-2xl'>Tour Not Found</div>)
        }
    </div>
  )
}

export default TourPage