import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules";
import w1 from "../assets/w1.jpg"
import w2 from "../assets/w2.jpg"
import w4 from "../assets/w4.jpg"

const Homeswiper = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      className="rounded-2xl shadow-lg"
    >
      <SwiperSlide>
  <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <img
      src={w1}
      alt="Traveler exploring Sri Lanka"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Centered Text Content */}
    <div className="relative z-10 text-center text-white px-6">
      <h1 className="text-8xl font-bold mb-2">Traveler exploring Sri Lanka</h1>
      <p className="text-lg">
        Experience the breathtaking landscapes and rich culture of Sri Lanka.
      </p>
    </div>
  </div>
</SwiperSlide>

          <SwiperSlide>
  <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-2xl">
    {/* Background Image */}
    <img
      src={w2}
      alt="Traveler exploring Sri Lanka"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay background (optional dark layer) */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Centered Text Content */}
    <div className="relative z-10 text-center text-white px-6">
      <h1 className="text-8xl font-bold mb-2">Traveler exploring Sri Lanka</h1>
      <p className="text-lg">
        Experience the breathtaking landscapes and rich culture of Sri Lanka.
      </p>
    </div>
  </div>
</SwiperSlide>

      <SwiperSlide>
  <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-2xl">
    {/* Background Image */}
    <img
      src={w4}
      alt="Traveler exploring Sri Lanka"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay background (optional dark layer) */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Centered Text Content */}
    <div className="relative z-10 text-center text-white px-6">
      <h1 className="text-8xl font-bold mb-2">Traveler exploring Sri Lanka</h1>
      <p className="text-lg">
        Experience the breathtaking landscapes and rich culture of Sri Lanka.
      </p>
    </div>
  </div>
</SwiperSlide>
    </Swiper>
  )
}

export default Homeswiper