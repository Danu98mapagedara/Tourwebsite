import  { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import  type { Accommodation } from '@/data/accommodation';
import { accommodations } from '@/data/accommodation';
import DatePicker from 'react-datepicker';


  interface Reservation {
        Typerooom: string,
        Numberofguest: number,
        checkin: string,
        checkout: string,
        ChargeperAdult: number,
        ChargeperChild: number,
        TotalAmount: number,
        IsdinnerInclude: boolean,
    }


const ReservePage = ():Reservation => {
    const { id } = useParams<{ id: string }>();
    const availabletour:Accommodation|undefined=accommodations.find((a)=>a.id===id)

    const [checkinDate, setCheckinDate] = useState<Date | null>(null);
    const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [roomType, setRoomType] = useState<string>('');
    const [numberOfGuests, setNumberOfGuests] = useState<number>(1);
    const [breakfastOption, setBreakfastOption] = useState<string>('yes');

const AllPrices ={
    roomPrice: {
        single: 10000,
        double: 18000,
        suite: 25000
    },
    guestperprice: 5000,
    breakfast: 1500
};
useEffect(() => {
    setTotalAmount(calTotalAmount());
}, [checkinDate, checkoutDate, roomType, numberOfGuests, breakfastOption]);

const calTotalAmount=():number=>{
    if(!checkinDate || !checkoutDate || !roomType) return 0;
    const total= AllPrices.guestperprice * numberOfGuests + AllPrices.roomPrice[roomType] + (breakfastOption === 'yes' ? AllPrices.breakfast : 0);
    return total;
};



  return (
    <div className='container mx-auto p-5 mt-5 flex-column align-items-center justify-content-center bg-pink-100'>
      {availabletour ? (
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{availabletour.name}</h2>
        
          <p className="text-gray-700">Price: ${availabletour.price}</p>
        </div>
      ) : (
        <div className='text-red-500 text-2xl'>Accommodation Not Found</div>
      )}
      <div>
        <h2 className="text-2xl font-bold mb-4">Reservation Form</h2>
        <form className="space-y-4">
          <div className="mb-4">
            <div>
   <label className="block text-gray-700">Type of Room</label>
            <select title='Type of Room' value={roomType} onChange={(e) => setRoomType(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200">
              <option value="">Select Room Type</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
            </div>
         
         <div>
    <label className="block text-gray-700">Number of Guests</label>
    <input title='Number of Guests' value={numberOfGuests} onChange={(e) => setNumberOfGuests(Number(e.target.value))} 
    type="number" min="1" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200" />
         </div>

         <div>
    <label className="block text-gray-700">Check-in Date</label>
    <DatePicker

      selected={checkinDate}
      onChange={(date) => setCheckinDate(date)}
      minDate={new Date()}
      maxDate={checkoutDate ? new Date(checkoutDate.getTime() - 24 * 60 * 60 * 1000) : undefined}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200"
    />
         </div>
            <div>
    <label className="block text-gray-700">Check-out Date</label>
    <DatePicker
        selected={checkoutDate} 
        onChange={(date) => setCheckoutDate(date)}
        minDate={checkinDate ? new Date(checkinDate.getTime() + 24 * 60 * 60 * 1000) : undefined}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200"
    />
         </div>

         <div>
    <label className="block text-gray-700">Do you  want  Breakfast</label>
<select title='Breakfast Option' name="breakfast" value={breakfastOption} onChange={(e) => setBreakfastOption(e.target.value)}  
className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200">
  <option value="yes">Yes</option>
  <option value="no">No</option>
</select>

         </div>
          </div>
          <div>
    <label className="block text-gray-700">Total Amount</label>
   <h3>${totalAmount}</h3>
          </div>
          <div>
    <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">
      Confirm Reservation
    </button>

         </div>
</form>
    </div>
    </div>
  )
}


export default ReservePage
