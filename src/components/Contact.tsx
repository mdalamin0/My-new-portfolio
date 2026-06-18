"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoIosSend  } from "react-icons/io";
import Image from "next/image";
import { FiSend } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

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
    <section
      id="contact"
      className="scroll-mt-24 container pt-16 pb-12 lg:py-18"
    >
      <div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-6 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className=""
          >
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
                <Image
                  src="/images/icons/Gmail.png"
                  alt="Gmail"
                  width={20}
                  height={20}
                  priority
                />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadalamin809@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
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
              <div className="flex items-center gap-3">
                <SlLocationPin className="text-orange text-2xl shrink-0" />
                <p>Fulbaria, Mymensingh</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
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
                    href="https://www.facebook.com/md.al.amin.626694"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/md-al-amin-60aa32219/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    <BsLinkedin />
                  </a>

                  <a
                    href="https://github.com/mdalamin0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn "
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
