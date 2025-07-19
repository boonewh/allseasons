import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Company Info - Takes up more space */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">All Seasons Foam and Coatings</h3>
              <div className="w-16 h-1 bg-blue-600 mb-4"></div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Professional foam insulation and coating services. 
              Quality work and exceptional customer service you can trust.
            </p>
            
            {/* Contact Info with better spacing */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold">📞</span>
                </div>
                <div>
                  <p className="text-white font-semibold">940-458-9078</p>
                  <p className="text-gray-400 text-sm">Call us today for a free quote</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold">✉️</span>
                </div>
                <div>
                  <p className="text-white font-semibold">vanessa@allseasonsfoam.com</p>
                  <p className="text-gray-400 text-sm">Get a quick response</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold">📍</span>
                </div>
                <div>
                  <p className="text-white font-semibold">6316 S County Rd 1185</p>
                  <p className="text-gray-400 text-sm">Midland, TX 79706</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Spray Foam Insulation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Protective Coatings
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Commercial Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Residential Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Energy Efficiency Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links & Social */}
          <div className="lg:col-span-4">
            <h4 className="text-xl font-bold text-white mb-6">Connect With Us</h4>
            
            {/* Quick Links */}
            <div className="mb-8">
              <h5 className="text-white font-semibold mb-4">Quick Links</h5>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Home</Link>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About Us</Link>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Services</Link>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</Link>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h5 className="text-white font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <span className="text-white text-xl">f</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <span className="text-white text-xl">in</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <span className="text-white text-xl">▶</span>
                </a>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                &copy; 2025 All Seasons Foam and Coatings. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}