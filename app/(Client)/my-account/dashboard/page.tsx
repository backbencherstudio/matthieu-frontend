import DashboardCard from "@/components/MyAccount/dashboard/dashboardCard";

const DashboardPage = () => {
  const dashboardStats = [
    {
      id: 1,
      title: "Wait for confirmation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M1.19922 7.70917V15.7935C1.19922 20.8747 1.19922 23.4155 2.77777 24.9939C4.35634 26.5725 6.89697 26.5725 11.9783 26.5725H16.0204C21.1017 26.5725 23.6424 26.5725 25.2209 24.9939C26.7995 23.4155 26.7995 20.8747 26.7995 15.7935V7.70917"
            stroke="#EDA217"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.04391 4.76562L1.19922 7.71018H26.7995L25.1123 4.89823C23.962 2.98115 23.387 2.02261 22.4602 1.49794C21.5336 0.973267 20.4157 0.973267 18.1801 0.973267H9.89483C7.70705 0.973267 6.61316 0.973267 5.69965 1.47894C4.78615 1.98461 4.2054 2.91162 3.04391 4.76562Z"
            stroke="#EDA217"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 7.71018V0.973267"
            stroke="#EDA217"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.91406 21.8576H12.651M5.91406 17.8154H9.95621"
            stroke="#EDA217"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      number: 29,
      iconBgColor: "#FEF6E8",
    },
    {
      id: 2,
      title: "Successful order",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
        >
          <path
            d="M20.6732 3.27446C19.4105 2.87786 18.0668 2.66406 16.6732 2.66406C9.30938 2.66406 3.33984 8.6336 3.33984 15.9974C3.33984 23.3611 9.30938 29.3307 16.6732 29.3307C24.0369 29.3307 30.0065 23.3611 30.0065 15.9974C30.0065 14.6038 29.7926 13.2601 29.3961 11.9974"
            stroke="#20C997"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M11.9961 12.6667L16.6628 17.3333L28.663 4"
            stroke="#20C997"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      number: 36,
      iconBgColor: "#E8F7F3",
    },
    {
      id: 3,
      title: "Total order",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M9.20703 18.894L20.3686 17.9638C23.8611 17.6729 24.6451 16.91 25.0322 13.427L25.8469 6.09412"
            stroke="#0077FF"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M6.65625 6.09412H27.136"
            stroke="#0077FF"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M6.65372 26.5766C8.06756 26.5766 9.2137 25.4304 9.2137 24.0166C9.2137 22.6027 8.06756 21.4566 6.65372 21.4566C5.23989 21.4566 4.09375 22.6027 4.09375 24.0166C4.09375 25.4304 5.23989 26.5766 6.65372 26.5766Z"
            stroke="#0077FF"
            stroke-width="1.5"
          />
          <path
            d="M20.7279 26.5766C22.1418 26.5766 23.2879 25.4304 23.2879 24.0166C23.2879 22.6027 22.1418 21.4566 20.7279 21.4566C19.3141 21.4566 18.168 22.6027 18.168 24.0166C18.168 25.4304 19.3141 26.5766 20.7279 26.5766Z"
            stroke="#0077FF"
            stroke-width="1.5"
          />
          <path
            d="M9.20703 24.0129H18.1669"
            stroke="#0077FF"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M1.53125 0.975342H2.76772C3.9769 0.975342 5.03092 1.77481 5.32419 2.91443L9.13248 17.7131C9.32493 18.461 9.16023 19.2532 8.68413 19.87L7.46032 21.4551"
            stroke="#0077FF"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      ),
      number: 109,
      iconBgColor: "#E6F2FF",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {dashboardStats.map((status) => (
        <DashboardCard
          key={status?.id}
          title={status?.title}
          icon={status.icon}
          number={status.number}
          iconBgColor={status?.iconBgColor}
        />
      ))}
    </div>
  );
};

export default DashboardPage;
