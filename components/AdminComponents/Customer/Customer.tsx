import LetterIcon from "@/components/Icons/AdminIcon/LetterIcon";
import PlusIcon from "@/components/Icons/AdminIcon/PlusIcon";

export default function Customer() {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-extrabold leading-[100%] text-[#1F274B]">
          Customer Management
        </h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center justify-center px-3 py-2.5 bg-[#1F274B] rounded-[4px] text-[#FFF] space-x-2 cursor-pointer">
            <LetterIcon className="h-4 w-4" />
            <span className="text-[14px] leading-[114%]">Send Campaign</span>
          </button>
          <button className="flex items-center justify-center px-3 py-2.5 bg-[#1F274B] rounded-[4px] text-[#FFF] space-x-2 cursor-pointer">
            <PlusIcon className="h-4 w-4" />
            <span className="text-[14px] leading-[114%]">Add Customer</span>
          </button>
        </div>
      </div>
    </div>
  );
}
