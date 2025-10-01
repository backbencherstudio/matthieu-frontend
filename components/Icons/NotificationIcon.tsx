import React from "react";

const NotificationIcon = ({
  className,
  notification,
}: {
  className?: string;
  notification?: boolean;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      className={className}
    >
      <path
        d="M3.02992 14.394C2.81727 15.7471 3.768 16.6862 4.93205 17.1542C9.39481 18.9486 15.6052 18.9486 20.0679 17.1542C21.232 16.6862 22.1827 15.7471 21.9701 14.394C21.8394 13.5625 21.1932 12.8701 20.7144 12.194C20.0873 11.2975 20.025 10.3197 20.0249 9.27941C20.0249 5.2591 16.6559 2 12.5 2C8.34413 2 4.97513 5.2591 4.97513 9.27941C4.97503 10.3197 4.91272 11.2975 4.28561 12.194C3.80684 12.8701 3.16061 13.5625 3.02992 14.394Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 21C10.2961 21.6219 11.3475 22 12.5 22C13.6525 22 14.7039 21.6219 15.5 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {notification && (
        <rect
          x="17"
          y="0.5"
          width="7"
          height="7"
          rx="3.5"
          fill="#CB121D"
          stroke="white"
        />
      )}
    </svg>
  );
};

export default NotificationIcon;
