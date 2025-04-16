
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Küçükbakkalköy, 34750', 'Ataşehir/İstanbul, Turkey']
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+90 (212) 123 4567', '+90 (212) 123 4568']
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@kupmimarlık.com', 'projects@kupmimarlık.com']
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Friday: 9am - 6pm', 'Saturday: 10am - 2pm']
  }
];

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-architect-black text-white">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-center"
          >
            Contact <span className="font-medium">Us</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-white/80 text-center max-w-2xl mx-auto"
          >
            We'd love to hear from you. Get in touch with us to discuss your project 
            or to learn more about our architectural services.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollAnimation variant="fadeRight">
              <div>
                <h2 className="text-2xl font-light mb-8">Send Us a <span className="font-medium">Message</span></h2>
                <ContactForm />
              </div>
            </ScrollAnimation>
            
            {/* Contact Info */}
            <ScrollAnimation variant="fadeLeft" delay={0.2}>
              <div>
                <h2 className="text-2xl font-light mb-8">Contact <span className="font-medium">Information</span></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="p-6 bg-architect-offwhite">
                      <div className="text-copper mb-4">
                        <item.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-architect-darkgray">{detail}</p>
                      ))}
                    </div>
                  ))}
                </div>
                
                {/* Google Map */}
                <div className="mt-8 h-[300px] bg-architect-gray relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2965646369817!2d29.093790499999998!3d41.0022332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9b2ddef3d2d%3A0x47bc744a74e44030!2sK%C3%BC%C3%A7%C3%BCkbakkalk%C3%B6y%2C%20Ata%C5%9Fehir%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1708890456064!5m2!1sen!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Küpmimarlık Location"
                  ></iframe>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
