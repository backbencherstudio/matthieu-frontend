import Image from "next/image";
import React from "react";

export default function MeetTheTeam() {
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
          <div className="grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-8 mt-12">
            <div className="md:col-span-2 md:col-start-1">
              <Image
                src="/images/meet-the-team/sylvain-houry-fondateur-arionhst.jpg"
                alt="Team"
                width={1000}
                height={1000}
                unoptimized
                className="w-full h-[300px] sm:h-[350px] lg:h-[450px] object-cover object-top"
              />

              <h1 className="text-md md:text-[22px] lg:text-[28px]  font-extrabold uppercase mt-6 mb-4 text-dark-primary text-center">
                Sylvain Houry
              </h1>
              <p className="text-base text-secondary-text normal-case text-center">
                Founder & CEO
              </p>
            </div>

            <div className="md:col-span-2 md:col-start-3">
              <Image
                src="/images/meet-the-team/hadrien-schenck-responsable-ventes-arionhst.jpg"
                alt="Team"
                width={1000}
                height={1000}
                unoptimized
                className="w-full h-[300px] sm:h-[350px] lg:h-[450px] object-cover object-top"
              />

              <h1 className="text-md md:text-[21px] lg:text-[28px] font-extrabold uppercase mt-6 mb-4 text-dark-primary text-center">
                Hadrien Schenck
              </h1>
              <p className="text-base text-secondary-text normal-case text-center">
                As general manager
              </p>
            </div>

            <div className="md:col-span-2 md:col-start-5">
              <Image
                src="/images/meet-the-team/kristen-rose-arion.jpeg"
                alt="Team"
                width={1000}
                height={1000}
                unoptimized
                className="w-full h-[300px] sm:h-[350px] lg:h-[450px] object-cover object-top"
              />

              <h1 className="text-md md:text-[21px] lg:text-[28px]  font-extrabold uppercase mt-6 mb-4 text-dark-primary text-center">
                Kirsten Rose
              </h1>
              <p className="text-base text-secondary-text normal-case text-center">
                US Sales Manager
              </p>
            </div>

            <div className="md:col-span-2 md:col-start-2 ">
              <Image
                src="/images/meet-the-team/CHLOE.png"
                alt="Team"
                width={1000}
                height={1000}
                unoptimized
                className="w-full h-[300px] sm:h-[350px] lg:h-[450px] object-cover object-top"
              />

              <h1 className="text-md md:text-[21px] lg:text-[28px]  font-extrabold uppercase mt-6 mb-4 text-dark-primary text-center">
                Chloe Cazebon
              </h1>
              <p className="text-base text-secondary-text normal-case text-center">
                Europe Marketing and Communication Manager
              </p>
            </div>

            <div className="md:col-span-2 md:col-start-4 ">
              <Image
                src="/images/meet-the-team/GABRIELLE.png"
                alt="Team"
                width={1000}
                height={1000}
                unoptimized
                className="w-full h-[300px] sm:h-[350px] lg:h-[450px] object-cover object-top"
              />

              <h1 className="text-md md:text-[21px] lg:text-[28px]  font-extrabold uppercase mt-6 mb-4 text-dark-primary text-center">
                Gabrielle Fournier
              </h1>
              <p className="text-base text-secondary-text normal-case text-center">
                US & Canada Marketing Communications Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
