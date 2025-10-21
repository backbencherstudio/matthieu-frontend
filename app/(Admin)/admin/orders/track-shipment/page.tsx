import TrackShipmentTable from "@/components/AdminComponents/Order/TrackShipmentTable";
import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";

export default function TrackShipmentPage() {
  const breadLink = [
    {
      label: "Orders Management",
      href: "/admin/orders",
    },
    {
      label: "Track Shipment",
    },
  ];
  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className="mt-6">
        <TrackShipmentTable />
      </div>
    </div>
  );
}
