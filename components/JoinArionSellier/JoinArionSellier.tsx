import Image from "next/image";

const JoinArionSellier = () => {
  return (
    <div className="maxContainer">
      <p className="text-[#1F274B] text-center text-[35px] md:text-[40px] lg:text-[48px] font-extrabold leading-[100%] tracking-[0.96px] pt-[40px] md:pt-[50px] lg:pt-[60px] pb-[40px] md:pb-[48px] normal-case">
        Join Arion Sellier
      </p>
      {/* <Image
        src="/joinarion/horse2.png"
        alt="horse"
        width={100}
        height={100}
        className="object-cover md:object-contain w-full min-h-[160px] border md:h-full"
        unoptimized
      ></Image> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px] md:gap-[64px]">
        <div className="w-6/6">
          <p className="normal-case text-[#4A4C56] pt-[48px]">
            Join Arion Sellier as a… {" "}
            <span className="text-4 text-base font-extrabold">
              Saddle Fitting Expert
            </span>
          </p>
          <p className="text-[#4A4C56]  text-[18px] font-normal leading-[148%] tracking-[0.36px] normal-case">
            As we continue to grow, we are actively recruiting sales
            professionals in several areas of the United States to join our
            team!
          </p>
          <p className="text-[#4A4C56] font-avenir text-[18px] font-extrabold leading-[148%] tracking-[0.36px] normal-case pt-[20px] pb-[16px]">
            Most Needed Areas:
          </p>
          <div className="normal-case pl-4 text-[#4A4C56]">
            <li>Kentucky</li>
            <li>Texas</li>
            <li>Alabama/Tennesse</li>
            <li>Northern California</li>
            <li>Southern California</li>
            <li>Colorado</li>
            <li>
              More areas coming soon! If you feel that you would be a good fit
              and do not see your location, please inquire and let us know where
              you are located.
            </li>
          </div>
          <p className="text-[#4A4C56] font-avenir text-[18px] font-extrabold leading-[148%] tracking-[0.36px] normal-case pb-[16px] pt-[20px]">
            Why Arion Sellier?
          </p>
          <p className="text-[#4A4C56]  md:text-[18px] font-[400px] leading-[148%] tracking-[0.36px] normal-case">
            Arion Sellier is a company built with the sole desire to offer
            top-of-the-range saddles that are completely made in France through
            our leathers and workmanship. As one of the most customizable
            saddles on the market, our team is available for the horse and rider
            on all scales within a variety of disciplines. We are dedicated to
            your success and that of your customers. Our growing trust by top{" "}
            <br />
            level riders and barns has driven Arion Sellier to expand
            nationwide, pushing us to grow our team of saddle experts across the
            country. We pride ourselves in our ability to be there for one
            another and work together as a team to grow our knowledge in sales,
            saddle fitting, leather, horse biomechanics, and more!
          </p>
          <p className="text-[#4A4C56] mt-[20px] mb-4  text-[18px] font-extrabold leading-[148%] tracking-[0.36px] normal-case ">
            What we are looking for…
          </p>
          <p className="normal-case text-[#4A4C56] text-[18px] font-[400px] leading-[148%] tracking-[0.36px] pb-0 md:pb-[60px]">
            Arion Sellier is looking for an independent candidate who is
            fascinated by the world of horses at all levels and sport. This
            candidate is self-motivated and hardworking. They are organized and
            great at communicating with their riders, professional and amateur,
            and other Arion team members. They are easy to talk to and
            knowledgeable in the sport of equestrian.
          </p>
        </div>
        <div className="w-6/6">
          <p className="text-[#4A4C56] mt-0 md:pt-[48px] pb-[16px] text-[18px] font-extrabold leading-[148%] tracking-[0.36px]">
            Responsibilities:
          </p>
          <div className="normal-case pl-4  text-[#4A4C56]">
            <li>Represent and promote Arion Sellier within your territory.</li>
            <li>
              Develop relationships with barn owners, trainers, and professional
              riders within your <br /> territory to create a strong referral
              network.
            </li>
            <li>
              Provide the best customer service and after-sales care to all our
              customers within your territory.
            </li>
            <li>
              Attend horse shows and events within your territory to promote
              brand awareness and prospect new customers.
            </li>
            <li>
              Maintain and care for your demo saddles, accessory inventory, and
              company car in a responsible and organized manner.
            </li>
          </div>
          <p className="text-[#4A4C56] font-avenir text-[18px] font-extrabold leading-[148%] tracking-[0.36px] normal-case pb-[16px] mt-[20px]">
            Ideal Candidate's Profile:
          </p>
          <div className="normal-case pl-4 mb-[20px] text-[#4A4C56]">
            <li>
              Sales and/or customer service experience (ideally2 or more years).
            </li>
            <li>
              Established relationships within the equestrian community in your
              territory.
            </li>
            <li>Valid driving license and clean driving record.</li>
            <li>Autonomous, independent, and dynamic.</li>
            <li>Self-motivated and driven.</li>
          </div>
          <p className="text-[#4A4C56] font-avenir text-[18px] font-extrabold leading-[148%] tracking-[0.36px] normal-case mb-[16px] ">
            Benefits:
          </p>
          <div className="normal-case pl-4 pb-[20px] text-[#4A4C56]">
            <li>Supportive team and leadership.</li>
            <li>
              Training in horse biomechanics, saddle fitting, leather, and
              sales.
            </li>
            <li>
              Base salary plus generous commission structure based upon
              performance.
            </li>
            <li>Company car, gas, and travel expenses.</li>
            <li>Health Insurance.</li>
            <li>Paid vacation.</li>
            <li>Objective bonuses with a growing company!</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinArionSellier;
