import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import { Sidebar } from "@/components/MyAccount/sidebar";

const MyAccountPage = () => {
  const breadLink = [
    {
      label: "My account",
      href: "/my-account",
    },
  ];
  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <div className="maxContainer my-8">
        <Sidebar />
      </div>
    </>
  );
};

export default MyAccountPage;
