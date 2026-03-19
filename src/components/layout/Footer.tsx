import React from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-200 dark:bg-black dark:text-white w-full">
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.jpg" alt="Logo" className="w-10 h-8 sm:w-12 sm:h-10" />
              <div>
                <h3 className="font-bold text-lg sm:text-xl">
                  <span className="text-yellow-500">Fitness</span>
                  <span> Center</span>
                </h3>
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Your ultimate fitness destination for achieving your health and wellness goals. Join our community today!
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3 pt-2 sm:pt-4">
              <a
                href="#"
                className="bg-yellow-600/20 hover:bg-yellow-600/40 border border-yellow-600/30 rounded-lg p-2 sm:p-3 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} className="sm:w-4 sm:h-4 text-yellow-500" />
              </a>
              <a
                href="#"
                className="bg-yellow-600/20 hover:bg-yellow-600/40 border border-yellow-600/30 rounded-lg p-2 sm:p-3 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} className="sm:w-4 sm:h-4 text-yellow-500" />
              </a>
              <a
                href="#"
                className="bg-yellow-600/20 hover:bg-yellow-600/40 border border-yellow-600/30 rounded-lg p-2 sm:p-3 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} className="sm:w-4 sm:h-4 text-yellow-500" />
              </a>
              <a
                href="#"
                className="bg-yellow-600/20 hover:bg-yellow-600/40 border border-yellow-600/30 rounded-lg p-2 sm:p-3 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="sm:w-4 sm:h-4 text-yellow-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-base sm:text-lg ">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#Hero" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs sm:text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#About" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs sm:text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#Services" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs sm:text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#Contact" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs sm:text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs sm:text-sm">
                  Membership Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-base sm:text-lg ">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#Services" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs sm:text-sm">
                  Personal Training
                </a>
              </li>
              <li>
                <a href="#Services" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs sm:text-sm">
                  Group Classes
                </a>
              </li>
              <li>
                <a href="#Services" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs sm:text-sm">
                  Nutrition Coaching
                </a>
              </li>
              <li>
                <a href="#Services" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs sm:text-sm">
                  Online Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-base sm:text-lg ">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex gap-2 sm:gap-3 items-start">
                <MapPin size={16} className="sm:w-5 sm:h-5 text-yellow-500 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-400 wrap-break-words">171/1, Sathsara Mawatha,</p>
                  <p className="text-xs sm:text-sm text-gray-400">Malabe, 10115</p>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3 items-center">
                <Phone size={16} className="sm:w-5 sm:h-5 text-yellow-500 shrink-0" />
                <a href="tel:+94766368845" className="text-xs sm:text-sm text-gray-400 hover:text-yellow-500 transition-colors break-all">
                  +94 76 636 8845
                </a>
              </div>
              <div className="flex gap-2 sm:gap-3 items-center">
                <Mail size={16} className="sm:w-5 sm:h-5 text-yellow-500 shrink-0" />
                <a href="mailto:ridmikew@gmail.com" className="text-xs sm:text-sm text-gray-400 hover:text-yellow-500 transition-colors break-all">
                  ridmikew@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8 sm:my-10 md:my-12"></div>

        {/* Bottom Footer */}
        <div className="container mx-auto flex flex-col sm:flex-row justify-between gap-4 text-xs sm:text-sm text-gray-400">
          <p>&copy; {currentYear} Fitness Center. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center ">
            <a href="#Hero" className="hover:text-yellow-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              Cookie Policy
            </a>
          </div>
          <div>
            <p>Developed & Design By <span><a href="#" className="hover:text-yellow-500 transition-colors">Shakil Ridmika</a></span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
