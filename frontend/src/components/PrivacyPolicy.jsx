import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';

const PrivacyPolicy = () => {
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
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isBottom) setHasReachedEnd(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-auto bg-white font-sans text-black selection:bg-black selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50" style={{ scaleX }} />

      {/* 1. Header Section */}
      <div className="bg-black h-[45vh] w-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter whitespace-nowrap">
            Privacy & Data Policy
          </h1>
          <p className="text-zinc-500 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
            Aura Workspace Trust Protocol
          </p>
        </motion.div>
      </div>

      {/* 2. Content Section */}
      <div className="max-w-4xl mx-auto px-6 -mt-16 mb-20">
        <div className="bg-white border border-zinc-200 rounded-2xl p-8 md:p-16 shadow-2xl relative z-10">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-b border-zinc-100 pb-12">
            <div className="flex flex-col items-center text-center space-y-2">
              <Lock size={24} />
              <h3 className="font-bold uppercase text-xs">Secure Encryption</h3>
              <p className="text-zinc-500 text-xs">SSL Protected Data</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Eye size={24} />
              <h3 className="font-bold uppercase text-xs">Transparency</h3>
              <p className="text-zinc-500 text-xs">No Hidden Tracking</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Database size={24} />
              <h3 className="font-bold uppercase text-xs">Control</h3>
              <p className="text-zinc-500 text-xs">Your Data, Your Choice</p>
            </div>
          </div>

          {/* Policy Text */}
          <div className="space-y-12 text-sm md:text-base text-zinc-600 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-black text-black uppercase mb-6 flex items-center gap-3">
                <Shield size={18} /> Overview
              </h2>
              <p>
                This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from <strong>Aura Workspace</strong> (the “Site”).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase mb-6">Information Collection</h2>
              <p className="mb-4">
                When you visit the Site, we automatically collect certain information about your device, including your web browser, IP address, and time zone. We refer to this as <strong>“Device Information”</strong>.
              </p>
              <ul className="space-y-3 list-disc pl-5 text-xs">
                <li><strong>Cookies:</strong> Data files placed on your device with unique identifiers.</li>
                <li><strong>Log Files:</strong> Tracking actions like browser type and date/time stamps.</li>
                <li><strong>Web Beacons/Pixels:</strong> Electronic files used to record browsing behavior.</li>
              </ul>
              <p className="mt-4">
                Additionally, when you make a purchase, we collect your name, billing/shipping address, and payment info (Order Information).
              </p>
            </section>

        <section className="bg-zinc-50 p-8 rounded-xl border-l-4 border-black my-12">
  <h3 className="font-bold uppercase text-sm mb-2 text-black tracking-wide">
    How we use your data
  </h3>
  <p className="text-zinc-600 text-sm italic leading-relaxed">
    We use Order Information to fulfill orders, process payments, and provide invoices. 
    We use Device Information to screen for potential risk/fraud and to optimize our Site experience.
  </p>
</section>

            <section>
              <h2 className="text-xl font-black text-black uppercase mb-6">Third Party Sharing</h2>
              <p>
                We share your Personal Information with third parties (like Google Analytics) to help us understand our customers. We also share information to comply with laws or protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase mb-6">Your Rights</h2>
              <p>
                If you are a European resident, you have the right to access, correct, update, or delete the personal information we hold about you. Please contact us at the email below to exercise these rights.
              </p>
            </section>

            <div className="pt-10 border-t border-zinc-100 text-center">
              <p className="text-zinc-400 text-[10px] uppercase tracking-widest mb-2">Privacy Inquiries</p>
              <span className="text-black font-bold cursor-pointer hover:text-zinc-600 transition-colors">
                hello@auraworkspace.com
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Back Button (Instantly jumps to footer) */}
      <div className="flex justify-center pb-20 px-6">
        {hasReachedEnd ? (
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ y: -5 }}
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

export default PrivacyPolicy;