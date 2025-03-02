import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <>
    <section
      id="contact-section" className="w-full py-16 bg-[#F5F7FA] md:bg-none bg-[url('/89.png')] bg-cover bg-center flex justify-center md:bg-[#F5F7FA]"
    >
      <div className="max-w-6xl w-full px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side - Contact Info */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Get in touch with Jash Corporation to explore how we can support your goals with precision-engineered solutions.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-blue-600">Visit Us</h3>
                <p className="text-gray-700 text-sm">
                  Sumer Nagar, Building NO.1, S.V.Road, Borivali West, Mumbai 400092
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-blue-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-blue-600">Have Any Questions?</h3>
                <p className="text-gray-700 text-sm">+91 98201 27073</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-blue-600">Mail Us</h3>
                <p className="text-gray-700 text-sm">jashcorporation@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 md:p-8">
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full border border-gray-300 p-3 rounded-md focus:ring focus:ring-blue-200" />
            <input type="text" placeholder="Phone number" className="w-full border border-gray-300 p-3 rounded-md focus:ring focus:ring-blue-200" />
            <input type="email" placeholder="E-mail" className="w-full border border-gray-300 p-3 rounded-md focus:ring focus:ring-blue-200" />
            <textarea placeholder="Message" className="w-full border border-gray-300 p-3 h-24 rounded-md focus:ring focus:ring-blue-200"></textarea>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow-md hover:bg-blue-700 transition-all">
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
    <div className="w-full flex flex-col items-center py-8 bg-[#F5F7FA]">

       {/* Heading with Maximum Spacing */}
  <div className="relative inline-block mb-28"> {/* Increased margin-bottom for more space */}
    {/* Background Highlight */}
    <span className="absolute left-0 bottom-1 w-[90%] h-3 bg-[#C5D3E5]"></span>
    <h2 className="relative text-3xl md:text-4xl font-bold">Find Us on Google Map</h2>
  </div>
      <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] rounded-lg overflow-hidden shadow-md border">
        <iframe
          className="w-full h-[300px] md:h-[350px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093746!2d-122.41941568468267!3d37.77492927975945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzMwLjkiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sin!4v1618379009056!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>

</>
  );
}
