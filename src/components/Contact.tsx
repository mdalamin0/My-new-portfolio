"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

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
    <section className="container py-16 lg:py-18">
      <div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-6 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="">
            <div className=" md:flex items-end  mb-8 text-center md:text-left">
              <div className="hidden md:block 0 h-[2px] w-40 bg-primary" />
              <span className="text-2xl md:ml-2">Contacts</span>
              <div className="mx-auto mt-2 md:hidden h-[2px] w-22 bg-primary" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Let&apos;s work
              <br />
              together
            </h2>
            <p className="mt-6 max-w-md text-gray-300 leading-relaxed">
              I&apos;m a Full Stack Developer specializing in building modern,
              scalable, and user-friendly web applications. Whether you need a
              complete web solution, backend API development, or a custom
              project, I&apos;d love to hear about your ideas and help bring
              them to life.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <LuMail className="text-orange text-2xl shrink-0" />
                <a
                  href="mailto:muhammadalamin809@gmail.com"
                  className="text-sm sm:text-[16px] hover:text-primary transition-colors"
                >
                  muhammadalamin809@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500 text-2xl shrink-0" />
                <a
                  href="https://wa.me/8801611148685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-green-500 transition-colors duration-200"
                >
                  +880 1611-148685
                </a>
              </div>
            </div>
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
              <div className="lg:flex text-center items-center gap-3 xl:gap-4  mt-10 border-t-2 border-white/10 pt-6">
                <h4 className=" font-medium mb-2 lg:mb-0">
                  Follow Me on Social Media:
                </h4>

                <div className="flex items-center justify-center gap-4">
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
