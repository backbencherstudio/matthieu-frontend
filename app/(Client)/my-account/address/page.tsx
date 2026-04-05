"use client";


import { Button } from "@/components/ui/button";
import { useGetContactInfoQuery } from "@/src/redux/client/contact-us/cotactApi";

import { useState } from "react";
import { useUpdateAddressMutation } from "@/src/redux/client/contact-us/cotactApi";

export default function MyAddressPage() {


  const { data, isLoading, isError } = useGetContactInfoQuery();
  const address = data?.data?.address;
  const phone = data?.data?.phone_number;


const [isOpen, setIsOpen] = useState(false);
const [formData, setFormData] = useState({
  address: "",
  phone_number: "",
});

const [updateAddress, { isLoading: isUpdating }] = useUpdateAddressMutation();



const handleChange = (e: any) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};


const handleSubmit = async () => {
  try {
    await updateAddress(formData).unwrap();
    setIsOpen(false);
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div>
      <h1 className="uppercase text-2xl font-extrabold leading-[100%] text-[#1F274B] mb-5">
        My Address
      </h1>

      {/* Address Card */}
      <div className="bg-[#FFFFFF] border border-[#DFE1E7] p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3
              className="text-[16px] uppercase leading-[160%] text-[#4A4C56] mb-2"
              style={{ letterSpacing: "0.08px" }}
            >
              HOME ADDRESS (DEFAULT)
            </h3>
            <p
              className="leading-[150%] text-[#1D1F2C] text-[16px]"
              style={{ letterSpacing: "0.08px" }}
            >
               {isLoading ? "Loading..." : address || "No address added"}
            </p>
          </div>
            <Button
              onClick={() => {
                setFormData({
                  address: address || "",
                  phone_number: phone || "",
                });
                setIsOpen(true);
              }}
              className="px-8 py-4 !h-auto rounded-none bg-[#1F274B] hover:bg-[#1F274B]/100 text-[16px] text-[#FFF] leading-[100%] cursor-pointer"
            >
              Edit
            </Button>
        </div>

        {/* Phone Section */}
        <div className="mt-10">
          <h4 className="text-[16px] uppercase text-[#4A4C56] leading-[160%]">
            PHONE
          </h4>
          <p className="text-[16px] leading-[150%] text-[#1D1F2C]">
             {isLoading ? "Loading..." : phone || "No phone number"}
          </p>
        </div>
      </div>


      {isOpen && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white p-6 w-[400px]">
      <h2 className="text-xl font-bold mb-4">Edit Address</h2>
         <label className="text-[12px] leading-[100%] text-[#696E86]">
            Address
          </label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className="w-full border p-2 mb-3"
      />

   

       <label className="text-[12px] leading-[100%] text-[#696E86]">
           Phone Number
          </label>
      <input
        type="text"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full border p-2 mb-4"
      />

      <div className="flex justify-end gap-2">
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 border"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          disabled={isUpdating}
          className="px-4 py-2 bg-[#1F274B] text-white"
        >
          {isUpdating ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  </div>
)}


    </div>
  );
}
