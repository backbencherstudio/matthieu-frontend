import React from "react";
import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import ArionAmabassadors from "@/components/ClientComponents/ArionAmabassadors/ArionAmabassadors";
export default function ArionAmabassadorsPage() {
  const breadLink = [
    {
      label: "BRAND",
      href: "/brand",
    },
    {
      label: "ARION AMABASSADORS",
      href: "/arion-amabassadors",
    },
  ];

  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <ArionAmabassadors />
    </>
  );
}
