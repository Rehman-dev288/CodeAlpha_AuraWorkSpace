import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success
  const navigate = useNavigate();

  const handleShopClick = (section) => {
    navigate("/shop", { state: { scrollTo: section } });
  };
  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // 1. Loading Start
    setStatus("loading");

    // 2. 2 Seconds Wait (Real world process simulation)
    setTimeout(() => {
      console.log("Subscribed:", email);
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    }, 2000);
  };
  // Isko aise update karein taake onClick sahi chale
  const FooterLink = ({ children, to = "#", onClick }) => (
    <li>
      {onClick ? (
        // Agar onClick hai to simple 'button' ya 'a' tag use karein, Link nahi
        <button
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
          className="group relative text-gray-400 text-sm hover:text-white transition-colors duration-300 w-fit block text-left cursor-pointer"
        >
          {children}
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </button>
      ) : (
        <Link
          to={to}
          className="group relative text-gray-400 text-sm hover:text-white transition-colors duration-300 w-fit block"
        >
          {children}
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      )}
    </li>
  );
  return (
    <footer
      id="main-footer"
      className="bg-black text-white py-16 lg:py-20 mt-20 border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              {" "}
              {/* gap-3 ko gap-1 kar dya taake logo pss aaye */}
              {/* Text Container: AURA ke niche WORKSPACE */}
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-wider leading-none">
                  AURA
                </span>
                <span className="text-xl font-bold tracking-wider leading-none">
                  WORKSPACE
                </span>
              </div>
              {/* Logo: Jo ab Text ke bilkul kareeb dikhega */}
              <div className="relative ml-1">
                {" "}
                {/* ml-1 thora sa mazeed pss lane ke liye */}
                <svg viewBox="0 0 60 60" className="w-14 h-14">
                  <text
                    x="30"
                    y="46"
                    textAnchor="middle"
                    fill="white"
                    fontSize="52"
                    fontWeight="900"
                  >
                    W
                  </text>
                  <line
                    x1="12"
                    y1="34"
                    x2="48"
                    y2="34"
                    stroke="white"
                    strokeWidth="6"
                  />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-10">
              Elegant workspace solutions. Precision-crafted tools designed to
              elevate your daily productivity and creative flow.
            </p>
            {/* mt-4 se icons mazeed niche ho gaye hain */}
            <div className="flex items-center gap-6 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Youtube size={20} />
              </a>
              {/* TikTok Custom SVG */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.44-4.11-1.24-.26-.17-.5-.36-.73-.56-.01 2.75-.02 5.51-.02 8.25-.02 3.27-1.55 6.61-4.75 7.78-3.08 1.19-6.88.62-9.28-1.74-2.58-2.47-2.83-7.01-.22-9.74 1.83-1.95 4.73-2.61 7.27-1.71v4.11c-1.24-.51-2.73-.32-3.83.43-1.07.71-1.61 2.11-1.32 3.38.3 1.26 1.48 2.29 2.79 2.29 1.48-.02 2.78-1.28 2.79-2.78V0z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Shop Section - Isko is tarah update karein */}
          <div className="lg:pl-8">
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">
              SHOP
            </h4>
            <ul className="space-y-3">
              <FooterLink onClick={() => handleShopClick("productivity")}>
                Productivity
              </FooterLink>
              <FooterLink onClick={() => handleShopClick("desk-pads")}>
                Desk Pads
              </FooterLink>
              <FooterLink onClick={() => handleShopClick("accessories")}>
                Desk Accessories
              </FooterLink>
            </ul>
          </div>
          {/* Explore Section - Integrated FooterLink */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">
              EXPLORE
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/setups">Desk Setups</FooterLink>
              <FooterLink to="/productivity">Productivity</FooterLink>
              <FooterLink to="/reviews">Reviews</FooterLink>
              <FooterLink to="/guides">Guides</FooterLink>
              <FooterLink to="/dev">Developments</FooterLink>
            </ul>
          </div>
          {/* Support Section - Integrated FooterLink */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">
              SUPPORT
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/contact">Contact Us</FooterLink>
              <FooterLink to="/track">Track My Order</FooterLink>
              <FooterLink to="/ShippingReturns">Shipping & Returns</FooterLink>
              <FooterLink to="/PrivacyPolicy">Privacy Policy</FooterLink>
              <FooterLink to="/TermsofService">Terms of Service</FooterLink>
            </ul>
          </div>
          {/* Updated Newsletter Section */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">
              NEWS, OFFERS & MORE
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with exclusive deals
            </p>
            <div className="relative">
              <form
                onSubmit={handleSubscribe}
                className="flex items-center gap-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status !== "idle"}
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white focus:bg-white/5 transition-all outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="bg-white text-black p-2.5 rounded-lg hover:bg-gray-200 transition-all group disabled:opacity-80 min-w-[46px] h-[42px] flex items-center justify-center"
                >
                  {status === "loading" ? (
                    /* Concentric Ovals Loading Animation */
                    <div className="relative flex items-center justify-center w-5 h-5">
                      <motion.div
                        animate={{
                          scale: [1, 1.6, 1],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                        className="absolute w-5 h-5 border-2 border-black rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.2,
                          delay: 0.2,
                        }}
                        className="absolute w-3 h-3 bg-black/30 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.2,
                          delay: 0.4,
                        }}
                        className="absolute w-1.5 h-1.5 bg-black rounded-full"
                      />
                    </div>
                  ) : (
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  )}
                </button>
              </form>

              {/* Success Message: Appears below the box */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 12 }}
                    exit={{ opacity: 0 }}
                    className="absolute flex items-center gap-2"
                  >
                    <div className="bg-white rounded-full p-0.5">
                      <Check size={10} className="text-black" strokeWidth={4} />
                    </div>
                    <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                      Thanks for Subscribing
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>{" "}
          </div>{" "}
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            {/* LEFT Side: Copyright */}
            <p className="order-2 sm:order-1">
              © 2026 Aura Workspace. All rights reserved.
            </p>

            {/* RIGHT Side: Terms & Privacy */}
            <div className="flex items-center gap-4 order-1 sm:order-2">
              <Link
                to="/TermsofService"
                className="group relative hover:text-white transition-colors"
              >
                Terms of Service
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                to="/PrivacyPolicy"
                className="group relative hover:text-white transition-colors"
              >
                Privacy Policy
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-8">
          <div className="flex items-center gap-2 text-[10px] md:text-xs bg-gray-900/30 px-3 py-1.5 rounded-full border border-gray-800/50 opacity-80 hover:opacity-100 transition-opacity">
            <svg
              className="w-3 h-3 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-gray-500">Developed By</span>
            <a
              href="https://github.com/Rehman-dev288"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 font-bold hover:text-gray-400 transition-colors italic tracking-wide"
            >
              Rehman-dev288
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
