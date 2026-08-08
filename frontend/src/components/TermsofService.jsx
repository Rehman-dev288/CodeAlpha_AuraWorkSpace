import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Scale, FileText, Gavel, ShieldCheck, DivideIcon } from 'lucide-react';

const TermsOfService = () => {
  const navigate = useNavigate();
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200;
      if (isBottom) setHasReachedEnd(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-auto bg-white font-sans text-black selection:bg-black selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50" style={{ scaleX }} />

      {/* 1. Header Section */}
      <div className="bg-black h-[45vh] w-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Terms of Service
          </h1>
          <p className="text-zinc-400 text-sm tracking-[0.3em] uppercase font-bold">
            Aura Workspace Legal Protocol
          </p>
        </motion.div>
      </div>

      {/* 2. Content Section */}
      <div className="max-w-4xl mx-auto px-6 -mt-20 mb-24">
        <div className="bg-white border border-zinc-200 rounded-2xl p-8 md:p-16 shadow-2xl relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-b border-zinc-100 pb-12">
            <div className="flex flex-col items-center text-center space-y-2">
              <Scale size={24} />
              <h3 className="font-bold uppercase text-xs">Agreement</h3>
              <p className="text-zinc-500 text-xs">Binding Contract</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <ShieldCheck size={24} />
              <h3 className="font-bold uppercase text-xs">Protection</h3>
              <p className="text-zinc-500 text-xs">Secure Service</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Gavel size={24} />
              <h3 className="font-bold uppercase text-xs">Compliance</h3>
              <p className="text-zinc-500 text-xs">Global Jurisdict</p>
            </div>
          </div>

          <div className="space-y-12 text-zinc-600 leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-xl font-black text-black uppercase mb-4">OVERVIEW</h2>
              <p>This website is operated by <strong>Aura Workspace</strong>. Throughout the site, the terms “we”, “us” and “our” refer to Aura Workspace. Aura Workspace offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
              <p className="mt-4">By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein. These <strong>Terms of Service</strong> apply to all users of the site.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 1 - ONLINE STORE TERMS</h3>
              <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state. You may not use our products for any illegal or unauthorized purpose nor may you violate any laws in your jurisdiction (including but not limited to copyright laws).</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic ">SECTION 2 - GENERAL CONDITIONS</h3>
              <p>We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted. Credit card information is always encrypted during transfer over networks.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic ">SECTION 3 - ACCURACY OF INFORMATION</h3>
              <p>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon without consulting primary sources.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 4 - MODIFICATIONS TO PRICES</h3>
              <p>Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service without notice at any time.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 5 - PRODUCTS OR SERVICES</h3>
              <p>Certain products or services may be available exclusively online through the website. We have made every effort to display as accurately as possible the colors and images of our products. We reserve the right to limit the sales of our products.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 6 - BILLING AND ACCOUNT INFO</h3>
              <p>We reserve the right to refuse any order you place with us. You agree to provide current, complete and accurate purchase and account information for all purchases made at our store.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 7 - OPTIONAL TOOLS</h3>
              <p>We may provide you with access to third-party tools over which we neither monitor nor have any control. Any use by you of optional tools is entirely at your own risk.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 8 - THIRD-PARTY LINKS</h3>
              <p>Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not liable for any harm or damages related to the purchase or use of goods from third-party websites.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 9 - USER COMMENTS</h3>
              <p>You agree that we may, at any time, without restriction, edit, copy, publish, distribute and otherwise use any comments that you forward to us. We are under no obligation to maintain comments in confidence.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 10 - PERSONAL INFORMATION</h3>
              <p>
                Your submission of personal information through the store is governed by our Privacy Policy. To understand how we protect your data, please read our {" "}
                <Link to="/PrivacyPolicy" className="text-black font-bold hover:text-zinc-500 transition-all underline underline-offset-4">
                  privacy policy
                </Link>.
              </p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 11 - ERRORS AND OMISSIONS</h3>
              <p>Occasionally there may be information on our site that contains typographical errors, inaccuracies or omissions related to product descriptions, pricing, and availability.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 12 - PROHIBITED USES</h3>
              <p>You are prohibited from using the site or its content for any unlawful purpose, to solicit others for unlawful acts, or to infringe upon our intellectual property rights.</p>
            </section>

            <section className="bg-zinc-50 p-8 rounded-xl border-l-4 border-black">
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 13 - LIMITATION OF LIABILITY</h3>
              <p className="text-xs md:text-sm italic text-zinc-600">In no case shall <strong>Aura Workspace</strong>, our directors, officers, or employees be liable for any injury, loss, claim, or any direct, indirect, or consequential damages of any kind.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 14 - INDEMNIFICATION</h3>
              <p>You agree to indemnify and hold harmless Aura Workspace from any claim or demand made by any third-party due to your breach of these Terms of Service.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 15 - SEVERABILITY</h3>
              <p>In the event that any provision of these Terms is determined to be unlawful or void, such provision shall nonetheless be enforceable to the fullest extent permitted by law.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 16 - TERMINATION</h3>
              <p>These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms at any time by notifying us that you no longer wish to use our Services.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 17 - ENTIRE AGREEMENT</h3>
              <p>The failure of us to exercise any right shall not constitute a waiver. These Terms constitute the entire agreement between you and us regarding the Service.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 18 - GOVERNING LAW</h3>
              <p>These Terms of Service and any separate agreements shall be governed by and construed in accordance with the laws of <strong>Global Trade Laws</strong>.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 19 - CHANGES TO TERMS</h3>
              <p>We reserve the right to update, change or replace any part of these Terms by posting updates to our website. It is your responsibility to check our website periodically for changes.</p>
            </section>

            <section>
              <h3 className="text-black font-bold uppercase text-sm mb-2 italic">SECTION 20 - CONTACT INFORMATION</h3>
              <p>Questions about the Terms of Service should be sent to us at <strong>hello@auraworkspace.com</strong>.</p>
            </section>

            <div className="text-center pt-10 border-t border-zinc-100">
              <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2">Legal Inquiries</p>
              <span className="text-black font-bold cursor-pointer hover:text-zinc-600 transition-colors">
                hello@auraworkspace.com
              </span>
            </div>
          </div>
        </div>
      </div>

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

export default TermsOfService;