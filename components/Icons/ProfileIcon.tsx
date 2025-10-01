import React from "react";

const ProfileIcon = ({ className }: { className?: string }) => {
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
        d="M12.9163 6.66667C12.9163 4.36548 11.0508 2.5 8.74967 2.5C6.44849 2.5 4.58301 4.36548 4.58301 6.66667C4.58301 8.96783 6.44849 10.8333 8.74967 10.8333C11.0508 10.8333 12.9163 8.96783 12.9163 6.66667Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.91699 16.6673C2.91699 13.4457 5.52867 10.834 8.75033 10.834C9.81283 10.834 10.809 11.1181 11.667 11.6144"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8239 12.4443L16.3051 11.9255C15.9592 11.5795 15.3983 11.5795 15.0524 11.9255L12.2618 14.7161C11.8908 15.087 11.638 15.5595 11.5351 16.074L11.25 17.4994L12.6754 17.2143C13.1898 17.1114 13.6623 16.8585 14.0332 16.4876L16.8239 13.697C17.1698 13.351 17.1698 12.7902 16.8239 12.4443Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProfileIcon;
