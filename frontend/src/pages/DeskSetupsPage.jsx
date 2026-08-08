import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DeskSetupsPage = () => {
  const [filter, setFilter] = useState("ALL");

  const categories = [
    { name: "ALL", ids: Array.from({ length: 57 }, (_, i) => i + 1) },
    {
      name: "DARK",
      ids: [
        8, 13, 19, 24, 26, 30, 32, 35, 38, 40, 41, 42, 43, 45, 46, 48, 54, 55,
      ],
    },
    {
      name: "TOP-RATED",
      ids: [
        14, 15, 16, 25, 26, 27, 29, 30, 33, 37, 38, 39, 40, 41, 42, 43, 56, 57,
      ],
    },
    { name: "FEATURED", ids: [7, 14, 15] },
    {
      name: "LIGHT",
      ids: [
        9, 14, 15, 16, 25, 28, 33, 34, 35, 37, 38, 40, 45, 48, 50, 51, 52, 53,
        54, 57,
      ],
    },
  ];
  const allSetupsData = [
    { id: 1, title: "3 Things that Immediately Elevate Your Desk Setup" },
    { id: 2, title: "A desk setup for focusing" },
    {
      id: 3,
      title: "From Roofing to Photography: Cory Johnson's Simplified Workspace",
    },
    { id: 4, title: "Ana Bond's Colorful Work and Play Haven" },
    { id: 5, title: "Tom's Aura Desk Setup" },
    { id: 6, title: "Designing a Desk Space: A Ten-Year Designer's Journey" },
    { id: 7, title: "Setup Update" },
    { id: 8, title: "A cool setup by teksetup" },
    { id: 9, title: "Is your setup simply functional?" },
    { id: 10, title: "Best Laptop Stands for your laptop desk setup" },
    { id: 11, title: "A Guide to a Minimal Gaming Setup" },
    { id: 12, title: "A Reddit user with the craziest pegboard desk setup" },
    { id: 13, title: "A Physical Therapy Student Desk Setup" },
    { id: 14, title: "A Guide to an Autumn Setup" },
    { id: 15, title: "How to create the cleanest light-themed home office?" },
    { id: 16, title: "Using stacked monitors for your home office" },
    { id: 17, title: "Using a desk shelf with your home office setup" },
    { id: 18, title: "Exclusive Product Pre-Launch Event: Desk Pad by AWS" },
    { id: 19, title: "How to take photos of desk setups?" },
    { id: 20, title: "Would you run a triple monitor setup?" },
    { id: 21, title: "An Easy IKEA Desktop Setup for Your Home Office" },
    { id: 22, title: "How to perfect your WFH office setup ergonomics?" },
    { id: 23, title: "5 Amazing Tips to Home Office Ideas" },
    { id: 24, title: "Why We Opt For A Compact Mechanical keyboard?" },
    { id: 25, title: "Getting the correct lighting for your desk setup" },
    {
      id: 26,
      title: "Stunning widescreen monitor setup with perfect lighting",
    },
    { id: 27, title: "Simplicity and Minimalism at its Finest" },
    { id: 28, title: "Who said keeping a clean desk setup was hard?" },
    { id: 29, title: "A Truly Inspiring AURA Home Office Setup" },
    { id: 30, title: "Incredible modern desk setups that took over reddit" },
    {
      id: 31,
      title: "An RGB Gaming desk setup with an unbelievable clean look",
    },
    { id: 32, title: "What makes an office at home?" },
    { id: 33, title: "Alexacea" },
    { id: 34, title: "Hipstergram89" },
    { id: 35, title: "Matthewgraber" },
    { id: 36, title: "Michsoledesign" },
    { id: 37, title: "Hara.studies" },
    { id: 38, title: "Thespenceryan" },
    { id: 39, title: "Feriktantomi" },
    { id: 40, title: "Mekunotech" },
    { id: 41, title: "A classic widescreen setup for developers" },
    { id: 42, title: "Andresvidoza" },
    { id: 43, title: "infinitysetup" },
    { id: 44, title: "Melocokr" },
    { id: 45, title: "Jorgeypowell" },
    { id: 46, title: "victsants" },
    { id: 47, title: "jerome_designs_things" },
    { id: 48, title: "thegeektoday" },
    { id: 49, title: "justinschwartfigure" },
    { id: 50, title: "neat__gear" },
    { id: 51, title: "clearmilk" },
    { id: 52, title: "imsorrybae" },
    { id: 53, title: "Thunar93" },
    { id: 54, title: "superstrm" },
    { id: 55, title: "MoistBall" },
    { id: 56, title: "A beautifully balanced Ikea desk top setup" },
    {
      id: 57,
      title:
        "Unbelievable IKEA Office Desk Setup that has been trending on Reddit.",
    },
  ];

  const activeImages = categories.find((cat) => cat.name === filter).ids;

  return (
    <div className="w-full min-h-screen bg-white pb-20 font-sans">
      {/* 1. Top Spacer */}
      <div className="h-[220px]" />

      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-32">
          <div className="md:w-[40%]">
            <h1 className="text-[80px] font-bold leading-none tracking-tighter text-black">
              Setups.
            </h1>
          </div>
          <div className="md:w-[55%] pt-2">
            <p
              className="text-[#333333] mb-8"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontSize: "18px",
                lineHeight: "28px",
                fontWeight: "400",
                maxWidth: "550px",
                textAlign: "left",
              }}
            >
              On this page you will find our index of all the setups that we've
              accumulated with the relevant gear in each setup. Everything in
              this gallery has been identified and will assist you in putting
              together your own setup.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-16">
          {/* Top Row: 4 Buttons */}
          <div className="flex border-[1.5px] border-black overflow-hidden">
            {["ALL", "DARK", "TOP-RATED", "FEATURED"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`w-[160px] py-3 text-[12px] font-bold tracking-[0.1em] border-r-[1.5px] last:border-r-0 border-black transition-colors duration-200 ${
                  filter === cat
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button
            onClick={() => setFilter("LIGHT")}
            className={`w-[160px] py-3 text-[12px] font-bold tracking-[0.1em] border-x-[1.5px] border-b-[1.5px] border-black transition-colors duration-200 ${
              filter === "LIGHT"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-50"
            }`}
          >
            LIGHT
          </button>
        </div>
        {/* 4. Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <AnimatePresence mode="popLayout">
            {allSetupsData
              .filter((setup) => activeImages.includes(setup.id))
              .map((setup) => (
                <motion.div
                  key={setup.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                  className="aspect-square bg-gray-100 overflow-hidden relative group cursor-pointer"
                >
                  <img
                    src={`/setup-${setup.id}.jpg`}
                    alt={setup.title || `Setup ${setup.id}`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white text-[12px] uppercase tracking-widest font-bold leading-tight">
                      {setup.title || `Aura Setup #${setup.id}`}
                    </h3>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DeskSetupsPage;
