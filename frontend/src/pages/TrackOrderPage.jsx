import React from 'react';

const TrackOrderPage = () => {
  return (
    <div className="w-full bg-white font-sans flex flex-col items-center">
      {/* 1. Top Spacer - Height kam rakhi hai taake header nazar aaye */}
      <div className="h-[180px]" />

      <div className="max-w-[1100px] w-full px-6 mb-10">
        {/* 2. Main Heading */}
        <h1 className="text-5xl font-medium text-black mb-10 text-left">
          Track Your Order
        </h1>

        {/* 3. Main Container Box */}
        <div className="w-full border-[1.5px] border-gray-200 rounded-[15px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between relative">
          
          {/* Left Side: Order + Email */}
          <div className="flex flex-col w-full md:w-[40%] gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-normal text-black">Order Number</label>
              <input 
                type="text" 
                placeholder="Order Number"
                className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-black focus:ring-1 focus:ring-black/20 transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-normal text-black">Email or Phone Number</label>
              <input 
                type="text" 
                placeholder="Email or Phone Number"
                className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-black focus:ring-1 focus:ring-black/20 transition-all"
              />
            </div>
<button className="bg-[#111111] text-white px-8 py-3 rounded-full text-sm font-medium w-fit mt-2 border-2 border-black hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
  Track
</button>
</div>
            

          {/* Middle Divider: Dotted Line + "Or" */}
          <div className="hidden md:flex flex-col items-center justify-center h-full absolute left-1/2 -translate-x-1/2">
            <div className="w-[1px] h-12 border-l border-dotted border-gray-400"></div>
            <span className="my-4 text-gray-500 font-normal text-sm">Or</span>
            <div className="w-[1px] h-12 border-l border-dotted border-gray-400"></div>
          </div>

          {/* Right Side: Tracking Number */}
          <div className="flex flex-col w-full md:w-[40%] gap-6 mt-12 md:mt-0">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-normal text-black">Tracking Number</label>
              <input 
                type="text" 
                placeholder="Tracking Number"
                className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-black focus:ring-1 focus:ring-black/20 transition-all"
              />
            </div>
{/* Track Button Fix */}
<button className="bg-[#111111] text-white px-8 py-3 rounded-full text-sm font-medium w-fit mt-2 border-2 border-black hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
  Track
</button>
          
          </div>

        </div>
      </div>
      
      {/* 4. Bottom Spacer - Taake footer ki jhalak nazar aaye */}
      <div className="h-10px]" />
    </div>
  );
};

export default TrackOrderPage;