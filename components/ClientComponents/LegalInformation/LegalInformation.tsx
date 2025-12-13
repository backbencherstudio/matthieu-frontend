import Link from "next/link";
import React from "react";

export default function LegalInformation() {
  return (
    <section className="py-10 capitalize">
      <div className="maxContainer">
        <div className="text-center space-y-3 uppercase">
          <h2 className="textSecondary lg:text-[40px] md:text-[36px] text-[28px] font-bold leading-[100%] tracking-[.8px]">
            Legal Information
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          <div className=" text-secondary-text">
            <h1 className="text-xl font-bold text-primary-text">
              Website Editor – Contact
            </h1>
            <p className="text-base">HC and Company LLC – US Headquarters</p>
            <p className="text-base">3080 Fairlane Farms Rd Ste 2</p>
            <p className="text-base">Wellington, FL 33414</p>
          </div>

          <div className="text-secondary-text">
            <p className="text-base">HC and Company LLC - EU Headquarters</p>
            <p className="text-base">35 Route de Mathas</p>
            <p className="text-base">33640 Portets, France</p>
          </div>

          <div className=" text-secondary-text">
            <h1 className="text-xl font-bold text-primary-text">
              Publication Director
            </h1>
            <p className="text-base">Sylvain Houry</p>
          </div>

          <div className=" text-secondary-text">
            <p className="text-base">
              Customer Service is always available by sending any inquiries or
              concerns to the e-mail address,{" "}
              <Link
                href="mailto:hello@arion-hst.com"
                className="text-blue-400 hover:underline font-bold lowercase"
              >
                hello@arion-hst.com
              </Link>
              .{" "}
            </p>
          </div>

          <div className=" text-secondary-text">
            <h1 className="text-xl font-bold text-primary-text">Hosting</h1>
            <h1 className="text-xl font-bold text-primary-text">O2Switch</h1>
            <p className="text-base">222-224 Boulevard Gustave Flaubert</p>
            <p className="text-base">6300 Clermont-Ferrand</p>
            <p className="text-base">SARL au capital de 100 000 euros</p>
            <p className="text-base">SIRET 510 909 807000024</p>
            <p className="text-base">RCS Clermont-Ferrand</p>
            <p className="text-base">Marque dèposèe INPI</p>
            <p className="text-base">
              <Link
                href="https://www.o2switch.fr"
                target="_blank"
                className="text-blue-400 hover:underline font-bold lowercase"
              >
                https://www.o2switch.fr
              </Link>
            </p>
          </div>

          <div className=" text-secondary-text">
            <h1 className="text-xl font-bold text-primary-text">Web Design</h1>
            <p className="text-base">ARION SELLIER</p>
          </div>

          <div className=" text-secondary-text">
            <h1 className="text-xl font-bold text-primary-text">
              Applicable Law – Jurisdiction
            </h1>

            <p className="text-base">
              We ensure that all data subjects may exercise their rights of
              access, rectification, or erasure with respect to their personal
              information. To submit a request, please send an e-mail to:{" "}
              <Link
                href="mailto:hello@arion-hst.com"
                className="text-blue-400 hover:underline font-bold lowercase"
              >
                hello@arion-hst.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
