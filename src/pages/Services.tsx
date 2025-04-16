
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';
import { Home, Building, Compass, LayoutGrid, PencilRuler, Map, Ruler, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'residential',
    title: 'Residential Architecture',
    description: 'We design homes that reflect your lifestyle and aspirations, from modern urban apartments to expansive family residences.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000',
    icon: Home,
    features: [
      'Custom Home Design',
      'Apartment and Condominium Design',
      'Residential Renovations',
      'Luxury Villas and Estates',
      'Interior Planning for Residences'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Architecture',
    description: 'Our commercial designs balance functionality, brand identity, and user experience to create successful spaces for business.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000',
    icon: Building,
    features: [
      'Office Buildings and Workspaces',
      'Retail and Restaurant Design',
      'Hospitality Environments',
      'Mixed-Use Developments',
      'Sustainable Commercial Solutions'
    ]
  },
  {
    id: 'interior',
    title: 'Interior Design',
    description: 'We create thoughtful interiors that enhance the architectural concept, focusing on materials, light, and spatial experiences.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000',
    icon: Compass,
    features: [
      'Residential Interior Design',
      'Commercial Interior Design',
      'Furniture Selection and Custom Design',
      'Material and Finish Specifications',
      'Lighting Design and Planning'
    ]
  },
  {
    id: 'urban',
    title: 'Urban Planning',
    description: 'Our approach to urban design creates cohesive, sustainable communities that balance development with quality of life.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000',
    icon: LayoutGrid,
    features: [
      'Master Planning for Communities',
      'Urban Regeneration',
      'Public Space Design',
      'Sustainable City Planning',
      'Mixed-Use District Development'
    ]
  }
];

const processList = [
  {
    title: 'Consultation & Brief',
    description: 'We begin by understanding your vision, needs, and constraints through in-depth conversations.',
    icon: Users
  },
  {
    title: 'Concept Design',
    description: 'We develop initial design concepts that translate your requirements into architectural language.',
    icon: PencilRuler
  },
  {
    title: 'Design Development',
    description: 'The chosen concept is refined, with detailed plans, elevations, and material selections.',
    icon: Ruler
  },
  {
    title: 'Documentation & Approval',
    description: 'We prepare comprehensive documentation and navigate the approval process with relevant authorities.',
    icon: Map
  }
];

const Services: React.FC = () => {
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
            Our <span className="font-medium">Services</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-white/80 text-center max-w-2xl mx-auto"
          >
            We offer a comprehensive range of architectural services, guiding 
            your project from concept to completion with expertise and care.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container-custom">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index !== services.length - 1 ? 'mb-24' : ''
              }`}
            >
              {/* Image (alternating sides) */}
              <ScrollAnimation 
                variant={index % 2 === 0 ? "fadeRight" : "fadeLeft"}
                className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </ScrollAnimation>
              
              {/* Content */}
              <ScrollAnimation 
                variant={index % 2 === 0 ? "fadeLeft" : "fadeRight"}
                delay={0.2}
                className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="space-y-6">
                  <div className="text-copper">
                    <service.icon size={40} strokeWidth={1.5} />
                  </div>
                  
                  <h2 className="text-3xl font-light">{service.title}</h2>
                  
                  <p className="text-architect-darkgray">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-copper mt-1">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7L5 11L13 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-architect-offwhite">
        <div className="container-custom">
          <ScrollAnimation variant="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Our Design <span className="font-medium">Process</span>
              </h2>
              <p className="text-architect-darkgray">
                We follow a structured approach to ensure your vision is translated into 
                exceptional architecture, with clear communication at every stage.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processList.map((process, index) => (
              <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                <div className="bg-white p-8 h-full">
                  <div className="mb-6 text-copper">
                    <process.icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{process.title}</h3>
                  <p className="text-architect-darkgray">{process.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-architect-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <ScrollAnimation variant="fadeUp">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Ready to <span className="font-medium">Get Started?</span>
              </h2>
              <p className="text-white/80 mb-8">
                Contact us to discuss your project requirements. We're here to help bring your architectural vision to life.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white text-architect-black flex items-center gap-2 mx-auto"
                >
                  Contact Us <ArrowRight size={16} />
                </motion.button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Services;
