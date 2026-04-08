"use client";
import {
  useAddToCardMutation,
  useGetSingleTackProductQuery,
} from "@/src/redux/client/tack-product/tackProduct";
import {
  useAddTackToFavoriteMutation,
  useGetAllFavoritesQuery,
  useRemoveFavoriteMutation,
} from "@/src/redux/client/tack/tackApi";
import { Heart, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import ProductDetailsAccordion from "./ProductDetailsAccordion";
import RelatedProduts from "./RelatedProduts";

export default function ProductDetailsClient() {
  const id = useParams().id;
  const [quantity, setQuantity] = useState(1);
  const { data: productData, isLoading } = useGetSingleTackProductQuery(id);
  const [addToCard] = useAddToCardMutation();

  const [addTackToFavorite] = useAddTackToFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();
  const { data: favorites = [] } = useGetAllFavoritesQuery();

  // Get default variant on load
  const defaultVariant =
    productData?.variants?.find((v) => v.isDefault) ||
    productData?.variants?.[0];

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  // Derive unique colors from variants
  const colors = useMemo(() => {
    if (!productData?.variants) return [];
    const seen = new Set();
    return productData.variants
      .filter((v) => {
        if (seen.has(v.colorId)) return false;
        seen.add(v.colorId);
        return true;
      })
      .map((v) => ({
        id: v.colorId,
        name: v.color.toUpperCase(),
        raw: v.color,
      }));
  }, [productData]);

  // Derive unique sizes from variants
  const sizes = useMemo(() => {
    if (!productData?.variants) return [];
    const seen = new Set();
    return productData.variants
      .filter((v) => {
        if (seen.has(v.sizeId)) return false;
        seen.add(v.sizeId);
        return true;
      })
      .map((v) => ({ id: v.sizeId, label: v.size.toUpperCase(), raw: v.size }));
  }, [productData]);

  // Active color/size with fallback to default variant
  const activeColor = selectedColor ?? defaultVariant?.colorId;
  const activeSize = selectedSize ?? defaultVariant?.sizeId;

  // Find the matching variant based on selected color + size
  const selectedVariant = useMemo(() => {
    if (!productData?.variants) return null;
    return (
      productData.variants.find(
        (v) => v.colorId === activeColor && v.sizeId === activeSize,
        (v) => v.colorId === activeColor && v.sizeId === activeSize,
      ) ||
      productData.variants.find((v) => v.colorId === activeColor) ||
      productData.variants.find((v) => v.colorId === activeColor) ||
      defaultVariant
    );
  }, [productData, activeColor, activeSize, defaultVariant]);

  // Images: use selected variant's images, fallback to default variant images
  const variantImages = selectedVariant?.images?.length
    ? selectedVariant.images
    : defaultVariant?.images || [];

  const [mainImage, setMainImage] = useState(null);
  const displayMainImage = mainImage || variantImages[0];

  const benefits = [
    "Relieves pressure on corners of the mouth",
    "Foam padded headpiece and crown piece",
    "Minimize jaw shifting and stabilize the bit with the lower strap",
    "Relieves pressure on corners of the mouth",
    "Foam padded headpiece and crown piece",
    "Minimize jaw shifting and stabilize the bit with the lower strap",
  ];

  const handleCart = async () => {
    if (!selectedVariant) return;

    try {
      const cartData = {
        tackProductId: productData.id,
        variantId: selectedVariant.id,
        quantity: quantity,
      };

      const response = await addToCard(cartData);
      if (response?.data?.success) {
        toast.success("Added to cart!");
      }
      if (response?.error || !response) {
        toast.error("Failed to add to cart. Please try again.");
        return;
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const currentFavorite = favorites.find(
    (item) => item.product.id === productData?.id,
  );
  const isFavorited = Boolean(currentFavorite);

  const handleToggleFavorite = async () => {
    if (isFavorited && currentFavorite?.id) {
      // Remove from favorites
      await removeFavorite({ favoriteId: currentFavorite.id }).unwrap();
      toast.success("Removed from favorites");
    } else {
      // Add to favorites
      await addTackToFavorite({ tackProductId: productData?.id }).unwrap();
      toast.success("Added to favorites");
    }
  };

  useEffect(() => {
    setQuantity(1);
  }, [selectedVariant?.id]);

  if (isLoading) return <div className="maxContainer py-8">Loading...</div>;

  return (
    <div>
      <div className="lg:pb-12 md:pb-10 py-8 maxContainer">
        <div className="flex xl:flex-row flex-col gap-6">
          {/* Thumbnail column — desktop */}
          <div className="xl:block hidden">
            <div className="xl:flex xl:flex-col grid grid-cols-4 gap-4">
              {variantImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Product thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img)}
                  className="object-contain w-[60px] h-[60px] cursor-pointer hover:opacity-80 transition"
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
                    {displayMainImage ? (
                      <img
                        src={displayMainImage}
                        alt={productData?.name || "Product"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full aspect-square bg-gray-100 flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>
                  {/* Thumbnails — mobile */}
                  <div className="block xl:hidden">
                    <div className="grid grid-cols-4 gap-4">
                      {variantImages.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          onClick={() => setMainImage(img)}
                          className="object-contain w-full h-full cursor-pointer"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Details Section */}
                <div className="flex flex-col xl:gap-8 lg:gap-6 gap-4">
                  {/* Header */}
                  <div className="flex flex-col xl:gap-4 gap-3">
                    <div className="flex justify-between items-center">
                      <h1 className="xl:text-[32px] text-2xl font-extrabold leading-[100%] tracking-[0.64px] text-[#1F274B]">
                        {productData?.name || "N/A"}
                        {productData?.name || "N/A"}
                      </h1>
                      <button
                        onClick={handleToggleFavorite}
                        className="cursor-pointer"
                      >
                        <Heart
                          className={`${
                            isFavorited
                              ? "text-red-500 fill-red-500"
                              : "text-[#4C526F]"
                          } xl:size-12 size-8`}
                        />
                      </button>
                    </div>
                    <p className="xl:text-2xl md:text-xl text-lg leading-[100%] tracking-[.48px] textSecondary">
                      SKU: {productData?.sku || "N/A"}
                      SKU: {productData?.sku || "N/A"}
                    </p>
                  </div>

                  <div className="h-[1px] bg-[#DFE1E7] w-full"></div>

                  {/* Price */}
                  <p className="xl:text-[32px] text-2xl tracking-[.64px] text-[#1F274B] leading-[100%]">
                    {selectedVariant
                      ? `${selectedVariant.currency} $${selectedVariant.price.toFixed(2)}`
                      : "N/A"}
                  </p>
                  <p className="xl:text-2xl text-xl tracking-[.64px] text-[#1F274B] leading-[100%] normal-case">
                    {selectedVariant
                      ? selectedVariant.stockQuantity === 0
                        ? "Out of stock"
                        : `${selectedVariant.stockQuantity} in stock`
                      : "N/A"}
                  </p>

                  {/* Color Selection */}
                  {colors.length > 0 && (
                    <div className="flex flex-col xl:gap-4 gap-3">
                      <p className="textSecondary xl:text-[20px] text-base tracking-[.40px] leading-[100%]">
                        Color:{" "}
                        <span className="capitalize">
                          {colors.find((c) => c.id === activeColor)?.name || ""}
                        </span>
                      </p>
                      <div className="flex gap-4">
                        {colors.map((color) => (
                          <button
                            key={color.id}
                            onClick={() => {
                              setSelectedColor(color.id);
                              setMainImage(null);
                            }}
                            title={color.name}
                            style={{ backgroundColor: color.raw }}
                            className={`xl:w-8 xl:h-8 rounded-full w-6 h-6 cursor-pointer transition-all ${
                              activeColor === color.id
                                ? "outline outline-offset-2 outline-gray-600"
                                : ""
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Size Selection */}
                  {sizes.length > 0 && (
                    <div className="flex flex-col xl:gap-4 gap-3">
                      <div className="flex justify-between items-center">
                        <p className="textSecondary leading-[100%] tracking-[.4px] xl:text-xl md:text-lg text-base">
                          Size:
                        </p>
                        <Link
                          href="/help-faq#size"
                          className="underline text-base leading-[100%] tracking-[.32px] textSecondary cursor-pointer underline-offset-2 hover:no-underline"
                        >
                          See Size Guide
                        </Link>
                      </div>
                      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-3 gap-2">
                        {sizes.map((size) => (
                          <button
                            key={size.id}
                            onClick={() => setSelectedSize(size.id)}
                            className={`md:py-3 py-2 w-full md:text-base text-sm transition-all leading-[100%] cursor-pointer ${
                              activeSize === size.id
                                ? "bg-[#222842] text-white font-extrabold"
                                : "bg-[#696E86] text-white"
                            }`}
                          >
                            {size.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        setQuantity((prev) => Math.max(1, prev - 1))
                      }
                      disabled={
                        !selectedVariant ||
                        selectedVariant.stockQuantity === 0 ||
                        quantity <= 1
                      }
                      className="border border-[#1F274B] p-1 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="min-w-[24px] text-center">{quantity}</span>
                    <button
                      onClick={() =>
                        setQuantity((prev) =>
                          Math.min(
                            selectedVariant?.stockQuantity ?? 1,
                            prev + 1,
                          ),
                        )
                      }
                      disabled={
                        !selectedVariant ||
                        selectedVariant.stockQuantity === 0 ||
                        quantity >= selectedVariant?.stockQuantity
                      }
                      className="border border-[#1F274B] p-1 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  {/* Benefits */}
                  <div className="flex flex-col xl:gap-4 gap-3">
                    <p className="lg:text-xl text-base textSecondary leading-[100%] tracking-[.4px]">
                      Benefits:
                    </p>
                    <ul className="xl:space-y-3 space-y-2">
                      {benefits.map((benefit, index) => (
                        <li
                          key={index}
                          className="flex gap-2.5 xl:text-base text-sm tracking-[.08px] leading-[120%] textSecondary"
                        >
                          <span className="font-bold">•</span>
                          <span className="normal-case">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="textSecondary xl:text-lg text-start text-base underline underline-offset-2">
                    More details
                  </button>

                  {/* Buttons */}
                  <div className="xl:space-y-4 space-y-3">
                    <div className="flex gap-3">
                      <button
                        onClick={handleCart}
                        disabled={
                          !selectedVariant ||
                          selectedVariant.stockQuantity === 0
                        }
                        className="w-full cursor-pointer bg-white hover:bg-gray-50 text-gray-900 font-bold py-3 px-4 border-1 border-[#1F274B] transition lg:text-lg text-base disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {selectedVariant?.stockQuantity === 0
                          ? "OUT OF STOCK"
                          : "ADD TO CART"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ProductDetailsAccordion />
            </div>
          </div>
        </div>

        <div>
          <RelatedProduts />
        </div>
      </div>
    </div>
  );
}
