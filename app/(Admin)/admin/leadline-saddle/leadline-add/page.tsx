import AddLeadlineForm from "@/components/AdminComponents/LeadlineSaddles/LeadlineSaddleForm";
import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";
import AddUseSaadlesForm from "@/components/AdminComponents/UseSaddles/AddUseSaadlesForm";

const AddLeadlineSaddle = () => {
  const breadLink = [
    {
      label: "leadline Management",
      href: "/admin/leadline-saddle",
    },
    {
      label: "Add leadline",
    },
  ];
  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className="pt-5">
        <AddLeadlineForm/>
      </div>
    </div>
  );
};

export default AddLeadlineSaddle;
