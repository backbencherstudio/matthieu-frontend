"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type Option = {
  id: string;
  name: string;
};

interface MultiSelectProps {
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder: string;
  disabled?: boolean;
}

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder,
  disabled = false,
}: MultiSelectProps) {
  const toggleValue = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter((v) => v !== id));
    } else {
      onChange([...value, id]);
    }
  };

  const selectedNames = value
    .map((id) => options.find((o) => o.id === id)?.name)
    .filter(Boolean) as string[];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          disabled={disabled}
          className={cn(
            "w-full justify-between font-normal border px-2 py-1.5 rounded-lg bg-transparent cursor-pointer",
            disabled && "opacity-60 cursor-not-allowed",
          )}
        >
          {value.length ? selectedNames.join(", ") : placeholder}
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty>No result found.</CommandEmpty>

          <CommandGroup className="max-h-60 overflow-auto">
            {options?.map((option) => {
              const isSelected = value.includes(option.id);

              return (
                <CommandItem
                  key={option.id}
                  value={option.name}
                  onSelect={() => toggleValue(option.id)}
                  className="cursor-pointer"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      isSelected ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {option.name}
                </CommandItem>
              );
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
