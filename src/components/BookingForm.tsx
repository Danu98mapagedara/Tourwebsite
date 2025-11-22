import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import   vehicle  from "../data/vehicle";

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const Vehicle = vehicle.find((v) => v.id === Number(id));

  if (!Vehicle) return <p>Vehicle not found</p>;

  const onSubmit = (data: any) => {
    navigate(`/payment/${Vehicle.id}`, { state: { booking: data } });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg mt-5">
      <h2 className="text-xl font-bold">Booking: {Vehicle.name}</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
        <input
        title="Your full name"
          className="border p-2 w-full"
          placeholder="Your Name"
          {...register("name", { required: true })}
        />
        <input
        title="Your mobile number"
          className="border p-2 w-full"
          placeholder="Mobile Number"
          {...register("phone", { required: true })}
        />
        <input
        title="Your email address"
          className="border p-2 w-full"
          placeholder="Email"
          {...register("email", { required: true })}
        />

        {/* Read-only vehicle name */}
        <input
          className="border p-2 w-full"
          value={Vehicle.name}
          readOnly
        />

        {/* Read-only vehicle price */}
        <input
          className="border p-2 w-full"
          value={`Rs. ${Vehicle.pricePerDay}`}
          readOnly
        />

        <button
          type="submit"
          className="p-2 bg-green-600 text-white w-full"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
