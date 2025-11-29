// "use client";
// import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";
// import ImageSelectIcon from "@/components/Icons/DashboardIcons/ImageSelectIcon";
// import { useRef, useState } from "react";

// const AddAmbassador = () => {
//   const breadLink = [
//     {
//       label: "Arion Ambassador",
//       href: "/admin/cms",
//     },
//     {
//       label: "Add New Ambassador",
//     },
//   ];

//   const [image, setImage] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const triggerFileInput = () => {
//     fileInputRef.current?.click();
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <>
//       <BreadCrumb breadLink={breadLink} />
//       <div className="p-4 bg-[#FFF] rounded-xl mt-5">
//         <h1 className="text-[20px] leading-[138%] tracking-[0.01px] font-extrabold">
//           Add New Ambassador
//         </h1>
//         <form className="mt-4">
//           <div className="flex flex-col md:flex-row md:justify-between gap-6">
//             <div
//               onClick={triggerFileInput}
//               className="cursor-pointer border border-dashed border-[#1F274B] rounded-[6px] bg-[#F8F9FB] m-auto h-[260px] min-w-[260px] flex items-center justify-center"
//             >
//               <div>
//                 {image ? (
//                   <img
//                     src={image}
//                     alt="Uploaded"
//                     className="object-cover rounded-[6px] h-[260px] w-[260px]"
//                     draggable={false}
//                   />
//                 ) : (
//                   <div className="flex flex-col items-center justify-center text-center text-[#4C526F]">
//                     <ImageSelectIcon className="mb-2" />
//                     <p className="text-sm">Profile Image</p>
//                   </div>
//                 )}

//                 {/* HIDDEN INPUT */}
//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                   className="hidden"
//                 />
//               </div>
//             </div>
//             <div className="w-full">
//               <div>
//                 <label className="text-[12px] leading-[100%] text-[#696E86]">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   className="p-3 border border-[#ECEFF3] ronunded-[4px] w-full rounded-[4px]"
//                   placeholder="Nick Dello Joio"
//                 />
//               </div>
//               <div className="mt-4">
//                 <label className="text-[12px] leading-[100%] text-[#696E86]">
//                   Social Links
//                 </label>
//                 <input
//                   type="text"
//                   className="p-3 border border-[#ECEFF3] ronunded-[4px] w-full rounded-[4px]"
//                   placeholder="http://www.instagram.com/taylor.cawley/"
//                 />
//               </div>
//               <div className="mt-4">
//                 <label className="text-[12px] leading-[100%] text-[#696E86]">
//                   Discipline
//                 </label>
//                 <input
//                   type="text"
//                   className="p-3 border border-[#ECEFF3] ronunded-[4px] w-full rounded-[4px]"
//                   placeholder="Jumping"
//                 />
//               </div>
//               <div className="mt-4">
       
//                 <label className="text-[12px] leading-[100%] text-[#696E86]">
//                   Country name
//                 </label>
//                 <input
//                   type="text"
//                   className="p-3 border border-[#ECEFF3] ronunded-[4px] w-full rounded-[4px]"
//                   placeholder="Jumping"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex items-end justify-end">
//             <button className="px-3 py-2.5 bg-[#1F274B] rounded-[4px] text-[#FFF] cursor-pointer">
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AddAmbassador;


"use client";
import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";
import ImageSelectIcon from "@/components/Icons/DashboardIcons/ImageSelectIcon";
import { useRef, useState } from "react";

const AddAmbassador = () => {
  const breadLink = [
    {
      label: "Arion Ambassador",
      href: "/admin/cms",
    },
    {
      label: "Add New Ambassador",
    },
  ];

  // Profile Image
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const triggerFileInput = () => fileInputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Country Flag Image
  const [flagImage, setFlagImage] = useState<string | null>(null);
  const flagInputRef = useRef<HTMLInputElement>(null);

  const triggerFlagUpload = () => flagInputRef.current?.click();

  const handleFlagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFlagImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <div className="p-4 bg-[#FFF] rounded-xl mt-5">
        <h1 className="text-[20px] leading-[138%] tracking-[0.01px] font-extrabold">
          Add New Ambassador
        </h1>

        <form className="mt-4">
          <div className="flex flex-col md:flex-row md:justify-between gap-6">

            {/* Profile Image Upload */}
            <div
              onClick={triggerFileInput}
              className="cursor-pointer border border-dashed border-[#1F274B] rounded-[6px] bg-[#F8F9FB] m-auto h-[260px] min-w-[260px] flex items-center justify-center"
            >
              <div>
                {image ? (
                  <img
                    src={image}
                    alt="Uploaded"
                    className="object-cover rounded-[6px] h-[260px] w-[260px]"
                    draggable={false}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center text-[#4C526F]">
                    <ImageSelectIcon className="mb-2" />
                    <p className="text-sm">Profile Image</p>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="w-full">
              {/* Full Name */}
              <div>
                <label className="text-[12px] leading-[100%] text-[#696E86]">
                  Full Name
                </label>
                <input
                  type="text"
                  className="p-3 border border-[#ECEFF3] rounded-[4px] w-full"
                  placeholder="Nick Dello Joio"
                />
              </div>

              {/* Social Links */}
              <div className="mt-4">
                <label className="text-[12px] leading-[100%] text-[#696E86]">
                  Social Links
                </label>
                <input
                  type="text"
                  className="p-3 border border-[#ECEFF3] rounded-[4px] w-full"
                  placeholder="http://www.instagram.com/taylor.cawley/"
                />
              </div>

              {/* Discipline */}
              <div className="mt-4">
                <label className="text-[12px] leading-[100%] text-[#696E86]">
                  Discipline
                </label>
                <input
                  type="text"
                  className="p-3 border border-[#ECEFF3] rounded-[4px] w-full"
                  placeholder="Jumping"
                />
              </div>

              {/* Country Name + Flag Upload */}
              <div className="mt-4">
                <label className="text-[12px] leading-[100%] text-[#696E86]">
                  Country Name
                </label>

                <div className="flex items-center gap-4 mt-2">

                    {/* Flag Upload */}
                  <div
                    onClick={triggerFlagUpload}
                    className="cursor-pointer border border-dashed border-[#1F274B] bg-[#F8F9FB] rounded-[6px] h-[48px] w-[48px] flex items-center justify-center"
                  >
                    {flagImage ? (
                      <img
                        src={flagImage}
                        alt="Flag"
                        className="h-full w-full object-cover rounded-[6px]"
                      />
                    ) : (
                      <span className="text-[10px] text-[#4C526F] leading-tight text-center">
                        Flag
                      </span>
                    )}

                    <input
                      ref={flagInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFlagChange}
                      className="hidden"
                    />
                  </div>
                  {/* Country Text Input */}
                  <input
                    type="text"
                    className="p-3 border border-[#ECEFF3] rounded-[4px] w-full"
                    placeholder="USA"
                  />

                
                </div>
              </div>

            </div>
          </div>

          {/* SAVE BUTTON */}
          <div className="flex items-end justify-end mt-6">
            <button className="px-3 py-2.5 bg-[#1F274B] rounded-[4px] text-[#FFF] cursor-pointer">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAmbassador;
