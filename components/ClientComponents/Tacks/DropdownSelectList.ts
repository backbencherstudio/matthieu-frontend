interface Category {
  label: string;
  value: string;
}

export const categories: Category[] = [
  { label: "All", value: "" },
  { label: "BRIDLES", value: "Bridles" },
  { label: "REINS", value: "Reins" },
  { label: "BREASTPLATES", value: "BREASTPLATES" },
  { label: "GIRTHS", value: "Girths" },
  { label: "HALTERS & ROPES", value: "HALTERS & ROPES" },
  { label: "BOOTS", value: "BOOTS" },
  { label: "LEATHER CARE", value: "Leather Care" },
  { label: "ACCESSORIES", value: "Accessories" },
];

export const priceRanges: Category[] = [
  { label: "All Prices", value: "" },
  { label: "Under $100", value: "0-100" },
  { label: "$100 - $200", value: "100-200" },
  { label: "$200 - $300", value: "200-300" },
  { label: "$300 and above", value: "300+" },
];

export const colors: Category[] = [
  { label: "All Colors", value: "" },
  { label: "Black", value: "Black" },
  { label: "Brown", value: "Brown" },
  { label: "N/A", value: "N/A" },
];

export const sizes: Category[] = [
  { label: "All Sizes", value: "" },
  { label: "Full", value: "Full" },
  { label: "Cob", value: "Cob" },
  { label: "Pony", value: "Pony" },
  { label: "Standard", value: "Standard" },
  { label: "Long", value: "Long" },
  { label: "24inch", value: "24inch" },
  { label: "26inch", value: "26inch" },
  { label: "28inch", value: "28inch" },
  { label: "Medium", value: "Medium" },
  { label: "Large", value: "Large" },
  { label: "N/A", value: "N/A" },
];