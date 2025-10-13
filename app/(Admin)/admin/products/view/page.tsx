import { redirect } from "next/navigation";

export default function ProductViewRoot() {
  redirect("/admin/products");
}
