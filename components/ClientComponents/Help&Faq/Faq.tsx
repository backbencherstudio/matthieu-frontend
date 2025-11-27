// "use client";

// import ShipmentIcon from "@/components/Icons/AdminIcon/ShipmentIcon";
// import CareIcon from "@/components/Icons/CareIcon";
// import ShoppingCardIcon from "@/components/Icons/MyAccoountIcon/ShoppingCardIcon";
// import RularIcon from "@/components/Icons/RularIcon";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { useState } from "react";

// const faqCategories = [
//   {
//     id: "orders",
//     label: "Orders & Returns",
//     icon: ShoppingCardIcon,
//     questions: [
//       {
//         id: "q1",
//         question: "How can I create an account?",
//         answer:
//           'Click on "My Account" in the top menu to access the log in/register section. Enter your e-mail address and click "Login" in the form to create your account. Fill in all the requested information. Create a strong password using symbols, numbers and capital letters. Complete the form and voila, your account is created!',
//       },
//       {
//         id: "q2",
//         question: "Can I cancel my order?",
//         answer:
//           "For tack and accessory orders, please send an email to hello@arion-hat.com with your order number ASAP. You cannot cancel a new saddle order after your form has been signed.",
//       },
//       {
//         id: "q3",
//         question:
//           "I did not receive the right product. / There is a problem with the size. / The product is damaged. What do I do?",
//         answer:
//           "You will have 14 days from the date of delivery to send an email to our team at hello@arion-hat.com. Please explain the reason for returning the product(s). If the product is defective, we will ask you to attach photos to your email to confirm the damage. If you are not satisfied with the product, send us back your products and get a refund.",
//       },
//     ],
//   },
//   {
//     id: "shipping",
//     label: "Shipping & Delivery",
//     icon: ShipmentIcon,
//     questions: [
//       {
//         id: "q4",
//         question: "When will I receive my order?",
//         answer:
//           "Once your order has been placed on our website, please allow 5 to 7 work days to receive your order.",
//       },
//       {
//         id: "q5",
//         question: "How do I track my order?",
//         answer:
//           "Once your order is ready to be shipped, you will receive by email with the order's tracking number.",
//       },
//       {
//         id: "q6",
//         question: "How are the products shipped?",
//         answer:
//           "Our products are shipped within the entire United States and Canada with UPS.",
//       },
//     ],
//   },
//   {
//     id: "size",
//     label: "Size Guide",
//     isTable: true,
//     icon: RularIcon,
//     content: [
//       {
//         title: "Bodice",
//         rows: [
//           { size: "XS", measurement: "Upper Armhole (1.5 inches)" },
//           { size: "S", measurement: "Upper Armhole (2 inches)" },
//           { size: "M", measurement: "Upper Armhole (2.5 inches)" },
//           { size: "L", measurement: "Upper Armhole (3 inches)" },
//         ],
//       },
//       {
//         title: "Waist",
//         rows: [
//           { size: "XS", measurement: "Waist Width (12 inches)" },
//           { size: "S", measurement: "Waist Width (13 inches)" },
//           { size: "M", measurement: "Waist Width (14 inches)" },
//           { size: "L", measurement: "Waist Width (15 inches)" },
//         ],
//       },
//       {
//         title: "Sleeve Lengths",
//         rows: [
//           { size: "Short", measurement: "Sleeve Length (17 inches)" },
//           { size: "Regular", measurement: "Sleeve Length (19 inches)" },
//           { size: "Long", measurement: "Sleeve Length (21 inches)" },
//           { size: "X-Long", measurement: "Sleeve Length (23 inches)" },
//         ],
//       },
//       {
//         title: "Breeches",
//         rows: [
//           { size: "24", measurement: "Inseam (24 inches)" },
//           { size: "26", measurement: "Inseam (26 inches)" },
//           { size: "28", measurement: "Inseam (28 inches)" },
//           { size: "30", measurement: "Inseam (30 inches)" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "care",
//     label: "Care Instructions",
//     icon: CareIcon,
//     questions: [
//       {
//         id: "q8",
//         question: "How should I care for my product?",
//         answer:
//           "Care instructions depend on the material. Always check the tag inside your product for specific cleaning recommendations. For leather items, use a soft cloth and leather conditioner.",
//       },
//       {
//         id: "q9",
//         question: "How do I clean my saddle?",
//         answer:
//           "Use a soft damp cloth to gently wipe your saddle. Allow it to air dry completely. For deeper cleaning, use saddle soap and a soft brush.",
//       },
//     ],
//   },
// ];

// const FAQ = () => {
//   const [activeCategory, setActiveCategory] = useState("");

//   const currentCategory = faqCategories.find(
//     (cat) => cat.id === activeCategory
//   );
//   return (
//     <div>
//       <div className="bg-primary-bg mb-8">
//         <div className="flex flex-col sm:flex-row items-stretch">
//           {faqCategories.map((category, index) => {
//             const Icon = category.icon;
//             const isActive = activeCategory === category.id;
//             return (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`flex-1 px-4 py-6 transition-colors cursor-pointer ${
//                   isActive
//                     ? "bg-primary-bg/90"
//                     : "bg-primary-bg/80 hover:bg-primary-bg/70"
//                 } ${index !== 0 ? "border-l border-primary-text" : ""}`}
//               >
//                 <div className="flex flex-col items-center gap-2">
//                   <Icon className="w-6 h-6 text-white" />
//                   <span className="text-sm font-medium text-white text-center">
//                     {category.label}
//                   </span>
//                 </div>
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* Content */}
//       {currentCategory?.isTable ? (
//         <div className="space-y-8">
//           <h1 className="text-center text-3xl font-bold text-primary-text">
//             {currentCategory?.label}
//           </h1>
//           {currentCategory?.content.map((section, idx) => (
//             <div key={idx}>
//               <h3 className="text-lg font-semibold text-primary-text mb-4">
//                 {section.title}
//               </h3>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm">
//                   <thead>
//                     <tr className="border-b-2 border-primary-text">
//                       <th className="text-left py-2 px-3 font-semibold text-primary-text">
//                         Size
//                       </th>
//                       <th className="text-left py-2 px-3 font-semibold text-primary-text">
//                         Measurement
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {section.rows.map((row, rowIdx) => (
//                       <tr key={rowIdx} className="border-b border-primary-text">
//                         <td className="py-3 px-3 text-primary-text">
//                           {row.size}
//                         </td>
//                         <td className="py-3 px-3 text-primary-text">
//                           {row.measurement}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <Accordion type="single" collapsible className="w-full space-y-4">
//           <h1 className="text-center text-3xl font-bold text-primary-text">
//             {currentCategory?.label}
//           </h1>
//           {currentCategory?.questions.map((q) => (
//             <AccordionItem key={q.id} value={q.id} className="pl-4 py-2 ">
//               <AccordionTrigger className="text-left py-3 cursor-pointer">
//                 <span className="font-semibold text-primary-text text-lg">
//                   {q.question}
//                 </span>
//               </AccordionTrigger>
//               <AccordionContent className="text-primary-text pt-2 pl-2 normal-case text-lg cursor-pointer">
//                 {q.answer}
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       )}
//     </div>
//   );
// };

// export default FAQ;

"use client";

import { useRef } from "react";

import ShipmentIcon from "@/components/Icons/AdminIcon/ShipmentIcon";
import CareIcon from "@/components/Icons/CareIcon";
import ShoppingCardIcon from "@/components/Icons/MyAccoountIcon/ShoppingCardIcon";
import RularIcon from "@/components/Icons/RularIcon";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ====================== DATA ======================

const faqCategories = [
  {
    id: "orders",
    label: "Orders & Returns",
    icon: ShoppingCardIcon,
    questions: [
      { id: "q1", question: "How can I create an account?", answer: "..." },
      { id: "q2", question: "Can I cancel my order?", answer: "..." },
      {
        id: "q3",
        question: "I did not receive the right product...",
        answer: "...",
      },
    ],
  },

  {
    id: "shipping",
    label: "Shipping & Delivery",
    icon: ShipmentIcon,
    questions: [
      { id: "q4", question: "When will I receive my order?", answer: "..." },
      { id: "q5", question: "How do I track my order?", answer: "..." },
      { id: "q6", question: "How are the products shipped?", answer: "..." },
    ],
  },

  {
    id: "size",
    label: "Size Guide",
    icon: RularIcon,
    isTable: true,
    content: [
      {
        title: "Bodice",
        rows: [
          { size: "XS", measurement: "Upper Armhole (1.5 inches)" },
          { size: "S", measurement: "Upper Armhole (2 inches)" },
        ],
      },
    ],
  },

  {
    id: "care",
    label: "Care Instructions",
    icon: CareIcon,
    questions: [
      {
        id: "q8",
        question: "How should I care for my product?",
        answer: "...",
      },
      { id: "q9", question: "How do I clean my saddle?", answer: "..." },
    ],
  },
];

// ====================== COMPONENT ======================

export default function FAQ() {
  const sectionRefs = useRef({});

  return (
    <div className="space-y-16">
      {/* ================= TABS ================= */}
      <div className="bg-primary-bg">
        <div className="flex flex-col sm:flex-row items-stretch">
          {faqCategories.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  sectionRefs.current[cat.id]?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`flex-1 px-6 py-6 border-primary-text ${
                  index !== 0 ? "border-l" : ""
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <Icon className="w-6 h-6 text-white" />
                  <span className="text-white text-sm font-medium">
                    {cat.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= CONTENT SECTIONS (ALL VISIBLE) ================= */}
      {faqCategories.map((category) => {
        const Icon = category.icon;

        return (
          <section
            key={category.id}
            ref={(el) => {
              if (el) {
                sectionRefs.current[category.id] = el;
              }
            }}
            className="space-y-6 scroll-mt-32"
          >
            {/* Title */}
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-3xl font-bold text-primary-text">
                {category.label.toUpperCase()}
              </h2>
            </div>

            {/* TABLE */}
            {category.isTable ? (
              <div className="space-y-10">
                {category.content.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold text-primary-text mb-4">
                      {section.title}
                    </h3>

                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-primary-text">
                          <th className="py-2 px-3 text-left">Size</th>
                          <th className="py-2 px-3 text-left">Measurement</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows.map((row, rowIdx) => (
                          <tr
                            key={rowIdx}
                            className="border-b border-primary-text/40"
                          >
                            <td className="py-3 px-3">{row.size}</td>
                            <td className="py-3 px-3">{row.measurement}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            ) : (
              /* ACCORDION */
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((q) => (
                  <AccordionItem key={q.id} value={q.id}>
                    <AccordionTrigger className="text-left text-lg font-semibold text-primary-text">
                      {q.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-primary-text text-lg">
                      {q.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </section>
        );
      })}
    </div>
  );
}
