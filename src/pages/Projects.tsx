
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ScrollAnimation from '../components/ScrollAnimation';
import SearchBar from '../components/SearchBar';
import FilterSortControls, { FilterOption, SortOption } from '../components/FilterSortControls';
import TestimonialsSlider from '../components/TestimonialsSlider';
import testimonials from '../data/testimonials';

// Sample projects data
const allProjects = [
  {
    id: '01',
    title: 'Crystal Pavilion',
    type: 'Commercial',
    year: '2023',
    location: 'Istanbul',
    category: 'commercial',
    thumbnail: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=1000',
    isRenovation: false,
    description: 'A landmark commercial structure with a striking glass facade that reflects its surroundings while creating a unique visual identity.'
  },
  {
    id: '02',
    title: 'Minimal Residence',
    type: 'Residential',
    year: '2022',
    location: 'Ankara',
    category: 'residential',
    thumbnail: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000',
    isRenovation: false,
    description: 'A private home that exemplifies our design philosophy of emotional minimalism with clean lines, simple volumes, and a restrained material palette.'
  },
  {
    id: '03',
    title: 'Cubic Gallery',
    type: 'Cultural',
    year: '2021',
    location: 'Izmir',
    category: 'cultural',
    thumbnail: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1000',
    isRenovation: false,
    description: 'A contemporary art gallery designed with modular cubic spaces that can be reconfigured for different exhibitions and artistic experiences.'
  },
  {
    id: '04',
    title: 'Heritage Renovation',
    type: 'Residential',
    year: '2023',
    location: 'Istanbul',
    category: 'residential',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000',
    isRenovation: true,
    description: 'A careful restoration of a historic Istanbul residence, preserving its architectural heritage while integrating modern amenities and sustainable features.'
  },
  {
    id: '05',
    title: 'Office Transformation',
    type: 'Commercial',
    year: '2022',
    location: 'Ankara',
    category: 'commercial',
    thumbnail: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000',
    isRenovation: true,
    description: 'A complete reimagining of a traditional office space into a collaborative, flexible work environment that promotes creativity and employee well-being.'
  },
  {
    id: '06',
    title: 'Urban Office Tower',
    type: 'Commercial',
    year: '2020',
    location: 'Istanbul',
    category: 'commercial',
    thumbnail: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1000',
    isRenovation: false,
    description: 'A striking high-rise office building that combines functionality with innovative design, featuring energy-efficient systems and panoramic views of Istanbul.'
  },
  {
    id: '07',
    title: 'Seaside Villa',
    type: 'Residential',
    year: '2019',
    location: 'Bodrum',
    category: 'residential',
    thumbnail: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1000',
    isRenovation: false,
    description: 'A luxurious coastal residence that harmonizes with its natural surroundings, featuring expansive terraces, infinity pool, and unobstructed views of the Aegean Sea.'
  },
  {
    id: '08',
    title: 'Modern Museum',
    type: 'Cultural',
    year: '2018',
    location: 'Antalya',
    category: 'cultural',
    thumbnail: 'https://images.unsplash.com/photo-1523192193543-6e7296d960e4?q=80&w=1000',
    isRenovation: false,
    description: 'A contemporary museum space designed to showcase both permanent and traveling exhibitions with innovative lighting solutions and flexible gallery spaces.'
  },
  {
    id: '09',
    title: 'Luxury Apartment Complex',
    type: 'Residential',
    year: '2020',
    location: 'Istanbul',
    category: 'residential',
    thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000',
    isRenovation: false,
    description: 'An exclusive residential development featuring premium apartments with high-end finishes, shared amenities including a spa, fitness center, and rooftop gardens.'
  }
];

const Projects: React.FC = () => {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    category: [] as string[],
    year: [] as string[],
    location: [] as string[]
  });
  const [selectedSort, setSelectedSort] = useState('newest');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  
  // Legacy filter state for backward compatibility
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Generate filter options from project data
  const filterOptions = useMemo(() => {
    const categories = [
      { id: 'residential', name: 'Residential' },
      { id: 'commercial', name: 'Commercial' },
      { id: 'cultural', name: 'Cultural' },
      { id: 'renovation', name: 'Renovations' }
    ];
    
    // Extract unique years from projects
    const years = [...new Set(allProjects.map(project => project.year))].map(year => ({
      id: year,
      name: year
    })).sort((a, b) => parseInt(b.id) - parseInt(a.id));
    
    // Extract unique locations from projects
    const locations = [...new Set(allProjects.map(project => project.location))].map(location => ({
      id: location,
      name: location
    })).sort((a, b) => a.name.localeCompare(b.name));
    
    return { category: categories, year: years, location: locations };
  }, []);
  
  // Sort options
  const sortOptions: SortOption[] = [
    { id: 'newest', name: 'En Yeni' },
    { id: 'oldest', name: 'En Eski' },
    { id: 'a-z', name: 'A-Z' },
    { id: 'z-a', name: 'Z-A' }
  ];
  
  // Handle filter changes
  const handleFilterChange = (filterType: 'category' | 'year' | 'location', value: string) => {
    setSelectedFilters(prev => {
      const currentValues = [...prev[filterType]];
      const valueIndex = currentValues.indexOf(value);
      
      if (valueIndex === -1) {
        // Add the value if it's not already selected
        return { ...prev, [filterType]: [...currentValues, value] };
      } else {
        // Remove the value if it's already selected
        currentValues.splice(valueIndex, 1);
        return { ...prev, [filterType]: currentValues };
      }
    });
  };
  
  // Handle category button filter (legacy)
  const handleCategoryFilter = (category: string) => {
    setCategoryFilter(category);
    
    // Clear other filters when using category buttons
    if (category !== 'all') {
      if (category === 'renovation') {
        setSelectedFilters({
          ...selectedFilters,
          category: []
        });
      } else {
        setSelectedFilters({
          ...selectedFilters,
          category: [category]
        });
      }
    } else {
      setSelectedFilters({
        ...selectedFilters,
        category: []
      });
    }
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSelectedFilters({
      category: [],
      year: [],
      location: []
    });
    setSearchQuery('');
    setCategoryFilter('all');
  };
  
  // Apply filters and search
  useEffect(() => {
    window.scrollTo(0, 0);
    
    let results = [...allProjects];
    
    // Apply search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      results = results.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.type.toLowerCase().includes(query) || 
        project.location.toLowerCase().includes(query) || 
        project.description?.toLowerCase().includes(query)
      );
    }
    
    // Apply category filter (legacy)
    if (categoryFilter !== 'all') {
      if (categoryFilter === 'renovation') {
        results = results.filter(project => project.isRenovation);
      } else {
        results = results.filter(project => project.category === categoryFilter);
      }
    }
    
    // Apply multi-filters
    if (selectedFilters.category.length > 0) {
      results = results.filter(project => selectedFilters.category.includes(project.category));
    }
    
    if (selectedFilters.year.length > 0) {
      results = results.filter(project => selectedFilters.year.includes(project.year));
    }
    
    if (selectedFilters.location.length > 0) {
      results = results.filter(project => selectedFilters.location.includes(project.location));
    }
    
    // Apply sorting
    switch (selectedSort) {
      case 'newest':
        results.sort((a, b) => parseInt(b.year) - parseInt(a.year));
        break;
      case 'oldest':
        results.sort((a, b) => parseInt(a.year) - parseInt(b.year));
        break;
      case 'a-z':
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'z-a':
        results.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    
    setFilteredProjects(results);
  }, [searchQuery, selectedFilters, selectedSort, categoryFilter]);
  
  // Category buttons (legacy UI)
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'renovation', name: 'Renovations' }
  ];

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
            Our <span className="font-medium">Projects</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-white/80 text-center max-w-2xl mx-auto"
          >
            Explore our portfolio of completed and ongoing architectural projects, 
            showcasing our commitment to innovative design and excellence in execution.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-custom">
          {/* Search and Filter Controls */}
          <ScrollAnimation variant="fadeUp">
            <div className="mb-8">
              <SearchBar 
                value={searchQuery} 
                onChange={setSearchQuery} 
                placeholder="Projelerde ara..." 
              />
            </div>
            
            <div className="flex flex-wrap justify-between items-center mb-6">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-architect-black text-white transition-all duration-300"
                >
                  <Filter size={16} />
                  <span>Filtreler</span>
                  {(selectedFilters.category.length > 0 || 
                    selectedFilters.year.length > 0 || 
                    selectedFilters.location.length > 0) && (
                    <span className="ml-1 w-5 h-5 rounded-full bg-copper text-white text-xs flex items-center justify-center">
                      {selectedFilters.category.length + selectedFilters.year.length + selectedFilters.location.length}
                    </span>
                  )}
                </button>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-architect-darkgray">Su0131rala:</span>
                  <select
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="appearance-none bg-white border border-architect-gray px-3 py-2 pr-8 text-sm focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all duration-300"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryFilter(category.id)}
                    className={`px-4 py-2 text-sm transition-all duration-300 ${
                      categoryFilter === category.id
                        ? 'bg-architect-black text-white'
                        : 'bg-transparent text-architect-black hover:bg-architect-gray'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Advanced Filters Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-architect-offwhite p-6 mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium">Geliu015fmiu015f Filtreler</h3>
                      <button 
                        onClick={() => setShowFilters(false)}
                        className="text-architect-darkgray hover:text-architect-black transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    
                    <FilterSortControls
                      filterOptions={filterOptions}
                      sortOptions={sortOptions}
                      selectedFilters={selectedFilters}
                      selectedSort={selectedSort}
                      onFilterChange={handleFilterChange}
                      onSortChange={setSelectedSort}
                      onClearFilters={clearFilters}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollAnimation>
          
          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={categoryFilter + searchQuery + JSON.stringify(selectedFilters) + selectedSort}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} {...project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-architect-darkgray mb-2">Arama kriterlerinize uygun proje bulunamadu0131.</p>
              <button
                onClick={clearFilters}
                className="text-copper hover:text-copper-dark transition-colors"
              >
                Filtreleri temizle
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-custom mb-12">
          <ScrollAnimation variant="fadeUp">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-2">
              Müşteri <span className="font-medium">Yorumları</span>
            </h2>
            <p className="text-architect-darkgray text-center max-w-2xl mx-auto">
              Müşterilerimizin projelerimiz hakkındaki değerli görüşleri ve deneyimleri
            </p>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation variant="fadeUp">
          <TestimonialsSlider testimonials={testimonials} />
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default Projects;
