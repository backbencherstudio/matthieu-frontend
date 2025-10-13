import React from "react";

export default function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.1875 1.25C3.90831 1.25 1.25 3.90831 1.25 7.1875C1.25 10.4667 3.90831 13.125 7.1875 13.125C10.4667 13.125 13.125 10.4667 13.125 7.1875C13.125 3.90831 10.4667 1.25 7.1875 1.25ZM0 7.1875C0 3.21795 3.21795 0 7.1875 0C11.157 0 14.375 3.21795 14.375 7.1875C14.375 11.157 11.157 14.375 7.1875 14.375C3.21795 14.375 0 11.157 0 7.1875Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3862 11.3862C11.6303 11.1421 12.026 11.1421 12.2701 11.3862L16.0669 15.1831C16.311 15.4271 16.311 15.8229 16.0669 16.0669C15.8229 16.311 15.4271 16.311 15.1831 16.0669L11.3862 12.2701C11.1421 12.026 11.1421 11.6303 11.3862 11.3862Z"
        fill="currentColor"
      />
    </svg>
  );
}
