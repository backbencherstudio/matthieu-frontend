import { ContactUsForm } from "@/components/ClientComponents/ContactUs/ContactForm";
import { Briefcase, HelpCircle, MapPin } from "lucide-react";
import Link from "next/link";

const ContactUsPage = () => {
  return (
    <div className="lg:py-12 md:py-10 py-8 maxContainer">
      <div className="mt-5 text-center">
        <h1 className="text-4xl font-bold tracking-[.8%] leading-[120%] text-[#1f274b]">
          CONTACT US
        </h1>
        <p className="text-2xl text-[#1f274b] italic normal-case mt-2 tracking-[.8%]">
          Can't wait to meet you!
        </p>
      </div>
      <div className="mt-8">
        <ContactUsForm />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Help/FAQ Section */}
          <Link
            href={"/help-faq"}
            className="flex flex-col items-center text-center"
          >
            <div className="p-3">
              <HelpCircle className="w-6 h-6 text-[#1f274b]" />
            </div>
            <h3 className="text-[#1f274b] mb-1">Help/ FAQ</h3>
            <p className="text-sm text-[#1f274b]">Size Guide</p>
          </Link>

          {/* Location Section */}
          <Link
            href={"/saddles/arion-saddles"}
            className="flex flex-col items-center text-center"
          >
            <div className="p-3">
              <MapPin className="w-6 h-6 text-[#1f274b]" />
            </div>
            <h3 className="text-[#1f274b] mb-1">Arion Sellier USA</h3>
            <p className="text-sm text-[#1f274b]">
              3080 Fairlane Farms Rd Ste 2
              <br />
              Wellington, FL 33414
            </p>
          </Link>

          {/* Join Us Section */}
          <Link
            href={"/brand/job-offer"}
            className="flex flex-col items-center text-center"
          >
            <div className="p-3">
              <Briefcase className="w-6 h-6 text-[#1f274b]" />
            </div>
            <h3 className="text-[#1f274b] mb-1">Join Us!</h3>
            <p className="text-sm text-[#1f274b]">Job Offers</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
