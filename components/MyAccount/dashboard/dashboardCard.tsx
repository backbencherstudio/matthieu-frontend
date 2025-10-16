import { cn } from "@/lib/utils";

type DashBoardCardType = {
  title: string;
  icon: any;
  number: number;
  iconBgColor?: string;
  iconColor?: string;
};

const DashboardCard = ({
  title,
  icon,
  number,
  iconBgColor,
  iconColor,
}: DashBoardCardType) => {
  return (
    <div className="p-2 md:p-4 bg-[#FFF] border border-[#DFE1E7] flex items-center space-x-3 mb-5 w-full">
      <div
        className={cn(
          "w-8 h-8 md:w-14 md:h-14 p-2.5 aspect-square rounded-[6px] flex items-center justify-center"
        )}
        style={{ backgroundColor: iconBgColor, color: iconColor }}
      >
        {icon}
      </div>
      <div className="space-y-4">
        <p className="text-[8px] md:text-[16px] text-[#1F274B] normal-case leading-[100%]">
          {title}
        </p>
        <h1 className="text-[16px] lg:text-[24px] font-extrabold leading-[100%]">
          {number}
        </h1>
      </div>
    </div>
  );
};

export default DashboardCard;
