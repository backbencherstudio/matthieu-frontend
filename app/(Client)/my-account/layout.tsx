import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import { Sidebar } from "@/components/MyAccount/sidebar";

const MyAccountLayout = ({ children }: { children: React.ReactNode }) => {
  const breadLink = [
    {
      label: "My account",
      href: "/my-account",
    },
  ];
  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <div className="lg:max-w-[1194px] mx-auto xl:px-0 px-5 my-8 flex gap-x-8">
        <Sidebar />

        {/* Right side: changes per page */}
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
};

export default MyAccountLayout;
