import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { feedbackData } from "../data/feedbackData";
const Testinormal = () => {
  return (
      <section className="py-5 bg-purple-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
        
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {feedbackData.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="bg-purple-300 shadow-lg rounded-2xl p-6 flex flex-col items-center">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <p className="text-gray-600 italic mb-4">"{client.feedback}"</p>
                <h3 className="font-semibold text-gray-800">{client.name}</h3>
                <span className="text-sm text-gray-500">{client.country}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testinormal