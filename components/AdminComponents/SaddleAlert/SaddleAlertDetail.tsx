import CancelIcon from "@/components/Icons/AdminIcon/CancelIcon";

interface SaddleAlertDetailProps {
  onClose?: () => void;
}

export default function SaddleAlertDetail({ onClose }: SaddleAlertDetailProps) {
  return (
    <div className="px-6 py-8 rounded-[8px] bg-[#FFF] md:w-[520px] w-full">
      <div className="flex items-center justify-between mb-[35px]">
        <h1 className="md:text-xl text-lg font-extrabold text-[#1F274B]">
          Used Saddle Alert Details
        </h1>
        <button
          onClick={onClose}
          className="cursor-pointer px-3 py-2.5 border border-[#989CAC] rounded-[4px]"
        >
          <CancelIcon />
        </button>
      </div>

      <div className="p-4 border border-[#ECEFF3] rounded-[6px]">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="text-[14px] text-[#696E86]">Customer Name</label>
            <p className="text-[16px] text-[#1F274B]">Sophie Laurent</p>
          </div>
          <div>
            <label className="text-[14px] text-[#696E86]">Email</label>
            <p className="text-[16px] text-[#1F274B]">
              sophie.laurent@email.com
            </p>
          </div>
          <div>
            <label className="text-[14px] text-[#696E86]">Phone</label>
            <p className="text-[16px] text-[#1F274B]">+1 234 567 890</p>
          </div>
          <div>
            <label className="text-[14px] text-[#696E86]">Price Range</label>
            <p className="text-[16px] text-[#1F274B]">€2,000 - €4,000</p>
          </div>
          <div>
            <label className="text-[14px] text-[#696E86]">Seat Sizes</label>
            <p className="text-[16px] text-[#1F274B]">17", 17.5"</p>
          </div>
          <div>
            <label className="text-[14px] text-[#696E86]">Preferences</label>
            <p className="text-[16px] text-[#1F274B]">Jumping, Cross Country</p>
          </div>
          <div>
            <label className="text-[14px] text-[#696E86]">Colors</label>
            <p className="text-[16px] text-[#1F274B]">Brown, Black</p>
          </div>
          <div>
            <label className="text-[14px] text-[#696E86]">Town, State</label>
            <p className="text-[16px] text-[#1F274B]">Denver, Colorado</p>
          </div>
        </div>

        <div className="mt-4">
          <label className="text-[14px] text-[#696E86]">Additional Notes</label>
          <p className="text-[16px] text-[#1F274B]">
            Looking for a used saddle in excellent condition for my Warmblood
            mare.
          </p>
        </div>
      </div>
    </div>
  );
}
