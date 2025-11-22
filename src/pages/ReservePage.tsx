import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import reservation from "../assets/reservation.jpg";
import type { Accommodation } from "@/data/accommodation";
import { accommodations } from "@/data/accommodation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// -------------------- ZOD SCHEMA --------------------
const reservationSchema = z.object({
  roomType: z.string().min(1, "Please select a room type"),
  numberOfGuests: z
    .number()
    .min(1, "At least 1 guest required")
    .max(10, "Maximum 10 guests allowed"),
  breakfastOption: z.enum(["yes", "no"]),
});
type ReservationForm = z.infer<typeof reservationSchema>;

const ReservePage = () => {
  const { id } = useParams<{ id: string }>();
  const availabletour: Accommodation | undefined = accommodations.find((a) => a.id === id);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ReservationForm>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      roomType: "",
      numberOfGuests: 1,
      breakfastOption: "yes",
    },
  });

  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const AllPrices = {
    roomPrice: {
      single: 15000,
      double: 18000,
      suite: 25000,
    },
    guestperprice: 3000,
    breakfast: 1500,
  };

  // -------------------- PRICE CALCULATION --------------------
  useEffect(() => {
    const { roomType, numberOfGuests, breakfastOption } = watch();

    if (!checkinDate || !checkoutDate || !roomType) {
      setTotalAmount(0);
      return;
    }

    const total =
      AllPrices.guestperprice * numberOfGuests +
      AllPrices.roomPrice[roomType as keyof typeof AllPrices.roomPrice] +
      (breakfastOption === "yes" ? AllPrices.breakfast : 0);

    setTotalAmount(total);
  }, [
    watch("roomType"),
    watch("numberOfGuests"),
    watch("breakfastOption"),
    checkinDate,
    checkoutDate,
  ]);

  // -------------------- SUBMIT --------------------
  const onSubmit = (data: ReservationForm) => {
    if (!checkinDate || !checkoutDate) {
      alert("Please select both check-in and check-out dates!");
      return;
    }

    alert(
      `Reservation confirmed!\n
      Room: ${data.roomType}\n
      Guests: ${data.numberOfGuests}\n
      Breakfast: ${data.breakfastOption}\n
      From: ${checkinDate.toDateString()} 
      To: ${checkoutDate.toDateString()}\n
      Total: Rs. ${totalAmount}`
    );
  };

  if (!availabletour)
    return <div className="text-red-500 text-2xl text-center">Accommodation Not Found</div>;

  return (
    <motion.div
      className="container mx-auto p-8 mt-10 flex flex-col md:flex-row items-center justify-center gap-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* -------- FORM SECTION -------- */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl w-full md:w-1/2"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Reserve {availabletour.name}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Room Type */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">Type of Room</label>
            <select
              {...register("roomType")}
              className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500"
            >
              <option value="">Select Room Type</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>

            {errors.roomType && (
              <p className="text-red-500 text-sm">{errors.roomType.message}</p>
            )}
          </div>

          {/* Number of Guests */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">Number of Guests</label>
            <input
              type="number"
              min={1}
              {...register("numberOfGuests", { valueAsNumber: true })}
              className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500"
            />

            {errors.numberOfGuests && (
              <p className="text-red-500 text-sm">{errors.numberOfGuests.message}</p>
            )}
          </div>

          {/* Check-in */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">Check-in Date</label>
            <DatePicker
              selected={checkinDate}
              onChange={(date) => setCheckinDate(date)}
              minDate={new Date()}
              placeholderText="Select check-in date"
              className="w-full p-3 border-2 border-gray-300 rounded-xl"
            />
          </div>

          {/* Check-out */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">Check-out Date</label>
            <DatePicker
              selected={checkoutDate}
              onChange={(date) => setCheckoutDate(date)}
              minDate={
                checkinDate
                  ? new Date(checkinDate.getTime() + 24 * 60 * 60 * 1000)
                  : new Date()
              }
              placeholderText="Select check-out date"
              className="w-full p-3 border-2 border-gray-300 rounded-xl"
            />
          </div>

          {/* Breakfast */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Do you want Breakfast?
            </label>
            <select
              {...register("breakfastOption")}
              className="w-full p-3 border-2 border-gray-300 rounded-xl"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Total */}
          <div className="mt-4">
            <label className="block text-gray-800 font-semibold mb-2">Total Amount</label>
            <p className="text-2xl font-bold text-green-700">
              Rs. {totalAmount.toLocaleString()}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
          >
            Confirm Reservation
          </motion.button>
        </form>
      </motion.div>

      {/* -------- IMAGE -------- */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <motion.img
          src={reservation}
          alt="Reservation"
          className="rounded-2xl shadow-2xl w-[90%]"
          whileHover={{ scale: 1.03 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ReservePage;
