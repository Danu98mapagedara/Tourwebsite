import React from "react";
import h  from '../assets/h3.jpg'
const cards = [
  {
    title: "Hotel reservations made simple",
    img: h,
  },
  {
    title: "Vehicle rentals for your journey",
    img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Unforgettable tourist attractions",
    img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
  },
];

const TravelEssentials: React.FC = () => {
  return (
    <section className="py-12 px-6 md:px-16 text-center">
      <h2 className="text-3xl font-bold mb-2">
        Discover Sri Lanka's travel essentials
      </h2>
      <p className="text-gray-600 mb-10">
        Everything you need for a seamless adventure in paradise.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-[220px] w-full object-cover"
            />
            <div className="p-5 text-left bg-white">
              <h3 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelEssentials;
