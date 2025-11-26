import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";

const AddCompetition = () => {
  const breadLink = [
    {
      label: "Arion Ambassador",
      href: "/admin/cms",
    },
    {
      label: "Add New Ambassador",
    },
  ];

  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <div className="p-4 bg-[#FFF] rounded-xl mt-5">
        <h1 className="text-[20px] leading-[138%] tracking-[0.01px] font-extrabold">
          Add New Competition
        </h1>
        <form className="mt-4">
          <div className="flex justify-between gap-6">
            <div className="w-full">
              <div>
                <label className="text-[12px] leading-[100%] text-[#696E86]">
                  Competition Name
                </label>
                <input
                  type="text"
                  className="p-3 border border-[#ECEFF3] ronunded-[4px] w-full rounded-[4px]"
                  placeholder="Hits Vermont"
                />
              </div>
              <div className="mt-4">
                <label className="text-[12px] leading-[100%] text-[#696E86]">
                  Discpline
                </label>
                <input
                  type="text"
                  className="p-3 border border-[#ECEFF3] ronunded-[4px] w-full rounded-[4px]"
                  placeholder="Hunter/Jumper"
                />
              </div>
            </div>
            <div className="w-full">
              <div>
                <label className="text-[12px] leading-[100%] text-[#696E86]">
                  Location
                </label>
                <input
                  type="text"
                  className="p-3 border border-[#ECEFF3] ronunded-[4px] w-full rounded-[4px]"
                  placeholder="Manchester, VT"
                />
              </div>
              <div className="mt-4">
                <label className="text-[12px] leading-[100%] text-[#696E86]">
                  Date
                </label>
                <input
                  type="text"
                  className="p-3 border border-[#ECEFF3] ronunded-[4px] w-full rounded-[4px]"
                  placeholder="8/1-8/5"
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

export default AddCompetition;
