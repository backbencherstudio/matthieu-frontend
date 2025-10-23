import Image from "next/image";
import Link from "next/link";

export default function BestSellerBottom() {
  return (
    <div className="flex md:flex-row flex-col gap-8">
      <Link href="/brand/job-offer" className="relative">
        <Image
          alt="carrers"
          src="/home/carerrs.png"
          width={100}
          height={100}
          className="w-full  h-full"
          unoptimized
        />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-[32px] md:text-[28px] text-2xl font-extrabold leading-[100%] ">
          Careers
        </p>
      </Link>
      <Link href="/find-us" className="relative ">
        <Image
          alt="carrers"
          src="/home/findus.png"
          width={100}
          height={100}
          className="w-full  h-full"
          unoptimized
        />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-[32px] md:text-[28px] text-2xl font-extrabold leading-[100%] ">
          FIND US
        </p>
      </Link>
    </div>
  );
}
