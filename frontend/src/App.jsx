import React, { useState, useEffect } from "react"; // useEffect yahan add kiya
import { Routes, Route, useLocation } from "react-router-dom";
import { supabase } from "./components/supabaseClient";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import ShippingReturns from "./components/ShippingReturns";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsofService from "./components/TermsofService";

// Pages
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import DeskSetupsPage from "./pages/DeskSetupsPage";
import ContactPage from "./pages/ContactPage";
import ProductivityPage from "./pages/ProductivityPage";
import ReviewsPage from "./pages/ReviewsPage";
import GuidesPage from "./pages/GuidesPage";
import DevelopmentsPage from "./pages/DevelopmentsPage";
import TrackOrderPage from "./pages/TrackOrderPage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "auto" });
        }
      }, 0);
    }
  }, [pathname, hash]);

  return null;
};

const MobileViewGate = () => {
  return (
    <div className=" flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* 1. HEADER - Slim & Premium */}
      <header className="bg-black py-4 px-6 flex items-center justify-center gap-3 border-b border-white/10 shadow-lg">
        <span className="text-white font-bold tracking-[0.15em] text-[12px] uppercase">
          AURA WORKSPACE
        </span>
        <div className="flex items-center">
          <svg viewBox="0 0 60 60" className="w-8 h-8">
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
      </header>

      {/* 2. MAIN BODY - Centered & Polished */}
      <main className="flex-grow flex flex-col items-center justify-center px-8 text-center bg-white">
        <div className="max-w-xs -mt-12">
          {" "}
          {/* Thora upar push kiya hai */}
          <h1 className="text-black text-[25px] font-[900] leading-[1.1] mb-5 uppercase tracking-tighter">
            A PREMIUM <br /> WORKSPACE <br /> DESERVES A <br /> LARGER CANVAS.
          </h1>
          <p className="text-zinc-500 text-[13px] leading-relaxed font-medium px-4">
            To provide the most immersive experience for planning your dream
            setup, Aura Workspace is exclusively available on desktop.
          </p>
          {/* Green Pulse Text with Emoji */}
          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="text-[#16a34a] font-black text-[10px] tracking-[0.3em] uppercase animate-pulse">
              See you on the big screen 🖥️
            </div>
          </div>
        </div>
      </main>

      {/* 3. FOOTER - Compact & Visible */}
      <footer className="bg-black pt-8 pb-6 px-8 text-center border-t border-white/10">
        <div className="max-w-[280px] mx-auto">
          <p className="text-zinc-400 text-[11px] leading-relaxed mb-5 font-medium">
            Elegant workspace solutions. Precision-crafted tools designed to
            elevate your daily productivity.
          </p>
          {/* Rights Reserved - Now with better padding */}
          <div className="pt-4 border-t border-white/5">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              © 2026 Aura Workspace. <br /> All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const initUser = async () => {
      const {
        data: { user: currentUser },
      } = await supabase.auth.getUser();
      setUser(currentUser);

      if (currentUser) {
        const { data } = await supabase
          .from("UserData")
          .select("*")
          .eq("Id", currentUser.id)
          .maybeSingle();
        setUserData(data);
        const savedCart = localStorage.getItem(`cart_${currentUser.id}`);
        if (savedCart) setCartItems(JSON.parse(savedCart));
      }
    };
    initUser();

    // Auth listener taake login/logout pe cart reset ho
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        const newUser = session?.user || null;
        setUser(newUser);
        if (!newUser) {
          setCartItems([]);
          setUserData(null); // Logout pe clear
        } else {
          const { data } = await supabase
            .from("UserData")
            .select("*")
            .eq("Id", newUser.id)
            .maybeSingle();
          setUserData(data);
          const savedCart = localStorage.getItem(`cart_${newUser.id}`);
          setCartItems(savedCart ? JSON.parse(savedCart) : []);
        }
      },
    );

    return () => authListener.subscription.unsubscribe();
  }, []);
  useEffect(() => {
    const handleResize = () => {
      // 1024px se choti screen par mobile gate dikhega
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Pehli dafa check karne ke liye
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- SABSE ZAROORI LINE ---

  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart_${user.id}`, JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const isExisting = prev.find(
        (item) =>
          item.id === product.id &&
          item.selectedColor === product.selectedColor,
      );
      if (isExisting) {
        return prev.map((item) =>
          item.id === product.id && item.selectedColor === product.selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
    // 3 seconds baad auto close (optional, aap hata bhi sakte hain)
    setTimeout(() => setIsCartOpen(false), 3000);
  };
  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item,
      ),
    );
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const immersivePaths = [
    "/shippingreturns",
    "/privacypolicy",
    "/termsofservice",
  ];
  const isImmersivePage = immersivePaths.includes(
    location.pathname.toLowerCase(),
  );
  const totalCartItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  if (isMobile) {
    return <MobileViewGate />;
  }
  return (
    <div className="flex flex-col min-h-screen">
      {/* ScrollToTop sirf ek baar yahan aayega */}
      <ScrollToTop />

      {!isImmersivePage && (
        <Header
          onCartClick={() => setIsCartOpen(true)}
          cartCount={totalCartItems}
          user={user}
        />
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/setups" element={<DeskSetupsPage />} />
          <Route
            path="/contact"
            element={<ContactPage user={user} userData={userData} />}
          />
          <Route path="/productivity" element={<ProductivityPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route
            path="/shop"
            element={
              <ShopPage
                addToCart={addToCart}
                setDrawerOpen={setIsCartOpen}
                user={user}
              />
            }
          />
          <Route path="/dev" element={<DevelopmentsPage />} />
          <Route path="/track" element={<TrackOrderPage />} />
          <Route path="/ShippingReturns" element={<ShippingReturns />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsofService" element={<TermsofService />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      {!isImmersivePage && <Footer />}
    </div>
  );
}

export default App;
