"use client";

import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";
import { useCreateExpertsMutation } from "@/src/redux/admin/cms/expert/expertApi";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface AddExpertFormValues {
  name: string;
  email: string;
  phone: string;
  country: string;
  region: string;
}

const AddExpertsPage = () => {
  const breadLink = [
    { label: "Experts List", href: "/admin/cms" },
    { label: "Add Experts" },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddExpertFormValues>();

  const [createExperts, { isLoading }] = useCreateExpertsMutation();

  const onSubmit = async (data: AddExpertFormValues) => {
    try {
      const response = await createExperts(data);
      if (response?.data?.id) {
        toast.success("Expert added successfully");
        reset();
      }
    } catch (error) {
      toast.error("Failed to add expert");
    }
  };

  return (
    <>
      <BreadCrumb breadLink={breadLink} />

      <div className="p-4 bg-[#FFF] rounded-xl mt-5">
        <h1 className="text-[20px] leading-[138%] tracking-[0.01px] font-extrabold">
          Add New Expert
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="flex flex-col gap-4">
            {/* ROW 1 */}
            <div className="grid md:grid-cols-3 md:gap-4 gap-2">
              {/* Name */}
              <div>
                <label className="text-[12px] text-[#696E86]">
                  Expert Name
                </label>
                <input
                  {...register("name", { required: "Expert name is required" })}
                  className="p-3 border border-[#ECEFF3] w-full rounded-[4px]"
                  placeholder="Hits Vermont"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-[12px] text-[#696E86]">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="p-3 border border-[#ECEFF3] w-full rounded-[4px]"
                  placeholder="Enter expert mail"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-[12px] text-[#696E86]">Number</label>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className="p-3 border border-[#ECEFF3] w-full rounded-[4px]"
                  placeholder="Expert number"
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 md:gap-4 gap-2">
              {/* Country */}
              <div>
                <label className="text-[12px] text-[#696E86]">
                  Country Name
                </label>
                <input
                  {...register("country", {
                    required: "Country is required",
                  })}
                  className="p-3 border border-[#ECEFF3] w-full rounded-[4px]"
                  placeholder="Country name"
                />
                {errors.country && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.country.message}
                  </p>
                )}
              </div>

              {/* Region */}
              <div>
                <label className="text-[12px] text-[#696E86]">Region</label>
                <input
                  {...register("region", {
                    required: "Region is required",
                  })}
                  className="p-3 border border-[#ECEFF3] w-full rounded-[4px]"
                  placeholder="State name"
                />
                {errors.region && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.region.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* SAVE BUTTON */}
          <div className="flex items-end justify-end mt-6">
            <button
              type="submit"
              className="px-3 py-2.5 bg-[#1F274B] rounded-[4px] text-[#FFF] cursor-pointer"
            >
              {isLoading ? "Creating.." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddExpertsPage;
