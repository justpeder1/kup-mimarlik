import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface FilterOption {
  id: string;
  name: string;
}

export interface SortOption {
  id: string;
  name: string;
}

interface FilterSortControlsProps {
  filterOptions: {
    category: FilterOption[];
    year: FilterOption[];
    location: FilterOption[];
  };
  sortOptions: SortOption[];
  selectedFilters: {
    category: string[];
    year: string[];
    location: string[];
  };
  selectedSort: string;
  onFilterChange: (filterType: 'category' | 'year' | 'location', value: string) => void;
  onSortChange: (sortId: string) => void;
  onClearFilters: () => void;
}

const FilterSortControls: React.FC<FilterSortControlsProps> = ({
  filterOptions,
  sortOptions,
  selectedFilters,
  selectedSort,
  onFilterChange,
  onSortChange,
  onClearFilters
}) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Filtreler</h3>
          <div className="flex flex-wrap gap-2">
            {selectedFilters.category.length > 0 || 
             selectedFilters.year.length > 0 || 
             selectedFilters.location.length > 0 ? (
              <button
                onClick={onClearFilters}
                className="text-sm text-copper hover:text-copper-dark transition-colors"
              >
                Filtreleri Temizle
              </button>
            ) : null}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-architect-darkgray">Sırala:</span>
          <div className="relative">
            <select
              value={selectedSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none bg-white border border-architect-gray px-4 py-2 pr-8 text-sm focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all duration-300"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown size={16} className="text-architect-darkgray" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Category Filter */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Kategori</h4>
          <div className="space-y-1 max-h-48 overflow-y-auto">
            {filterOptions.category.map((option) => (
              <div key={option.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${option.id}`}
                  checked={selectedFilters.category.includes(option.id)}
                  onChange={() => onFilterChange('category', option.id)}
                  className="w-4 h-4 text-copper border-architect-gray rounded focus:ring-copper focus:ring-1"
                />
                <label
                  htmlFor={`category-${option.id}`}
                  className="ml-2 text-sm text-architect-black cursor-pointer"
                >
                  {option.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Year Filter */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Yıl</h4>
          <div className="space-y-1 max-h-48 overflow-y-auto">
            {filterOptions.year.map((option) => (
              <div key={option.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`year-${option.id}`}
                  checked={selectedFilters.year.includes(option.id)}
                  onChange={() => onFilterChange('year', option.id)}
                  className="w-4 h-4 text-copper border-architect-gray rounded focus:ring-copper focus:ring-1"
                />
                <label
                  htmlFor={`year-${option.id}`}
                  className="ml-2 text-sm text-architect-black cursor-pointer"
                >
                  {option.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Location Filter */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Konum</h4>
          <div className="space-y-1 max-h-48 overflow-y-auto">
            {filterOptions.location.map((option) => (
              <div key={option.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`location-${option.id}`}
                  checked={selectedFilters.location.includes(option.id)}
                  onChange={() => onFilterChange('location', option.id)}
                  className="w-4 h-4 text-copper border-architect-gray rounded focus:ring-copper focus:ring-1"
                />
                <label
                  htmlFor={`location-${option.id}`}
                  className="ml-2 text-sm text-architect-black cursor-pointer"
                >
                  {option.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSortControls;
