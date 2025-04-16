import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ProjectTimeline, { TimelineItem } from '../components/ProjectTimeline';

// Sample projects data with more details
const projectsData = [
  {
    id: '01',
    title: 'Crystal Pavilion',
    type: 'Commercial',
    year: '2023',
    location: 'Istanbul',
    client: 'TechCorp International',
    architect: 'Ali Yılmaz',
    area: '1,200 m²',
    status: 'Completed',
    description: `The Crystal Pavilion is a landmark commercial structure located in the heart of Istanbul's business district. Inspired by crystalline forms found in nature, the building features a striking glass facade that reflects its surroundings while creating a unique visual identity.

    The design emphasizes transparency and light, with a geometric precision that defines both the exterior and interior spaces. The pavilion houses retail spaces on the ground floor, with offices above, all organized around a central atrium that brings natural light deep into the building.

    Sustainability was a key consideration, with advanced glazing, solar shading, and green technologies integrated throughout. The result is a building that not only makes a bold architectural statement but also performs efficiently in terms of energy use and occupant comfort.`,
    images: [
      'https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=2000',
      'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=2000',
      'https://images.unsplash.com/photo-1562628754-cc3d2e22c8c4?q=80&w=2000',
      'https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?q=80&w=2000'
    ],
    isRenovation: false,
    timeline: [
      {
        date: 'January 2021',
        title: 'Project Conception',
        description: 'Initial client meetings and project brief development. Exploration of site conditions and preliminary concept sketches.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200'
      },
      {
        date: 'April 2021',
        title: 'Design Development',
        description: 'Refinement of architectural concept, development of detailed plans, elevations, and 3D models.',
        image: 'https://images.unsplash.com/photo-1503160865267-af4660af5b2d?q=80&w=1200'
      },
      {
        date: 'August 2021',
        title: 'Permit Approval',
        description: 'Submission and approval of building permits and regulatory requirements. Preparation of construction documents.',
        image: null
      },
      {
        date: 'October 2021',
        title: 'Construction Begins',
        description: 'Groundbreaking ceremony and commencement of foundation work and structural framing.',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200'
      },
      {
        date: 'July 2022',
        title: 'Facade Installation',
        description: 'Installation of the distinctive glass facade system and exterior cladding materials.',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200'
      },
      {
        date: 'February 2023',
        title: 'Interior Completion',
        description: 'Completion of interior finishes, systems integration, and landscape elements.',
        image: 'https://images.unsplash.com/photo-1545043059-951e55bf9718?q=80&w=1200'
      },
      {
        date: 'May 2023',
        title: 'Project Completion',
        description: 'Final inspections, client handover, and grand opening ceremony.',
        image: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=1200'
      }
    ]
  },
  {
    id: '02',
    title: 'Minimal Residence',
    type: 'Residential',
    year: '2022',
    location: 'Ankara',
    client: 'Private Client',
    architect: 'Elif Kaya',
    area: '450 m²',
    status: 'Completed',
    description: `The Minimal Residence is a private home in Ankara that exemplifies our design philosophy of emotional minimalism. The architecture is characterized by clean lines, simple volumes, and a restrained material palette that creates a sense of calm and clarity.

    The house is organized as a series of interconnected spaces arranged around a central courtyard, providing both privacy and connection to nature. Floor-to-ceiling windows frame specific views, while careful attention to natural light creates spaces that change character throughout the day.

    Materials were selected for their authenticity and tactile qualities, with concrete, wood, and glass forming the primary palette. The result is a residence that is both visually striking and deeply comfortable to live in—a true reflection of the client's lifestyle and our commitment to residential excellence.`,
    images: [
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000',
      'https://images.unsplash.com/photo-1617098900591-3f90928e8c54?q=80&w=2000',
      'https://images.unsplash.com/photo-1557434440-5429c8e66ab7?q=80&w=2000'
    ],
    isRenovation: false,
    timeline: [
      {
        date: 'March 2020',
        title: 'Initial Client Meeting',
        description: 'First consultation with the client to understand their vision, lifestyle needs, and aesthetic preferences.',
        image: null
      },
      {
        date: 'June 2020',
        title: 'Concept Design',
        description: 'Development of architectural concept focusing on minimalist principles and connection to nature.',
        image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=1200'
      },
      {
        date: 'September 2020',
        title: 'Design Development',
        description: 'Refinement of plans, material selections, and detailed design elements based on client feedback.',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200'
      },
      {
        date: 'December 2020',
        title: 'Construction Documents',
        description: 'Preparation of detailed construction drawings and specifications for builder bidding.',
        image: null
      },
      {
        date: 'February 2021',
        title: 'Construction Begins',
        description: 'Breaking ground and foundation work, followed by structural framing of the residence.',
        image: 'https://images.unsplash.com/photo-1521790361543-f645cf042ec4?q=80&w=1200'
      },
      {
        date: 'October 2021',
        title: 'Envelope Completion',
        description: 'Completion of exterior envelope, including windows, doors, and roofing systems.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200'
      },
      {
        date: 'January 2022',
        title: 'Interior Finishes',
        description: 'Installation of interior finishes, cabinetry, fixtures, and custom architectural elements.',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200'
      },
      {
        date: 'April 2022',
        title: 'Project Completion',
        description: 'Final inspections, client walkthrough, and handover of the completed residence.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200'
      }
    ]
  },
  {
    id: '03',
    title: 'Cubic Gallery',
    type: 'Cultural',
    year: '2021',
    location: 'Izmir',
    client: 'Izmir Cultural Foundation',
    architect: 'Ali Yılmaz',
    area: '800 m²',
    status: 'Completed',
    description: `The Cubic Gallery is a contemporary art space in Izmir that explores the relationship between art, architecture, and audience. The design consists of a series of interconnected cubic volumes that create a variety of exhibition spaces, each with its own character and lighting conditions.

    The purity of the cubic forms creates a neutral backdrop for the art while providing a powerful architectural experience. Circulation through the gallery is carefully choreographed, leading visitors on a journey of discovery as they move between different exhibition spaces.

    The building's exterior is clad in perforated metal panels that filter light during the day and transform the building into a lantern at night. Large openings punctuate the facade, offering glimpses of the activities inside and creating a dialogue between the gallery and its urban context.`,
    images: [
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2000',
      'https://images.unsplash.com/photo-1613152183471-dc9584311ad6?q=80&w=2000',
      'https://images.unsplash.com/photo-1464125095980-e4ba444bec72?q=80&w=2000',
      'https://images.unsplash.com/photo-1464146072592-d5a172825beb?q=80&w=2000'
    ],
    isRenovation: false
  },
  {
    id: '04',
    title: 'Heritage Renovation',
    type: 'Residential',
    year: '2023',
    location: 'Istanbul',
    client: 'Private Client',
    architect: 'Zeynep Demir',
    area: '320 m²',
    status: 'Completed',
    description: `The Heritage Renovation project involved the careful restoration and modernization of a historic residence in Istanbul's Beyoğlu district. Our approach balanced preserving the building's architectural heritage with introducing contemporary elements that enhance functionality and comfort.

    The original facade with its ornate details was meticulously restored, while the interior was thoughtfully reconfigured to create open, light-filled spaces that meet modern living standards. Original architectural elements like ceiling moldings, wooden floors, and decorative ironwork were preserved and restored.

    The transformation showcases our studio's ability to breathe new life into historic structures while honoring their cultural significance. The result is a harmonious blend of past and present—a home that respects its heritage while embracing contemporary living.`,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2000',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2000'
    ],
    isRenovation: true,
    beforeAfterImages: [
      {
        before: 'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=2000',
        after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000',
        area: 'Living Room'
      },
      {
        before: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2000',
        after: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2000',
        area: 'Kitchen'
      },
      {
        before: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2000',
        after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000',
        area: 'Bedroom'
      }
    ],
    timeline: [
      {
        date: 'September 2021',
        title: 'Building Assessment',
        description: 'Detailed assessment of the historic structure, including architectural survey and condition report.',
        image: 'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1200'
      },
      {
        date: 'December 2021',
        title: 'Preservation Planning',
        description: 'Development of preservation strategy and identification of key historic elements to be restored.',
        image: null
      },
      {
        date: 'February 2022',
        title: 'Design Development',
        description: 'Creation of renovation plans that balance historic preservation with modern functionality.',
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200'
      },
      {
        date: 'April 2022',
        title: 'Heritage Approvals',
        description: 'Obtaining necessary approvals from heritage conservation authorities and building permits.',
        image: null
      },
      {
        date: 'June 2022',
        title: 'Structural Reinforcement',
        description: 'Careful structural reinforcement while preserving the historic fabric of the building.',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200'
      },
      {
        date: 'October 2022',
        title: 'Facade Restoration',
        description: 'Meticulous restoration of the historic facade, including ornamental details and stonework.',
        image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200'
      },
      {
        date: 'January 2023',
        title: 'Interior Renovation',
        description: 'Modern interior updates while preserving and highlighting original architectural features.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200'
      },
      {
        date: 'April 2023',
        title: 'Project Completion',
        description: 'Final details, furnishing, and client handover of the fully restored and renovated residence.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200'
      }
    ]
  },
  {
    id: '05',
    title: 'Office Transformation',
    type: 'Commercial',
    year: '2022',
    location: 'Ankara',
    client: 'TechStart Co.',
    architect: 'Ali Yılmaz',
    area: '650 m²',
    status: 'Completed',
    description: `The Office Transformation project involved converting an outdated commercial space into a dynamic, collaborative work environment for a growing tech company. The existing space featured compartmentalized offices and limited natural light, creating a disconnected and uninspiring workplace.

    Our design opened up the floor plan, introduced flexible workstations, and created a variety of collaborative spaces to support different work styles. We removed dropped ceilings to expose the building's structure and maximize ceiling height, while adding large interior windows and glass partitions to bring natural light deep into the space.

    The material palette combines industrial elements with warm, natural materials to create a space that feels both contemporary and comfortable. The transformation has not only improved the aesthetic quality of the workplace but has also enhanced employee satisfaction and productivity.`,
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000',
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2000'
    ],
    isRenovation: true,
    beforeAfterImages: [
      {
        before: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000',
        after: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000',
        area: 'Main Office Area'
      },
      {
        before: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=2000',
        after: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000',
        area: 'Meeting Room'
      },
      {
        before: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000',
        after: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2000',
        area: 'Reception'
      }
    ]
  }
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<typeof projectsData[0] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  
  // For the image gallery
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the project by id
    const foundProject = projectsData.find(p => p.id === id);
    
    // Simulate loading
    setTimeout(() => {
      setProject(foundProject);
      setLoading(false);
    }, 500);
  }, [id]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (!project) return;
    
    const imagesLength = project.images.length;
    
    if (direction === 'next') {
      setCurrentImageIndex((currentImageIndex + 1) % imagesLength);
    } else {
      setCurrentImageIndex((currentImageIndex - 1 + imagesLength) % imagesLength);
    }
  };

  if (loading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-12 h-12 rounded-full border-4 border-t-copper border-r-copper border-b-transparent border-l-transparent animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-medium mb-4">Project Not Found</h2>
        <p className="mb-6 text-architect-darkgray">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-architect-black text-white flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Back to Projects
          </motion.button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="h-[70vh] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-black">
            <motion.img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover opacity-70"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
            />
          </div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white container-custom">
          <Link to="/projects" className="absolute top-4 left-4 md:top-8 md:left-8 text-white/80 hover:text-white transition-colors flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-copper mb-3">{project.type}</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-4">{project.title}</h1>
            <p className="text-white/80">{project.location}, {project.year}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollAnimation variant="fadeRight">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-light mb-6">Project <span className="font-medium">Details</span></h2>
                
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-architect-darkgray text-sm">Client</span>
                    <span>{project.client}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-architect-darkgray text-sm">Lead Architect</span>
                    <span>{project.architect}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-architect-darkgray text-sm">Location</span>
                    <span>{project.location}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-architect-darkgray text-sm">Year</span>
                    <span>{project.year}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-architect-darkgray text-sm">Area</span>
                    <span>{project.area}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-architect-darkgray text-sm">Status</span>
                    <span>{project.status}</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation variant="fadeLeft" delay={0.2}>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-light mb-6">Project <span className="font-medium">Description</span></h2>
                
                <div className="space-y-4 text-architect-darkgray">
                  {project.description.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Before/After Slider for Renovation Projects */}
      {project.isRenovation && project.beforeAfterImages && (
        <section className="py-20">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp">
              <h2 className="text-2xl font-light mb-8">Before & <span className="font-medium">After</span></h2>
              <p className="text-architect-darkgray mb-10">Slide to compare the transformation of spaces in this renovation project.</p>
            </ScrollAnimation>
            
            <div className="space-y-16">
              {project.beforeAfterImages.map((item, index) => (
                <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-light">{item.area}</h3>
                    <BeforeAfterSlider 
                      beforeImage={item.before} 
                      afterImage={item.after}
                      beforeLabel="Before"
                      afterLabel="After"
                    />
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Timeline */}
      {'timeline' in project && project.timeline && (
        <section className="py-20">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp">
              <h2 className="text-2xl font-light mb-8">Project <span className="font-medium">Timeline</span></h2>
              <p className="text-architect-darkgray mb-10">Follow the journey of this project from initial concept to final completion.</p>
            </ScrollAnimation>
            
            <ProjectTimeline items={project.timeline} />
          </div>
        </section>
      )}

      {/* Project Gallery */}
      <section className="py-20 bg-architect-offwhite">
        <div className="container-custom">
          <ScrollAnimation variant="fadeUp">
            <h2 className="text-2xl font-light mb-8">Project <span className="font-medium">Gallery</span></h2>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                <div 
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white z-50 p-2"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X size={24} />
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-50 p-2"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
            >
              <ChevronLeft size={32} />
            </button>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-50 p-2"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
            >
              <ChevronRight size={32} />
            </button>
            
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Fullscreen Image ${currentImageIndex + 1}`}
              className="max-h-full max-w-full object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-4 text-white/80 text-sm">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;
