import ProductView from "@/components/AdminComponents/Products/View/ProductView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductViewPage({ params }: PageProps) {
  const { id } = await params;
  return <ProductView params={params} />;
}
