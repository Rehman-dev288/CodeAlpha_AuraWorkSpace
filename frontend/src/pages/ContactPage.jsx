import React, { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { supabase } from "../components/supabaseClient";

const ContactPage = ({ user, userData }) => {
  const [message, setMessage] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    order_no: "",
  });
  const [errors, setErrors] = useState({});

  const wordCount =
    message.trim() === "" ? 0 : message.trim().split(/\s+/).length;
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: userData?.FirstName || user.email?.split("@")[0] || "",
        email: user.email || "",
      }));
    }
  }, [user, userData]);
  const validateAll = () => {
    let newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateAll()) return;
    if (!captchaVerified) return;

    setIsLoading(true);
    try {
      const { error } = await supabase.from("ContactQueries").insert([
        {
          FullName: formData.name,
          Email: formData.email,
          Subject: formData.subject,
          "OrderNo.": formData.order_no,
          Message: message,
          User_Id: user?.id || null,
        },
      ]);
      if (error) throw error;
      setIsSubmitted(true);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-black overflow-hidden font-sans">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
      </div>

      {/* Main Form Section */}
      <div
        className={`relative z-10 flex-grow flex items-center justify-center pt-40 pb-20 px-6 transition-all duration-700 ${isSubmitted ? "blur-md scale-95 opacity-50" : ""}`}
      >
        <motion.div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-10 md:p-12 min-h-[500px] flex flex-col justify-center">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-3 uppercase tracking-[0.3em] text-black">
              Contact Us
            </h1>
            <p className="text-black/60 text-sm font-medium">
              Drop us a line and we'll get back to you!
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">
                Name <span>*</span>
              </label>
              <input
                value={formData.name}
                readOnly={!!user}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
                className={`w-full h-12 px-4 rounded-lg border-2 transition-all text-black font-normal focus:outline-none ${user ? "bg-gray-100 cursor-not-allowed border-gray-200" : "border-gray-300 focus:border-black"}`}
                placeholder="Enter Name"
              />
              {errors.name && (
                <p className="text-red-500 text-[11px] mt-1 font-normal">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">
                Email <span>*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                readOnly={!!user}
                onChange={(e) => {
                  const val = e.target.value;
                  setFormData({ ...formData, email: val });

                  // Real-time error clearing
                  if (errors.email) {
                    const emailRegex =
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (val.trim() && emailRegex.test(val)) {
                      setErrors((prev) => ({ ...prev, email: "" }));
                    }
                  }
                }}
                className={`w-full h-12 px-4 rounded-lg border-2 transition-all text-black font-normal focus:outline-none ${user ? "bg-gray-100 cursor-not-allowed border-gray-200" : "border-gray-300 focus:border-black"}`}
                placeholder="Enter Email"
              />
              {errors.email && (
                <p className="text-red-500 text-[11px] mt-1 font-normal">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-black">
                  Subject <span>*</span>
                </label>
                <input
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: "" });
                  }}
                  className={`w-full h-12 px-4 rounded-lg border-2 transition-all text-black font-normal focus:outline-none ${errors.subject ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                  placeholder="Re..."
                />
                {errors.subject && (
                  <p className="text-red-500 text-[11px] mt-1 font-normal">
                    {errors.subject}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-black">
                  Order No (If Applicable)
                </label>
                <input
                  value={formData.order_no}
                  onChange={(e) =>
                    setFormData({ ...formData, order_no: e.target.value })
                  }
                  className="w-full h-12 px-4 rounded-lg border-2 border-gray-300 focus:border-black transition-all text-black font-normal font-sans"
                  placeholder="AWS123123"
                />
              </div>
            </div>

            <div className="relative">
              <div className="flex justify-between items-end mb-2">
                <label className="text-sm font-semibold text-black">
                  Message <span>*</span>
                </label>
                <span
                  className={`text-[10px] font-black uppercase tracking-[0.2em] ${wordCount >= 500 ? "text-red-600" : "text-zinc-400"}`}
                >
                  {wordCount} / 500 WORDS
                </span>
              </div>
              <textarea
                rows="5"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors({ ...errors, message: "" });
                }}
                className={`w-full p-4 rounded-lg border-2 transition-all text-black resize-none font-normal focus:outline-none ${errors.message ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                placeholder="I want to ask about..."
              />
              {errors.message && (
                <p className="text-red-500 text-[11px] mt-1 font-normal">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex justify-center my-6">
              <ReCAPTCHA
                sitekey="6LcmN1YsAAAAACNlVlSOhyPIDs6X5eax81nkgMeQ"
                onChange={(val) => setCaptchaVerified(!!val)}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`group w-full h-12 font-bold rounded-full border-2 transition-all duration-300 flex items-center justify-center gap-3 tracking-widest text-sm
                  ${!isLoading ? "bg-black text-white border-black hover:bg-white hover:text-black shadow-lg shadow-black/10" : "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"}`}
            >
              {isLoading ? "PUSHING..." : "PUSH REQUEST"}
              {!isLoading && <ArrowRight size={18} />}
            </button>
            <p className="text-center text-[10px] text-gray-400 pt-4 tracking-[0.2em] font-bold uppercase">
              Aura Workspace Support Team
            </p>
          </div>
        </motion.div>
      </div>

      {/* --- SPRINGY SUCCESS MODAL --- */}
      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6 overflow-hidden">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-[4px]"
            />

            {/* Pop-out Box with Spring Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 100, rotateX: 30 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotateX: 0,
              }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.6,
              }}
              className="relative bg-white rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] w-full max-w-md p-10 text-center space-y-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsSubmitted(false)}
                className="absolute right-8 top-8 text-gray-300 hover:text-black transition-all p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
                className="flex justify-center pt-4"
              >
                <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center shadow-2xl">
                  <Check size={48} className="text-white stroke-[3]" />
                </div>
              </motion.div>

              <div className="space-y-3">
                <h2 className="text-3xl font-black uppercase tracking-[0.2em] text-black">
                  Request Pushed
                </h2>
                <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed">
                  We have received your query.
                  <br /> expect a response within 24 hours.
                </p>
              </div>

              <div className="flex flex-col items-center gap-5 pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      subject: "",
                      order_no: "",
                    });
                    setMessage("");
                    setCaptchaVerified(false);
                  }}
                  className="text-[10px] font-black uppercase tracking-[0.4em] text-black border-b-2 border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all"
                >
                  Send Another Request
                </button>

                <div className="flex items-center gap-3 w-full max-w-[120px]">
                  <div className="h-[1px] bg-zinc-200 flex-grow"></div>
                  <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest font-sans">
                    OR
                  </span>
                  <div className="h-[1px] bg-zinc-200 flex-grow"></div>
                </div>

                <button
                  onClick={() => (window.location.href = "/")}
                  className="w-full  max-w-[190px] h-14 bg-black text-white text-[9px] font-black uppercase tracking-[0.4em] rounded-full border-2 border-black hover:bg-white hover:text-black transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]"
                >
                  Back to Workspace
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactPage;
