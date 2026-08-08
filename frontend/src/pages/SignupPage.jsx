import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, RefreshCw, Check, AlertCircle } from "lucide-react"; // AlertCircle add kiya error ke liye
import { useNavigate } from "react-router-dom";
import { supabase } from "../components/supabaseClient";

const SignupPage = ({ onNavigate }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [showExistModal, setShowExistModal] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    countryCode: "",
    phoneNo: "",
    day: "",
    month: "",
    year: "",
    password: "",
  });
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const countries = [
    { code: "Code", label: "" },
    { code: "+92", iso: "PK" },
    { code: "+1", iso: "US" },
    { code: "+44", iso: "GB" },
    { code: "+91", iso: "IN" },
    { code: "+971", iso: "AE" },
    { code: "+966", iso: "SA" },
    { code: "+61", iso: "AU" },
    { code: "+1", iso: "CA" },
    { code: "+49", iso: "DE" },
    { code: "+33", iso: "FR" },
  ];

  const generateCaptcha = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setCaptchaCode(code);
    setUserInput("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const validateAll = () => {
    let newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // 1. Email check
    if (!formData.Email.trim()) {
      newErrors.Email = "Email is required.";
    } else if (!emailRegex.test(formData.Email)) {
      newErrors.Email = "Valid email required.";
    }

    // 2. Password check
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (!passRegex.test(formData.password)) {
      newErrors.password = "Password is too weak.";
    }

    // 3. Captcha check
    if (!userInput.trim()) {
      newErrors.captcha = "Please enter the code.";
    } else if (userInput !== captchaCode) {
      newErrors.captcha = "Security code mismatch.";
    }
    if (!formData.FirstName.trim())
      newErrors.FirstName = "First name is required.";
    if (!formData.LastName.trim())
      newErrors.LastName = "Last name is required.";
    if (!formData.countryCode || formData.countryCode === "Code") {
      newErrors.phone = "Select code.";
    } else if (!formData.phoneNo.trim()) {
      newErrors.phone = "Phone required.";
    } else if (formData.phoneNo.length < 8 || formData.phoneNo.length > 15) {
      newErrors.phone = "Invalid length (8-15 digits).";
    }
    if (!formData.day || !formData.month || !formData.year)
      newErrors.dob = "Full DOB required.";
    const dayNum = parseInt(formData.day);
    if (!formData.day || !formData.month || !formData.year) {
      newErrors.dob = "Full DOB required.";
    } else if (dayNum < 1 || dayNum > 31) {
      newErrors.dob = "Invalid Date (1-31 only).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (!validateAll()) return;
    setIsLoading(true);
    setErrors({});

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.Email,
        password: formData.password,
      });

      if (authError) {
        if (
          authError.message.toLowerCase().includes("already registered") ||
          authError.status === 422
        ) {
          setErrors({
            Email: "This email is already registered. Please login.",
          });
          setShowExistModal(true);
          setIsLoading(false);
          return;
        }
        throw authError;
      }

      const { error: dbError } = await supabase.from("UserData").insert([
        {
          Id: authData.user.id,
          FirstName: formData.FirstName,
          LastName: formData.LastName,
          Email: formData.Email,
          PhoneNumber: `${formData.countryCode}${formData.phoneNo}`,
          DateofBirdth: `${formData.day}-${formData.month}-${formData.year}`,
        },
      ]);

      if (dbError) throw dbError;
      setIsSubmitted(true);
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getBorderClass = (fieldError) =>
    fieldError
      ? "border-red-500 focus:border-red-500"
      : "border-gray-300 focus:border-black";

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
      </div>
      <div className="relative z-10 flex-grow flex items-center justify-center pt-40 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-10 md:p-12"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 uppercase">
              NEW TO AURA WORKSPACE?
            </h1>
            <p className="text-gray-600 text-sm">
              Create account for faster checkout and exclusive offers
            </p>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-black">
                  First Name <span>*</span>
                </label>
                <input
                  value={formData.FirstName}
                  onChange={(e) =>
                    setFormData({ ...formData, FirstName: e.target.value })
                  }
                  className={`w-full h-12 px-4 rounded-lg border-2 transition-all text-black outline-none ${getBorderClass(errors.FirstName)}`}
                  placeholder="Enter first name"
                />
                {errors.FirstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.FirstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-black">
                  Last Name <span>*</span>
                </label>
                <input
                  value={formData.LastName}
                  onChange={(e) =>
                    setFormData({ ...formData, LastName: e.target.value })
                  }
                  className={`w-full h-12 px-4 rounded-lg border-2 transition-all text-black outline-none ${getBorderClass(errors.LastName)}`}
                  placeholder="Enter last name"
                />
                {errors.LastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.LastName}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">
                Email <span>*</span>
              </label>
              <input
                value={formData.Email}
                onChange={(e) =>
                  setFormData({ ...formData, Email: e.target.value })
                }
                className={`w-full h-12 px-4 rounded-lg border-2 transition-all text-black outline-none ${getBorderClass(errors.Email)}`}
                placeholder="Enter your email"
              />
              {errors.Email && (
                <p className="text-red-500 text-xs mt-1">{errors.Email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">
                Phone Number <span>*</span>
              </label>
              <div className="flex gap-2">
                <div className="relative w-32">
                  <select
                    value={formData.countryCode}
                    onChange={(e) =>
                      setFormData({ ...formData, countryCode: e.target.value })
                    }
                    className={`w-full h-12 pl-3 pr-8 rounded-lg border-2 bg-white font-normal text-sm appearance-none cursor-pointer text-black transition-all outline-none ${getBorderClass(errors.phone)}`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Code
                    </option>
                    {countries.slice(1).map((c, i) => (
                      <option
                        key={i}
                        value={c.code}
                        className="font-normal text-black"
                      >
                        {c.iso} {c.code}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-black text-[10px]">
                    ▼
                  </div>
                </div>

                <input
                  type="tel"
                  value={formData.phoneNo}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNo: e.target.value })
                  }
                  className={`flex-1 h-12 px-4 rounded-lg border-2 transition-all text-sm font-normal text-black outline-none placeholder:text-gray-400 ${getBorderClass(errors.phone)}`}
                  placeholder="000-0000000"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">
                Date of Birth <span>*</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                <input
                  type="number"
                  value={formData.day}
                  onChange={(e) =>
                    setFormData({ ...formData, day: e.target.value })
                  }
                  placeholder="DD"
                  className={`h-12 border-2 rounded-lg text-center outline-none font-normal text-black placeholder:text-gray-400 ${getBorderClass(errors.dob)} ${formData.day > 31 || errors.dob ? "border-red-500" : "border-gray-300"}`}
                />

                <div className="relative">
                  <select
                    value={formData.month}
                    onChange={(e) =>
                      setFormData({ ...formData, month: e.target.value })
                    }
                    className={`w-full h-12 px-3 border-2 rounded-lg outline-none bg-white font-normal text-sm appearance-none cursor-pointer transition-all text-black ${getBorderClass(errors.dob)}`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      MM
                    </option>
                    {months.map((m, i) => (
                      <option
                        key={i}
                        value={m}
                        className="font-normal text-black"
                      >
                        {m}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-black">
                    ▼
                  </div>
                </div>

                <input
                  type="number"
                  value={formData.year}
                  onChange={(e) =>
                    setFormData({ ...formData, year: e.target.value })
                  }
                  placeholder="YYYY"
                  className={`h-12 border-2 rounded-lg text-center outline-none font-normal text-black placeholder:text-gray-400 ${getBorderClass(errors.dob)}`}
                />
              </div>
              {errors.dob && (
                <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">
                Password <span>*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className={`w-full h-12 px-4 pr-12 rounded-lg border-2 transition-all text-black outline-none ${getBorderClass(errors.password)}`}
                  placeholder="Enter password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Min 8 characters with uppercase, lowercase, special & numbers.
              </p>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-black">
                Enter the 4-digit code shown below <span>*</span>
              </label>
              <div className="flex gap-3 items-center">
                <div
                  className={`w-32 h-12 bg-white border-2 rounded-lg flex items-center justify-center relative overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] ${getBorderClass(errors.captcha)}`}
                >
                  <span className="text-2xl font-black tracking-[0.3em] italic select-none text-black z-10">
                    {captchaCode}
                  </span>
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-2 left-0 w-full h-[1px] bg-black rotate-12"></div>
                    <div className="absolute top-2 left-0 w-full h-[1px] bg-black rotate-12"></div>
                  </div>
                </div>

                <div className="relative flex-1">
                  <input
                    type="text"
                    maxLength="4"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className={`w-full h-12 px-4 rounded-lg border-2 transition-all text-black outline-none ${getBorderClass(errors.captcha)}`}
                    placeholder="ENTER CODE"
                  />
                </div>

                <button
                  onClick={generateCaptcha}
                  type="button"
                  className="h-12 w-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-black transition-all group"
                >
                  <RefreshCw
                    size={18}
                    className="group-hover:rotate-180 transition-transform duration-500"
                  />
                </button>
              </div>
              {errors.captcha && (
                <p className="text-red-500 text-xs mt-1">{errors.captcha}</p>
              )}
            </div>

            <button
              onClick={handleSignup}
              disabled={isLoading}
              className="w-full h-12 bg-black text-white font-bold rounded-full border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
            >
              {isLoading ? "CREATING..." : "CREATE ACCOUNT"}
            </button>

            {/* ERROR MESSAGE BELOW BUTTON */}
            {Object.keys(errors).length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-2 text-red-500 animate-pulse">
                <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-white flex items-center justify-center">
                  <span className="text-red-500 text-xs font-bold">!</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-wider">
                  Please fix the errors above to proceed
                </p>
              </div>
            )}

            <div className="relative myt-4 mb-4 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <span className="relative px-4 bg-white text-gray-500 text-sm">
                Or continue with
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <button className="h-12 flex items-center justify-center gap-3 border-2 border-gray-300 rounded-lg hover:border-[#DB4437] transition-all bg-white cursor-pointer">
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  className="w-5 h-5"
                  alt="google"
                />
                <span className="font-semibold text-sm">Google</span>
              </button>
              <button className="h-12 flex items-center justify-center gap-3 border-2 border-gray-300 rounded-lg hover:border-[#1877F2] transition-all bg-white cursor-pointer">
                <svg
                  className="w-5 h-5 text-[#1877F2]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="font-semibold text-sm">Facebook</span>
              </button>
            </div>

            <p className="text-center text-sm mt-4 text-gray-500">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="font-bold underline text-black cursor-pointer hover:opacity-70"
              >
                Login
              </button>
            </p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-[4px]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative bg-white rounded-[40px] shadow-2xl w-full max-w-md p-10 text-center space-y-8"
            >
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                  <Check size={40} className="text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase tracking-widest">
                  Account Created
                </h2>
                <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">
                  Welcome to the Aura Workspace family!
                </p>
              </div>
              <button
                onClick={() => navigate("/login")}
                className="w-full max-w-[180px] h-12 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full mx-auto block hover:bg-white hover:text-black border-2 border-black transition-all"
              >
                Go To LOGIN
              </button>
            </motion.div>
          </div>
        )}
        {/* --- EMAIL EXISTS MODAL --- */}
        {showExistModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-6 overflow-hidden">
            {/* Backdrop par click karne se bhi modal band ho jaye ga */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setShowExistModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-[4px] cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative bg-white rounded-[40px] shadow-2xl w-full max-w-md p-10 text-center space-y-8 z-[70]"
            >
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-black border-2 border-black rounded-full flex items-center justify-center">
                  <span className="text-3xl font-black text-white">?</span>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black uppercase tracking-widest">
                  Already A Member?
                </h2>
                {/* Text ko "This Email" kar dia aur mazeed small (text-[10px]) kar dia */}
                <p className="text-gray-500 text-[10px] mt-2 uppercase tracking-widest italic">
                  This Email is already registered with us.
                </p>
              </div>

              <button
                onClick={() => navigate("/login")}
                className="w-full max-w-[180px] h-12 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full mx-auto block hover:bg-white hover:text-black border-2 border-black transition-all cursor-pointer"
              >
                Go To LOGIN
              </button>

              {/* Is button ko block aur cursor-pointer kia taake click ho sake */}
              <button
                type="button"
                onClick={() => setShowExistModal(false)}
                className="text-[9px] font-bold underline uppercase opacity-50 block mx-auto hover:opacity-100 transition-all cursor-pointer relative z-[80]"
              >
                Use another email
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SignupPage;
