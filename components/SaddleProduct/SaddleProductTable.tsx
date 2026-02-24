"use client"
import { useGetSaddleProductsQuery } from "@/src/redux/admin/saddleProduct/saddleProduct";

export default function SaddleProductTable() {
  const { data } = useGetSaddleProductsQuery("");
  console.log(data);
  return <div>table</div>;
}
