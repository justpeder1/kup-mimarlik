
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-architect-black text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-3xl font-light tracking-tight"
              >
                Küp<span className="font-medium">mimarlık</span>
              </motion.div>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Designing geometry into life. We create spaces that inspire, challenge, and endure.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-white hover:text-copper transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-white hover:text-copper transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:info@kupmimarlık.com"
                whileHover={{ y: -3 }}
                className="text-white hover:text-copper transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium tracking-wide">Quick Links</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link to="/" className="text-gray-400 hover:text-white hover-link inline-block transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white hover-link inline-block transition-colors">
                About Us
              </Link>
              <Link to="/projects" className="text-gray-400 hover:text-white hover-link inline-block transition-colors">
                Projects
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-white hover-link inline-block transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white hover-link inline-block transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium tracking-wide">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-copper flex-shrink-0 mt-1" />
                <p className="text-gray-400">
                  Küçükbakkalköy, 34750 Ataşehir/İstanbul, Turkey
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-copper flex-shrink-0" />
                <p className="text-gray-400">+90 (212) 123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-copper flex-shrink-0" />
                <p className="text-gray-400">info@kupmimarlık.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Küpmimarlık. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors mr-6">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
