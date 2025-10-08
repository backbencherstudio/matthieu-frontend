import React from "react";

export default function CheckCircle({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_5815_2370)">
        <path
          d="M10.0026 1.63723C9.37127 1.43893 8.6994 1.33203 8.0026 1.33203C4.3207 1.33203 1.33594 4.3168 1.33594 7.9987C1.33594 11.6806 4.3207 14.6654 8.0026 14.6654C11.6845 14.6654 14.6693 11.6806 14.6693 7.9987C14.6693 7.3019 14.5623 6.63006 14.3641 5.9987"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M5.66406 6.33333L7.9974 8.66667L13.9975 2"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5815_2370">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
