import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import FilteredCategory from "@/components/ClientComponents/Tacks/FilteredCategory";

export default function BridlesPage() {
return null;

  const breadLink = [
    {
      label: "TACK",
      href: "/TACK",
    },
    {
      label: "BRIDLES",
      href: "/tack/bridles",
    },
  ];

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className="maxContainer my-12">
        <FilteredCategory categoryData={categoryItems} title="Bridles" />
      </div>
    </div>
  );
}

const categoryItems = [
  {
    id: 1,
    name: "Anatomical Double Noseband Bridle",
    category: "Bridles",
    image: "/home/bridles.png",
    price: "$370.00",
    color: "Black",
    size: "Full",
  },
  {
    id: 2,
    name: "Anatomical Double Noseband Bridle",
    category: "Bridles",
    image: "/home/bridles.png",
    price: "$370.00",
    color: "Brown",
    size: "Cob",
  },
  {
    id: 3,
    name: "Anatomical Double Noseband Bridle",
    category: "Bridles",
    image: "/home/bridles.png",
    price: "$370.00",
    color: "Black",
    size: "Pony",
  },
  {
    id: 4,
    name: "Anatomical Double Noseband Bridle",
    category: "Bridles",
    image: "/home/bridles.png",
    price: "$370.00",
    color: "Brown",
    size: "Full",
  },
  {
    id: 5,
    name: "Anatomical Double Noseband Bridle",
    category: "Bridles",
    image: "/home/bridles.png",
    price: "$370.00",
    color: "Black",
    size: "Cob",
  },
  {
    id: 6,
    name: "Anatomical Double Noseband Bridle",
    category: "Bridles",
    image: "/home/bridles.png",
    price: "$370.00",
    color: "Brown",
    size: "Pony",
  },
  {
    id: 7,
    name: "Anatomical Double Noseband Bridle",
    category: "Bridles",
    image: "/home/bridles.png",
    price: "$370.00",
    color: "Black",
    size: "Full",
  },
  {
    id: 8,
    name: "Anatomical Double Noseband Bridle",
    category: "Bridles",
    image: "/home/bridles.png",
    price: "$370.00",
    color: "Brown",
    size: "Cob",
  },
];
