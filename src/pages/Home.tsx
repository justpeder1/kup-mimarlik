import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Home as HomeIcon, Building, Compass, LayoutGrid } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';

// Sample projects data
const featuredProjects = [
  {
    id: '01',
    title: 'Crystal Pavilion',
    type: 'Commercial',
    year: '2023',
    location: 'Istanbul',
    thumbnail: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=1000'
  },
  {
    id: '02',
    title: 'Minimal Residence',
    type: 'Residential',
    year: '2022',
    location: 'Ankara',
    thumbnail: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000'
  },
  {
    id: '03',
    title: 'Cubic Gallery',
    type: 'Cultural',
    year: '2021',
    location: 'Izmir',
    thumbnail: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1000'
  }
];

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-black">
            <motion.img
              src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2000"
              alt="Architecture"
              className="w-full h-full object-cover opacity-70"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
            />
          </div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl md:text-5xl lg:text-7xl font-light text-center max-w-4xl tracking-tight"
          >
            Designing <span className="font-medium">Geometry</span> into Life
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 max-w-xl text-center text-white/90 text-base md:text-lg"
          >
            We are a modern architecture studio focused on creating spaces that inspire, challenge and endure.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-12"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-architect-black flex items-center gap-2"
              >
                View Projects <ArrowRight size={16} />
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.8, delay: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-10"
          >
            <ArrowDown size={24} className="animate-scroll-down" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-architect-offwhite">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation variant="fadeRight">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000"
                  alt="About Küpmimarlık"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-copper text-white p-6 md:p-8">
                  <p className="text-sm md:text-base font-light">ESTABLISHED</p>
                  <p className="text-2xl md:text-3xl font-medium">2010</p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation variant="fadeLeft" delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-light">
                  We Create Spaces That <span className="font-medium">Reflect Your Vision</span>
                </h2>
                <p className="text-architect-darkgray">
                  Küpmimarlık is an award-winning architecture studio based in Istanbul. 
                  Founded in 2010, we specialize in creating spaces that seamlessly blend 
                  form, function, and feeling. Our design philosophy is rooted in geometric 
                  precision and emotional minimalism.
                </p>
                <p className="text-architect-darkgray">
                  Every project we undertake is approached with a careful consideration 
                  of the site, context, and client needs. We believe architecture should 
                  not only serve practical purposes but also evoke emotion and inspire action.
                </p>
                <div className="pt-4">
                  <Link to="/about">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-architect-black hover:text-copper transition-colors"
                    >
                      Learn more about us <ArrowRight size={16} />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container-custom">
          <ScrollAnimation variant="fadeUp">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-4">
                  Featured <span className="font-medium">Projects</span>
                </h2>
                <p className="text-architect-darkgray max-w-xl">
                  Our portfolio showcases a diverse range of architectural work, 
                  from residential homes to commercial spaces and cultural institutions.
                </p>
              </div>
              <Link to="/projects" className="mt-6 md:mt-0">
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-architect-black hover:text-copper transition-colors"
                >
                  View all projects <ArrowRight size={16} />
                </motion.button>
              </Link>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-architect-offwhite">
        <div className="container-custom">
          <ScrollAnimation variant="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Our <span className="font-medium">Services</span>
              </h2>
              <p className="text-architect-darkgray">
                We offer a comprehensive range of architectural services 
                to bring your vision to life, from concept to completion.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Residential Architecture"
              description="Custom homes, apartments, and residential complexes designed with a focus on livability and aesthetics."
              icon={HomeIcon}
              index={0}
            />
            <ServiceCard
              title="Commercial Architecture"
              description="Office buildings, retail spaces, and hospitality projects that balance functionality with brand identity."
              icon={Building}
              index={1}
            />
            <ServiceCard
              title="Interior Design"
              description="Thoughtful interior spaces that complement the architecture and enhance the user experience."
              icon={Compass}
              index={2}
            />
            <ServiceCard
              title="Urban Planning"
              description="Master plans and urban design strategies that create cohesive, sustainable communities."
              icon={LayoutGrid}
              index={3}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-architect-black text-white flex items-center gap-2 mx-auto"
              >
                Explore Services <ArrowRight size={16} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-architect-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <ScrollAnimation variant="fadeUp">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Let's Create <span className="font-medium">Something Amazing</span>
              </h2>
              <p className="text-white/80 mb-8">
                Whether you're looking to build a new home, renovate an existing space, 
                or develop a commercial project, we'd love to hear from you.
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

export default Home;
