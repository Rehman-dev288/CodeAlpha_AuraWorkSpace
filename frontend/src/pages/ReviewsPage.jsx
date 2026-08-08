import React from "react";

const ReviewsPage = () => {
  // Helper for Box Component
  const ReviewBox = ({ title, subtitle }) => (
    <div
      className="border-[1px] border-black flex flex-col justify-center px-6 transition-all hover:bg-black hover:text-white group bg-white cursor-pointer"
      style={{
        width: "320px",
        height: "130px",
        borderRadius: "0px",
      }}
    >
      {/* Title: Font-Medium */}
      <h3
        className="text-black group-hover:text-white font-medium uppercase tracking-tight"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: "24px",
          lineHeight: "1.2",
          marginBottom: "0px",
        }}
      >
        {title}
      </h3>

      {/* Subtitle: Font-Normal */}
      <p
        className="text-[#333333] group-hover:text-white/80 font-normal"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: "18px",
          lineHeight: "1.2",
        }}
      >
        {subtitle}
      </p>
    </div>
  );

  return (
    <div className="w-full bg-white font-sans">
      {/* Top Spacer */}
      <div className="h-[220px]" />

      <div className="max-w-[1100px] mx-auto px-6">
        {/* 1. Main Heading: Reviews. */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-15">
          <div className="md:w-[40%]">
            <h1 className="text-[80px] font-bold leading-none tracking-tighter text-black">
              Reviews.
            </h1>
          </div>
          <div className="md:w-[55%] pt-2">
            <p className="text-[#333333] mb-8 text-[18px] leading-[28px] max-w-[660px] font-normal">
              We’ve put together a collection of reviews to guide you on what we
              think some of the top items are for each category. Over the next
              year or so we’re looking to build out reviews for Keyboards,
              Mouse, and Desk Lighting.
            </p>
          </div>
        </div>

        {/* 2. Featured Section (Smart Desk Pro) */}
        <div className="w-full mb-40 flex justify-center">
          <div className="flex flex-col md:flex-row items-start gap-[60px] max-w-[1200px]">
            {/* Image Left */}
            <div
              style={{ width: "752.396px", height: "526.337px" }}
              className="flex-shrink-0"
            >
              <div className="w-full h-full overflow-hidden rounded-[30px] shadow-sm group">
                <img
                  src="/pro-bg.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Smart Desk Pro"
                />
              </div>
            </div>

            {/* Text Right */}
            <div
              className="flex flex-col pt-8"
              style={{ width: "350px", flexShrink: 0 }}
            >
              <div className="bg-black text-white text-[20px] font-bold px-4 py-1 rounded-[4px] w-fit mb-4 tracking-widest uppercase">
                Featured
              </div>
              <h2 className="text-5xl font-medium mb-1 tracking-tight text-black leading-tight">
                Smart Desk <br /> Pro
              </h2>
              <p className="text-gray-500 text-sm mb-6 font-normal">
                By Autonomous AI
              </p>

              <p className="text-[#333333] mb-10 text-[18px] leading-[28px]">
                The Autonomous AI SmartDesk Pro is an all-round desk. It comes
                packed with features like cable management ports, dual motorised
                legs and generous spacing packed all in a compact package.
              </p>
              <div className="text-left">
                <button className="px-10 py-3 bg-black text-white text-sm font-semibold hover:bg-white hover:text-black border-2 border-black transition-all uppercase tracking-widest cursor-pointer w-fit">
                  SEE REVIEW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Keyboards Section */}
        <div className="flex items-start mb-15 mt-40">
          <div className="flex-shrink-0 mr-14">
            <h1 className="text-[80px] font-bold leading-none tracking-tighter text-black">
              Keyboards.
            </h1>
          </div>
          <div className="pt-2">
            <p className="text-[#333333] text-[18px] leading-[24px] max-w-[1000px] font-normal">
              Keyboards are incredibly important in your desk setup. In terms of
              aesthetics it sometimes adds an incredible amount of flare to it.
              In terms of practicality it’s also important to consider the
              various form factors available. Have a look below.
            </p>
          </div>
        </div>

        {/* Keyboard Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4 mb-40">
          <ReviewBox title="IQUNIX" subtitle="MG65 PRO" />
          <ReviewBox title="MELGEEK" subtitle="Mojo68" />
          <ReviewBox title="Epomaker" subtitle="CIDOO ABM084" />
          <ReviewBox title="Yunzii Keynovo" subtitle="IF98" />
          <ReviewBox title="Epomaker" subtitle="TH80" />
          <ReviewBox title="NuPhy Studio" subtitle="Air60" />
        </div>

        {/* 4. Mouse Section */}
        <div className="flex items-start mb-15 mt-20">
          <div className="flex-shrink-0 mr-14">
            <h1 className="text-[80px] font-bold leading-none tracking-tighter text-black">
              Mouse.
            </h1>
          </div>
          <div className="pt-2">
            <p className="text-[#333333] text-[18px] leading-[24px] max-w-[1000px] font-normal">
              Choosing a mouse is often a very hard task because its dependant
              on what you’re using it for. A lot of ergonomic mouses may look
              good and feel good but don’t perform well during gaming.
            </p>
          </div>
        </div>

        {/* Mouse Grid (2 boxes) */}
        <div className="flex flex-wrap gap-5 mb-40">
          <ReviewBox title="Logitech" subtitle="MX Master 3" />
          <ReviewBox title="Logitech" subtitle="G305 Lightspeed" />
        </div>

        {/* 5. Desk Lighting Section */}
        <div className="flex items-start mb-15 mt-20">
          <div className="flex-shrink-0 mr-14">
            <h1 className="text-[80px] font-bold leading-none tracking-tighter text-black">
              Desk Lighting.
            </h1>
          </div>
          <div className="pt-2">
            <p className="text-[#333333] text-[18px] leading-[24px] max-w-[1000px] font-normal">
              Desk Lighting are also vital for ensuring ergonomics and also
              productivity. We go through a variety of different options and
              which ones are cost-effective but also the most practical.
            </p>
          </div>
        </div>

        {/* Desk Lighting Grid (3 then 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-5 mb-15">
          <ReviewBox title="Yeelight" subtitle="Light Bar Pro" />
          <ReviewBox title="BenQ" subtitle="Screenbar Halo" />
          <ReviewBox title="Blitzwolf" subtitle="Curved Monitor Lamp" />
          <ReviewBox title="BenQ" subtitle="ScreenBar (Plus)" />
          <ReviewBox title="Xiaomi" subtitle="Monitor Light Bar" />
        </div>

        {/* Bottom Spacer before footer */}
        <div className="h-[15px]" />
      </div>
    </div>
  );
};

export default ReviewsPage;
