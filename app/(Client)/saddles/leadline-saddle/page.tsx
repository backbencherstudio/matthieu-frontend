"use client";

import ProductDetailsAccordion from "@/components/ClientComponents/ProductDetailsClient/ProductDetailsAccordion";
import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import ShopAccessories from "@/components/ClientComponents/Saddles/ShopAccessories";
import {
  useAddSaddleToFavoriteMutation,
  useGetAllFavoritesQuery,
  useGetLeadLineSaddleQuery,
  useLeadlineAddToCartMutation,
  useRemoveFavoriteMutation,
} from "@/src/redux/client/saddle/saddleApi";
import { Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const LeadlineSaddlePage = () => {
  const { data, isLoading } = useGetLeadLineSaddleQuery();
  const { data: favorites = [] } = useGetAllFavoritesQuery();
  const [leadlineAddToCart] = useLeadlineAddToCartMutation();

  const [addSaddleToFavorite, { isLoading: isAddingFavorite }] =
    useAddSaddleToFavoriteMutation();
  const [removeFavorite, { isLoading: isRemovingFavorite }] =
    useRemoveFavoriteMutation();

  const products = Array.isArray(data?.data) ? data.data : [];

  // ✅ Selected size product (default to first)
  const [selectedProductId, setSelectedProductId] = useState<
    string | undefined
  >(undefined);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  );
  const [quantity, setQuantity] = useState(1);

  // ✅ Active product based on selected size
  const activeProduct =
    products.find((p) => p.id === selectedProductId) ?? products[0];

  useEffect(() => {
    if (products.length > 0 && !selectedProductId) {
      setSelectedProductId(products[0].id);
      setSelectedImage(products[0].images?.[0]?.url);
    }
  }, [data]);

  // ✅ When size changes, reset image to first image of that product
  const handleSizeSelect = (productId: string) => {
    setSelectedProductId(productId);
    const product = products.find((p) => p.id === productId);
    setSelectedImage(product?.images?.[0]?.url);
    setQuantity(1);
  };

  const breadLink = [
    { label: "SADDLES", href: "/saddles" },
    { label: "ARION", href: "/saddles/arion-saddles" },
    { label: "JUMPING", href: "/saddles/jumping" },
  ];

  const isFavoriteActionLoading = isAddingFavorite || isRemovingFavorite;

  const currentFavorite =
    favorites.find(
      (item) =>
        item.type === "SADDLE_PRODUCT" &&
        item.product?.id === activeProduct?.id,
    ) ?? null;

  const isFavorited = Boolean(currentFavorite);

  const handleToggleFavorite = async () => {
    if (!activeProduct?.id || isFavoriteActionLoading) return;
    try {
      if (currentFavorite?.id) {
        await removeFavorite({ favoriteId: currentFavorite.id }).unwrap();
      } else {
        await addSaddleToFavorite({
          saddleProductId: activeProduct.id,
        }).unwrap();
      }
    } catch (error) {
      console.error("Favorite action failed:", error);
    }
  };

  const addToCart = async () => {
    if (!activeProduct?.id) return;
    try {
      const response = await leadlineAddToCart({
        leadlineId: activeProduct.id,
        quantity,
      });
      if (response?.data?.success) {
        toast.success(response?.data?.message);
      }
      if (response?.data?.success === false) {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      console.error("Add to cart failed:", error);
    }
  };

  const formatSize = (size: string) =>
    size === "SIZE_12_5" ? "12.5" : size === "SIZE_14_5" ? "14.5" : size;

  const currentImage = selectedImage ?? activeProduct?.images?.[0]?.url;

  if (isLoading) return <p>Loading...</p>;
  if (!activeProduct) return <p>No products found.</p>;

  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <div className="lg:py-12 md:py-10 py-8 maxContainer">
        <div className="flex xl:flex-row flex-col gap-6">
          {/* Desktop Left Sidebar Thumbnails */}
          <div className="xl:block hidden">
            <div className="xl:flex xl:flex-col grid grid-cols-4 gap-4">
              {activeProduct.images?.map((img, index) => (
                <Image
                  key={index}
                  onClick={() => setSelectedImage(img.url)}
                  src={img.url}
                  alt=""
                  width={220}
                  height={220}
                  className={`object-contain w-[220px] h-[140px] cursor-pointer`}
                  unoptimized
                />
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white">
              <div className="grid md:grid-cols-2 xl:gap-8 lg:gap-6 gap-4">
                {/* Image Section */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-center">
                    {currentImage && (
                      <Image
                        src={currentImage}
                        alt={activeProduct.name}
                        className="w-[586px] h-[628px] object-cover"
                        width={586}
                        height={628}
                        unoptimized
                      />
                    )}
                  </div>

                  {/* Mobile Thumbnails */}
                  <div className="block xl:hidden">
                    <div className="grid grid-cols-4 gap-4">
                      {activeProduct.images?.map((img, index) => (
                        <Image
                          key={index}
                          src={img.url}
                          alt=""
                          width={120}
                          height={120}
                          onClick={() => setSelectedImage(img.url)}
                          className={`object-contain w-full h-full cursor-pointer`}
                          unoptimized
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col xl:gap-8 lg:gap-6 gap-4">
                  <div className="flex justify-between items-center">
                    <h1 className="xl:text-[32px] text-2xl font-extrabold leading-[100%] tracking-[0.64px] text-[#1F274B]">
                      {activeProduct.name}
                    </h1>
                    <button
                      className="cursor-pointer disabled:opacity-60"
                      onClick={handleToggleFavorite}
                      disabled={isFavoriteActionLoading}
                      aria-label={
                        isFavorited ? "Remove from favorite" : "Add to favorite"
                      }
                    >
                      <Heart
                        className={`xl:size-12 size-8 ${
                          isFavorited
                            ? "text-red-500 fill-red-500"
                            : "text-[#4C526F]"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="h-[1px] bg-[#DFE1E7] w-full"></div>

                  <p className="xl:text-[32px] text-2xl tracking-[.64px] text-[#1F274B] leading-[100%] font-extrabold">
                    Price: {activeProduct.currency === "USD" ? "$" : "€"}{" "}
                    {activeProduct.price}
                  </p>
                  <p className="xl:text-[32px] text-2xl tracking-[.64px] text-[#1F274B] leading-[100%] font-extrabold">
                    Stock Quantity: {activeProduct.stockQuantity}
                  </p>

                  {/* ✅ Size Selection — loops through all products */}
                  <div className="flex items-center gap-x-4">
                    <p className="text-[#262626] leading-[100%] tracking-[.4px] xl:text-xl md:text-lg text-base">
                      Size:
                    </p>
                    <div className="flex gap-3">
                      {products.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleSizeSelect(product.id)}
                          className={`px-6 py-3 text-base leading-[100%] tracking-[.32px] cursor-pointer border-2 transition-colors ${
                            selectedProductId === product.id
                              ? "bg-[#1F274B] text-white border-[#1F274B]"
                              : "bg-white text-[#4C526F] border-[#4C526F]"
                          }`}
                        >
                          {formatSize(product.size)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        setQuantity((prev) => Math.max(1, prev - 1))
                      }
                      className="border border-[#1F274B] p-1 cursor-pointer"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="min-w-[24px] text-center">{quantity}</span>
                    <button
                      onClick={() =>
                        setQuantity((prev) =>
                          Math.min(activeProduct.stockQuantity, prev + 1),
                        )
                      }
                      className="border border-[#1F274B] p-1 cursor-pointer"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <div className="w-full">
                    <button
                      disabled={!activeProduct.stockQuantity}
                      onClick={addToCart}
                      className="w-full block px-8 py-4 text-lg leading-[100%] tracking-[.32px] text-[#4C526F] bg-[#E9E9ED] cursor-pointer uppercase border border-[#262626] disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ProductDetailsAccordion />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ShopAccessories />
        </div>
      </div>
    </>
  );
};

export default LeadlineSaddlePage;
