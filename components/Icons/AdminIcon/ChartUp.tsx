import React from "react";

export default function ChartUp({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M13.3333 8.66536V5.33203H10"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3307 5.33203L9.9974 8.66536C9.409 9.25376 9.11486 9.5479 8.7538 9.58043C8.69406 9.58583 8.63406 9.58583 8.57433 9.58043C8.21326 9.5479 7.91913 9.25376 7.33073 8.66536C6.74233 8.07696 6.44816 7.78283 6.08711 7.7503C6.02742 7.7449 5.96737 7.7449 5.90768 7.7503C5.54663 7.78283 5.25244 8.07696 4.66406 8.66536L2.66406 10.6654"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
