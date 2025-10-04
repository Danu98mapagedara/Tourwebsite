
interface Testinormal{
    id: number;
    name: string;
    role: string;
    photo: string;
    feedback: string;
}

const TestimonialCard = (testinormal: Testinormal) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center'>
      <img src={testinormal.photo} alt={testinormal.name} className='w-24 h-24 rounded-full mb-4' />
      <h3 className='text-lg font-semibold'>{testinormal.name}</h3>
      <p className='text-sm text-gray-500'>{testinormal.role}</p>
      <p className='mt-2'>{testinormal.feedback}</p>
    </div>
  )
}

export default TestimonialCard