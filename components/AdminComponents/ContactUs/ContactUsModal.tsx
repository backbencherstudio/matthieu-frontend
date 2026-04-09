import EyeIcon from "@/components/Icons/AdminIcon/EyeIcon";
import ModalWrapper from "../reusable/ModalWrapper";
import ContactUsDetailsModal from "./ContactUsDetailsModal";

interface DetailProps {
  id: string;
  onClose?: () => void;
}

export default function ContactUsModal({ id, onClose }: DetailProps) {
  return (
    <ModalWrapper
      trigger={
        <span className="p-1.5 bg-[#F8FAFB] rounded-[6px] inline-flex">
          <EyeIcon />
        </span>
      }
    >
      <ContactUsDetailsModal id={id} />
    </ModalWrapper>
  );
}
