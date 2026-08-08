import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ShoppingCart, Trash2, Minus, Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Navigation ke liye

const CartDrawer = ({ isOpen, onClose, cartItems = [], updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();

  // Logic for Subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999] cursor-pointer"
          />

          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-[400px] bg-white z-[1000] shadow-2xl flex flex-col"
          >
            {/* --- HEADER --- */}
            <div className="p-6 bg-white shrink-0">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <ShoppingCart size={18} className="text-black" />
                  <span className="text-[11px] font-black tracking-[0.1em] uppercase text-black">Review Your Cart</span>
                </div>
                <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-all cursor-pointer">
                  <X size={20} className="text-black" />
                </button>
              </div>

              <div className="text-center flex flex-col items-center">
                <div className="flex items-center gap-3 justify-center mb-4">
                  <span className="text-[26px] font-black tracking-tighter text-black uppercase whitespace-nowrap">Aura Workspace</span>
                  <div className="relative">
                    <svg viewBox="0 0 60 60" className="w-12 h-12">
                      <text x="30" y="46" textAnchor="middle" fill="black" fontSize="52" fontWeight="900">W</text>
                      <line x1="12" y1="34" x2="48" y2="34" stroke="black" strokeWidth="6" /> 
                    </svg>
                  </div>
                </div>
                <div className="w-full h-[1.5px] bg-gray-100" />
              </div>
            </div>

            {/* --- MIDDLE SECTION --- */}
            <div className="flex-grow overflow-y-auto custom-scrollbar p-6">
              {cartItems.length > 0 ? (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 relative">
                      {/* Square Image */}
                      <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden shrink-0 border border-gray-100">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>

                      {/* Info & Quantity */}
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <h4 className="text-[15px] font-black uppercase text-black leading-tight">{item.name}</h4>
                          {item.selectedColor && (
                            <div className="w-3 h-3 mt-1 rounded-sm border border-gray-200" style={{ backgroundColor: item.selectedColor }} />
                          )}
                        </div>
                        
                        <div className="flex items-center border border-black rounded-md w-fit h-7 px-1 gap-3 mt-2">
                          <button onClick={() => updateQuantity(item.id, -1)} className="hover:opacity-50 cursor-pointer"><Minus size={10}/></button>
                          <span className="text-[11px] font-bold min-w-[12px] text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="hover:opacity-50 cursor-pointer"><Plus size={10}/></button>
                        </div>
                      </div>

                      {/* Price & Trash */}
                      <div className="flex flex-col justify-between items-end">
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition-all cursor-pointer">
                          <Trash2 size={16} />
                        </button>
                        <span className="text-[13px] font-black text-[#2D6A4F]">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Empty State - Adjusted Padding to push it up */
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="mb-6">
                    <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M16 16s-1.5-2-4-2-4 2-4 2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                  </motion.div>
                  <h3 className="text-lg font-bold text-black uppercase mb-2">Your cart is empty</h3>
                  <p className="text-gray-600 text-[13px] mb-8 px-6 leading-relaxed">A workspace without Aura is just a desk. Add something premium.</p>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 font-bold uppercase text-[10px]">Continue</span>
                    <button 
                      onClick={() => { navigate('/shop'); onClose(); }} 
                      className="font-bold text-black underline decoration-2 underline-offset-8 uppercase text-[11px] cursor-pointer"
                    >
                      Shopping
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* --- BOTTOM SECTION --- */}
            <div className="p-8 bg-[#F8F8F8] border-t border-gray-100 shrink-0">
              <div className="flex justify-between items-center mb-6 px-1">
                <span className="text-[15px] font-black uppercase text-black">Subtotal ({totalItems} {totalItems === 1 ? 'Item' : 'Items'})</span>
                <span className="text-[18px] font-black text-[#2D6A4F] tracking-tight">${subtotal.toFixed(2)}</span>
              </div>

              <button className="w-full h-14 bg-black text-white font-bold rounded-full border-2 border-black hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-3 mb-6">
                <Lock size={16} />
                <span className="uppercase tracking-[0.2em] text-xs">Checkout Now</span>
              </button>

              <div className="flex justify-center w-full">
  <p className="text-[8.5px] text-gray-400 text-center font-bold uppercase tracking-[0.05em] whitespace-nowrap">
    By checking out, you agree to our 
    <Link to="/TermsofService" onClick={onClose} className="ml-1 text-black underline underline-offset-4 decoration-1">Terms of Service</Link> 
    <span className="mx-1">and</span> 
    <Link to="/PrivacyPolicy" onClick={onClose} className="text-black underline underline-offset-4 decoration-1">Privacy Policy</Link>
  </p>
</div>
            </div>
          </motion.div>
        </>
      )}
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #000; border-radius: 10px; }
      `}</style>
    </AnimatePresence>
  );
};

export default CartDrawer;