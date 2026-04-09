
import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import AllSaddles from "@/components/ClientComponents/Saddles/AllSaddles";

export default function SaddlesPage() {
  const breadLink = [
  { label: "SADDLES", href: "/saddles" },
];
  return (
    <div>
      {/* <AllSaddlesPage /> */}

      <div>
            <BreadCrumb breadLink={breadLink} />
      
            <div className="maxContainer">
              <AllSaddles />
            </div>
          </div>
    </div>
  );
}
