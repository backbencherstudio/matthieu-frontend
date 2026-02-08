import EyeIcon from "@/components/Icons/AdminIcon/EyeIcon";
import ModalWrapper from "../reusable/ModalWrapper";
import UseSaddlesDetails from "./UseSaddlesDetails";

interface DetailProps {
  id: string;
  onClose?: () => void;
}

export default function UseSaddlesDetailsModal({ id, onClose }: DetailProps) {
  return (
    <ModalWrapper
      trigger={
        <span className="p-1.5 bg-[#F8FAFB] rounded-[6px] inline-flex">
          <EyeIcon />
        </span>
      }
    >
      <UseSaddlesDetails id={id} />
    </ModalWrapper>
  );
}
