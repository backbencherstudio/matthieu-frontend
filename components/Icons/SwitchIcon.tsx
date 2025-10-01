import React from "react";

const SwitchIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M5 5.41602C3.46563 6.78932 2.5 8.61138 2.5 10.8326C2.5 14.9748 5.85787 18.3326 10 18.3326C14.1422 18.3326 17.5 14.9748 17.5 10.8326C17.5 8.61138 16.5343 6.78932 15 5.41602"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99984 1.66602V9.16602M9.99984 1.66602C9.41634 1.66602 8.32611 3.32793 7.9165 3.74935M9.99984 1.66602C10.5833 1.66602 11.6736 3.32793 12.0832 3.74935"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SwitchIcon;
