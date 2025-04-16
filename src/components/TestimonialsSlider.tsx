import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

// Testimonial type definition
export type Testimonial = {
  id: string;
  name: string;
  position: string;
  company: string;
  projectReference: string;
  rating: number;
  comment: string;
  image: string;
};

type TestimonialsSliderProps = {
  testimonials: Testimonial[];
  autoplaySpeed?: number;
};

const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({ 
  testimonials, 
  autoplaySpeed = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Autoplay functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, autoplaySpeed);
      
      return () => clearInterval(interval);
    }
  }, [testimonials.length, autoplaySpeed, isPaused]);

  // Navigate to previous testimonial
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next testimonial
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  // Render star rating
  const renderRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-copper fill-copper' : 'text-architect-gray'}`}
      />
    ));
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div 
      className="relative overflow-hidden bg-architect-offwhite py-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom relative">
        {/* Quote icon */}
        <div className="absolute top-0 left-0 opacity-5">
          <Quote size={120} />
        </div>
        
        {/* Testimonial slider */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col md:flex-row items-center gap-8 p-6"
            >
              {/* Testimonial image */}
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
              
              {/* Testimonial content */}
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  {renderRating(testimonials[currentIndex].rating)}
                </div>
                
                <p className="text-lg md:text-xl italic mb-4">
                  "{testimonials[currentIndex].comment}"
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="font-medium text-architect-black">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-architect-darkgray">
                      {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                  
                  <div className="mt-2 md:mt-0">
                    <span className="text-sm bg-copper/10 text-copper px-3 py-1 rounded-full">
                      {testimonials[currentIndex].projectReference}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white border border-architect-gray hover:bg-architect-black hover:text-white hover:border-architect-black transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Dots indicator */}
            <div className="flex items-center gap-2 px-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-copper w-4' : 'bg-architect-gray'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white border border-architect-gray hover:bg-architect-black hover:text-white hover:border-architect-black transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
