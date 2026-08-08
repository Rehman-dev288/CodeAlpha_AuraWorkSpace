import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, ShoppingCart, ChevronDown, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../components/supabaseClient";

const Header = ({ onCartClick, cartCount, user }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserName = async () => {
      if (!user) {
        setUserName("");

        return;
      }

      try {
        const { data, error } = await supabase

          .from("UserData")

          .select("FirstName")

          .eq("Id", user.id)

          .maybeSingle();

        if (data && data.FirstName) {
          setUserName(data.FirstName.toUpperCase());
        } else {
          setUserName(user.email.split("@")[0].toUpperCase());
        }
      } catch (err) {
        console.error("Error fetching name:", err);
      }
    };

    fetchUserName();
  }, [user]);
  // --- Scroll Logic ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100)
        setScrollDirection("down");
      else setScrollDirection("up");
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogout = async () => {
    await supabase.auth.signOut();

    navigate("/");

    window.location.reload();
  };

  const textStyle = {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "400",
    color: "#FFFFFF",
  };

  const navLinks = [
    { name: "DESK SETUPS", path: "/setups" },
    { name: "PRODUCTIVITY", path: "/productivity" },
    { name: "SHOP", path: "/shop" },
    { name: "REVIEWS", path: "/reviews" },
    { name: "GUIDES", path: "/guides" },
    { name: "DEVELOPMENTS", path: "/dev" },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "down" ? -110 : 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-[100] bg-black border-b border-white/10"
      style={{ height: "106.23px", width: "100%" }}
    >
      <div className="w-full h-full px-8 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <span className="text-white font-black tracking-wider text-[15px]">
            AURA WORKSPACE
          </span>
          <div className="flex items-center">
            <svg viewBox="0 0 60 60" className="w-15 h-15">
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
        </Link>

        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              style={textStyle}
              className="relative group py-2 hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-8 shrink-0">
          <div
            className="relative py-4"
            onMouseEnter={() => setShowUserMenu(true)}
            onMouseLeave={() => setShowUserMenu(false)}
          >
            <button className="text-white hover:opacity-60 transition-opacity cursor-pointer flex items-center gap-2">
              <User size={24} />
              {user && (
                <div className="flex items-center gap-1">
                  <span className="text-[12px] font-bold tracking-tighter uppercase italic">
                    Welcome
                  </span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${showUserMenu ? "rotate-180" : ""}`}
                  />
                </div>
              )}
            </button>

            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 bg-black border border-white/20 p-6 w-60 shadow-2xl rounded-2xl"
                >
                  <div className="flex flex-col gap-4">
                    {!user ? (
                      <>
                        <Link
                          to="/login"
                          className="w-full py-3 text-[14px] bg-black text-white text-center font-bold rounded-xl hover:bg-white hover:text-black border border-white transition-all uppercase"
                        >
                          LOGIN
                        </Link>
                        <Link
                          to="/signup"
                          className="w-full py-3 text-[14px] bg-white text-black text-center border border-white rounded-xl hover:bg-black hover:text-white transition-all font-bold uppercase"
                        >
                          SIGN UP
                        </Link>
                      </>
                    ) : (
                      <div className="flex flex-col gap-3">
                        <div className="px-1 border-b border-white/10 pb-2">
                          <p className="text-white text-[13px] font-bold uppercase truncate">
                            {userName}
                          </p>
                        </div>
                        <button
                          onClick={handleLogout}
                          className="w-full py-3 text-[14px] bg-white text-black text-center border border-white rounded-xl hover:bg-red-600 hover:text-white hover:border-red-600 transition-all font-bold flex items-center justify-center gap-2 uppercase cursor-pointer"
                        >
                          LOGOUT <LogOut size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {user && (
            <button
              onClick={onCartClick}
              className="text-white hover:opacity-60 transition-opacity cursor-pointer relative"
            >
              <ShoppingCart size={24} />

              <motion.span
                key={cartCount} // Key change hone par animation trigger hogi
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -top-1 -right-2 bg-white text-black text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center"
              >
                {cartCount || 0}
              </motion.span>
            </button>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
