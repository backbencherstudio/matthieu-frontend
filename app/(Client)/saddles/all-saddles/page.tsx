import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";
// import AllSaddlesPage from "./all-saddles/page";
import AllSaddles from "@/components/ClientComponents/Saddles/AllSaddles";

export default function AllSaddlesPage() {
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
