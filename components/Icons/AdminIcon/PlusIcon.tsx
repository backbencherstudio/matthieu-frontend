import React from "react";

export default function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.00081 0.166382C6.27696 0.166382 6.50081 0.390239 6.50081 0.666382V5.49971H11.3341C11.6103 5.49971 11.8341 5.72357 11.8341 5.99972C11.8341 6.27586 11.6103 6.49972 11.3341 6.49972H6.50081V11.333C6.50081 11.6092 6.27696 11.833 6.00081 11.833C5.72467 11.833 5.50081 11.6092 5.50081 11.333V6.49972H0.66748C0.391338 6.49972 0.16748 6.27586 0.16748 5.99972C0.16748 5.72357 0.391338 5.49971 0.66748 5.49971H5.50081V0.666382C5.50081 0.390239 5.72467 0.166382 6.00081 0.166382Z"
        fill="currentColor"
      />
    </svg>
  );
}
