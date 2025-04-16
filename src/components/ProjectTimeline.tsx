import React from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  image?: string;
}

interface ProjectTimelineProps {
  items: TimelineItem[];
}

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-architect-gray transform md:-translate-x-[0.5px] z-0"></div>
      
      <div className="relative z-10">
        {items.map((item, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline Point */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-copper flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-copper"></div>
                </div>
              </div>
              
              {/* Mobile Timeline Point */}
              <div className="md:hidden absolute left-[15px]">
                <div className="w-6 h-6 rounded-full bg-white border-2 border-copper flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-copper"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className={`w-full md:w-[calc(50%-20px)] pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <ScrollAnimation variant={index % 2 === 0 ? "fadeRight" : "fadeLeft"}>
                  <div className="bg-white p-6 shadow-sm">
                    <div className="text-copper text-sm font-medium mb-2">{item.date}</div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-architect-darkgray">{item.description}</p>
                    
                    {item.image && (
                      <div className="mt-4">
                        <motion.img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-auto object-cover"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    )}
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;
