import Link from "next/link";

interface SaddleImageItem {
  id: string;
  slug?: string;
  name: string;
  image: string;
  startFrom?: string;
  link?: string;
}

interface SaddleImageItem {
  id: string;
  slug?: string;
  name: string;
  image: string;
  startFrom?: string;
  link?: string;
}

export default function SAddlesCategoryItems({ saddlesItems }) {
  return (
    <div>
      <div className="flex flex-col items-center gap-x-8 justify-center">
        <div className="p-8 flex items-center justify-center lg:w-[374px]">
          <div>
            <p className="lg:text-[32px] md:text-[30px] text-[28px] font-extrabold md:leading-[100%] leading-[130%] textSecondary tracking-[.8px] text-center text-[#FFF]">
              {saddlesItems?.name}
            </p>

            <p className="md:text-2xl text-lg! font-normal leading-[100%] tracking-[.48px] md:mt-4 mt-3 text-center capitalize">
              {saddlesItems?.subtitle}
            </p>

            <div className="mt-6 flex items-center justify-center">
              <Link
                href="/saddles/saddlery-expert"
                className="px-8 py-3 bg-[#1F274B] cursor-pointer rounded-full"
              >
                <span className="text-[16px] text-[#fff] leading-[136%] font-semibold tracking-[1px]">
                  TRY A SADDLE
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:max-w-[90%] w-full">
          {saddlesItems?.statusText ? (
            <div className="text-center text-white text-xl font-semibold">
              {saddlesItems.statusText}
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-full">
              {saddlesItems?.images?.map((product) => (
                <Link
                  href={product.id ? `saddles/${product.id}` : "#"}
                  key={product.id}
                  className="flex flex-col gap-5 items-center sm:items-start justify-center p-5 max-w-[400px] w-full mx-auto bg-[#F8F9FB]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full block mx-auto"
                  />

                  <div className="space-y-3 text-center sm:text-left">
                    <h2 className="text-[#1F274B] text-xl font-semibold">
                      {product.name}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
