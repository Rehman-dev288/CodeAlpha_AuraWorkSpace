// HomePage.jsx
import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Expand } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);
  const isVideoInView = useInView(videoSectionRef, { margin: "-100px" });

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoInView]);

  const GuideCard = ({ image, title, description }) => {
    return (
      <div className="bg-gray-100 rounded-2xl overflow-hidden group cursor-pointer flex flex-col h-full">
        <div className="relative overflow-hidden h-64">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg mb-3">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {description}
          </p>
          <button className="px-6 py-2 bg-black text-white text-sm font-semibold hover:bg-white hover:text-black border-2 border-black transition-all">
            VIEW GUIDE
          </button>
        </div>
      </div>
    );
  };

  const guides = [
    {
      image: "/guide-1.jpg",
      title: "The Ultimate Aura Desk Setup Guide",
      description:
        "We have put together a definitive guide to help those who are looking to put together a aura desk setup.",
    },
    {
      image: "/guide-2.jpg",
      title: "AWS Desk Pad Guide - Some Insights.",
      description:
        "For those who are looking for a desk pad, we've written down some key design insights into our latest desk pad.",
    },
    {
      image: "/guide-3.jpg",
      title: "The Complete Home Office Setup Guide",
      description:
        "Looking at the recent trends, we've put together a complete guide on how to build the most practical home office setup.",
    },
    {
      image: "/guide-4.jpg",
      title: "Perfect Lighting for your Desk Setup",
      description:
        "Need help with your setup lighting? We unveil some secret tips in our guide. Come have a look at our guide!",
    },
  ];

  const bottomGuides = [
    {
      image: "/guide-5.jpg",
      title: "Top 6 Desk Accessories Guide for 2026",
      description:
        "We take a look at some of the best desk accessories you would want to maximise the productivity of your desk setup.",
    },
    {
      image: "/guide-6.jpg",
      title: "An indepth look at mechanical keyboards for 2026",
      description:
        "Need help with selecting a mechanical keyboard? We go through some top tips in helping you choose your keyboard.",
    },
  ];

  const featuredSetups = [
    {
      image: "/setup-1.jpg",
      title: "3 Things that Immediately Elevate Your Desk Setup",
    },
    { image: "/setup-2.jpg", title: "A desk setup for focusing" },
    {
      image: "/setup-3.jpg",
      title: "From Roofing to Photography: Cory Johnson's Simplified Workspace",
    },
    { image: "/setup-4.jpg", title: "Ana Bond's Colorful Work and Play Haven" },
    { image: "/setup-5.jpg", title: "Tom's Aura Desk Setup" },
    {
      image: "/setup-6.jpg",
      title: "Designing a Desk Space: A Ten-Year Designer's Journey",
    },
    { image: "/setup-7.jpg", title: "Setup Update" },
    { image: "/setup-8.jpg", title: "A cool setup by teksetup" },
    { image: "/setup-9.jpg", title: "Is your setup simply functional?" },
  ];

  return (
    <div className="pt-20 lg:pt-24 bg-white">
           {/* Hero Section */}
      <section className="relative w-full bg-white pt-10 pb-16">
        <div className="max-w-[1380px] mx-auto px-4 lg:px-0">
          <div className="relative w-full h-[920px] rounded-3xl overflow-hidden shadow-sm">
            <img
              src="/auraworkspace-bg.webp"
              alt="Workspace"
              className="w-full h-full object-cover"
            />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 left-4 bg-black text-white px-6 py-8 rounded-2xl shadow-xl"
            >
              <div className="flex flex-col gap-2 text-2xl font-bold tracking-wider">
                <span>AUR</span>
                <span>WRK</span>
                <span>SPC</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
                     
      <section className="max-w-[90%] mx-auto mb-16 mt-32">
        <div
          className="bg-gray-100 rounded-3xl p-12 grid md:grid-cols-2 gap-12 items-center"
          ref={videoSectionRef}
        >
          <div>
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-black">
              FLOW TIMER
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
              The Ultimate Productivity Timer is Here ⏳
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Flow Timer is designed to help you focus, stay in rhythm, and get
              more done without distractions. A minimal, tactile timer,
              purpose-built to overcome procrastination, unlock deep focus and
              skyrocket your productivity with the Pomodoro Method.
            </p>
            {/* Wahi Button jo aapne pehle maanga tha */}
            <button className="px-8 py-3 bg-black text-white font-semibold hover:bg-white hover:text-black border-2 border-black transition-all uppercase">
              SUPPORT PROJECT
            </button>
          </div>

          <div className="rounded-[45px] overflow-hidden bg-black aspect-video">
            <video
              ref={videoRef}
              className="w-full h-full object-cover scale-105"
              loop
              muted
              playsInline
              key={isVideoInView}
            >
              <source src="/flow-timer-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section className="max-w-[90%] mx-auto mb-24 mt-32">
        {/* No Background Grey - Pure White */}
        <div className="grid md:grid-cols-[380px_1fr] gap-16 items-center">
          <div className="flex-shrink-0 ml-12">
            <div
              className="overflow-hidden rounded-[30px]"
              style={{ width: "380px", height: "380px" }}
            >
              <img
                src="/focus-mds.webp"
                alt="Focus by AWS"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-6 tracking-tight text-black">
              Focus by AWS
            </h2>

            <p
              className="text-[#333333] mb-8"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontSize: "18px",
                lineHeight: "28px",
                fontWeight: "400",
                maxWidth: "1000px",
              }}
            >
              Boost productivity with 'Focus by AWS', a Chrome extension that
              melds a to-do list, Pomodoro timer, and stunning wallpapers for a
              focused and visually engaging workspace.
            </p>

            <button className="px-10 py-3 bg-black text-white text-sm font-semibold hover:bg-white hover:text-black border-2 border-black transition-all uppercase">
              VIEW CHROME EXTENSION
            </button>
          </div>
        </div>
      </section>
      <section className="max-w-[90%] mx-auto mb-16">
        <div className="bg-gray-100 rounded-3xl p-12 lg:p-16">
          <h1 className="text-5xl font-bold mb-6 tracking-tight text-left text-black">
            AURA DESK SETUPS
          </h1>

          <p className="text-gray-600 text-left leading-relaxed mb-10 max-w-none text-lg">
            There is nothing more satisfying to the eye than aura desk setups.
            We really enjoyed looking at aura desk setups so much that we
            created a whole following curating the best setups to inspire your
            office revamps.
          </p>

          <div className="text-left">
            <Link to="/guides">
              <button className="px-8 py-3 bg-black text-white font-semibold hover:bg-white hover:text-black border-2 border-black transition-all uppercase">
                VIEW ALL GUIDES
              </button>
            </Link>
          </div>
        </div>
      </section>
            {/* Guides Grid */}     {" "}
      <section className="max-w-[90%] mx-auto mb-16">
               {" "}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                   {" "}
          {guides.map((guide, index) => (
            <GuideCard key={index} {...guide} />
          ))}
                 {" "}
        </div>
             {" "}
      </section>
            {/* YouTube Video + 2 Guides */}     {" "}
      <section className="max-w-[90%] mx-auto mb-16">
               {" "}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
                   {" "}
          <div className="md:col-span-2 rounded-2xl overflow-hidden bg-gray-100 relative group cursor-pointer flex flex-col h-[490px]">
                       {" "}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted
              playsInline
              autoPlay
              onMouseEnter={(e) => e.target.play()}
              onCanPlay={(e) => {
                // Check if element is in viewport and play
                const observer = new IntersectionObserver(
                  (entries) => {
                    if (entries[0].isIntersecting) e.target.play();
                    else e.target.pause();
                  },
                  { threshold: 0.5 },
                );
                observer.observe(e.target);
              }}
            >
                            <source src="/aura-bg.mp4" type="video/mp4" />     
                   {" "}
            </video>
                     {" "}
          </div>
                             {" "}
          {bottomGuides.map((guide, index) => (
            <GuideCard key={index} {...guide} />
          ))}
                 {" "}
        </div>
             {" "}
      </section>
           {/* Featured Setups Grid */}
      <section className="max-w-[90%] mx-auto mb-16">
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* Left Side: 9 Images (3x3 Grid) */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {featuredSetups.map((setup, index) => (
              <div
                key={index}
                className="aspect-square relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm"
              >
                <img
                  src={setup.image}
                  alt={setup.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <h3 className="text-white text-[12px] uppercase tracking-widest font-bold leading-tight">
                    {setup.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-sm w-full md:w-[290px]">
            <div className="flex flex-col items-center justify-center gap-10">
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-black leading-none uppercase">
                FEATURED
                <br />
                SETUPS
              </h3>

              <Link to="/setups">
                <button
                  className="flex items-center justify-center gap-3 px-8 py-3 bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all uppercase"
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "0.05em",
                  }}
                >
                  <Expand size={20} /> {/* Icon Pehle */}
                  <span>VIEW ALL SETUPS</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
         
      <section className="w-full bg-black text-white py-20 overflow-hidden">
        <div className="max-w-[90%] mx-auto flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }} // Isse har baar scroll karne par animate hoga
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-8 tracking-tight uppercase text-white"
          >
            WANT TO SUBMIT YOUR SETUP?
          </motion.h2>

          <Link to="/contact">
            <button className="px-12 py-3 bg-white text-black font-bold rounded-full border-2 border-white hover:bg-black hover:text-white transition-all uppercase text-sm tracking-widest">
              CONTACT US
            </button>
          </Link>
        </div>
      </section>
         {" "}
    </div>
  );
};

const GuideCard = ({ image, title, description }) => {
  return (
    <motion.div
      className="bg-gray-100 rounded-2xl overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
           {" "}
      <div className="relative overflow-hidden h-64">
               {" "}
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        />
               {" "}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
             {" "}
      </div>
           {" "}
      <div className="p-6">
                <h3 className="font-bold text-lg mb-3">{title}</h3>       {" "}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>
               {" "}
        <button className="px-6 py-2 bg-black text-white text-sm font-semibold hover:bg-white hover:text-black border-2 border-black transition-all">
                    VIEW GUIDE        {" "}
        </button>
             {" "}
      </div>
         {" "}
    </motion.div>
  );
};

const SetupCard = ({ image, title }) => {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden group cursor-pointer h-64"
      whileHover={{ scale: 1.02 }}
    >
           {" "}
      <motion.img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      />
           {" "}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6"
      >
                <h3 className="text-white font-semibold text-sm">{title}</h3>   
         {" "}
      </motion.div>
         {" "}
    </motion.div>
  );
};

export default HomePage;
