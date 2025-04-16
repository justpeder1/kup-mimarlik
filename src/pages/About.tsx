
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';
import { Users, Award, Target, Briefcase } from 'lucide-react';

// Sample team members data
const teamMembers = [
  {
    id: 1,
    name: 'Ali Yılmaz',
    role: 'Founder & Lead Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300',
    bio: "Ali founded Küpmimarlık in 2010 after working with renowned architectural firms in Europe. He holds a Master's degree from ETH Zurich."
  },
  {
    id: 2,
    name: 'Elif Kaya',
    role: 'Senior Architect',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300',
    bio: "Elif specializes in sustainable design and has led some of our most innovative residential projects. She joined the firm in 2012."
  },
  {
    id: 3,
    name: 'Mehmet Öztürk',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300',
    bio: "Mehmet ensures our projects are delivered on time and to the highest standard. He has over 15 years of experience in the industry."
  },
  {
    id: 4,
    name: 'Zeynep Demir',
    role: 'Interior Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300',
    bio: "Zeynep brings spaces to life through thoughtful interior design. She has a background in both architecture and fine arts."
  }
];

const achievements = [
  { number: '120+', label: 'Projects Completed' },
  { number: '15', label: 'Years Experience' },
  { number: '18', label: 'Design Awards' },
  { number: '42', label: 'Team Members' }
];

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-architect-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-light"
              >
                About <span className="font-medium">Küpmimarlık</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-white/80"
              >
                We are a team of architects, designers, and visionaries dedicated to creating 
                spaces that inspire and endure. Founded on principles of geometric precision 
                and emotional minimalism, we approach each project as an opportunity to transform 
                ideas into reality.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1000" 
                alt="Küpmimarlık Studio" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <ScrollAnimation variant="fadeUp">
                <h2 className="text-3xl font-light mb-6">Our <span className="font-medium">Story</span></h2>
              </ScrollAnimation>
            </div>
            
            <div className="md:col-span-8">
              <ScrollAnimation variant="fadeUp" delay={0.2}>
                <div className="space-y-6">
                  <p className="text-lg text-architect-darkgray">
                    Küpmimarlık was founded in 2010 by Ali Yılmaz, an architect with a passion for 
                    creating spaces that balance form and function. What began as a small studio 
                    with just three employees has grown into one of Turkey's most respected 
                    architectural practices.
                  </p>
                  <p className="text-architect-darkgray">
                    Over the years, we've built a reputation for thoughtful design that responds 
                    to both the needs of our clients and the context of each site. Our work spans 
                    residential, commercial, cultural, and public projects, with a focus on creating 
                    spaces that stand the test of time.
                  </p>
                  <p className="text-architect-darkgray">
                    Today, our team includes architects, interior designers, project managers, and 
                    support staff who share a commitment to excellence. We continue to push the 
                    boundaries of what's possible, guided by our founding principles of geometric 
                    precision and emotional minimalism.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-architect-offwhite">
        <div className="container-custom">
          <ScrollAnimation variant="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Our <span className="font-medium">Values</span>
              </h2>
              <p className="text-architect-darkgray">
                These core principles guide our approach to every project and interaction.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollAnimation variant="fadeUp" delay={0.1}>
              <div className="bg-white p-8 h-full">
                <div className="mb-6 text-copper">
                  <Users size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium mb-3">Collaboration</h3>
                <p className="text-architect-darkgray">
                  We believe the best work emerges from open dialogue and shared vision between our team and our clients.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation variant="fadeUp" delay={0.2}>
              <div className="bg-white p-8 h-full">
                <div className="mb-6 text-copper">
                  <Award size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium mb-3">Excellence</h3>
                <p className="text-architect-darkgray">
                  We pursue excellence in every aspect of our work, from conceptual design to the smallest construction detail.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation variant="fadeUp" delay={0.3}>
              <div className="bg-white p-8 h-full">
                <div className="mb-6 text-copper">
                  <Target size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium mb-3">Innovation</h3>
                <p className="text-architect-darkgray">
                  We embrace new ideas, technologies, and approaches that push the boundaries of architectural possibility.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation variant="fadeUp" delay={0.4}>
              <div className="bg-white p-8 h-full">
                <div className="mb-6 text-copper">
                  <Briefcase size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium mb-3">Integrity</h3>
                <p className="text-architect-darkgray">
                  We conduct our business with honesty, transparency, and a commitment to ethical practices.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                <div className="text-center">
                  <h3 className="text-4xl md:text-5xl font-light text-copper mb-2">{item.number}</h3>
                  <p className="text-architect-darkgray">{item.label}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-architect-offwhite">
        <div className="container-custom">
          <ScrollAnimation variant="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Our <span className="font-medium">Team</span>
              </h2>
              <p className="text-architect-darkgray">
                Meet the talented individuals who bring our vision to life. Our diverse team 
                combines expertise and creativity to deliver exceptional architectural solutions.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={member.id} variant="fadeUp" delay={index * 0.1}>
                <div className="group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-medium">{member.name}</h3>
                    <p className="text-copper mt-1">{member.role}</p>
                    <p className="text-architect-darkgray mt-3 text-sm">{member.bio}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-architect-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1542272201-b1ca555f8505?q=80&w=2000" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation variant="fadeUp">
              <h2 className="text-3xl md:text-4xl font-light mb-8">
                Our Design <span className="font-medium">Philosophy</span>
              </h2>
              <blockquote className="text-xl md:text-2xl font-light italic text-white/90 mb-8">
                "Architecture is not just about building. It's about creating spaces that elevate 
                the human experience through a perfect balance of form, function, and feeling."
              </blockquote>
              <p className="text-white/80">
                — Ali Yılmaz, Founder
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
