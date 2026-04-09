// "use client";
// import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
// import SAddlesCategoryItems from "@/components/ClientComponents/Saddles/SAddlesCategoryItems";
// import TailorMAade from "@/components/ClientComponents/Saddles/TailorMAade";
// import { useGetAllSaddlesQuery } from "@/src/redux/client/saddle/saddleApi";

// export default function AllSaddlesPage() {
//   const breadLink = [
//     {
//       label: "SADDLES",
//       href: "/saddles",
//     },
//   ];

//   const { data, isLoading } = useGetAllSaddlesQuery("");
//   const saddlesItemsArion = data?.data?.ARION;
//   const saddlesItemsAtlas = data?.data?.ATLAS;

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-[300px]">
//         <p className="text-xl font-semibold">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <BreadCrumb breadLink={breadLink} />
//       <div className="maxContainer">
//         <div className="lg:pt-[80px] lg:pb-[60px] pt-[60px] pb-[50px]">
//           <SAddlesCategoryItems
//             saddlesItems={{
//               name: "ARION SADDLES",
//               subtitle: "Fully Customizable",
//               products: saddlesItemsArion,
//             }}
//           />
//         </div>
//         <div className="lg:py-[60px] py-[50px]">
//           <SAddlesCategoryItems
//             saddlesItems={{
//               name: "ATLAS SADDLES",
//               subtitle: "Semi CUSTOM",
//               products: saddlesItemsAtlas,
//             }}
//           />
//         </div>
//         <div className="lg:py-[80px] py-[60px]">
//           <TailorMAade />
//         </div>
//       </div>
//     </div>
//   );
// }


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
