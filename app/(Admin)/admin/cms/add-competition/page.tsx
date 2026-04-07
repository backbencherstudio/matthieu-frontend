"use client";

import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";
import { useCreateCalendarMutation } from "@/src/redux/admin/cms/calendar/calendarApi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface AddCompetitionFormValues {
  name: string;
  discipline: string;
  location: string;
  date: string;
}

const AddCompetition = () => {
  const breadLink = [
    { label: "Competition Calendar", href: "/admin/cms" },
    { label: "Add New Competition" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddCompetitionFormValues>();

  const [createCalendar, { isLoading }] = useCreateCalendarMutation();
  const router = useRouter()

  const toDdMmYyyy = (isoDate: string) => {
    if (!isoDate) return isoDate;
    const [year, month, day] = isoDate.split("-");
    if (year && month && day) {
      const dd = day.padStart(2, "0");
      const mm = month.padStart(2, "0");
      return `${dd}/${mm}/${year}`;
    }
    return isoDate;
  };



  const onSubmit = async (data: AddCompetitionFormValues) => {
    try {
      const payload = { ...data, date: toDdMmYyyy(data.date) };
      const response = await createCalendar(payload);
      if (response?.data?.success) {
        toast.success(response?.data?.message);
        reset();
        router.push('/admin/cms')
      }
      else {
        // console.log(response?.error?.data?.message?.message)
        toast.error(response?.error?.data?.message?.message);
      }
    } catch (error) {
      console.error("Create failed", error);
      toast.error("Failed to add competition calendar");
    }
  };

  return (
    <>
      <BreadCrumb breadLink={breadLink} />

      <div className="p-4 bg-[#FFF] rounded-xl mt-5">
        <h1 className="text-[20px] leading-[138%] tracking-[0.01px] font-extrabold">
          Add New Competition
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="flex justify-between gap-6">
            {/* LEFT */}
            <div className="w-full">
              {/* Competition Name */}
              <div>
                <label className="text-[12px] text-[#696E86]">
                  Competition Name
                </label>
                <input
                  {...register("name", {
                    required: "Competition name is required",
                  })}
                  className="p-3 border border-[#ECEFF3] w-full rounded-[4px]"
                  placeholder="Hits Vermont"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Discipline */}
              <div className="mt-4">
                <label className="text-[12px] text-[#696E86]">Discipline</label>
                <input
                  {...register("discipline", {
                    required: "Discipline is required",
                  })}
                  className="p-3 border border-[#ECEFF3] w-full rounded-[4px]"
                  placeholder="Hunter/Jumper"
                />
                {errors.discipline && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.discipline.message}
                  </p>
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full">
              {/* Location */}
              <div>
                <label className="text-[12px] text-[#696E86]">Location</label>
                <input
                  {...register("location", {
                    required: "Location is required",
                  })}
                  className="p-3 border border-[#ECEFF3] w-full rounded-[4px]"
                  placeholder="Manchester, VT"
                />
                {errors.location && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>

              {/* Date */}
              <div className="mt-4">
                <label className="text-[12px] text-[#696E86]">Date</label>
                <input
                  {...register("date", {
                    required: "Invalid date format. Use dd/mm/yyyy",
                  })}
                  type="date"
                  className="p-3 border border-[#ECEFF3] w-full rounded-[4px]"
                  placeholder="01/12/2025"
                />
                {errors.date && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.date.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* SAVE */}
          <div className="flex items-end justify-end mt-6">
            <button
              type="submit"
              className="px-3 py-2.5 bg-[#1F274B] rounded-[4px] text-[#FFF] cursor-pointer"
            >
              {isLoading ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCompetition;
