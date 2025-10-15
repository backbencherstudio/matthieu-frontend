import { Button } from "@/components/ui/button";

export default function MyAddressPage() {
  return (
    <div>
      <h1 className="uppercase text-2xl font-extrabold leading-[100%] text-[#1F274B] mb-5">
        My Address
      </h1>

      {/* Address Card */}
      <div className="bg-[#FFFFFF] border border-[#DFE1E7] p-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-[16px] uppercase leading-[160%] text-[#4A4C56]">
              HOME ADDRESS (DEFAULT)
            </h3>
            <p className="leading-[150%] text-[#1D1F2C] text-[16px]">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
          </div>
          <Button className="px-8 py-4 !h-auto rounded-none bg-[#1F274B] hover:bg-[#1F274B]/100 text-[16px] text-[#FFF] leading-[100%]">
            Edit
          </Button>
        </div>

        {/* Phone Section */}
        <div>
          <h4 className="text-[16px] uppercase text-[#4A4C56] leading-[160%]">
            PHONE
          </h4>
          <p className="text-[16px] leading-[150%] text-[#1D1F2C]">
            +330 612-345-678
          </p>
        </div>
      </div>
    </div>
  );
}
