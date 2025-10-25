import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


import traveler1 from "../assets/t1.jpg";
import traveler2 from "../assets/t2.jpg";
import traveler3 from "../assets/t3.jpg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 px-6 md:px-12 py-10 bg-gray-50">
      {/* LEFT SECTION - TEXT CONTENT */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h5 className="text-2xl font-bold text-purple-500 italic mb-2">
          ABOUT THE COMPANY
        </h5>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Experience Sri Lanka <br /> with Our Trusted Travel Experts
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Discover the breathtaking beauty, culture, and warmth of Sri Lanka with our
          expertly curated tours. Whether you’re seeking adventure, relaxation, or
          cultural exploration, we make sure your journey is unforgettable.
        </p>

        <h3 className="text-3xl font-bold text-gray-800 mb-3">Our Services</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Customized Travel Packages</li>
          <li>24/7 Customer Support</li>
          <li>Best Price Guarantee</li>
          <li>Expert Local Travel Guides</li>
          <li>Seamless Booking Process</li>
        </ul>
      </motion.div>

      {/* RIGHT SECTION - IMAGE SLIDER */}
      <motion.div
        className="md:w-1/4  display-flex align-items-center justify-content-cente"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="rounded-2xl shadow-lg"
        >
          <SwiperSlide>
            <img
              src={traveler1}
              alt="Traveler exploring Sri Lanka"
              className="rounded-2xl object-contain    bg-purple-200"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={traveler2}
              alt="Cultural experience in Sri Lanka"
              className="rounded-2xl object-contain  bg-purple-200"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={traveler3}
              alt="Beautiful beach in Sri Lanka"
              className="rounded-2xl object-contain   bg-purple-200"
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default About;
