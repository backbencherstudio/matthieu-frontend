import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface PriceRangeFilterProps {
  title?: string;
  minPrice?: number;
  maxPrice?: number;
  onPriceChange: (min: number, max: number) => void;
}

const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({
  title = "PRICE",
  minPrice = 1000,
  maxPrice = 10000,
  onPriceChange
}) => {
  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const minDistance = Math.abs(value - minValue);
    const maxDistance = Math.abs(value - maxValue);
    
    if (minDistance <= maxDistance) {
      // Closer to min handle
      const newMin = Math.min(value, maxValue - 100);
      setMinValue(newMin);
      onPriceChange(newMin, maxValue);
    } else {
      // Closer to max handle
      const newMax = Math.max(value, minValue + 100);
      setMaxValue(newMax);
      onPriceChange(minValue, newMax);
    }
  };

  const displayText = `$${minValue.toLocaleString()} - $${maxValue.toLocaleString()}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-gray-600 text-sm flex items-center gap-2 cursor-pointer focus-visible:outline-none">
        <span className='uppercase font-medium'>{displayText}</span> 
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-lg min-w-[300px] p-4">
        <div className="space-y-4">
          {/* Range Slider Container */}
          <div className="relative px-2">
            {/* Track */}
            <div className="relative h-1 bg-gray-200 rounded">
              {/* Active Range */}
              <div 
                className="absolute h-1 bg-gray-800 rounded"
                style={{
                  left: `${((minValue - 0) / (20000 - 0)) * 100}%`,
                  width: `${((maxValue - minValue) / (20000 - 0)) * 100}%`
                }}
              />
            </div>
            
            {/* Single Slider for both handles */}
            <input
              type="range"
              min="0"
              max="20000"
              step="100"
              onChange={handleSliderChange}
              className="absolute top-0 w-full h-4 opacity-0 cursor-pointer"
              style={{ zIndex: 2 }}
            />
            
            {/* Min Handle */}
            <div
              className="absolute w-4 h-4 bg-gray-800 rounded-sm transform -translate-y-1.5 pointer-events-none"
              style={{ 
                left: `calc(${((minValue - 0) / (20000 - 0)) * 100}% - 8px)`
              }}
            />
            
            {/* Max Handle */}
            <div
              className="absolute w-4 h-4 bg-gray-800 rounded-sm transform -translate-y-1.5 pointer-events-none"
              style={{ 
                left: `calc(${((maxValue - 0) / (20000 - 0)) * 100}% - 8px)`
              }}
            />
          </div>
         
          {/* Price Labels */}
          <div className="flex justify-between text-sm text-gray-500 px-2">
            <span>$1,000</span>
            <span>$10,000</span>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PriceRangeFilter;