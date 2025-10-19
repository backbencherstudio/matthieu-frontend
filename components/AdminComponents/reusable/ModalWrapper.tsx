"use client";

import CustomDialog from "@/components/reusable/Features/Dialog";
import {
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useState,
} from "react";

interface ModalWrapperProps {
  trigger: ReactNode;
  children: ReactElement<any>;
  width?: boolean;
}

export default function ModalWrapper({
  trigger,
  children,
  width,
}: ModalWrapperProps) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </button>
      <CustomDialog open={open} setOpen={setOpen} width={width}>
        {isValidElement(children)
          ? cloneElement(
              children as ReactElement<any>,
              {
                onClose: handleClose,
              } as any
            )
          : children}
      </CustomDialog>
    </div>
  );
}
