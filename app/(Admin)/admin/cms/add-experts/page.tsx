import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";

const AddExpertsPage = () => {
  const breadLink = [
    {
      label: "Experts List",
      href: "/admin/cms",
    },
    {
      label: "Add Experts",
    },
  ];

  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <div className="p-4 bg-[#FFF] rounded-xl mt-5">
        <h1 className="text-[20px] leading-[138%] tracking-[0.01px] font-extrabold">
          Add New Expert
        </h1>
        <form className="mt-4">
          <div className="flex flex-col gap-4">
            <div className="grid md:grid-cols-3  md:gap-4 gap-2">
              <div>
                <label className="text-[12px] leading-[100%] text-[#696E86]">
                  Expert Name
                </label>
                <input
                  type="text"
                  className="p-3 border border-[#ECEFF3] ronunded-[4px] w-full rounded-[4px]"
                  placeholder="Hits Vermont"
                />
              </div>
              <div className="">
                <label className="text-[12px] leading-[100%] text-[#696E86]">
                  Email
                </label>
                <input
                  type="email"
                  className="p-3 border border-[#ECEFF3] ronunded-[4px] w-full rounded-[4px]"
                  placeholder="Enter expert mail"
                />
              </div>
               <div className="">
                <label className="text-[12px] leading-[100%] text-[#696E86]">
                  Number
                </label>
                <input
                  type="text"
                  className="p-3 border border-[#ECEFF3] ronunded-[4px] w-full rounded-[4px]"
                  placeholder="Expert number"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-4 gap-2">
              <div>
                <label className="text-[12px] leading-[100%] text-[#696E86]">
                  Country Name
                </label>
                <input
                  type="text"
                  className="p-3 border border-[#ECEFF3] ronunded-[4px] w-full rounded-[4px]"
                  placeholder="Country name"
                />
              </div>
              <div className="">
                <label className="text-[12px] leading-[100%] text-[#696E86]">
                  Region
                </label>
                <input
                  type="text"
                  className="p-3 border border-[#ECEFF3] ronunded-[4px] w-full rounded-[4px]"
                  placeholder="State name"
                />
              </div>
            </div>
          </div>
             
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

export default AddExpertsPage;
