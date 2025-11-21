"use client";

import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import { useForm } from "react-hook-form";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  saddle: string;
  comments: string;
}

const SaddleryExpertPage = () => {
  const breadLink = [
    {
      label: "SADDLES",
      href: "/saddles",
    },
    {
      label: "Expert",
      href: "/saddles/saddlery-expert",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      saddle: "",
      comments: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form data:", data);
  };

  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <div className="my-8 px-16">
        <h4 className="text-[15px] text-[#a7a7a7] text-center leading-[1.8em] uppercase">
          SADDLE EXPERT
        </h4>
        <p className="text-[50px] text-center text-wrap normal-case leading-[100%] text-[#1f274b] mt-3">
          Get in touch with our experts to create the saddle of your dreams.
        </p>

        <p className="text-[16px] text-[#1f274b] text-center text-wrap normal-case leading-[100%] mt-7">
          Complete this form to be contacted by one of our experts!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-10">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              {...register("firstName")}
              placeholder="First Name"
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500"
            />
            <input
              {...register("lastName")}
              placeholder="Last Name"
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              {...register("email")}
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500"
            />
            <input
              {...register("phone")}
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Address */}
          <div>
            <input
              {...register("address")}
              placeholder="Address"
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* City & State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              {...register("city")}
              placeholder="City"
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500"
            />
            <select
              {...register("state")}
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500 appearance-none cursor-pointer"
            >
              <option value="">State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>

          {/* Zip Code & Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              {...register("zipCode")}
              placeholder="Zip Code"
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500"
            />
            <input
              {...register("country")}
              placeholder="Country"
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Saddle Interest */}
          <div>
            <select
              {...register("saddle")}
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500 appearance-none cursor-pointer"
            >
              <option value="">What Saddle are you interested in?</option>
              <option value="western">Western</option>
              <option value="english">English</option>
              <option value="dressage">Dressage</option>
              <option value="jumping">Jumping</option>
              <option value="trail">Trail</option>
            </select>
          </div>

          {/* Comments */}
          <div>
            <textarea
              {...register("comments")}
              placeholder="Any Comments?"
              rows={6}
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-[#1f274b] text-white font-semibold hover:bg-[#1f274b]/90 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SaddleryExpertPage;
