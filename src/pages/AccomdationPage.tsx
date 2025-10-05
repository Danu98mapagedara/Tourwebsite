
import { useState } from "react"
import  {accommodations} from "../data/accommodation"
import type  { Accommodation} from "../data/accommodation";;

const AccomdationPage = () => {

  const [location, setLocation] = useState<string>("");
  const[star,setStar]=useState<number>();
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  

const handleSearch=(location:string,star:number|undefined,selectedPrice:string)=>{



}

  return (
    <div className="">
      <div className="bg-blue-950 p-15 text-white  align-items-center justify-content-center">
        <h1  className="text-4xl">Find your next stay</h1>
  <p  className="text-2xl">Search low prices on hotels, homes and much more...</p>
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 justify-content-center align-items-center p-10">
      
         <select className="p-4 border-3  border-yellow-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         onChange={(e) => {setLocation(e.target.value) }}
         value={location}
          title="Location"
         >
           <option value="">Where are you going?</option>
           <option value="kandy">Kandy</option>
           <option value="jaffna">Jaffna</option>
           <option value="anuradhapura">Anuradhapura</option>
         </select>


<select className="p-4 border-3  border-yellow-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         onChange={(e) => {setStar (Number (e.target.value)  )}}
         value={star}
         title="Star Rating"
         > 
           <option value="">Star Rating</option>
           <option value="5">5 Star</option>
           <option value="4">4 Star</option>
           <option value="3">3 Star</option>
</select>


      
        <select
       title="Price"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="p-4 border-3  border-yellow-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Prices</option>
          <option value="low">Below 15,000</option>
          <option value="mid">15,000 - 25,000</option>
          <option value="high">Above 25,000</option>
        </select> 

        <button  className="p-4 bg-blue-950 text-white rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={()=>{handleSearch(location,star,selectedPrice)
        }}
        
        >Search</button>  
       </div>
    </div>


    
  )
}

export default AccomdationPage