import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const formRef = useRef();
  const [messageSent, setMessageSent] = useState(false);

 const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setMessageSent(true);
        formRef.current.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again later.");
      }
    );
};


  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative py-28 bg-gradient-to-br from-slate-950 to-slate-800 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-center md:text-6xl text-4xl font-bold bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent">
          Get In<span className="text-slate-400 ml-4">Touch</span>
        </h2>
        <p className="mt-6 text-center text-slate-400 max-w-2xl mx-auto text-lg">
          I’m currently open to internships, collaborations, and learning opportunities.
          Feel free to reach out!
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan
                  -400"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg cursor-none bg-cyan-500 hover:bg-cyan-600 transition text-white font-medium"
              >
                Send Message
              </button>

              {messageSent && (
                <p className="text-cyan-400 mt-4 text-center">
                  Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 text-slate-300">
            <div className="flex items-start">
              <div className="text-cyan-400 mr-4 text-2xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-100">Location</h3>
                <p>Indore, India</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-cyan-400 mr-4 text-2xl">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-100">Email</h3>
                <p>vinayakshrivas30@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-cyan-400 mr-4 text-2xl">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-100">Phone</h3>
                <p>+91 8085200588</p>
              </div>
            </div>

            <div className="pt-4">
  <h3 className="text-slate-200 font-semibold mb-3">Follow me on</h3>

  <div className="flex items-center gap-6">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/vinayak-shrivas-528a58286/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="group p-3 rounded-full bg-slate-800/70 border border-slate-700
               text-slate-400 text-2xl
               hover:text-cyan-400 hover:border-cyan-400/50
               hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
               hover:-translate-y-1 transition-all duration-300"
  >
    <FaLinkedin />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/Sorcervinayak"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="group p-3 rounded-full bg-slate-800/70 border border-slate-700
               text-slate-400 text-2xl
               hover:text-cyan-400 hover:border-cyan-400/50
               hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
               hover:-translate-y-1 transition-all duration-300"
  >
    <FaGithub />
  </a>

  {/* LeetCode */}
  <a
    href="https://leetcode.com/u/Sorcerer_coder/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LeetCode"
    className="group p-3 rounded-full bg-slate-800/70 border border-slate-700
               text-slate-400 text-2xl
               hover:text-cyan-400 hover:border-cyan-400/50
               hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
               hover:-translate-y-1 transition-all duration-300"
  >
    <SiLeetcode />
  </a>
</div>

</div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact; 