// "use client";

// import type React from "react";

// import { type FormEvent, useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     address1: "",
//     address2: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Add your form submission logic here
//   };
//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {/* First Name and Last Name */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//           />
//         </div>
//       </div>

//       {/* Email and Phone Number */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="E-mail"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//           />
//         </div>
//         <div>
//           <input
//             type="tel"
//             name="phoneNumber"
//             placeholder="Phone Number"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//           />
//         </div>
//       </div>

//       {/* Address 1 */}
//       <div>
//         <input
//           type="text"
//           name="address1"
//           placeholder="Address 1"
//           value={formData.address1}
//           onChange={handleChange}
//           className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//         />
//       </div>

//       {/* Address 2 */}
//       <div>
//         <input
//           type="text"
//           name="address2"
//           placeholder="Address 2"
//           value={formData.address2}
//           onChange={handleChange}
//           className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//         />
//       </div>

//       {/* City, State, Zip Code */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
//         <div>
//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             value={formData.city}
//             onChange={handleChange}
//             className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="state"
//             placeholder="State"
//             value={formData.state}
//             onChange={handleChange}
//             className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="zipCode"
//             placeholder="Zip Code"
//             value={formData.zipCode}
//             onChange={handleChange}
//             className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//           />
//         </div>
//       </div>

//       {/* Subject */}
//       <div>
//         <input
//           type="text"
//           name="subject"
//           placeholder="Subject"
//           value={formData.subject}
//           onChange={handleChange}
//           className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//         />
//       </div>

//       {/* Message */}
//       <div>
//         <textarea
//           name="message"
//           placeholder="Message"
//           value={formData.message}
//           onChange={handleChange}
//           rows={8}
//           className="w-full bg-transparent border-2 border-[#1f274b] p-4 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors resize-none"
//         />
//       </div>

//       {/* Submit Button */}
//       <div className="flex justify-end pt-4">
//         <button
//           type="submit"
//           className="px-8 py-3 bg-[#1F274B] text-[#FFF] font-semibold cursor-pointer "
//         >
//           Send Message
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;

// "use client";

// import type React from "react";

// import { type FormEvent, useState } from "react";

// const ApplyNowForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     address: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Add your form submission logic here
//   };
//   return (
//     <div className="maxContainer mb-10">
//       <p className="text-[#1F274B] text-center text-[35px] md:text-[40px] lg:text-[48px] font-extrabold leading-[100%] tracking-[0.96px] pt-[40px] md:pt-[50px] lg:pt-[60px] pb-[40px] md:pb-[48px] normal-case">
//         Apply Now
//       </p>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* First Name and Last Name */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//             />
//           </div>
//         </div>

//         {/* Email and Phone Number */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="E-mail"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//             />
//           </div>
//           <div>
//             <input
//               type="tel"
//               name="phoneNumber"
//               placeholder="Phone Number"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//             />
//           </div>
//         </div>

//         {/* Address 1 */}
//         <div>
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             value={formData.address}
//             onChange={handleChange}
//             className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//           />
//         </div>

//         {/* City, State, Zip Code */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
//           <div>
//             <input
//               type="text"
//               name="city"
//               placeholder="City"
//               value={formData.city}
//               onChange={handleChange}
//               className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="state"
//               placeholder="State"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="zipCode"
//               placeholder="Zip Code"
//               value={formData.zipCode}
//               onChange={handleChange}
//               className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//             />
//           </div>
//         </div>

//         {/* Subject */}
//         <div>
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className="w-full bg-transparent border-b-2 border-[#1f274b] pb-2 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors"
//           />
//         </div>

//         {/* Message */}
//         <div>
//           <textarea
//             name="message"
//             placeholder="Message"
//             value={formData.message}
//             onChange={handleChange}
//             rows={8}
//             className="w-full bg-transparent border-2 border-[#1f274b] p-4 placeholder-primary text-[#1f274b] focus:outline-none focus:border-primary transition-colors resize-none"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-end pt-4">
//           <button
//             type="submit"
//             className="px-8 py-3 bg-[#1F274B] text-[#FFF] font-semibold cursor-pointer "
//           >
//             Send Message
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ApplyNowForm;

"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address1: string;
  address2: string;
  state: string;
  city: string;
  zipCode: string;
  message: string;
};

export function ContactUsForm() {
  const { register, handleSubmit, reset } = useForm<ContactFormValues>();

  // File upload state
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  // Drag & Drop handlers
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles].slice(0, 2));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
    setFiles((prev) => [...prev, ...selectedFiles].slice(0, 2));
  };

  // Form submit handler
  const onSubmit = (data: ContactFormValues) => {
    console.log("Form Data: ", data);
    console.log("Files: ", files);

    reset();
    setFiles([]);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="maxContainer py-[48px]"
      >
        {/* Row 1: First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-[16px]">
          <Input
            {...register("firstName", { required: true })}
            placeholder="First Name"
            className="bg-[#F8FAFB] focus:border-0 focus-visible:ring-[1px] text-sm py-3.5 rounded-none px-4 h-[50px]"
          />

          <Input
            {...register("lastName", { required: true })}
            placeholder="Last Name"
            className="bg-[#F8FAFB] focus:border-0 focus-visible:ring-[1px] text-sm py-3.5 rounded-none px-4 h-[50px]"
          />
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-[16px]">
          <Input
            {...register("email", { required: true })}
            placeholder="Email"
            type="email"
            className="bg-[#F8FAFB] focus:border-0 focus-visible:ring-[1px] text-sm py-3.5 rounded-none px-4 h-[50px]"
          />

          <Input
            {...register("phoneNumber", { required: true })}
            placeholder="Phone Number"
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/\D/g, "");
              e.target.value = onlyNums;
            }}
            className="bg-[#F8FAFB] focus:border-0 focus-visible:ring-[1px] text-sm py-3.5 rounded-none px-4 h-[50px]"
          />
        </div>

        <div className="space-y-4">
          <Input
            {...register("address1", { required: true })}
            placeholder="Address1"
            className="bg-[#F8FAFB] focus:border-0 focus-visible:ring-[1px] text-sm py-3.5 rounded-none px-4 h-[50px]"
          />

          <Input
            {...register("address2", { required: true })}
            placeholder="Address2"
            className="bg-[#F8FAFB] focus:border-0 focus-visible:ring-[1px] text-sm py-3.5 rounded-none px-4 h-[50px]"
          />
        </div>

        <div className="grid grid-cols-3 gap-6 py-[16px]">
          <Input
            {...register("city", { required: true })}
            placeholder="City"
            className="bg-[#F8FAFB] focus:border-0 focus-visible:ring-[1px] text-sm py-3.5 rounded-none px-4 h-[50px]"
          />
          <Input
            {...register("state", { required: true })}
            placeholder="State"
            className="bg-[#F8FAFB] focus:border-0 focus-visible:ring-[1px] text-sm py-3.5 rounded-none px-4 h-[50px]"
          />
          <Input
            {...register("zipCode", { required: true })}
            placeholder="Zip Code"
            className="bg-[#F8FAFB] focus:border-0 focus-visible:ring-[1px] text-sm py-3.5 rounded-none px-4 h-[50px]"
          />
        </div>

        {/* Message */}
        <Textarea
          {...register("message", { required: true })}
          placeholder="MESSAGE"
          className="bg-[#F8FAFB] focus:border-0 focus-visible:ring-[1px] px-4 pt-5 pb-[120px] border-none rounded-none"
        />

        {/* Submit */}
        <div className="pt-[48px] flex justify-end">
          <button
            type="submit"
            className="bg-[#1F274B] py-[12px] px-[32px] text-white cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
