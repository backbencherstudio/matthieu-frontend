export default function AvgUsageRateIcon({
  className,
}: {
  className?: string;
}) {
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
        d="M17.5 17.5H8.33333C5.58347 17.5 4.20854 17.5 3.35427 16.6457C2.5 15.7914 2.5 14.4165 2.5 11.6667V2.5"
        stroke="#008000"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M4.16406 16.6673C4.53021 14.0372 6.39441 7.30423 8.68756 7.30423C10.2725 7.30423 10.6829 10.5301 12.2361 10.5301C14.9083 10.5301 14.5209 3.33398 17.4974 3.33398"
        stroke="#008000"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
