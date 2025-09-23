import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ChevronDown } from 'lucide-react';

interface FilterItem {
  label: string;
  value: string;
}

interface DropdownFilterProps {
  title: string;
  items: FilterItem[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ title, items, selectedValue, onValueChange }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-secondary-text text-base flex items-center gap-2 cursor-pointer focus-visible:border-none">
        <span>{title}</span> <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#F4F5F7] rounded-none">
        {items.map((item, idx) => (
          <DropdownMenuItem
            key={idx}
            className="text-sm"
            onSelect={(e) => e.preventDefault()}
          >
            <div className="flex items-start gap-2">
              <Checkbox
                id={`${title.toLowerCase()}-${item.value}`}
                value={item.label}
                checked={selectedValue === item.value}
                onCheckedChange={(checked) =>
                  onValueChange(checked ? item.value : "")
                }
                className="cursor-pointer"
              />
              <Label
                htmlFor={`${title.toLowerCase()}-${item.value}`}
                className="text-sm cursor-pointer text-primary-text"
              >
                {item.label}
              </Label>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownFilter;