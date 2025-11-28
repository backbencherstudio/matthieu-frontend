import FAQ from "@/components/ClientComponents/Help&Faq/Faq";

const HelpAndFaqPage = () => {
  return (
    <div className="lg:py-12 md:py-10 py-8 maxContainer">
      <div className="mt-5 text-center">
        <h1 className="text-4xl font-bold tracking-[.8%] leading-[120%] text-[#1f274b]">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="text-2xl text-[#1f274b] italic normal-case mt-2 tracking-[.8%]">
          We have answers.
        </p>
      </div>
      <div className="mt-5">
        <FAQ />
      </div>
    </div>
  );
};

export default HelpAndFaqPage;
