"use client";
import { useGetAllTeamsQuery } from "@/src/redux/client/teams/teamsApi";
import Image from "next/image";

export default function MeetTheTeam() {
  const { data, isLoading } = useGetAllTeamsQuery("");

  return (
    <div>
      <div className="maxContainer">
        {/* Banner */}
        <div className="">
          <Image
            src="/images/meet-the-team/COVER PICTURE.jpg"
            alt="Team"
            width={1000}
            height={1000}
            unoptimized
            className="w-full h-[200px] md:h-full max-h-[700px] object-cover object-top "
          />
        </div>

        {/* Team */}
        <div className=" xl:pt-16 pb-16 xl:pb-30">
          {/* Header */}
          <div className="flex flex-col items-center gap-1 md:gap-4">
            <h1 className="uppercase text-3xl md:text-[40px] font-extrabold text-primary-text mt-[48px]">
              MEET THE TEAM
            </h1>
            <p className="text-secondary-text text-center text-base md:text-lg max-w-[600px] w-full mx-auto">
              Introduce the people behind the brand to build trust and add a
              human element.
            </p>
          </div>

          {/* Team List */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 mt-12">
            {isLoading
              ? Array.from({ length: 6 }).map((_, idx) => (
                  <TeamCardSkeleton key={idx} />
                ))
              : data?.data?.map((item) => (
                  <div key={item.id}>
                    <Image
                      src={item.image}
                      alt="Team"
                      width={1000}
                      height={1000}
                      unoptimized
                      className="w-full h-[300px] sm:h-[350px] lg:h-[450px] object-cover object-top"
                    />

                    <h1 className="text-md md:text-[22px] lg:text-[28px] font-extrabold uppercase mt-6 mb-4 text-dark-primary text-center">
                      {item.name}
                    </h1>

                    <p className="text-base text-secondary-text text-center">
                      {item.designation}
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const TeamCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px] bg-gray-200" />

      <div className="h-6 bg-gray-200 rounded mt-6 mx-auto w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded mt-3 mx-auto w-1/2"></div>
    </div>
  );
};
