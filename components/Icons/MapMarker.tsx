import React from "react";

export default function MapMarker({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <g clip-path="url(#clip0_5933_5678)">
        <mask
          id="mask0_5933_5678"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="48"
          height="48"
        >
          <path d="M0 0H48V48H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_5933_5678)">
          <path
            d="M14.7279 8.10191L14.3289 8.50041C9.99342 12.8364 9.49892 19.6979 13.1689 24.6104L22.6319 36.9404C22.7724 37.1235 22.9532 37.2717 23.1603 37.3735C23.3675 37.4753 23.5953 37.5279 23.826 37.5272C24.0568 37.5266 24.2843 37.4728 24.4909 37.3698C24.6974 37.2669 24.8774 37.1177 25.0169 36.9339L34.3879 24.5769C38.0764 19.6454 37.5824 12.7539 33.2279 8.39941L32.9309 8.10191C27.9039 3.07541 19.7544 3.07541 14.7279 8.10191Z"
            stroke="#1F274B"
            stroke-width="2.5"
          />
          <path
            d="M23.75 22.25C26.5114 22.25 28.75 20.0114 28.75 17.25C28.75 14.4886 26.5114 12.25 23.75 12.25C20.9886 12.25 18.75 14.4886 18.75 17.25C18.75 20.0114 20.9886 22.25 23.75 22.25Z"
            stroke="#1F274B"
            stroke-width="2.5"
          />
          <path
            d="M12.25 33.8711C8.4255 34.8211 6 36.2371 6 37.8181C6 40.6801 13.947 43.0001 23.75 43.0001C33.553 43.0001 41.5 40.6801 41.5 37.8181C41.5 36.2371 39.0745 34.8216 35.25 33.8711"
            stroke="#1F274B"
            stroke-width="2.5"
            stroke-linecap="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_5933_5678">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
