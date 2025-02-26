import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CountUp from "react-countup";
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react";
import { Menu, X } from "lucide-react"; // For mobile menu icons;
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to section function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after clicking a link
    }
  };
  
// -----------------------------------------
const router = useRouter();

// Function to scroll to the Hero Section
const scrollToHeroSection = () => {
  const heroSection = document.getElementById('hero-section');
  if (heroSection) {
    heroSection.scrollIntoView({ behavior: 'smooth' });
  }
};
// -------------------------
const scrollToProductsSection = () => {
  const productsSection = document.getElementById('products-section');
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' });
  }
};
// -----------------------------
const scrollToContactSection = () => {
  const contactSection = document.getElementById('contact-section');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

  // Function to scroll to the About Section
  const scrollToAboutSection = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // -----------------------------------------
  const counters = [
    { value: 500, label: "Projects Delivered Expertise in Industrial Solutions" },
    { value: 1000, label: "Happy Clients Expertise in Industrial Solutions" },
    { value: 20, label: "Years of Expertise in Industrial Solutions" },
    { value: 100, label: "Skilled Professionals Driving Innovation." },
  ];


  // ----------------------------
  const testimonials = [
    {
      name: "Karia Lynn",
      image: "/01.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: "★★☆☆☆",
    },
    {
      name: "John Doe",
      image: "/02.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: "★★★☆☆",
    },
    {
      name: "Jane Smith",
      image: "/03.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: "★☆☆☆☆",
    },
  ];

  // ----------------------
  const products = [
    { id: 1, name: "Precision Instruments", image: "/55.png", desc: "High-precision instruments for accurate measurements" },
    { id: 2, name: "Industrial Machinery", image: "/66.png", desc: "High-performance industrial machinery for manufacturing " },
    { id: 3, name: "Manufacturing Equipment", image: "/77.png", desc: "Premium manufacturing equipment for industrial" },
    { id: 4, name: "Heavy Tools", image: "/88.png", desc: "Durable heavy-duty tools for industrial operations" },
  ];
  return (
    <>
    <nav className="bg-blue-700 p-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="bg-white px-6 md:px-10 py-3 md:py-4 rounded shadow-md font-bold text-gray-700">
        LOGO
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 md:space-x-8">
        <a
          href="#"
          className="text-white font-semibold text-base md:text-lg hover:text-gray-300"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero-section");
          }}
        >
          Home
        </a>
        <a
          href="#"
          className="text-white font-semibold text-base md:text-lg hover:text-gray-300"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about-section");
          }}
        >
          About Us
        </a>
        <a
          href="#"
          className="text-white font-semibold text-base md:text-lg hover:text-gray-300"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("products-section");
          }}
        >
          Products
        </a>
        <a
          href="#"
          className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-md font-semibold text-base md:text-lg hover:bg-blue-800"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact-section");
          }}
        >
          Contact Us
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-700 flex flex-col items-center space-y-4 py-6 shadow-lg md:hidden z-50">
          <a
            href="#"
            className="text-white font-semibold text-lg"
            onClick={() => scrollToSection("hero-section")}
          >
            Home
          </a>
          <a
            href="#"
            className="text-white font-semibold text-lg"
            onClick={() => scrollToSection("about-section")}
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white font-semibold text-lg"
            onClick={() => scrollToSection("products-section")}
          >
            Products
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold text-lg hover:bg-blue-800"
            onClick={() => scrollToSection("contact-section")}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
      <div id="hero-section" className="min-h-screen flex flex-col md:flex-row items-center bg-gray-100 relative px-6 md:px-16">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center bg-gray-100 relative px-6 md:px-16">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Wrapper - Split into Two Sections */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center z-10 space-y-6 md:space-y-0">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-12">
            <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Powering <br className="hidden md:block" /> Industries <br className="hidden md:block" />
              With <br className="hidden md:block" /> Precision And <br className="hidden md:block" />
              Reliability.
            </h1>
            <p className="text-lg text-gray-700 mt-4 px-2 md:px-0">
              Delivering cutting-edge electrical solutions designed to enhance efficiency 
              and ensure unwavering reliability in demanding industrial environments.
            </p>
          </div>
          <div className="relative flex justify-center mt-10">
      {/* Light Blue Triangle */}
      <div className="absolute left-0 top-0">
        <Image
          src="/1.png" // Replace with your triangle image path
          alt="Triangle"
          width={100}
          height={100}
          objectFit="contain"
        />
      </div>

      {/* Dark Blue Trapezoid */}
      <div className="absolute left-10 top-10">
        <Image
          src="/2.png" // Replace with your trapezoid image path
          alt="Trapezoid"
          width={150}
          height={100}
          objectFit="contain"
        />
      </div>
    </div>

          {/* Right Side - Image with Overlay */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-[320px] md:w-[450px] h-[300px] md:h-[350px]">
              
              {/* Background Image (men2.png) */}
              <div className="absolute inset-3 md:inset-5 ml-6 md:ml-20">
                <Image
                  src="/men2.png"
                  alt="Background Image"
                  width={280}
                  height={300}
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Foreground Image (men1.png) */}
              <div className="absolute top-10 left-3 md:top-20 md:left-4 z-10">
                <Image
                  src="/men1.png"
                  alt="Industry Worker"
                  width={360}
                  height={300}
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>

            </div>
          </div>

        </div>
      </div></div>

      <div className="container mx-auto text-center my-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {counters.map((counter, index) => (
          <div
            key={index}
            className="bg-blue-600 text-white p-6 shadow-lg rounded-lg"
          >
            <h2 className="text-4xl font-bold">
              <CountUp end={counter.value} duration={3} />+
            </h2>
            <p className="mt-2 text-lg">{counter.label}</p>
          </div>
        ))}
      </div>
    </div>

    <section id="about-section" className="bg-cover bg-center py-16 px-4" style={{ backgroundImage: "url('/background.png')" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              src="/4.png"
              alt="Engineer working"
              width={500}
              height={300}
              className="w-full max-w-[500px] rounded-lg shadow-lg"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full md:w-1/2 text-black text-center md:text-left px-4">
            <h2 className="text-3xl md:text-4xl font-bold">About Jash Corporation</h2>
            <p className="text-lg mt-4 leading-relaxed">
              Jash Corporation is your trusted partner for premium industrial electrical solutions.
              Our top products are engineered for reliability, precision, and efficiency, meeting
              the toughest industrial challenges.
              <br />
              With a legacy of expertise, we deliver advanced electrical systems that empower
              businesses worldwide. From innovative circuitry to robust power solutions, we cater to
              the evolving needs of modern industries.
            </p>

            {/* Text and Image Side by Side */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-between mt-6 gap-6">
              <Image
                src="/3.png"
                alt="Worker in industry"
                width={180}
                height={140}
                className="rounded-lg shadow-lg"
              />
              <p className="text-md text-justify max-w-md">
                At Jash Corporation, quality and innovation are our benchmarks. Join us in building
                solutions that drive industrial excellence and shape a brighter, electrified future.
              </p>
            </div>

            {/* More Button */}
            <div className="mt-6 flex justify-center md:justify-start">
              <button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 text-lg font-semibold rounded transition">
                More
              </button>
            </div>
          </div>
        </div>
      </section>
{/* ----------------------- */}
<div className="bg-gradient-to-r from-blue-500 to-gray-700 text-white text-center py-3 text-sm md:text-base font-bold flex items-center justify-center px-4">
      <span className="mx-2">⭐</span>
      <span>
        Our Happy Customers Would Love to Buy Again! | 98% Customer
        Satisfaction Rate | Trusted by Industry Leaders
      </span>
      <span className="mx-2">⭐</span>
    </div>

    {/* -------------------------------------- */}
    <div className="bg-[#F3F4F6] py-16 px-6 text-center">
    <div className="relative inline-block mb-16">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative z-10"> Testimonials</h2>
  <span className="absolute left-0 bottom-1 w-full h-3 bg-blue-200"></span>
</div>
   
      <h3 className="text-2xl font-semibold text-blue-800 mb-8">
        We Care About Our Customers Experience
      </h3>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 }, // 2 slides on tablets
          1024: { slidesPerView: 3 }, // 3 slides on large screens
        }}
        className="w-full max-w-5xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full border-4 border-blue-500 mb-4"
              />
              <p className="text-gray-700 text-lg px-4">{testimonial.text}</p>
              <hr className="w-10/12 my-4 border-t border-gray-300" />
              <h3 className="text-lg font-semibold text-gray-900 capitalize">{testimonial.name}</h3>
              <div className="mt-2 text-yellow-500 text-lg">{testimonial.rating}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div id="products-section" className="bg-[#ffff] py-16 px-6 text-center">
  {/* Section Heading with Extra Space */}
  <div className="relative inline-block mb-16">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative z-10">Our Products</h2>
  <span className="absolute left-0 bottom-1 w-full h-3 bg-blue-200"></span>
</div>
  {/* 2x2 Product Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mx-auto max-w-4xl">
    {products.slice(0, 4).map((product) => (
      <div key={product.id} className="flex flex-col items-center text-center">
        {/* Product Card */}
        <div className="relative bg-blue-100 p-6 rounded-lg shadow-lg w-72 border border-blue-300">
          {/* Product Image */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <Image src={product.image} alt={product.name} width={128} height={128} className="rounded-lg shadow-md" />
          </div>

          {/* Card Content */}
          <div className="mt-16">
            <p className="text-gray-800 font-medium">{product.desc}</p>
            <button className="mt-4 bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Get Quote
            </button>
          </div>
        </div>

        {/* Product Name Below Card */}
        <h3 className="font-bold text-lg mt-4">{product.name}</h3>
      </div>
    ))}
  </div>
</div>



    {/* ------------------------------ */}
    <div id="contact-section" className="relative flex flex-col items-center mb-16">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative z-10">Contact Us</h2>
  <span className="absolute bottom-1 w-24 h-3 bg-blue-200"></span>
</div>
    <div
      className="relative h-[700px] w-full bg-no-repeat bg-center bg-cover flex justify-center items-center"
      style={{ backgroundImage: "url('/89.png')", backgroundSize: "cover" }}
    >
{/* Content Wrapper */}
<div className="relative z-10 max-w-4xl w-full px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-8 text-white text-center sm:text-left pb-24">

  {/* Left Side - Address */}
  <div className="flex flex-col items-center sm:items-start space-y-6">
    <div className="flex items-center gap-5">
      <MapPin className="text-blue-600 w-8 h-8" />
      <h3 className="font-bold text-2xl text-blue-600">Visit Us</h3>
    </div>
    <p className="text-lg text-gray-800 leading-relaxed">
      Sumer Nagar, Building NO.1 <br />
      S.V.Road, Borivali West <br />
      Mumbai 400092
    </p>
  </div>

  {/* Right Side - Contact & Email */}
  <div className="flex flex-col items-center sm:items-start space-y-6 sm:ml-auto">
    <div className="flex items-center gap-5">
      <Phone className="text-blue-600 w-8 h-8" />
      <h3 className="font-bold text-2xl text-blue-600">Have Any Questions?</h3>
    </div>
    <p className="text-lg text-gray-800 leading-relaxed">+91 98201 27073</p>

    <div className="flex items-center gap-5">
      <Mail className="text-blue-600 w-8 h-8" />
      <h3 className="font-bold text-2xl text-blue-600">Mail Us</h3>
    </div>
    <p className="text-lg text-gray-800 leading-relaxed">jashcorporation@gmail.com</p>
  </div>
</div>

      {/* Text in White Section */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-black text-2xl font-bold">Get in touch with Jash Corporation</h2>
        <p className="text-gray-700 text-lg mt-2">
          to explore how we can support your goals with precision-engineered solutions.
        </p>

      </div>
      
    </div>
  
    <div className="max-w-md mx-auto p-6 bg-white">
      <form className="space-y-4">
        {/* Name Field */}
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full px-4 py-3 border rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-3 border rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message Field */}
        <div>
          <textarea
            placeholder="Message"
            className="w-full px-4 py-3 border rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
   

    <div className="container mx-auto my-10 px-4">
    <div className="relative flex flex-col items-center mb-16">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative z-10">Find Us on Google Map</h2>
  <span className="absolute bottom-1 w-40 h-3 bg-blue-200"></span>
</div>
        
        <div className="flex justify-center">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509192!2d-122.4194156846812!3d37.774929279759286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2c1bcd4b%3A0x54d8a4d2cba7b8f6!2sGoogle!5e0!3m2!1sen!2sin!4v1675864958771!5m2!1sen!2sin"
            className="w-full h-[350px] border border-gray-300 rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* ------------------------- */}
      <footer className="bg-blue-900 text-white text-center py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Logo and Subscription */}
          <div className="space-y-3">
            <div className="bg-white text-black mx-auto md:mx-0 flex items-center justify-center w-24 h-12 rounded-md font-bold">
              LOGO
            </div>
            <p>Subscribe Now</p>
            <div className="flex justify-center md:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-3/4 border rounded-l-md text-black"
              />
              <button className="bg-white text-blue-900 font-bold px-4 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="font-bold text-lg">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                🏠 <a href="/" className="hover:underline">Home</a>
              </li>
              <li>
                🛡️ <a href="/" className="hover:underline">About Us</a>
              </li>
              <li>
                💼 <a href="/" className="hover:underline">Products</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-3">
            <h5 className="font-bold text-lg">Contact Us</h5>
            <p>
              📞 <a href="tel:+919820127073" className="hover:underline">+91 98201 27073</a>
            </p>
            <p>
              ✉️ <a href="mailto:jashcorporation@yahoo.co.in" className="hover:underline">jashcorporation@yahoo.co.in</a>
            </p>
            <p>
              ✉️ <a href="mailto:jashcorporation@gmail.com" className="hover:underline">jashcorporation@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-white/30 pt-4 text-sm">
          © 2024 <a href="/" className="hover:underline">JashCorporation</a>. All Rights Reserved | Powered by 
          <a href="https://codestudios.in/" className="hover:underline"> CodeStudios</a>
        </div>
      </div>
    </footer>
  
    </>
  );
}
