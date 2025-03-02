export default function Footer() {
  return (
    <footer className="bg-[#233A6C] text-white text-center py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Subscription */}
          <div className="space-y-3">
            <div className="bg-white text-black mx-auto md:mx-0 flex items-center justify-center w-24 h-12 rounded-md font-bold">LOGO</div>
            <p>Subscribe Now</p>
            <div className="flex justify-center md:justify-start">
              <input type="email" placeholder="Enter your email" className="p-2 w-3/4 border rounded-l-md text-black" />
              <button className="bg-white text-[#123953] font-bold px-4 rounded-r-md">Subscribe</button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="font-bold text-lg">Quick Links</h5>
            <ul className="space-y-2">
              <li>🏠 <a href="/" className="hover:underline">Home</a></li>
              <li>🛡️ <a href="/" className="hover:underline">About Us</a></li>
              <li>💼 <a href="/" className="hover:underline">Products</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-3">
            <h5 className="font-bold text-lg">Contact Us</h5>
            <p>📞 <a href="tel:+919820127073" className="hover:underline">+91 98201 27073</a></p>
            <p>✉️ <a href="mailto:jashcorporation@yahoo.co.in" className="hover:underline">jashcorporation@yahoo.co.in</a></p>
            <p>✉️ <a href="mailto:jashcorporation@gmail.com" className="hover:underline">jashcorporation@gmail.com</a></p>
          </div>
        </div>
        <div className="mt-6 border-t border-white/30 pt-4 text-sm">© 2024 <a href="/" className="hover:underline">JashCorporation</a>. All Rights Reserved | Powered by <a href="https://codestudios.in/" className="hover:underline">CodeStudios</a></div>
      </div>
    </footer>
  );
}
