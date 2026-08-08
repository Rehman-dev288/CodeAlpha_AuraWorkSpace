import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Truck, RotateCcw, ShieldCheck, Globe } from 'lucide-react';

const ShippingReturns = () => {
  const navigate = useNavigate();
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  // Scroll progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Check if user reached bottom to show back button
  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isBottom) setHasReachedEnd(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-auto bg-white font-sans text-black selection:bg-black selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50" style={{ scaleX }} />

      {/* 1. Header Section (Half Black Design) */}
      <div className="bg-black h-[45vh] w-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Shipping & Policy
          </h1>
          <p className="text-zinc-400 text-sm tracking-[0.3em] uppercase font-bold">
            Aura Workspace Protocol
          </p>
        </motion.div>
      </div>

      {/* 2. Content Section (Page Overlap Look) */}
      <div className="max-w-4xl mx-auto px-6 -mt-20 mb-20">
        <div className="bg-white border border-zinc-200 rounded-2xl p-8 md:p-16 shadow-2xl relative z-10">
          
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-b border-zinc-100 pb-12">
            <div className="flex flex-col items-center text-center space-y-2">
              <Truck size={24} />
              <h3 className="font-bold uppercase text-xs">Global Shipping</h3>
              <p className="text-zinc-500 text-xs">24-48h Processing</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <RotateCcw size={24} />
              <h3 className="font-bold uppercase text-xs">30 Day Return</h3>
              <p className="text-zinc-500 text-xs">No questions asked</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <ShieldCheck size={24} />
              <h3 className="font-bold uppercase text-xs">100 Day Warranty</h3>
              <p className="text-zinc-500 text-xs">Defective Protection</p>
            </div>
          </div>

          {/* Detailed Policy Content */}
          <div className="prose prose-zinc max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                <Globe size={20} /> Shipping Policy
              </h2>
              <p className="text-zinc-600 leading-relaxed">
                Aura Workspace ships worldwide. We ensure that our precision-crafted tools reach your desk safely, no matter where you are located. Typical delivery times are:
              </p>
              <ul className="mt-4 space-y-4 text-zinc-600 list-none p-0">
                <li className="flex justify-between border-b border-zinc-50 pb-2">
                  <span>North America & Europe</span>
                  <span className="font-bold text-black text-sm uppercase">6-12 Business Days</span>
                </li>
                <li className="flex justify-between border-b border-zinc-50 pb-2">
                  <span>Asia & Oceania</span>
                  <span className="font-bold text-black text-sm uppercase">8-14 Business Days</span>
                </li>
                <li className="flex justify-between border-b border-zinc-50 pb-2">
                  <span>Rest of the World</span>
                  <span className="font-bold text-black text-sm uppercase">10-20 Business Days</span>
                </li>
              </ul>
            </section>

            <section className="bg-zinc-50 p-8 rounded-xl border-l-4 border-black">
              <h3 className="font-bold uppercase text-sm mb-2">Holiday Notice</h3>
              <p className="text-zinc-600 text-sm italic">
                During November and December, logistics volume increases significantly. Please allow an additional 3-5 business days for tracking updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                <RotateCcw size={20} /> Returns & Exchanges
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                If you are not satisfied with your order within the first <strong>30 days</strong>, return it to us in like-new condition. 
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="border border-zinc-200 p-6 rounded-lg">
                  <h4 className="font-bold text-xs uppercase mb-3 text-black">Eligible</h4>
                  <ul className="text-xs text-zinc-500 space-y-2 list-disc pl-4">
                    <li>Unused items in original packaging</li>
                    <li>Defective or damaged products</li>
                    <li>Incorrect items received</li>
                  </ul>
                </div>
                <div className="border border-zinc-200 p-6 rounded-lg">
                  <h4 className="font-bold text-xs uppercase mb-3 text-black">Non-Eligible</h4>
                  <ul className="text-xs text-zinc-500 space-y-2 list-disc pl-4">
                    <li>Items showing heavy wear and tear</li>
                    <li>Missing original packaging</li>
                    <li>Items returned after 30 days</li>
                  </ul>
                </div>
              </div>
            </section>

<section className="text-center pt-10 border-t border-zinc-100">
  <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2">
    Need help?
  </p>
 
  <span className="text-black font-bold cursor-pointer hover:text-zinc-600 transition-colors">
    support@auraworkspace.com
  </span>
</section>
          </div>
        </div>
</div>
    {/* Button code in ShippingReturns.jsx */}
<div className="flex justify-center pb-20 px-6">
  {hasReachedEnd ? (
    <motion.button
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ y: -5 }}
      // Yahan hum home path ke sath fragment attach kar rahay hain
      onClick={() => navigate('/#main-footer')}
      className="flex items-center gap-3 bg-black text-white border-2 border-black px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] shadow-2xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
    >
      <ArrowLeft size={16} />
      Back to Workspace
    </motion.button>
  ) : (
    <p className="text-zinc-400 text-[10px] uppercase tracking-[0.3em] animate-pulse">
      Scroll to acknowledge policy
    </p>
  )}
      </div>
    </div>
  );
};

export default ShippingReturns;