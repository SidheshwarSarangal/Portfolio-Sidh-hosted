import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaUser } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false); // 🔥 Loading state added

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Disable button immediately after submit

    try {
      const response = await fetch('https://portfolio-sidh-hosted-back.onrender.com/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message!");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred while sending message!");
    } finally {
      setLoading(false); // Re-enable button after operation completes
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>

      <div
        id="Footer"
        className="flex flex-col cursor-default pt-32 md:flex-row justify-around bg-white text-blue-900 p-10 md:p-12 items-center"
      >
        {/* Contact Info */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-cyan-500">Contact</h1>
          <h3 className="text-3xl md:text-2xl font-normal text-cyan-500 mt-2">Feel Free To Reach Out!</h3>
          <ul className="flex flex-wrap gap-6 mt-6 justify-center">
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sidheshwar.sarangal@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500"
              >
                <MdOutlineEmail size={70} className="hover:scale-110 transition duration-300" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sidheshwar-sarangal-0b31482b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500"
              >
                <CiLinkedin size={70} className="hover:scale-110 transition duration-300" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SidheshwarSarangal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500"
              >
                <FaGithub size={70} className="hover:scale-110 transition duration-300" />
              </a>
            </li>
          </ul>

        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-white p-6 rounded-2xl mt-10 md:mt-0 w-full md:w-1/3 shadow-lg"
        >
          {/* Name Field */}
          <label className="flex flex-col text-blue-900">
            <span className="flex items-center gap-2 font-semibold text-sm md:text-lg mb-2">
              <FaUser /> Name
            </span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>

          {/* Email Field */}
          <label className="flex flex-col text-blue-900">
            <span className="flex items-center gap-2 font-semibold text-sm md:text-lg mb-2">
              <MdOutlineEmail /> Email
            </span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>

          {/* Message Field */}
          <label className="flex flex-col text-blue-900">
            <span className="flex items-center gap-2 font-semibold text-sm md:text-lg mb-2">
              <FaRegCommentDots /> Message
            </span>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </label>

          {/* Send Button */}
          <button
            type="submit"
            disabled={loading} // 🔥 Disabled when loading
            className={`${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-600 cursor-pointer'
              } text-white font-semibold py-3 rounded-lg transition`}
          >
            {loading ? "Sending..." : "Send"} {/* Button text changes */}
          </button>
        </form>

      </div>
      <p className="text-center text-gray-500 text-sm my-5 mx-4">
        Portfolio of Sidheshwar Sarangal | Created using Vite + React, HTML, Tailwind CSS, and Express (for mail)
      </p>
    </div>

  );
};

export default Footer;
