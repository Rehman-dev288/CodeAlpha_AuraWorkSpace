import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Rocket, Globe, Zap, Code } from "lucide-react";

const AboutPage = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success'

  const phases = [
    {
      date: "Jan 1, 2026",
      title: "Requirement Analysis",
      desc: "Defining the core problem: Workspace clutter. Conducted feasibility studies for Aura Workspace during the CodeAlpha track.",
    },
    {
      date: "Jan 5, 2026",
      title: "System Architecture",
      desc: "Designing the blueprint. Choosing the React + Supabase stack for scalability and real-time data flow synchronization.",
    },
    {
      date: "Jan 12, 2026",
      title: "UI/UX Design Strategy",
      desc: "Engineered professional prompts for Gemini AI to curate a visual language that speaks 'Minimalism' and 'Efficiency'.",
    },
    {
      date: "Jan 18, 2026",
      title: "Core Development",
      desc: "Sprint 1: Interlocking React front-end with Supabase. Implementing custom auth and robust state management.",
    },
    {
      date: "Jan 25, 2026",
      title: "Testing & QA",
      desc: "Rigorous unit testing and cross-browser compatibility checks to ensure a seamless experience on all viewports.",
    },
    {
      date: "Jan 30, 2026",
      title: "Global Deployment",
      desc: "Final push to production. Aura Workspace went live as a professional-grade platform for productivity enthusiasts.",
    },
  ];
  const handleSubscribe = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="bg-white text-black pt-32 overflow-hidden flex flex-col min-h-screen">
      {/* 1. Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center pt-30 pb-16 px-6"
      >
        <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-4 italic text-black">
          ABOUT US
        </h1>
        <div className="h-1 w-24 bg-black mx-auto mb-6"></div>
        <p className="text-gray-500 tracking-[0.4em] uppercase text-sm font-bold">
          Our Story. Our Beginning. All About Aura Workspace
        </p>
      </motion.div>

      {/* 2. Brand Description Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-lg"
        >
          <img
            src="/about1.jpg"
            alt="Workspace Preview"
            className="rounded-2xl border border-gray-200 w-full shadow-md object-cover -translate-x-6 md:-translate-x-12"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-[-25%] right-[-5%] w-[28%] z-20"
          >
            <img
              src="/mobile.jpg"
              alt="Mobile Preview"
              className="rounded-2xl border border-gray-200 shadow-2xl object-cover bg-white"
            />
          </motion.div>
        </motion.div>

        <div className="space-y-8">
          <h2 className="text-5xl font-black leading-tight">
            WE DON'T JUST SELL,
            <br /> WE INSPIRE.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Aura Workspace represents the intersection of digital craftsmanship
            and physical productivity. Born from a rigorous Full Stack
            Development journey, this project was designed to be more than a
            store.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="font-bold border-b-2 border-black inline-block mb-2">
                SHOP
              </h4>
              <p className="text-sm text-gray-500">
                Premium setups and elite desk accessories.
              </p>
            </div>
            <div>
              <h4 className="font-bold border-b-2 border-black inline-block mb-2">
                GUIDES
              </h4>
              <p className="text-sm text-gray-500">
                Expert-led productivity and setup tutorials.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Founder Section */}
      <div className="bg-gray-50 py-32 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <div className="relative">
              <img
                src="/ceo-image.jpg"
                className="rounded-2xl w-full shadow-2xl object-cover"
                alt="CEO"
              />
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-8 rounded-2xl hidden lg:block">
                <p className="text-3xl font-black italic">CEO</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <span className="bg-black text-white px-4 py-1 text-xs font-bold tracking-widest uppercase">
              The Architect
            </span>
            <h3 className="text-5xl font-black italic">
              FROM CODE TO CREATION.
            </h3>
            <p className="text-gray-600 text-xl leading-relaxed">
              Hi, I’m <strong>Abdul Rehman Saleem</strong>, the Founder and CEO
              of Aura Workspace. This platform was born out of my Full-Stack
              Development journey at <strong>CodeAlpha</strong>, where I set out
              to build a professional-grade ecosystem for the modern
              professional. I engineered the entire architecture from scratch,
              utilizing <strong>React</strong> for a seamless UI and{" "}
              <strong>Supabase</strong> for robust database management. To
              ensure a world-class aesthetic, I hand-curated high-end
              inspiration from Instagram and the web, while leveraging{" "}
              <strong>Gemini AI</strong> to engineer precise prompts for our
              core visual identity. Every line of code and every curated setup
              reflects my commitment to merging technical excellence with
              minimalist design.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-40 px-6 font-sans">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-6">
            Development Roadmap
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            As a Software Engineer, I followed the{" "}
            <span className="text-black font-bold">
              SDLC (Software Development Life Cycle)
            </span>{" "}
            methodology. From initial requirement gathering to final cloud
            deployment, every phase was executed with architectural precision to
            ensure a robust, scalable workspace.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-black"></div>
          <div className="block md:hidden absolute left-4 h-full border-l-4 border-black"></div>

          <div className="space-y-20">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                } flex-row`}
              >
                {/* 1. Content Block */}
                <div className="hidden md:block w-5/12"></div>{" "}
                {/* Spacer for Desktop */}
                <div className="w-full md:w-5/12 ml-12 md:ml-0">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
                    {phase.date}
                  </span>
                  <h4 className="text-2xl font-bold text-black mt-1">
                    {phase.title}
                  </h4>
                  <p className="text-gray-500 mt-3 leading-relaxed text-base">
                    {phase.desc}
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 bg-white border-4 border-black w-10 h-10 rounded-full flex items-center justify-center z-10">
                  <div className="w-2.5 h-2.5 bg-black rounded-full animate-ping"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#1DB954] py-20 px-6 mt-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            <h3 className="text-black font-black text-4xl md:text-5xl italic tracking-tighter uppercase leading-none">
              So, follow us on our journey
            </h3>
            <p className="text-black/80 font-bold text-lg mt-4 uppercase tracking-wide">
              Get all the latest updates about our products
            </p>
          </motion.div>

          <div className="relative max-w-md mx-auto mt-10">
            <form
              onSubmit={handleSubscribe}
              className="flex items-center gap-2 bg-black/5 p-1 rounded-2xl border border-black/10"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status !== "idle"}
                placeholder="Join the newsletter..."
                className="flex-1 bg-transparent px-6 py-4 text-sm text-black placeholder:text-black/50 focus:outline-none font-bold"
              />
              <button
                type="submit"
                disabled={status !== "idle"}
                className="bg-black text-white p-4 rounded-xl hover:bg-zinc-800 transition-all min-w-[60px] flex items-center justify-center shadow-lg"
              >
                {status === "loading" ? (
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <motion.div
                      animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.8, 0.3] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                      className="absolute w-5 h-5 border-2 border-white rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.2,
                        delay: 0.4,
                      }}
                      className="absolute w-1.5 h-1.5 bg-white rounded-full"
                    />
                  </div>
                ) : (
                  <ArrowRight size={24} />
                )}
              </button>
            </form>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 20 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 right-0 flex justify-center items-center gap-2"
                >
                  <div className="bg-black rounded-full p-1">
                    <Check
                      size={12}
                      className="text-[#1DB954]"
                      strokeWidth={4}
                    />
                  </div>
                  <span className="text-black text-xs font-black uppercase tracking-[0.2em]">
                    Thanks for Subscribing
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
