import React from "react";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Why choose our platform</h2>
        <p className="text-gray-600">
          Simplify your travel planning with trusted services and unbeatable offers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Convenient bookings</h3>
            <p className="text-gray-600">
              Easily book hotels, vehicles, and tours with our user-friendly system.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Diverse options</h3>
            <p className="text-gray-600">
              Choose from a variety of destinations, packages, and travel styles.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">
              Exclusive offers for Sri Lankan experiences
            </h3>
            <p className="text-gray-600">
              Enjoy exclusive deals and discounts on memorable local adventures.
            </p>
          </div>
        </div>

        <div>
          <img
           
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            title="cvv"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
