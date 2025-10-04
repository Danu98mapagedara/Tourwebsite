
import traveler from '../assets/traveler.jpg'
const About = () => {
  return (
    <div className='flex align-items-center justify-content-center h-screen gap-5 mt-5 p-5 '>
        <div>
         <h5 className='text-2xl font-bold text-purple-500 italic '>ABOUT  THE  COMPANY</h5>
        <h2 className='text-4xl font-bold'>Experience  the  Sri Lanka  with <br /> Our  Company</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis obcaecati  <br />
            cumque laboriosam quisquam quae reiciendis aliquid. Ut itaque doloribus amet!</p>
   <h3 className='text-3xl font-bold mt-5'>Our  Services</h3>
            <ul className='list-disc list-inside mt-3 text-gray-600'>
                <li>Customized Travel Packages</li>
                <li>24/7 Customer Support</li>
                <li>Best Price Guarantee</li>
                <li>Expert Travel Guides</li>
                <li></li>
            </ul>
        </div>

        <div className=''>
<img src={traveler} alt="Traveler" className='w-full h-1/2 border-blue-500 border-2 hover:scale-105 transition-transform duration-300' />
        </div>
    </div>
  )
}

export default About