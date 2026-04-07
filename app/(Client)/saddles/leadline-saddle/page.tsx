"use client";

import ProductDetailsAccordion from "@/components/ClientComponents/ProductDetailsClient/ProductDetailsAccordion";
import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import ShopAccessories from "@/components/ClientComponents/Saddles/ShopAccessories";
import LoveIcon from "@/components/Icons/LoveIcon";
import {
  useAddSaddleToFavoriteMutation,
  useGetAllFavoritesQuery,
  useGetLeadLineSaddleQuery,
  useLeadlineAddToCartMutation,
  useRemoveFavoriteMutation,
} from "@/src/redux/client/saddle/saddleApi";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

const LeadlineSaddlePage = () => {
  const [quantity, setQuantity] = useState(1);
  const { data, isLoading } = useGetLeadLineSaddleQuery();
  const { data: favorites = [] } = useGetAllFavoritesQuery();
  const [leadlineAddToCart] = useLeadlineAddToCartMutation();

  const [addSaddleToFavorite, { isLoading: isAddingFavorite }] =
    useAddSaddleToFavoriteMutation();
  const [removeFavorite, { isLoading: isRemovingFavorite }] =
    useRemoveFavoriteMutation();

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    data?.data?.images[0]?.url,
  );

  useEffect(() => {
    if (data?.data?.images?.[0]?.url) {
      setSelectedImage(data?.data?.images[0]?.url);
    }
  }, [data]);

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

  const sizes = data?.data?.size
    ? Array.isArray(data.data.size)
      ? data.data.size
      : [data.data.size]
    : [];

  const currentSaddleId = data?.data?.id;

  const currentFavorite = useMemo(() => {
    if (!currentSaddleId) return null;

    return (
      favorites.find(
        (item) =>
          item.type === "SADDLE_PRODUCT" &&
          item.product?.id === currentSaddleId,
      ) ?? null
    );
  }, [favorites, currentSaddleId]);

  const isFavorited = Boolean(currentFavorite);
  const isFavoriteActionLoading = isAddingFavorite || isRemovingFavorite;

  const handleToggleFavorite = async () => {
    if (!currentSaddleId || isFavoriteActionLoading) return;

    try {
      if (isFavorited && currentFavorite?.id) {
        await removeFavorite({ favoriteId: currentFavorite.id }).unwrap();
      } else {
        await addSaddleToFavorite({
          saddleProductId: currentSaddleId,
        }).unwrap();
      }
    } catch (error) {
      console.error("Favorite action failed:", error);
    }
  };

  const addToCart = async () => {
    if (!data?.data) return;

    try {
      const response = await leadlineAddToCart({
        leadlineId: data?.data?.id,
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

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <div className="lg:py-12 md:py-10 py-8 maxContainer">
        <div className="flex xl:flex-row flex-col gap-6">
          <div className="xl:block hidden">
            <div className="xl:flex xl:flex-col grid grid-cols-4 gap-4 ">
              {data?.data?.images?.map((img, index) => (
                <Image
                  key={index}
                  onClick={() => setSelectedImage(img?.url)}
                  src={img?.url}
                  alt=""
                  width={220}
                  height={220}
                  className="object-contain w-[220px] h-[220px] "
                  unoptimized
                />
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white ">
              <div className="grid md:grid-cols-2 xl:gap-8 lg:gap-6 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-center">
                    <Image
                      src={selectedImage}
                      alt="Double"
                      className="w-[586px] h-[628px] object-cover "
                      width={586}
                      height={628}
                      unoptimized
                    />
                  </div>

                  <div className="block xl:hidden">
                    <div className="xl:flex xl:flex-col grid grid-cols-4 gap-4 outline-4">
                      {data?.data?.images?.map((img, index) => (
                        <Image
                          fill
                          key={index}
                          src={img?.url}
                          alt=""
                          className="object-contain w-full h-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col xl:gap-8 lg:gap-6 gap-4">
                  <div className="flex flex-col xl:gap-4 gap-3">
                    <div className="flex justify-between items-center">
                      <h1 className="xl:text-[32px] text-2xl font-extrabold leading-[100%] tracking-[0.64px] text-[#1F274B]">
                        {data?.data?.name || "Leadline Saddle"}
                      </h1>

                      <button
                        className="cursor-pointer disabled:opacity-60"
                        onClick={handleToggleFavorite}
                        disabled={isFavoriteActionLoading}
                        aria-label={
                          isFavorited
                            ? "Remove from favorite"
                            : "Add to favorite"
                        }
                      >
                        <LoveIcon
                          className={`xl:size-12 size-8 ${
                            isFavorited
                              ? "text-red-500 fill-red-500"
                              : "text-[#4C526F]"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="h-[1px] bg-[#DFE1E7] w-full "></div>

                  <p className="xl:text-[32px]  text-2xl tracking-[.64px] text-[#1F274B] leading-[100%] font-extrabold">
                    Price: ${data?.data?.price || "0.00"}
                  </p>
                  <p className="xl:text-[32px]  text-2xl tracking-[.64px] text-[#1F274B] leading-[100%] font-extrabold">
                    Stock Quantity: {data?.data?.stockQuantity}
                  </p>

                  <div className="flex flex-col xl:gap-4 gap-3">
                    <div className="flex items-center gap-x-4">
                      <p className="text-[#262626] leading-[100%] tracking-[.4px] xl:text-xl md:text-lg text-base ">
                        Size:
                      </p>
                      <div className="space-x-3">
                        {sizes.map((size, index) => (
                          <button
                            key={index}
                            className="px-6 py-3 bg-[#4C526F] text-base leading-[100%] tracking-[.32px] text-[#FFF] cursor-pointer"
                          >
                            {size === "SIZE_12_5"
                              ? "12.5"
                              : size === "SIZE_14_5"
                                ? "14.5"
                                : size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        setQuantity((prev) => Math.max(1, prev - 1))
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
                            Number(data?.data?.stockQuantity ?? prev),
                            prev + 1,
                          ),
                        )
                      }
                      className="border border-[#1F274B] p-1 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="space-x-4 w-full flex items-center">
                    {/* <button
                      disabled={!data?.data?.stockQuantity}
                      className="w-full block px-8 py-4 bg-[#1F274B] text-lg leading-[100%] tracking-[.32px] text-[#FFF] cursor-pointer uppercase disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Buy The Saddle
                    </button> */}
                    <button
                      disabled={!data?.data?.stockQuantity}
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
