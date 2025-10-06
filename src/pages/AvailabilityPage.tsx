import type  {Accommodation } from '../data/accommodation'
import  {accommodations} from '../data/accommodation'
import  {useParams} from 'react-router-dom'
const AvailabilityPage = () => {
  const { id } = useParams<{ id: string }>();
 const availabletour:Accommodation|undefined=accommodations.find((a)=>a.id===id)

 if (!availabletour) {
    return <div className='text-red-500 text-2xl'>Accommodation Not Found</div>;
  }
  return (
    <div className='container mx-auto p-5 mt-3 flex-column align-items-center justify-content-center bg-pink-100'>  
      <h1 className='text-3xl font-bold mt-3'>{availabletour.name}</h1>
         <div>
<img src={availabletour.image} alt={availabletour.name} className='w-full h-96 object-contain mt-3'/>
         </div>

         <div className='mt-5 flex align-items-center justify-content-between gap-4'>
          <div>
      <ul className='list-disc list-inside mt-2 text-gray-600'>
        {availabletour.about?.map((point, index) => (
            <li key={index}>{point}</li>
        ))}
    </ul>
          </div>
     <div className='p-5 border-2 bg-gray-400 border-gray-500 rounded-lg h-1/2  text-white'>
        <h3>Property Highlights</h3>
<ul>
    {availabletour.facilities.map((f,i)=>(
        <li key={i}>{f}</li>
    ))}
</ul>
     </div>
     </div>



  </div>
)
}
export default AvailabilityPage