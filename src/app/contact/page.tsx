"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // For form state
import { IconPhoneCall, IconMessageCircle } from "@tabler/icons-react"; // Icons for phone and message

// Re-using components from your login/contact form, adjust paths if needed
import { Label } from "@/app/components/ui/label"; // Assuming @/app alias for src/app
import { Input } from "../components/ui/input"; // Assuming components/ui/input relative to app/contact
import { cn } from "../../lib/utils"; // Assuming lib/utils relative to app/contact

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "", // Added subject field
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);

    alert("Pesan Anda telah terkirim! (Cek konsol untuk data)");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full">
        {/* Card 1: Talk to Sales */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-10 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="bg-orange-600 rounded-full p-4 mb-5 shadow-inner">
            <IconPhoneCall className="h-9 w-9 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-100 mb-3">
            Talk to Sales
          </h2>
          <p className="text-neutral-400 mb-6 leading-relaxed">
            Interested in BangunDev's solutions? Pick up the phone to chat with
            a member of our sales team and discover how we can help.
          </p>
          <a
            href="tel:+628345435345345"
            className="text-blue-500 hover:text-blue-400 transition-colors text-xl font-medium mb-3"
          >
            +1 857 829 5060
          </a>
          <Link
            href="/global-numbers"
            className="text-sm text-neutral-500 hover:underline"
          >
            View all global numbers
          </Link>
        </div>

        {/* Card 2: Contact Customer Support */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-10 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="bg-orange-600 rounded-full p-4 mb-5 shadow-inner">
            <IconMessageCircle className="h-9 w-9 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-100 mb-3">
            Contact Customer Support
          </h2>
          <p className="text-neutral-400 mb-6 leading-relaxed">
            Sometimes you need a little help from your friends. Our dedicated
            support team is here to assist you with any issues or queries.
          </p>
          <Link
            href="#contact-form-section" // Link ke bagian form di halaman yang sama
            className="inline-flex items-center justify-center rounded-md bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-md transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Submit a Request
          </Link>
        </div>
      </div>

      {/* Contact Form Section */}
      <div
        id="contact-form-section"
        className="shadow-2xl mx-auto w-full max-w-2xl rounded-xl bg-neutral-900 p-6 md:p-12 border border-neutral-800 backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold text-neutral-100 mb-6 text-center">
          Send Us a Message
        </h2>
        <p className="mb-8 text-center text-neutral-400">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <LabelInputContainer>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="email">Your Email Address</Label>
              <Input
                id="email"
                placeholder="your@example.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="Regarding a project inquiry..."
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              id="message"
              placeholder="Type your message here..."
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="flex w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-4 py-3 text-base placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-blue-500 dark:focus-visible:ring-blue-600 disabled:cursor-not-allowed disabled:opacity-50 transition duration-300 resize-y"
              // Adjusted textarea styling for better appearance in dark mode
            ></textarea>
          </LabelInputContainer>

          <button
            className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-blue-700 dark:from-blue-800 dark:to-blue-600 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] transition-all duration-300 hover:shadow-lg hover:from-blue-700 hover:to-indigo-700"
            type="submit"
          >
            Send Message &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>

      {/* Footer / Back to Home */}
      <div className="max-w-4xl mx-auto mt-12 text-center text-neutral-500">
        <p className="mb-2">
          Looking for something else? Check our{" "}
          <Link href="/faq" className="text-blue-500 hover:underline">
            FAQ page
          </Link>
          .
        </p>
        <Link href="/" className="text-blue-500 hover:underline text-lg">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

// Re-using helper components from your Login page
const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
