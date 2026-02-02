"use client";
import { useGetSingleBlogQuery } from "@/src/redux/client/blog/blogApi";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// const blogs = [
//   {
//     id: 1,
//     type: "rider-spotlights",
//     image: "/images/blog-01.png",
//   },
//   {
//     id: 2,
//     type: "competition-highlights",
//     image: "/images/blog-02.png",
//   },
//   {
//     id: 3,
//     type: "arion-on-the-road",
//     image: "/images/blog-03.png",
//   },
//   {
//     id: 4,
//     type: "saddles",
//     image: "/images/blog-04.png",
//   },
//   {
//     id: 5,
//     type: "saddles",
//     image: "/images/blog-05.png",
//   },
//   {
//     id: 6,
//     type: "tack-accessories",
//     image: "/images/blog-06.png",
//   },
//   {
//     id: 7,
//     type: "arion-world",
//     image: "/images/blog-07.png",
//   },
//   {
//     id: 8,
//     type: "arion-world",
//     image: "/images/blog-08.png",
//   },
// ];

// interface PageProps {
//   id: number;
// }

const BlogDetailPage = () => {
  const params = useParams();
  const id = params?.id as string;
  const { data } = useGetSingleBlogQuery(id);
  const blog = data?.data;
  console.log(blog);
  return (
    <div className="maxContainer">
      <div
        className="bg-no-repeat bg-cover bg-center lg:py-[190px] md:py-[140px] py-[100px] w-full"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), url('${blog?.thumbnailImageUrl}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center items-center h-full mx-auto text-center px-4 ">
          <p className=" text-white text-center text-[26px] md:text-[40px] font-extrabold leading-[124%] tracking-[0.8px] capitalize">
            {blog?.title}
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col lg:flex-row gap-8 w-full pt-[60px]">
          <div className="w-full lg:w-3/4">
            <h1 className="text-[#1F274B] text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[124%] tracking-[0.72px] capitalize mb-[24px] ">
              {blog?.title}
            </h1>
            {blog?.publishedAt && (
              <p className="text-[#1D1F2C] text-[16px] sm:text-[18px] font-extrabold leading-[148%] tracking-[0.36px] mb-[16px] normal-case">
                {format(new Date(blog.publishedAt), "MMM d, yyyy")}
              </p>
            )}
            <p className="text-[#4A4C56] text-[16px] sm:text-[18px] leading-normal  normal-case ">
              {blog?.descriptions}
            </p>
          </div>

          <div className="w-full lg:w-1/4 space-y-4 sm:hidden md:block text-[#4A4C56] text-4">
            <Link
              href="/saddles"
              className="flex items-center justify-center bg-[#1F274B] text-white p-4"
            >
              <p className="text-sm font-semibold normal-case ">Saddles</p>
            </Link>

            <Link
              href="/saddles/used-saddles"
              className="flex justify-center items-center border border-black p-4 hover:bg-[#1F274B] hover:text-white"
            >
              <p className="text-sm font-semibold normal-case">Used Saddles</p>
            </Link>

            <Link
              href="/tack"
              className="flex justify-center items-center border border-black p-4 hover:bg-[#1F274B] hover:text-white"
            >
              <p className="text-sm font-semibold normal-case">
                Tack & Accessories
              </p>
            </Link>

            <div>
              <Link
                href="https://www.instagram.com/arionsellier_usa_can"
                className="flex justify-center items-center border border-black p-4 hover:bg-[#1F274B] hover:text-white"
              >
                <p className="text-sm font-semibold normal-case">Follow Us</p>
              </Link>
            </div>
          </div>
        </div>

        {/* children 1 section */}
        <div className="w-[385px] md:w-[727px] lg:w-[983px] xl:w-[1032px] pb-[60px]">
          {blog?.contentImages?.map((item) => (
            <div className="mt-[32px]">
              <p className="bg-[#1F274B] text-white text-center text-[16px] font-extrabold leading-[148%] tracking-[0.32px] py-[4px] normal-case">
                {item?.imageTitle}
              </p>

              <div className="">
                <Image
                  src={item?.imageUrl}
                  alt="children"
                  width={100}
                  height={100}
                  className="object-cover h-auto w-full my-[16px]"
                  unoptimized
                />
                <p className="text-[#777980] text-center text-[16px] mt-4 normal-case">
                  {item?.imageDescription}
                </p>
                {/* <p className="text-[#4A4C56] text-[16px] sm:text-[18px] tracking-[0.36px] leading-[148%] mt-[24px] normal-case">
                  Ryan Haselden played a key role in Zone 4’s gold medal victory
                  in the Children’s category at the 2025 FEI North American
                  Youth Championships. Riding Hector du Gue, her 2017 Selle
                  Français gelding (Satisfaction FRH x Lando), Haselden helped
                  the team finish on a total of just eight faults after two
                  strong rounds on Thursday. Carrying a fault‑free score from
                  Wednesday’s opener into the team final, Haselden delivered
                  consistent, composed rides that contributed to Zone 4’s
                  dominant performance.
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
