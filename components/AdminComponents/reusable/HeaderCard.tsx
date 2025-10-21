import { cn } from "@/lib/utils";

type HeaderCardType = {
  title: string;
  icon: any;
  number: string;
  iconBgColor?: string;
  iconColor?: string;
};

const HeaderCard = ({
  title,
  icon,
  number,
  iconBgColor,
  iconColor,
}: HeaderCardType) => {
  return (
    <div className="p-4 flex items-start justify-between rounded-[8px] bg-[#FFF] border border-[#F6F8FA]">
      <div>
        <p className="text-[8px] md:text-[16px] text-[#1F274B] normal-case leading-[148%]">
          {title}
        </p>
        <h1 className="text-[16px] lg:text-[24px] font-extrabold leading-[100%] text-[#4C526F] mt-5">
          {number}
        </h1>
      </div>
      <div
        className={cn(
          "w-5 h-5 md:w-14 md:h-14 p-2.5 aspect-square rounded-[6px] flex items-center justify-center my-1.5 md:1.5"
        )}
        style={{ backgroundColor: iconBgColor, color: iconColor }}
      >
        {icon}
      </div>
    </div>
  );
};

export default HeaderCard;
