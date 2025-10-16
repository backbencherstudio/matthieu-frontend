import React from "react";

export default function AlertIcon({ className }: { className?: string }) {
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
        d="M11.1873 17.5H7.97934C4.12064 17.5 2.1913 17.5 1.4803 16.2449C0.769312 14.9899 1.75614 13.3262 3.72979 9.99875L5.33381 7.29444C7.22966 4.09815 8.17759 2.5 9.58334 2.5C10.9891 2.5 11.937 4.09814 13.8328 7.29443L15.4369 9.99875C17.4105 13.3262 18.3973 14.9899 17.6863 16.2449C16.9753 17.5 15.046 17.5 11.1873 17.5Z"
        stroke="currentColor"
        strokeWidth="1.5625"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 14.1663V10.4163"
        stroke="currentColor"
        strokeWidth="1.5625"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 7.49857V7.49023"
        stroke="currentColor"
        strokeWidth="1.875"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
