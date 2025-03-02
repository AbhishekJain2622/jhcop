"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    image: "/01.png",
    name: "John Doe",
    text: "Amazing service and high-quality products!",
    rating: 5,
  },
  {
    image: "/02.png",
    name: "Jane Smith",
    text: "Best industrial tools I have ever used.",
    rating: 4,
  },
  {
    image: "/03.png",
    name: "Michael Lee",
    text: "Outstanding customer support and durability!",
    rating: 5,
  },
];

const getStars = (rating) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
      ★
    </span>
  ));
};

const products = [
  { id: 1, name: "Precision Instruments", image: "/55.png", desc: "High-precision tools" },
  { id: 2, name: "Industrial Machinery", image: "/66.png", desc: "High-performance machi" },
  { id: 3, name: "Manufacturing Equipment", image: "/77.png", desc: "Premium equipment" },
  { id: 4, name: "Heavy Tools", image: "/88.png", desc: "Durable heavy-duty tools" },
];

export default function Testimonials() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[#F3F4F6] py-16 px-6 text-center"
    >
<h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#233A6C] to-[#597DAF] mb-6">
  Testimonials
</h2>
      <h2 className="text-3xl md:text-4xl font-bold text-[#233A6C] mb-6">
  We Care About Our Customers Experience
</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-5xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-blue-500 mb-4"
                />
              </motion.div>

              <p className="text-gray-700 text-lg px-4 italic">{testimonial.text}</p>
              <h3 className="text-lg font-semibold text-gray-900 mt-2">{testimonial.name}</h3>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-2 flex space-x-1"
              >
                {getStars(testimonial.rating)}
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>

    <motion.section
  id="products-section"
  className="bg-white py-16 px-6 text-center"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Heading with Maximum Spacing */}
  <div className="relative inline-block mb-28"> {/* Increased margin-bottom for more space */}
    {/* Background Highlight */}
    <span className="absolute left-0 bottom-1 w-[90%] h-3 bg-[#C5D3E5]"></span>
    <h2 className="relative text-3xl md:text-4xl font-bold">Our Products</h2>
  </div>

  {/* Responsive Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 mx-auto max-w-6xl"> {/* Increased gap for more spacing */}
    {products.map((product, index) => (
      <motion.div
        key={product.id}
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Product Card */}
        <div className="relative bg-blue-100 p-8 rounded-lg shadow-lg w-72 border border-blue-300">
          {/* Image (Half Inside, Half Outside) */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <Image
              src={product.image}
              alt={product.name}
              width={180}
              height={180}
              className="shadow-md border border-gray-300"
            />
          </div>

          {/* Product Description */}
          <p className="text-gray-800 font-medium mt-20">{product.desc}</p>

          {/* Button with Animation */}
          <motion.button
            className="mt-8 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Quote
          </motion.button>
        </div>

        {/* Product Name (Below Box) */}
        <h3 className="font-bold text-lg mt-8">{product.name}</h3>
      </motion.div>
    ))}
  </div>
</motion.section>


</>
  );
}
