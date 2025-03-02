export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#123953] to-[#0A1E30] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Logo & Subscription */}
          <div className="space-y-4">
            <div
              className="text-3xl font-extrabold tracking-wide uppercase bg-gradient-to-r from-blue-400 to-gray-300 text-transparent bg-clip-text drop-shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => window.location.href = "/"}
            >
              JashCorporation
            </div>
            <p className="text-gray-300">Subscribe to get updates & offers</p>
            <div className="flex items-center justify-center md:justify-start bg-white rounded-md overflow-hidden">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="p-3 w-3/4 text-black outline-none"
              />
              <button className="bg-blue-600 text-white font-semibold px-5 py-3 hover:bg-blue-800 transition-all">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h5 className="font-bold text-lg text-blue-400">Quick Links</h5>
            <ul className="space-y-3">
              {[
                { name: "Home", icon: "Container.png", link: "/" },
                { name: "About Us", icon: "Container1.png", link: "/" },
                { name: "Products", icon: "Container2.png", link: "/" }
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 hover:text-blue-400 transition-all">
                  <img src={item.icon} alt={item.name} className="w-5 h-5" />
                  <a href={item.link} className="hover:underline">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h5 className="font-bold text-lg text-blue-400">Contact Us</h5>
            <p className="flex items-center gap-3 hover:text-blue-400 transition-all">
              <img src="Container3.png" alt="Phone" className="w-5 h-5" />
              <a href="tel:+919820127073" className="hover:underline">+91 98201 27073</a>
            </p>
            <p className="flex items-center gap-3 hover:text-blue-400 transition-all">
              <img src="Container4.png" alt="Email" className="w-5 h-5" />
              <a href="mailto:jashcorporation@yahoo.co.in" className="hover:underline">jashcorporation@yahoo.co.in</a>
            </p>
            <p className="flex items-center gap-3 hover:text-blue-400 transition-all">
              <a href="mailto:jashcorporation@gmail.com" className="hover:underline">jashcorporation@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/20 pt-6 text-sm text-gray-400 text-center">
          © 2024 <a href="/" className="text-blue-400 hover:underline">JashCorporation</a>. 
          All Rights Reserved | Powered by <a href="https://codestudios.in/" className="text-blue-400 hover:underline">CodeStudios</a>
        </div>
      </div>
    </footer>
  );
}
