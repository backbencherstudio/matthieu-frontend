import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";

export default function JumpingPage() {
  const breadLink = [
    {
      label: "SADDLES",
      href: "/saddles",
    },
    {
      label: "ARION",
      href: "/saddles/arion-saddles",
    },
    {
      label: "JUMPING",
      href: "/saddles/jumping",
    },
  ];
  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <div>
        <h1 className="text-[32px] leading-[100%] tracking-[0.64px] font-extrabold text-[#1F274B] text-center">
          ARION CUSTOM SADDLES
        </h1>
        <p className="text-center text-[20px] leading-[160%] text-[#4C526F] tracking-[0.04px]">
          Perdonalize your saddle: add a pop of color , Customize your
          nameplate, & moral We want to make your dream saddle.
        </p>
      </div>
    </>
  );
}
