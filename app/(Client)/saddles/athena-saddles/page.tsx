import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import SAddlesCategoryItems from "@/components/ClientComponents/Saddles/SAddlesCategoryItems";

const saddlesItems = {
  label: "ATHENA SADDLES",
  subtitle: "TAILOR MADE",
  items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY", "KIDS"],
  btns: [{ title: "Connect with a saddle expert", href: "" }],
  video: "/videos/athena.mp4",
};

export default function AthenaSaddlesPage() {
  const breadLink = [
    {
      label: "SADDLES",
      href: "/saddles",
    },
    {
      label: "Athena Saddles",
      href: "/saddles/athena-saddles",
    },
  ];

  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <div className="maxContainer lg:py-[80px] py-[60px] flex items-start">
        <SAddlesCategoryItems saddlesItems={saddlesItems} />
        <h1 className="text-4xl font-bold">Coming Soon</h1>
      </div>
    </>
  );
}
