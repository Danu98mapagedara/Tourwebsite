import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_your_public_key");

const PaymentPage = () => {
  const location = useLocation();
  const booking = location.state?.booking;

  const handlePayment = async () => {
    const stripe = await stripePromise;

    const response = await fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vehicleName: booking.vehicleName,
        price: booking.price,
      }),
    });

    const session = await response.json();
    window.location.href = session.url;
  };

  return (
    <button onClick={handlePayment} className="p-3 bg-black text-white w-full">
      Pay with Stripe
    </button>
  );
};

export default PaymentPage;
