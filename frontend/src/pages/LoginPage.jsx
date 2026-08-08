import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, RefreshCw, Check, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../components/supabaseClient";

const LoginPage = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("");
  const [userInput, setUserInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [isResetSuccess, setIsResetSuccess] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVerifyingEmail, setIsVerifyingEmail] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [loginErrors, setLoginErrors] = useState({});
  const [resetErrors, setResetErrors] = useState({});

  const navigate = useNavigate();

  const generateCaptcha = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setCaptchaCode(code);
    setUserInput("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = async () => {
    let errs = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      errs.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errs.email = "Valid registered email required";
    }
    if (!password) errs.password = "Password is required";
    if (!userInput) errs.captcha = "Please enter code";
    else if (userInput !== captchaCode) errs.captcha = "Code mismatch!";

    if (Object.keys(errs).length > 0) {
      setLoginErrors(errs);
      return;
    }

    setIsLoading(true);
    setLoginErrors({});
    setHasError(false);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setHasError(true); // Direct supabase error mapping
      if (error.message.includes("Invalid login credentials")) {
        setLoginErrors({ general: "Invalid email or password" });
      } else {
        setLoginErrors({ general: error.message });
      }
      setIsLoading(false);
    } else {
      setIsLoading(false);
      navigate("/");
    }
  };

  // --- EMAIL VERIFICATION CHECK (Reset Modal) ---
  const handleEmailCheck = (val) => {
    setResetEmail(val);
    setEmailVerified(false);
    if (resetErrors.email) setResetErrors({ ...resetErrors, email: "" });
    if (val.includes("@") && val.includes(".com")) {
      setIsVerifyingEmail(true);
      setTimeout(() => {
        setIsVerifyingEmail(false);
        setEmailVerified(true);
      }, 2000);
    }
  };

  // --- RESET PASSWORD LOGIC ---
  const handleResetSubmit = async () => {
    let errs = {};
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!resetEmail) errs.email = "Email is required";
    if (!newPassword) errs.pass = "Password is required";
    else if (!passRegex.test(newPassword)) errs.pass = "Password is too weak";

    if (newPassword !== confirmPassword)
      errs.confirm = "Passwords do not match!";

    if (Object.keys(errs).length > 0) {
      setResetErrors(errs);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsResetSuccess(true);
    }, 1500);
  };

  const handleGoToLogin = () => {
    setShowResetModal(false);
    setIsResetSuccess(false);
    setResetEmail("");
    setNewPassword("");
    setConfirmPassword("");
    setEmailVerified(false);
    setLoginErrors({});
    setResetErrors({});
    generateCaptcha();
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
      </div>
      <div className="relative z-10 flex-grow flex items-center justify-center pt-40 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-10 md:p-12"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-3 uppercase tracking-tighter text-black">
              WELCOME BACK
            </h1>
            <p className="text-gray-600 text-sm">
              Sign into your AURA WORKSPACE account
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">
                Email <span>*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setHasError(false);
                  if (loginErrors.email)
                    setLoginErrors({ ...loginErrors, email: "" });
                }}
                className={`w-full h-12 px-4 rounded-lg border-2 transition-all text-black outline-none ${loginErrors.email || hasError ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                placeholder="Enter your email"
              />
              {loginErrors.email && (
                <p className="text-red-500 text-[10px] mt-1 font-bold">
                  {loginErrors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">
                Password <span>*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setHasError(false);
                    if (loginErrors.password)
                      setLoginErrors({ ...loginErrors, password: "" });
                  }}
                  className={`w-full h-12 px-4 pr-12 rounded-lg border-2 transition-all text-black outline-none ${loginErrors.password || hasError ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black cursor-pointer"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {loginErrors.password && (
                <p className="text-red-500 text-[10px] mt-1 font-bold">
                  {loginErrors.password}
                </p>
              )}
              <div className="text-left mt-2">
                <button
                  type="button"
                  onClick={() => setShowResetModal(true)}
                  className="text-[11px] font-normal-black tracking-tighter text-black hover:opacity-60 transition-all underline decoration-1 cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">
                Security Verification<span>*</span>
              </label>
              <div className="flex gap-3 items-center">
                <div
                  className={`w-32 h-12 bg-white border-2 rounded-lg flex items-center justify-center relative overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] ${loginErrors.captcha ? "border-red-500" : "border-black"}`}
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
                    onChange={(e) => {
                      setUserInput(e.target.value);
                      if (loginErrors.captcha)
                        setLoginErrors({ ...loginErrors, captcha: "" });
                    }}
                    className={`w-full h-12 px-4 rounded-lg border-2 transition-all text-black outline-none ${loginErrors.captcha ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                    placeholder="ENTER CODE"
                  />
                </div>
                <button
                  onClick={generateCaptcha}
                  type="button"
                  className="h-12 w-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-black transition-all group cursor-pointer"
                >
                  <RefreshCw
                    size={18}
                    className="group-hover:rotate-180 transition-transform duration-500"
                  />
                </button>
              </div>
              {loginErrors.captcha && (
                <p className="text-red-500 text-[10px] mt-1 font-bold">
                  {loginErrors.captcha}
                </p>
              )}
            </div>

            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full h-12 bg-black text-white font-bold rounded-full border-2 border-black hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              {isLoading ? "VERIFYING..." : "LOGIN"}
            </button>

            {Object.keys(loginErrors).length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-2 text-red-500 animate-pulse">
                <AlertCircle size={14} />
                <p className="text-[10px] font-bold uppercase tracking-wider">
                  {loginErrors.general ||
                    "Please fix the errors above to proceed"}
                </p>
              </div>
            )}

            <div className="relative my-3 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <span className="relative px-4 bg-white text-gray-500 text-sm">
                Or continue with
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="h-12 flex items-center justify-center gap-3 border-2 border-gray-300 rounded-lg hover:border-[#DB4437] transition-all bg-white cursor-pointer group">
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  className="w-5 h-5"
                  alt="google"
                />
                <span className="font-semibold text-sm text-black">Google</span>
              </button>
              <button className="h-12 flex items-center justify-center gap-3 border-2 border-gray-300 rounded-lg hover:border-[#1877F2] transition-all bg-white cursor-pointer group">
                <svg
                  className="w-5 h-5 text-[#1877F2]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="font-semibold text-sm text-black">
                  Facebook
                </span>
              </button>
            </div>
            <p className="text-center text-sm mt-6 text-gray-500">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="font-bold underline text-black hover:opacity-60 cursor-pointer transition-all"
              >
                Create Account
              </button>
            </p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showResetModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResetModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-[4px] cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[40px] shadow-2xl w-full max-w-md p-10 space-y-6 text-center"
            >
              {!isResetSuccess ? (
                <div className="space-y-4 text-left">
                  <h2 className="text-2xl font-black uppercase tracking-widest text-black text-center">
                    Reset Password
                  </h2>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-black">
                        Registered Email <span>*</span>
                      </label>
                      {emailVerified && (
                        <span className="text-[9px] font-bold text-green-600 uppercase italic">
                          ✓ Email Verified
                        </span>
                      )}
                    </div>
                    <input
                      type="email"
                      value={resetEmail}
                      onChange={(e) => handleEmailCheck(e.target.value)}
                      className={`w-full h-12 px-4 rounded-lg border-2 transition-all text-black outline-none ${resetErrors.email ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                      placeholder="email@example.com"
                    />
                    {resetErrors.email && (
                      <p className="text-red-500 text-[10px] mt-1 font-bold">
                        {resetErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-black">
                      New Password <span>*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => {
                          setNewPassword(e.target.value);
                          if (resetErrors.pass)
                            setResetErrors({ ...resetErrors, pass: "" });
                        }}
                        className={`w-full h-12 px-4 pr-12 rounded-lg border-2 transition-all text-black outline-none ${resetErrors.pass ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                        placeholder="Enter new password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black cursor-pointer"
                      >
                        <Eye size={20} />
                      </button>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-2 leading-tight">
                      Min 8 characters with uppercase, lowercase, special &
                      numbers.
                    </p>
                    {resetErrors.pass && (
                      <p className="text-red-500 text-[10px] mt-1 font-bold">
                        {resetErrors.pass}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-black">
                      Confirm Password <span>*</span>
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        if (resetErrors.confirm)
                          setResetErrors({ ...resetErrors, confirm: "" });
                      }}
                      className={`w-full h-12 px-4 rounded-lg border-2 transition-all text-black outline-none ${resetErrors.confirm ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                      placeholder="Confirm new password"
                    />
                    {resetErrors.confirm && (
                      <p className="text-red-500 text-[10px] mt-1 font-bold">
                        {resetErrors.confirm}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={handleResetSubmit}
                    className="w-full h-12 bg-black text-white font-bold rounded-full uppercase text-xs tracking-widest hover:bg-white hover:text-black border-2 border-black transition-all mt-4 cursor-pointer"
                  >
                    {isLoading ? "UPDATING..." : "Update Password"}
                  </button>

                  {Object.keys(resetErrors).length > 0 && (
                    <div className="flex items-center justify-center gap-2 mt-2 text-red-500 animate-pulse">
                      <AlertCircle size={14} />
                      <p className="text-[10px] font-bold uppercase tracking-wider">
                        Please fix errors to proceed
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg mx-auto">
                      <Check className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-green-600 font-bold uppercase tracking-wider text-[11px] italic">
                      Password Successfully Updated!
                    </p>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-tight">
                      Now you can login to your account using the new password.
                    </p>
                  </div>
                  <button
                    onClick={handleGoToLogin}
                    className="w-full h-12 bg-black text-white font-bold rounded-full border-2 border-black hover:bg-white hover:text-black transition-all cursor-pointer"
                  >
                    Go To Login
                  </button>
                </motion.div>
              )}
              {!isResetSuccess && (
                <button
                  onClick={() => setShowResetModal(false)}
                  className="text-[9px] font-bold underline uppercase opacity-50 block mx-auto hover:opacity-100 transition-all cursor-pointer"
                >
                  Cancel
                </button>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoginPage;
