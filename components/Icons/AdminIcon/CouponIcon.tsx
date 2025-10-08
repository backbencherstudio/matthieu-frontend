import React from "react";

export default function CouponIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="none"
      className={className}
    >
      <path
        d="M6.89858 17.0936L5.27429 16.1295C4.86206 15.8848 4.65594 15.7624 4.42719 15.7554C4.17998 15.7477 3.97021 15.8651 3.52476 16.1295C3.02587 16.4256 2.03386 17.2413 1.39218 16.8524C0.999512 16.6143 0.999512 16.0096 0.999512 14.8003V6.28367C0.999512 4.02091 0.999512 2.88954 1.70246 2.18659C2.40541 1.48364 3.53678 1.48364 5.79954 1.48364H9.79956C12.0623 1.48364 13.1937 1.48364 13.8966 2.18659C14.5996 2.88954 14.5996 4.02091 14.5996 6.28367V14.8003C14.5996 16.0096 14.5996 16.6143 14.2069 16.8524C13.5653 17.2413 12.5732 16.4256 12.0743 16.1295C11.6621 15.8848 11.456 15.7624 11.2272 15.7554C10.98 15.7477 10.7703 15.8651 10.3248 16.1295L8.70051 17.0936C8.26243 17.3536 8.04331 17.4836 7.79955 17.4836C7.55578 17.4836 7.33666 17.3536 6.89858 17.0936Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.2002 6.28333L5.40015 11.0833"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.2002 11.0833H10.193M5.40732 6.28333H5.40015"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
