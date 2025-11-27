"use client";

import type React from "react";

import { type FormEvent, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* First Name and Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-primary-text pb-2 placeholder-primary text-primary-text focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-primary-text pb-2 placeholder-primary text-primary-text focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Email and Phone Number */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-primary-text pb-2 placeholder-primary text-primary-text focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-primary-text pb-2 placeholder-primary text-primary-text focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Address 1 */}
      <div>
        <input
          type="text"
          name="address1"
          placeholder="Address 1"
          value={formData.address1}
          onChange={handleChange}
          className="w-full bg-transparent border-b-2 border-primary-text pb-2 placeholder-primary text-primary-text focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Address 2 */}
      <div>
        <input
          type="text"
          name="address2"
          placeholder="Address 2"
          value={formData.address2}
          onChange={handleChange}
          className="w-full bg-transparent border-b-2 border-primary-text pb-2 placeholder-primary text-primary-text focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* City, State, Zip Code */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-primary-text pb-2 placeholder-primary text-primary-text focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-primary-text pb-2 placeholder-primary text-primary-text focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={formData.zipCode}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-primary-text pb-2 placeholder-primary text-primary-text focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full bg-transparent border-b-2 border-primary-text pb-2 placeholder-primary text-primary-text focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows={8}
          className="w-full bg-transparent border-2 border-primary-text p-4 placeholder-primary text-primary-text focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="px-8 py-3 bg-primary text-white font-semibold cursor-pointer"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
