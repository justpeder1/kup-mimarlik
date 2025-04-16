import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  value, 
  onChange, 
  placeholder = 'Projelerde ara...' 
}) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-architect-darkgray">
        <Search size={18} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full py-3 pl-10 pr-4 text-sm text-architect-black bg-white border border-architect-gray focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all duration-300"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
