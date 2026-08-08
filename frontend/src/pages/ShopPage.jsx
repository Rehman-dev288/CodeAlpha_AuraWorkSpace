import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Truck,
  ShieldCheck,
  ListChecks,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";

const ShopPage = ({ addToCart, setDrawerOpen, user }) => {
  const productivityRef = useRef(null);
  const deskPadsRef = useRef(null);
  const accessoriesRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonyIdx, setTestimonyIdx] = useState(0);
  const [currency] = useState({ symbol: "$", rate: 1, code: "USD" });
  const location = useLocation();

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  useEffect(() => {
    const section = location.state?.scrollTo;
    if (!section) return;

    const timer = setTimeout(() => {
      let targetRef = null;
      if (section === "productivity") targetRef = productivityRef;
      if (section === "desk-pads") targetRef = deskPadsRef;
      if (section === "accessories") targetRef = accessoriesRef;

      if (targetRef && targetRef.current) {
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      window.history.replaceState({}, document.title);
    }, 600);

    return () => clearTimeout(timer);
  }, [location]);

  // Auto-play for testimonials
  const testimonials = [
    {
      text: "These seriously been a game-changer for me! They've totally transformed the way I tackle my tasks and keep track of my day.",
      name: "Vanessa U.",
      product: "Productivity Starter Kit",
    },
    {
      text: "I am extremely satisfied with my recent purchase! The shipping was incredibly fast, and the product quality is impeccable.",
      name: "Remi J.",
      product: "Cashmere Desk pad",
    },
    {
      text: "This hefty chunk of wood goes perfectly with the heavy cardstock. It holds plenty, so I load up the whole week at a time, and it works well! Impressed with the craftsmanship!",
      name: "Laura W.",
      product: "Card & Pencil Tray",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonyIdx((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const allProducts = [
    {
      id: 1,
      name: "Flow Timer",
      price: 59.5,
      images: ["/shop4.jpg", "/shop5.jpg", "/shop6.jpg", "/shop7.jpg"],
      details: {
        intro:
          "The Flow Timer helps you focus on the task at hand with clear visual time tracking.",
        points: [
          "Designed around the Pomodoro Method",
          "Automatically switch between Focus and Break",
          "Thoughtfully designed with premium materials",
          "Customizable to suit your workflow",
        ],
      },
      specs: [
        "Colorways: Charcoal Grey, Midnight Black, Frost White",
        "Dimensions: 106.4 x 81.7 x 56.2mm",
        "Weight: 490g",
        "Materials: Metal alloy frame & ABS plastic",
        "Battery: 1500 mAh Rechargeable Lithium Polymer",
        "Charging: via included USB-C Cable",
      ],
    },
    {
      id: 2,
      name: "Task & Time Cards",
      price: 16.2,
      images: [
        "/shop8.jpg",
        "/shop9.jpg",
        "/shop10.jpg",
        "/shop11.jpg",
        "/shop12.jpg",
        "/shop13.jpg",
        "/shop14.jpg",
      ],
      details: {
        intro: "Take control of your day",
        points: [
          "Effortless Task Organization: Intuitive task management.",
          "Boosted Daily Efficiency: Structured work sessions.",
          "Workspace Harmony: Balanced, productive environment.",
          "Precision Time Management: Effective time-blocking.",
        ],
      },
      specs: null,
    },
    {
      id: 3,
      name: "Weeks & Habits Cards",
      price: 15.75,
      images: [
        "/shop15.jpg",
        "/shop16.jpg",
        "/shop17.jpg",
        "/shop18.jpg",
        "/shop19.jpg",
        "/shop20.jpg",
        "/shop21.jpg",
      ],
      details: {
        intro: "Make Productivity a habit",
        points: [
          "Stay organized and productive for the whole year with Weeks and Habits, a tool for tracking key dates, anniversaries, meetings, appointments, deadlines, and your daily habits.",
        ],
      },
      specs: null,
    },
    {
      id: 4,
      name: "Pomodoro Timer",
      price: 18.9,
      images: [
        "/shop22.jpg",
        "/shop23.jpg",
        "/shop24.jpg",
        "/shop25.jpg",
        "/shop26.jpg",
        "/shop27.jpg",
        "/shop28.jpg",
      ],
      details: {
        intro:
          "Our Pomodoro Timer is designed to make the Pomodoro Technique easier and more effective. Featuring a dual display, helping you seamlessly transition between work and rest. Set your desired work and break times, and simply press start. Conquer your distractions today!",
        points: [
          "Automatically switch between Focus & Rest Times",
          "User-Friendly Tactile Dial",
          "USB or battery-powered",
          "Customizable Sessions",
        ],
      },
      specialSection: {
        label: "What is the Pomodoro Method?",
        content:
          "The Pomodoro Technique is a time management method developed in the late 1980s. It involves breaking work into short, focused intervals (typically 25 minutes), separated by short breaks (typically 5 minutes).",
      },
    },
    {
      id: 5,
      name: "Pencil",
      price: 7.0,
      images: [
        "/shop29.jpg",
        "/shop30.jpg",
        "/shop31.jpg",
        "/shop32.jpg",
        "/shop33.jpg",
        "/shop34.jpg",
      ],
      colors: ["Black"],
      details: {
        intro: "Inkless Convenience",
        points: [
          "Durable Carbon Fiber Tip: Long-lasting writing experience.",
          "Quality Aluminum Body: Comfortable grip and enhanced sturdiness.",
          "Inkless Convenience: No sharpening or inking required.",
          "Versatile Applications: Suitable for various writing projects.",
        ],
      },
      specs: null,
    },
    {
      id: 6,
      name: "Card & Pencil Tray",
      price: 15.75,
      images: {
        Walnut: [
          "/shop35.jpg",
          "/shop36.jpg",
          "/shop37.jpg",
          "/shop38.jpg",
          "/shop39.jpg",
          "/shop40.jpg",
          "/shop41.jpg",
          "/shop42.jpg",
        ],
        Birch: [
          "/shop43.jpg",
          "/shop36.jpg",
          "/shop37.jpg",
          "/shop38.jpg",
          "/shop39.jpg",
          "/shop40.jpg",
          "/shop41.jpg",
          "/shop42.jpg",
        ],
      },
      colors: ["Walnut", "Birch"],
      details: {
        intro: "Solid Construction",
        points: [
          "Handcrafted perfection for a durable tray.",
          "Minimalist Elegance: Elevates any workspace.",
          "Multi-Functional Slots: Holds cards and pens.",
          "Protective Matte Finish: Sealed for longevity.",
        ],
      },
      specs: null,
    },
    {
      id: 7,
      name: "Productivity Starter Kit",
      price: 48.0,
      label: "Most Popular",
      images: [
        "/shop52.jpg",
        "/shop53.jpg",
        "/shop54.jpg",
        "/shop55.jpg",
        "/shop56.jpg",
        "/shop57.jpg",
        "/shop58.jpg",
        "/shop59.jpg",
        "/shop60.jpg",
        "/shop60.jpg",
        "/shop61.jpg",
        "/shop62.jpg",
      ],
      details: {
        intro: "Kickstart your focus with our essential tools.",
        points: [
          "Prioritize your daily tasks",
          "Schedule your time",
          "Eliminate digital distractions",
          "Science-backed productivity methods",
        ],
      },
      included: [
        { name: "30 Task & Time Cards", img: "/shop8.jpg" },
        { name: "Pomodoro Timer", img: "/shop22.jpg" },
        { name: "Card Tray", img: "/shop35.jpg" },
        { name: "Metal Pencil", img: "/shop29.jpg" },
      ],
    },
    {
      id: 8,
      name: "Productivity Pro Kit",
      price: 69.6,
      label: "Best Value",
      images: [
        "/shop52.jpg",
        "/shop53.jpg",
        "/shop54.jpg",
        "/shop55.jpg",
        "/shop56.jpg",
        "/shop57.jpg",
        "/shop58.jpg",
        "/shop59.jpg",
        "/shop60.jpg",
        "/shop60.jpg",
        "/shop61.jpg",
      ],
      details: {
        intro: "The ultimate setup for professionals.",
        points: [
          "Prioritize your daily tasks",
          "Schedule your time",
          "Eliminate digital distractions",
          "Science-backed productivity methods",
        ],
      },
      included: [
        { name: "90 Task & Time Cards", img: "/shop8.jpg" },
        { name: "Weeks & Habits Cards", img: "/shop1.jpg" },
        { name: "Pomodoro Timer", img: "/shop22.jpg" },
        { name: "Card Tray", img: "/shop35.jpg" },
        { name: "Metal Pencil", img: "/shop29.jpg" },
      ],
    },
    {
      id: 9,
      name: "Weeks & Habits Kit",
      price: 49.8,
      images: [
        "/shop62.jpg",
        "/shop63.jpg",
        "/shop64.jpg",
        "/shop65.jpg",
        "/shop66.jpg",
        "/shop67.jpg",
        "/shop68.jpg",
        "/shop69.jpg",
        "/shop70.jpg",
      ],
      details: {
        intro: "Consistency is key to success.",
        points: [
          "Set weekly goals for clarity",
          "Track your habits effortlessly",
          "Science-backed productivity methods",
          "Stay accountable to your progress",
        ],
      },
      included: [
        { name: "Weeks & Habits Cards", img: "/shop1.jpg" },
        { name: "Pomodoro Timer", img: "/shop22.jpg" },
        { name: "Card Tray", img: "/shop35.jpg" },
        { name: "Metal Pencil", img: "/shop29.jpg" },
      ],
    },
    {
      id: 10,
      name: "Task & Time Kit",
      price: 42.4,
      images: [
        "/shop71.jpg",
        "/shop72.jpg",
        "/shop73.jpg",
        "/shop74.jpg",
        "/shop75.jpg",
        "/shop76.jpg",
        "/shop77.jpg",
        "/shop78.jpg",
        "/shop79.jpg",
        "/shop80.jpg",
        "/shop81.jpg",
        "/shop82.jpg",
        "/shop83.jpg",
      ],
      details: {
        intro: "Master your daily schedule.",
        points: [
          "Prioritize your daily tasks",
          "Schedule your time",
          "Eliminate digital distractions",
          "Science-backed productivity methods",
        ],
      },
      included: [
        { name: "30 Task & Time Cards", img: "/shop8.jpg" },
        { name: "Card Tray", img: "/shop35.jpg" },
        { name: "Metal Pencil", img: "/shop29.jpg" },
      ],
    },
    {
      id: 11,
      name: "Cashmere Desk Pad",
      basePrice: 15.65,
      images: [
        "/shop84.jpg",
        "/shop85.jpg",
        "/shop86.jpg",
        "/shop87.jpg",
        "/shop88.jpg",
        "/shop89.jpg",
        "/shop90.jpg",
        "/shop91.jpg",
        "/shop92.jpg",
        "/shop93.jpg",
        "/shop94.jpg",
        "/shop95.jpg",
        "/shop96.jpg",
        "/shop97.jpg",
      ],
      details: {
        intro:
          "Made to complement any desk, the Cashmere Desk Pad is made from luxurious wool and cashmere felt blend.",
        points: [
          "Blended with wool and cashmere: Soft, premium blend that brings warmth.",
          "Premium, plush surface touch: Cushions your wrists as you work.",
          "Enhanced grip for stability: Microdot grip so it stays exactly where you want.",
          "Combatting piling for extended use: Keeps its look even after daily use.",
        ],
      },
      sizes: [
        { label: "Small", price: 15.75, imgIdx: 8 },
        { label: "Medium", price: 18.75, imgIdx: 9 },
        { label: "Large", price: 21.0, imgIdx: 10 },
      ],
      specs: [
        "Materials: Cashmere and wool felt blend",
        "Backing: Anti-slip rubber backing",
        "Thickness: 3.5 mm thick",
        'Small: 60cm x 30cm | 23.5" x 12"',
        'Medium: 90cm x 30cm | 35.5" x 12"',
        'Large: 90cm x 40cm | 35.5" x 16"',
      ],
    },
    {
      id: 12,
      name: "Desk Setup Essentials Kit",
      basePrice: 37.1,
      images: [
        "/shop99.jpg",
        "/shop100.jpg",
        "/shop101.jpg",
        "/shop102.jpg",
        "/shop103.jpg",
        "/shop104.jpg",
        "/shop105.jpg",
        "/shop106.jpg",
      ],
      details: {
        intro: "The ultimate kit to keep your desk organized and stylish.",
        points: [
          "Enhance Your Workspace Aesthetics",
          "Keep Your Desk Organized",
          "Reduce Cable Clutter",
          "Enhanced Time Management",
        ],
      },
      sizes: [
        { label: "Small", price: 37.1, imgIdx: 5 },
        { label: "Medium", price: 39.2, imgIdx: 6 },
        { label: "Large", price: 42.0, imgIdx: 7 },
      ],
      included: [
        { name: "Cashmere Desk Pad", img: "/shop2.jpg" },
        { name: "Coasters 5 Pieces", img: "/bit21.jpg" },
        { name: "Cable Management Kit", img: "/shop102.jpg" },
      ],
      specs: null,
    },
    // --- DESK ACCESSORIES SECTION ---
    {
      id: 13,
      name: "Mechanical Keycaps",
      price: 40.0,
      images: ["/shop111.jpg", "/shop112.jpg"],
      details: {
        intro:
          "Transform your typing experience and bring a touch of sophistication to your desk with our Sage Green Keycaps.",
        points: [
          "Crafted from Premium PBT Plastic",
          " 1.75mm Thickness for Deeper Sound",
          " Crisp, Fade-Resistant Legends",
          "Ergonomic Cherry Profile",
          "148 Keys for Maximum Compatibility",
        ],
      },
      specs: [
        "The keycap set is designed to fit all Cherry-styled switches: This keycap set supports the following layouts: ANSI, Tsangan, HHKB, Mac, 1800. also supports the following sizes: Full size, TKL, 75%, 70%, 65%, 60%.",
      ],
    },

    {
      id: 14,
      name: "Task & Time Kit",
      price: 42.4,
      images: [
        "/shop71.jpg",
        "/shop72.jpg",
        "/shop73.jpg",
        "/shop74.jpg",
        "/shop75.jpg",
        "/shop76.jpg",
        "/shop77.jpg",
        "/shop78.jpg",
        "/shop79.jpg",
        "/shop80.jpg",
        "/shop81.jpg",
        "/shop82.jpg",
        "/shop83.jpg",
      ],
      details: {
        intro: "Master your daily schedule.",
        points: [
          "Prioritize your daily tasks",
          "Schedule your time",
          "Eliminate digital distractions",
          "Science-backed productivity methods",
        ],
      },
      included: [
        { name: "30 Task & Time Cards", img: "/shop8.jpg" },
        { name: "Card Tray", img: "/shop35.jpg" },
        { name: "Metal Pencil", img: "/shop29.jpg" },
      ],
    },

    {
      id: 15,
      name: "Card & Pencil Tray",
      price: 15.75,
      images: {
        Walnut: [
          "/shop35.jpg",
          "/shop36.jpg",
          "/shop37.jpg",
          "/shop38.jpg",
          "/shop39.jpg",
          "/shop40.jpg",
          "/shop41.jpg",
          "/shop42.jpg",
        ],
        Birch: [
          "/shop43.jpg",
          "/shop36.jpg",
          "/shop37.jpg",
          "/shop38.jpg",
          "/shop39.jpg",
          "/shop40.jpg",
          "/shop41.jpg",
          "/shop42.jpg",
        ],
      },
      colors: ["Walnut", "Birch"],
      details: {
        intro: "Solid Construction",
        points: [
          "Handcrafted perfection for a durable tray.",
          "Minimalist Elegance: Elevates any workspace.",
          "Multi-Functional Slots: Holds cards and pens.",
          "Protective Matte Finish: Sealed for longevity.",
        ],
      },
      specs: null,
    },
    {
      id: 16,
      name: "Cable Management Kit",
      price: 13.9,
      images: [
        "/shop221.jpg",
        "/shop222.jpg",
        "/shop223.jpg",
        "/shop224.jpg",
        "/shop225.jpg",
        "/shop226.jpg",
        "/shop227.jpg",
        "/shop228.jpg",
      ],
      details: {
        intro:
          "Streamline your workspace with our Cable Management Kit, designed to keep your desk clutter-free by organizing and hiding cables effortlessly.",
        points: [
          "Assorted sizes for all cable types",
          "Strong adhesive backing for secure mounting",
          "Durable and flexible materials",
          "Easy to install and reposition",
        ],
      },
      included: [
        { name: "60x Hook and Loop Ties", img: "/shop221.jpg" },
        { name: "15x Adhesive Mounts", img: "/shop222.jpg" },
        { name: "10x Cable Channels", img: "/shop223.jpg" },
        { name: "5x Rubber Holders", img: "/shop224.jpg" },
      ],
    },
    {
      id: 17,
      name: "Pencil",
      price: 7.0,
      images: [
        "/shop29.jpg",
        "/shop30.jpg",
        "/shop31.jpg",
        "/shop32.jpg",
        "/shop33.jpg",
        "/shop34.jpg",
      ],
      colors: ["Black"],
      details: {
        intro: "Inkless Convenience",
        points: [
          "Durable Carbon Fiber Tip: Long-lasting writing experience.",
          "Quality Aluminum Body: Comfortable grip and enhanced sturdiness.",
          "Inkless Convenience: No sharpening or inking required.",
          "Versatile Applications: Suitable for various writing projects.",
        ],
      },
      specs: null,
    },
    {
      id: 18,
      name: "Flow Timer",
      price: 59.5,
      images: ["/shop4.jpg", "/shop5.jpg", "/shop6.jpg", "/shop7.jpg"],
      details: {
        intro:
          "The Flow Timer helps you focus on the task at hand with clear visual time tracking.",
        points: [
          "Designed around the Pomodoro Method",
          "Automatically switch between Focus and Break",
          "Thoughtfully designed with premium materials",
          "Customizable to suit your workflow",
        ],
      },
      specs: [
        "Colorways: Charcoal Grey, Midnight Black, Frost White",
        "Dimensions: 106.4 x 81.7 x 56.2mm",
        "Weight: 490g",
        "Materials: Metal alloy frame & ABS plastic",
        "Battery: 1500 mAh Rechargeable Lithium Polymer",
        "Charging: via included USB-C Cable",
      ],
    },
  ];

  const prodProducts = allProducts.filter((p) => p.id <= 10);
  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev + 1 > prodProducts.length - 3 ? 0 : prev + 1,
    );
  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? prodProducts.length - 3 : prev - 1,
    );

  return (
    <div className="bg-white min-h-screen text-black overflow-x-hidden font-sans">
      <section className="bg-black h-[90vh] flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight">
          EXPLORE OUR COLLECTION
        </h1>
      </section>
      <section className="max-w-6xl mx-auto py-16 mt-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            id: 1,
            img: "/shop1.jpg",
            txt: "PRODUCTIVITY",
            link: () => scrollToSection(productivityRef),
          },
          {
            id: 2,
            img: "/shop2.jpg",
            txt: "DESK PADS",
            link: () => scrollToSection(deskPadsRef),
          },
          {
            id: 3,
            img: "/shop3.jpg",
            txt: "DESK ACCESSORIES",
            link: () => scrollToSection(accessoriesRef),
          },
        ].map((item) => (
          <div
            key={item.id}
            onClick={item.link}
            className="relative aspect-square rounded-[25px] overflow-hidden cursor-pointer border border-zinc-100"
          >
            <img
              src={item.img}
              className="w-full h-full object-cover"
              alt={item.txt}
            />
            <div className="absolute top-4 left-0 right-0 text-center">
              <span className="text-black font-bold text-sm tracking-[0.1em] uppercase">
                {item.txt}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* --- PRODUCTIVITY --- */}
      <section ref={productivityRef} className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold mb-4 tracking-tighter uppercase">
          PRODUCTIVITY
        </h2>
        <p className="text-zinc-600 text-sm md:text-base max-w-5xl mx-auto">
          Boost your efficiency with our Productivity Collection, featuring
          innovative tools to help you stay organized and focused.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-10 pb-32 relative">
        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-zinc-200 p-3 rounded-full shadow-lg hover:scale-110 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        {currentIndex < prodProducts.length - 3 && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-zinc-200 p-3 rounded-full shadow-lg hover:scale-110 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prodProducts.slice(currentIndex, currentIndex + 3).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              currency={currency}
              onAddToCart={addToCart}
              setDrawerOpen={setDrawerOpen}
              user={user}
            />
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-12">
          {prodProducts.map(
            (_, i) =>
              i <= prodProducts.length - 3 && (
                <div
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === i ? "bg-[#2D6A4F] scale-125" : "bg-zinc-300"}`}
                ></div>
              ),
          )}
        </div>
      </section>

      {/* --- DESK PADS --- */}
      <section ref={deskPadsRef} className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold mb-4 tracking-tighter uppercase">
          DESK PADS
        </h2>
        <p className="text-zinc-600 text-sm md:text-base max-w-5xl mx-auto">
          Enhance your workspace with our Desk Accessories Collection. Discover
          stylish and functional pieces designed to keep your desk organized and
          inspire productivity.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-10 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allProducts
            .filter((p) => p.id === 11 || p.id === 12)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currency={currency}
                onAddToCart={addToCart}
                setDrawerOpen={setDrawerOpen}
              />
            ))}
        </div>
      </section>

      {/* --- DESK ACCESSORIES --- */}
      <section ref={accessoriesRef} className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold mb-4 tracking-tighter uppercase">
          DESK ACCESSORIES
        </h2>
        <p className="text-zinc-600 text-sm md:text-base max-w-5xl mx-auto">
          Enhance your workspace with our Desk Accessories Collection. Discover
          stylish and functional pieces designed to keep your desk organized and
          inspire productivity.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-10 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allProducts
            .filter((p) => p.id >= 13)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currency={currency}
                onAddToCart={addToCart}
                setDrawerOpen={setDrawerOpen}
              />
            ))}
        </div>
      </section>
      {/* --- TESTIMONIALS SECTION --- */}
      <section className="bg-[#FEF9E7] py-24 px-6 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Rating Info */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
            <h2 className="text-[#2D6A4F] text-4xl md:text-[45px] font-black tracking-tighter leading-[1.05] uppercase mb-6">
              Highly Rated By Our <br /> 200K+ Fans
            </h2>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="flex text-black text-sm tracking-tighter">
                  ★★★★★
                </div>
                <span className="font-bold text-lg text-black">
                  (4.8) 2,871 Reviews
                </span>
              </div>

              <button className="group mt-6 px-8 py-2.5 flex items-center gap-2 font-bold text-[11px] tracking-[0.2em] uppercase border border-transparent hover:border-black transition-all duration-300 no-underline outline-none bg-transparent">
                See All{" "}
                <ChevronRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* Right Side: Reviews Slider */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:border-l border-zinc-200 md:pl-16 min-h-[220px]">
            <div className="relative w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonyIdx}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  <p className="text-xl md:text-[23px] font-normal leading-relaxed text-zinc-600 italic max-w-md mx-auto no-underline">
                    "{testimonials[testimonyIdx].text}"
                  </p>
                  <div className="space-y-1">
                    <h4 className="font-black text-lg uppercase tracking-widest text-black">
                      {testimonials[testimonyIdx].name}
                    </h4>
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                      RE: {testimonials[testimonyIdx].product}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2.5 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonyIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border-none outline-none ${
                    testimonyIdx === i
                      ? "bg-[#2D6A4F] scale-110"
                      : "bg-zinc-200 hover:bg-zinc-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* --- SHOP THE SETUP SECTION --- */}
      <section className="max-w-7xl mx-auto py-24 px-25">
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight uppercase mb-2">
            Shop the setup
          </h2>
          <p className="text-zinc-600 text-lg">
            Explore expertly designed desk setups tailored for productivity and
            style.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2">
            <img
              src="/setup1.jpg"
              alt="Desk Setup"
              className="w-full aspect-square object-cover rounded-[40px] shadow-sm"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center min-h-[500px]">
            {[
              {
                title: "Task & Time Kit",
                desc: "Stay organized and on track with this kit",
                img: "/setup2.jpg",
              },
              {
                title: "Pomodoro Timer",
                desc: "A sleek timer to boost your productivity",
                img: "/setup3.jpg",
              },
              {
                title: "Keycaps by AWS",
                desc: "Style your keyboard with our stylish keycaps",
                img: "/setup4.jpg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center justify-between bg-[#FEF9E7] p-3 pr-8 rounded-l-full rounded-r-[20px] cursor-pointer transition-all duration-300 hover:shadow-[0_15px_30px_rgba(45,106,79,0.2)] hover:-translate-y-1"
              >
                <div className="flex items-center gap-6">
                  {/* Image: Left side rounded */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-l-full rounded-r-lg"
                  />
                  <div>
                    <h3 className="font-bold text-xl uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 text-sm">{item.desc}</p>
                  </div>
                </div>

                {/* Green Arrow Button: Rotates on hover */}
                <div className="bg-[#1B4332] p-3 rounded-full text-white transition-transform duration-500 group-hover:rotate-[50deg]">
                  <ChevronRight size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="bg-[#FEF9E7] rounded-[50px] py-20 px-10 text-center">
          <h2 className="text-[#2D6A4F] text-4xl font-bold uppercase tracking-tight mb-6">
            Making It Easier For You
          </h2>
          <p className="text-zinc-700 text-lg max-w-3xl mx-auto leading-relaxed mb-16">
            We make it easier for you with free shipping on orders over $35 USD
            and 30-day hassle-free returns. Join over 100,000 satisfied
            customers and enjoy a seamless shopping experience!
          </p>

          {/* Icons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-4">
              <Truck size={40} strokeWidth={1.5} className="text-black" />
              <span className="font-bold text-sm tracking-widest uppercase">
                Fast Shipping
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <ShieldCheck size={40} strokeWidth={1.5} className="text-black" />
              <span className="font-bold text-sm tracking-widest uppercase">
                30 Days Returns
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="text-4xl">★</div>
              <span className="font-bold text-sm tracking-widest uppercase">
                Top-Rated By Fans
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({
  product,
  currency,
  onAddToCart,
  setDrawerOpen,
  user,
}) => {
  const [selectedColor, setSelectedColor] = useState(
    product.colors ? product.colors[0] : null,
  );
  const [selectedSize, setSelectedSize] = useState(null);

  const productImages = product.images[selectedColor] || product.images;
  const [imgIdx, setImgIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered && productImages.length > 1) {
      interval = setInterval(() => {
        setImgIdx((p) => (p + 1) % productImages.length);
      }, 1000);
    } else if (!isHovered && !selectedSize) {
      setImgIdx(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, productImages.length, selectedSize]);

  useEffect(() => {
    setImgIdx(0);
  }, [selectedColor]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    setImgIdx(size.imgIdx);
  };

  const currentPrice = selectedSize
    ? selectedSize.price
    : product.price || product.basePrice;
  const handleAddClick = () => {
    if (!user) return;
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: currentPrice,
      image: productImages[0],
      selectedColor: selectedColor,
      quantity: 1,
    };
    onAddToCart(itemToAdd);
    if (setDrawerOpen) setDrawerOpen(true);
  };
  return (
    <div className="bg-[#F3F4F3] rounded-[45px] overflow-hidden flex flex-col shadow-sm w-full transition-all h-full relative">
      {product.label && (
        <div className="absolute top-6 left-6 z-10 bg-black text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest">
          {product.label}
        </div>
      )}

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-[350px] overflow-hidden flex items-center justify-center bg-transparent"
      >
        <motion.img
          key={`${product.id}-${imgIdx}`}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          src={productImages[imgIdx]}
          className="w-full h-full object-cover mix-blend-multiply"
          alt={product.name}
        />
      </div>

      <div className="p-8 pt-6 flex flex-col flex-grow justify-between text-left">
        <div>
          <h3 className="text-center font-bold text-2xl tracking-tight mb-4 uppercase">
            {product.name}
          </h3>

          <div className="bg-[#FFF9E5] self-center px-6 py-2.5 rounded-2xl flex items-center justify-center gap-2 mb-4 mx-auto w-fit">
            <span className="text-[#2D6A4F] font-black italic text-lg tracking-tighter">
              PRICE:
            </span>
            <span className="font-black italic text-lg text-black">
              {currency.symbol}
              {(currentPrice * currency.rate).toFixed(2)}
            </span>
          </div>

          {product.colors && (
            <div className="mb-6 flex flex-col items-center">
              <span className="text-xs font-bold mb-3 uppercase tracking-widest">
                Color: {selectedColor}
              </span>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      setSelectedColor(color);
                      setImgIdx(0);
                      setSelectedSize(null);
                    }}
                    className={`px-6 py-2 border-2 rounded-xl text-sm font-bold transition-all ${selectedColor === color ? "border-black bg-white shadow-md" : "border-zinc-300 bg-transparent hover:bg-zinc-200"}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.sizes && (
            <div className="mb-6 flex flex-col items-center">
              <span className="text-xs font-bold mb-3 uppercase tracking-widest">
                Size: {selectedSize ? selectedSize.label : "Select Size"}
              </span>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.label}
                    onClick={() => handleSizeClick(size)}
                    className={`px-4 py-2 border-2 rounded-xl text-xs font-bold transition-all ${selectedSize?.label === size.label ? "border-black bg-white shadow-md" : "border-zinc-300 bg-transparent hover:bg-zinc-200"}`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3 mb-6">
            <details className="group bg-white/50 rounded-2xl border border-zinc-100/50">
              <summary className="list-none flex justify-between items-center p-4 cursor-pointer font-bold text-sm uppercase">
                <div className="flex items-center gap-3">
                  <Plus size={18} /> Product Details
                </div>
                <Plus size={16} className="group-open:hidden" />
                <Minus size={16} className="hidden group-open:block" />
              </summary>
              <div className="px-5 pb-5 text-xs text-zinc-600 leading-relaxed font-medium">
                <p className="text-black mb-3 font-semibold tracking-tight">
                  {product.details.intro}
                </p>
                <ul className="space-y-2">
                  {product.details.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#2D6A4F] font-bold">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            {product.specs && (
              <details className="group bg-white/50 rounded-2xl border border-zinc-100/50">
                <summary className="list-none flex justify-between items-center p-4 cursor-pointer font-bold text-sm uppercase">
                  <div className="flex items-center gap-3">
                    <ListChecks size={18} /> Specifications
                  </div>
                  <Plus size={16} className="group-open:hidden" />
                  <Minus size={16} className="hidden group-open:block" />
                </summary>
                <div className="px-5 pb-5 text-xs text-zinc-600 font-medium">
                  <ul className="space-y-2 list-none">
                    {product.specs.map((spec, i) => {
                      const parts = spec.split(":");
                      return (
                        <li
                          key={i}
                          className="border-b border-zinc-200/50 pb-2 last:border-0"
                        >
                          {parts.length > 1 ? (
                            <>
                              <span className="font-bold text-black">
                                {parts[0].trim()}:
                              </span>
                              <span className="ml-1">
                                {parts.slice(1).join(":").trim()}
                              </span>
                            </>
                          ) : (
                            <span>{spec}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </details>
            )}

            {product.included && (
              <details className="group bg-white/50 rounded-2xl border border-zinc-100/50">
                <summary className="list-none flex justify-between items-center p-4 cursor-pointer font-bold text-sm uppercase">
                  <div className="flex items-center gap-3">
                    <Eye size={18} /> See What's included
                  </div>
                  <Plus size={16} className="group-open:hidden" />
                  <Minus size={16} className="hidden group-open:block" />
                </summary>
                <div className="px-5 pb-5 grid grid-cols-2 gap-4">
                  {product.included.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-full aspect-square border-2 border-dotted border-zinc-300 rounded-xl mb-2 flex items-center justify-center overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover mix-blend-multiply"
                        />
                      </div>
                      <span className="text-[10px] font-bold uppercase leading-tight">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </details>
            )}
            {product.specialSection && (
              <details className="group bg-white/50 rounded-2xl border border-zinc-100/50">
                <summary className="list-none flex justify-between items-center p-4 cursor-pointer font-bold text-sm uppercase text-black">
                  <div className="flex items-center gap-3">
                    <Plus size={18} /> {product.specialSection.label}
                  </div>
                  <Plus size={16} className="group-open:hidden" />
                  <Minus size={16} className="hidden group-open:block" />
                </summary>
                <div className="px-5 pb-5 text-xs text-zinc-600 leading-relaxed font-medium">
                  <p>{product.specialSection.content}</p>
                </div>
              </details>
            )}
            <details className="group bg-white/50 rounded-2xl border border-zinc-100/50">
              <summary className="list-none flex justify-between items-center p-4 cursor-pointer font-bold text-sm uppercase">
                <div className="flex items-center gap-3">
                  <Truck size={18} /> Shipping
                </div>
                <Plus size={16} className="group-open:hidden" />
                <Minus size={16} className="hidden group-open:block" />
              </summary>
              <div className="px-5 pb-5 text-xs text-zinc-600 font-medium leading-relaxed">
                <p className="mb-2">
                  Aura Workspace offers premium worldwide shipping. Orders
                  processed within 24 hours.
                </p>
                <p className="font-bold text-black mb-1">Estimated Delivery:</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="text-[#2D6A4F] font-bold">✓</span>
                    <span>US: 6-12 days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2D6A4F] font-bold">✓</span>
                    <span>International: 10-20 days</span>
                  </li>
                </ul>
              </div>
            </details>

            <details className="group bg-white/50 rounded-2xl border border-zinc-100/50">
              <summary className="list-none flex justify-between items-center p-4 cursor-pointer font-bold text-sm uppercase">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} /> 30-Day Guarantee
                </div>
                <Plus size={16} className="group-open:hidden" />
                <Minus size={16} className="hidden group-open:block" />
              </summary>
              <div className="px-5 pb-5 text-xs text-zinc-600 font-medium leading-relaxed">
                <p className="mb-4">
                  If you’re not satisfied with our product for any reason, you
                  have 30 days to return your order and request a refund. A
                  refund will be issued within 5 days of us receiving your
                  return.
                </p>
                <p>
                  Check our{" "}
                  <a
                    href="/ShippingReturns"
                    className="underline font-bold text-black ml-1"
                  >
                    full return policy
                  </a>{" "}
                  on how to request a refund.
                </p>
              </div>
            </details>
          </div>
        </div>
        <button
          onClick={handleAddClick}
          className={`w-full py-5 bg-black text-white rounded-[22px] font-black text-xs uppercase tracking-widest active:scale-95 transition-all flex items-center justify-center gap-2 
        ${
          user
            ? "hover:bg-[#2D6A4F] cursor-pointer"
            : "hover:bg-red-600 cursor-not-allowed"
        }`}
        >
          <ShoppingCart size={18} />
          {user ? "Add to Cart" : "Login to Shop"}
        </button>
      </div>
    </div>
  );
};

export default ShopPage;
