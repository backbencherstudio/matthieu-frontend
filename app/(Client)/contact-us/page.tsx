import ContactForm from "@/components/ContactUs/ContactForm";
import { Briefcase, HelpCircle, MapPin } from "lucide-react";

const ContactUsPage = () => {
  return (
    <div className="lg:py-12 md:py-10 py-8 maxContainer">
      <div className="mt-5 text-center">
        <h1 className="text-4xl font-bold tracking-[.8%] leading-[120%] text-primary-text">
          CONTACT US
        </h1>
        <p className="text-2xl text-primary-text italic normal-case mt-2 tracking-[.8%]">
          Can't wait to meet you!
        </p>
      </div>
      <div className="mt-8">
        <ContactForm />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Help/FAQ Section */}
          <div className="flex flex-col items-center text-center">
            <div className="p-3">
              <HelpCircle className="w-6 h-6 text-primary-text" />
            </div>
            <h3 className="text-primary-text mb-1">Help/ FAQ</h3>
            <p className="text-sm text-primary-text">Size Guide</p>
          </div>

          {/* Location Section */}
          <div className="flex flex-col items-center text-center">
            <div className="p-3">
              <MapPin className="w-6 h-6 text-primary-text" />
            </div>
            <h3 className="text-primary-text mb-1">Arion Sellier USA</h3>
            <p className="text-sm text-primary-text">
              3080 Fairlane Farms Rd Ste 2
              <br />
              Wellington, FL 33414
            </p>
          </div>

          {/* Join Us Section */}
          <div className="flex flex-col items-center text-center">
            <div className="p-3">
              <Briefcase className="w-6 h-6 text-primary-text" />
            </div>
            <h3 className="text-primary-text mb-1">Join Us!</h3>
            <p className="text-sm text-primary-text">Job Offers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
