import Link from "next/link";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="py-10 capitalize">
      <div className="maxContainer">
        <div className="text-center space-y-5 uppercase">
          <h2 className="textSecondary lg:text-[40px] md:text-[36px] text-[28px] font-bold leading-[100%] tracking-[.8px]">
            Privacy Policy
          </h2>
          <p className="text-base text-secondary-text">
            This Privacy Policy describes how ARION SELLIER FRANCE SAS, a
            company headquartered at 35 Route de Mathas, 33640 Portets, France
            (“Arion Sellier,” “we,” “our,” or “us”), collects, uses, and
            protects personal data in connection with its website{" "}
            <Link
              href="https://www.arion-hst.com"
              className="text-blue-400 font-semibold lowercase hover:underline"
              target="_blank"
            >
              www.arion-hst.com
            </Link>{" "}
            and{" "}
            <Link
              href="https://arion-sellier.com"
              className="text-blue-400 font-semibold lowercase hover:underline"
              target="_blank"
            >
              www.arion-sellier.com
            </Link>
          </p>
          <p className="text-base text-secondary-text">
            We are committed to respecting your privacy and ensuring that all
            personal data is processed lawfully, fairly, and transparently in
            accordance with the General Data Protection Regulation (EU) 2016/679
            (“GDPR”).
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <div className="space-y-3 text-secondary-text">
            <h1 className="text-xl font-bold text-primary-text">
              1. Personal Data We Collect
            </h1>
            <p className="text-base">
              We may collect two categories of personal data when you use our
              website:
            </p>
          </div>

          <div className="space-y-3 text-secondary-text">
            <h1 className="text-xl font-bold text-primary-text">
              1.1 Data You Provide Directly
            </h1>
            <p className="text-base">
              This includes information you voluntarily submit via our contact
              form or by emailing us directly. Required fields in our online
              form include:
            </p>
            <ul className="pl-3 list-disc list-inside">
              <li className="text-base">First and last name</li>
              <li className="text-base">Company or organization</li>
              <li className="text-base">Email address</li>
            </ul>

            <p>
              This information is necessary to respond to your inquiry or
              provide the service requested.
            </p>
          </div>

          <div className="space-y-3 text-secondary-text">
            <h1 className="text-xl font-bold text-primary-text">
              1.2 Data Collected Automatically
            </h1>
            <p className="text-base">
              With your prior consent, we automatically collect certain
              information related to your visit, such as:
            </p>
            <ul className="pl-3 list-disc list-inside">
              <li className="text-base">Browsing activity</li>
              <li className="text-base">Duration of your session</li>
              <li className="text-base">
                IP address (anonymized when collected for analytics)
              </li>
              <li>Browser type and version</li>
            </ul>

            <p className="text-base">
              These data are collected using{" "}
              <strong className="text-primary-text">cookies</strong> and similar
              tracking technologies.
            </p>
          </div>

          <div className="space-y-3 text-secondary-text">
            <h1 className="text-xl font-bold text-primary-text">
              2. Purpose of Data Processin
            </h1>
            <p className="text-base">
              We process your personal data for the following purposes:
            </p>
            <ul className="pl-3 list-disc list-inside">
              <li className="text-base">
                <strong className="text-primary-text">
                  Responding to your inquiries
                </strong>{" "}
                and managing our communication with you
              </li>

              <li className="text-base">
                <strong className="text-primary-text">
                  Measuring website performance,
                </strong>{" "}
                audience metrics, and detecting potential technical issues,
                through anonymized web analytics (Google Analytics).
              </li>

              <li className="text-base">
                <strong className="text-primary-text">
                  Improving website functionality and user experience.
                </strong>{" "}
              </li>
            </ul>

            <p className="text-base">
              Personal data is processed exclusively by Arion Sellier or its
              authorized service providers. Your data will{" "}
              <strong className="text-primary-text">
                never be sold, rented, or shared with third parties
              </strong>{" "}
              for unrelated purposes.
            </p>

            <p className="text-base">
              The data controller responsible for processing your personal data
              is <strong className="text-primary-text">Bordagain.</strong>
            </p>
          </div>

          <div className="space-y-3 text-secondary-text">
            <h1 className="text-xl font-bold text-primary-text">
              3. Legal Basis for Processing
            </h1>
            <p className="text-base">
              We only process your personal data when at least one of the
              following legal bases applies:
            </p>
            <ul className="pl-3 list-disc list-inside">
              <li className="text-base">
                <strong className="text-primary-text">Your consent</strong>{" "}
                (e.g., acceptance of cookies, submission of contact forms)
              </li>

              <li className="text-base">
                <strong className="text-primary-text">
                  Legitimate interest,
                </strong>{" "}
                specifically to ensure the proper functioning and performance of
                our website (with anonymized analytics).
              </li>
            </ul>

            <p className="text-base">
              Consent is obtained through clear, affirmative actions such as
              checked boxes or acceptance buttons and may be withdrawn at any
              time.
            </p>
          </div>

          <div className="space-y-3 text-secondary-text">
            <h1 className="text-xl font-bold text-primary-text">
              4. Data Retention
            </h1>
            <p className="text-base">
              Personal data is retained for a maximum period of{" "}
              <strong className="text-primary-text">three (3) years</strong>{" "}
              from the date of your last interaction with us, unless a longer
              retention period is required by law.
            </p>
          </div>

          <div className="space-y-3 text-secondary-text">
            <h1 className="text-xl font-bold text-primary-text">5. Cookies</h1>
            <p className="text-base">
              Our website uses cookies to enhance your browsing experience and
              measure site performance. These include:
            </p>
            <ul className="pl-3 list-disc list-inside">
              <li className="text-base">
                <strong className="text-primary-text">
                  Google Analytics cookies:
                </strong>{" "}
                used for anonymized web analytics.
              </li>

              <li className="text-base">
                <strong className="text-primary-text">
                  Preference cookies:
                </strong>{" "}
                used to remember your consent choices so you are not asked again
                on subsequent visits.
              </li>
            </ul>

            <p className="text-base">
              You may disable cookies at any time through your browser settings
              or via our cookie banner.
            </p>
          </div>

          <div className="space-y-3 text-secondary-text">
            <h1 className="text-xl font-bold text-primary-text">
              6. Your Rights
            </h1>
            <p className="text-base">
              In accordance with the GDPR, you have the following rights
              regarding your personal data:
            </p>
            <ul className="pl-3 list-disc list-inside">
              <li className="text-base">
                <strong className="text-primary-text">Right of access:</strong>{" "}
                obtain confirmation of data processing and access your personal
                data.
              </li>

              <li className="text-base">
                <strong className="text-primary-text">
                  Right to rectification:
                </strong>{" "}
                request corrections to inaccurate or incomplete data
              </li>

              <li className="text-base">
                <strong className="text-primary-text">Right to erasure:</strong>{" "}
                request deletion of your personal data, subject to legal
                obligations.
              </li>

              <li className="text-base">
                <strong className="text-primary-text">
                  Right to withdraw consent:
                </strong>{" "}
                revoke your consent at any time.
              </li>

              <li className="text-base">
                <strong className="text-primary-text">
                  Right to object and restrict processing:
                </strong>{" "}
                subject to certain conditions.
              </li>
            </ul>

            <p className="text-base">
              To exercise your rights, please contact our Data Protection
              Officer.
            </p>
          </div>

          <div className="space-y-3 text-secondary-text">
            <h1 className="text-xl font-bold text-primary-text">
              7. Data Protection Contact
            </h1>
            <p className="text-base">
              For any questions or to exercise your rights regarding your
              personal data, you may contact:
            </p>

            <div>
              <h1 className="text-xl font-bold text-primary-text">
                Gabrielle Fournier
              </h1>

              <h1 className="text-xl font-bold ">Data Protection Officer</h1>

              <h1 className="text-xl font-bold ">
                Email:{" "}
                <Link
                  href="mailto:g.fournier@arion-hst.com"
                  className="text-primary-text"
                >
                  g.fournier@arion-hst.com
                </Link>
              </h1>
            </div>
          </div>

          <div className="space-y-3 text-secondary-text">
            <h1 className="text-xl font-bold text-primary-text">
              8. Updates to This Policy
            </h1>
            <p className="text-base">
              We may update this Privacy Policy from time to time to reflect
              regulatory changes or improvements to our practices. The revised
              policy will be posted on this page with the updated effective
              date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
