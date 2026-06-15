"use client";

import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();

    console.log(formData);

    // TODO: Send email / API call

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="container py-16 lg:py-24">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className=" lg:flex items-end  mb-8">
              <div className="hidden lg:block 0 h-[2px] w-40 bg-primary" />
              <span className="text-2xl lg:ml-2">Contacts</span>
              <div className="mx-auto mt-2 lg:hidden h-[2px] w-22 bg-primary" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Let&apos;s work
              <br />
              together
            </h2>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="border border-white/10 rounded-xl p-6 md:p-8"
          >
            <div className="space-y-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/30 pb-3 outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/30 pb-3 outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/30 pb-3 outline-none resize-none focus:border-primary transition-colors"
                />
              </div>

              <button
                type="submit"
                className="btn-primary inline-flex items-center justify-center"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
