import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";
import AddUseSaadlesForm from "@/components/AdminComponents/UseSaddles/AddUseSaadlesForm";

const AddUseSaddles = () => {
  const breadLink = [
    {
      label: "Saddle Management",
      href: "/admin/use-saddles",
    },
    {
      label: "Add Use Saddle",
    },
  ];
  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className="pt-5">
        <AddUseSaadlesForm />
      </div>
    </div>
  );
};

export default AddUseSaddles;
