'use client'

import React, { useState, useRef } from "react";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import HeroComponent from "@/components/Hero/HeroComponent";
import FooterComponent from "@/components/Footer/FooterComponent";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

const Page = () => {
  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const sendEmail = () => {
    setIsSending(true);

    emailjs
      .sendForm("service_ctdittb", "template_au1d3xi", form.current, {
        publicKey: "xN4TEo-Zo9SmTIcFl",
      })
      .then(
        () => {
          setIsSending(false);
          toast.success(" Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          setIsSending(false);
          toast.error(" Failed to send: " + error.text);
        }
      );
  };

  return (
    <>
      <NavbarComponent />

      <div className="py-17">
        <div className="flex flex-col lg:flex-row">
          <ToastContainer position="top-center" />

          {/* Left Section */}
          <div className="relative flex-grow flex items-center justify-center p-8 lg:w-1/2 min-h-[50vh] lg:min-h-screen">
            <Image
              src="/contact (3).webp"
              alt="Person listening to music"
              fill
              style={{ objectFit: "cover" }}
              className="z-0"
            />
            <div className="absolute inset-0 bg-green-600 opacity-60 z-10"></div>
            <div className="relative z-20 text-white p-4 text-center lg:text-left lg:w-3/4">
              <h1 className="text-4xl lg:text-5xl font-extrabold border w-fit px-4 py-2">
                Let's Make Something Memorable
              </h1>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="flex items-center justify-center p-8 lg:w-1/2">
            <div className="w-full max-w-lg p-8 space-y-6">
              <form ref={form} className="space-y-4">
                <div className="flex justify-center items-center text-2xl font-bold">
                  My Contact Form
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  name="message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                {isSending ? (
                  <Button size="lg" className="w-full" disabled>
                    <Loader2Icon className="animate-spin" />
                    Please wait...
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={sendEmail}
                    className="w-full flex items-center justify-center p-3 text-white bg-slate-600 rounded-lg hover:bg-slate-700 transition-colors font-bold"
                  >
                    Send Mail
                  </Button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
};

export default Page;
         
         
         
     