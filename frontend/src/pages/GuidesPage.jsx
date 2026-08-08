import React from "react";

const GuidesPage = () => {
  // Small Card Component for Grids
  const GuideCard = ({ img, title }) => (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-[30px] mb-4 aspect-square">
        <img
          src={img}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt={title}
        />
      </div>
      <p className="text-[#333333] text-[24px] font-normal mb-8 tracking-tight text-black leading-[1.1]">
        {title}
      </p>
    </div>
  );

  return (
    <div className="w-full bg-white font-sans">
      {/* Top Spacer */}
      <div className="h-[220px]" />

      <div className="max-w-[1100px] mx-auto px-6">
        {/* 1. Header Section: Guides. */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-15">
          <div className="md:w-[40%]">
            <h1 className="text-[80px] font-bold leading-none tracking-tighter text-black">
              Guides.
            </h1>
          </div>
          <div className="md:w-[55%] pt-2">
            <p className="text-[#333333] mb-8 text-[18px] leading-[28px] max-w-[660px]">
              We’ve put together a collection of guides to give you insight on
              how to improve your desk setup. We’ve pretty much started this
              entire blog on the sole purpose of producing these guides to help
              you create the best possible setup for your room. Have a look!
            </p>
          </div>
        </div>

        <div className="w-full mb-15 flex justify-center">
          <div className="flex flex-col md:flex-row items-start gap-[60px] max-w-[1200px]">
            <div
              style={{ width: "752.396px", height: "526.337px" }}
              className="flex-shrink-0"
            >
              <div className="w-full h-full overflow-hidden rounded-[30px] shadow-sm group">
                <img
                  src="/pr-bg1.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Featured Guide"
                />
              </div>
            </div>
            <div
              className="flex flex-col pt-12"
              style={{ width: "350px", flexShrink: 0 }}
            >
              <h2 className="text-5xl font-medium mb-8 tracking-tight text-black leading-[1.1]">
                8 Ultimate <br /> Aura Desk <br /> Setup Tips
              </h2>
              <p className="text-[#333333] mb-10 text-[18px] leading-[28px]">
                Welcome to Aura Desk Setup’s first Feature Article. In this
                article, we’ll go through our top 8 tips to kickstart your
                journey.
              </p>
              <button className="px-10 py-3 bg-black text-white text-sm font-semibold hover:bg-white hover:text-black border-2 border-black transition-all uppercase tracking-widest cursor-pointer w-fit">
                VIEW GUIDE
              </button>
            </div>
          </div>
        </div>

        {/* 3. Wallpaper/Gift Grid (6 Images) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mb-40">
          <GuideCard img="/pr-1.jpg" title="The AWS Wallpaper Starter Kit" />
          <GuideCard img="/pr-2.jpg" title="The AWS Wallpaper Starter Kit" />
          <GuideCard img="/pr-3.jpg" title="Setup Update" />
          <GuideCard img="/pr-4.jpg" title="Prime Day Early Access" />
          <GuideCard img="/pr-5.jpg" title="Holiday Gift Guide" />
          <GuideCard img="/pr-6.jpg" title="A Guide to an Autumn Setup" />
        </div>

        {/* 4. Home Office Section - Heading */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-15 mt-40">
          <div className="md:w-[40%]">
            <h1 className="text-[80px] font-bold leading-none tracking-tighter text-black">
              Home Office.
            </h1>
          </div>
          <div className="md:w-[66%] pt-8">
            <p className="text-[#333333] text-[18px] leading-[28px] max-w-[1000px]">
              The home office is one of the most important areas to consider
              when building a desk setup... In these guides we give extra
              consideration to Ergonomics.
            </p>
          </div>
        </div>

        {/* Home Office Featured - Image Right */}
        <div className="w-full mb-15 flex justify-start">
          <div className="flex flex-col md:flex-row items-start gap-[60px] max-w-[1200px]">
            <div
              className="flex flex-col pt-12"
              style={{ width: "350px", flexShrink: 0 }}
            >
              <h2 className="text-5xl font-medium mb-8 tracking-tight text-black leading-[1.1]">
                The Ultimate <br /> Home Office <br /> Setup Guide
              </h2>
              <p className="text-[#333333] mb-10 text-[18px] leading-[28px]">
                Whatever your work from home situation, here are some easy tips
                anyone can use to make your day in your home office more
                pleasant.
              </p>
              <button className="px-10 py-3 bg-black text-white text-sm font-semibold hover:bg-white hover:text-black border-2 border-black transition-all uppercase tracking-widest cursor-pointer w-fit">
                VIEW GUIDE
              </button>
            </div>
            <div
              style={{ width: "752.396px", height: "526.337px" }}
              className="flex-shrink-0"
            >
              <div className="w-full h-full overflow-hidden rounded-[30px] group">
                <img
                  src="/pr-bg2.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Home Office"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Home Office Grid (3 Images) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          <GuideCard
            img="/pr-7.jpg"
            title="Using stacked monitors for your home office"
          />
          <GuideCard
            img="/pr-8.jpg"
            title="Using a desk shelf with your home office setup"
          />
          <GuideCard
            img="/pr-9.jpg"
            title="AWS Desk Pad Guide – Aura Wool Felt Desk Mat"
          />
        </div>

        {/* 5. Desk Accessory Section */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-15 mt-40">
          <div className="md:w-[40%]">
            <h1 className="text-[80px] font-bold leading-none tracking-tighter text-black">
              Desk Accessory.
            </h1>
          </div>
          <div className="pt-8">
            <p className="text-[#333333] text-[18px] leading-[28px] max-w-[1000px]">
              Having the correct desk accessory can sometimes make or break your
              desk setup. It’s important to understand what sort of desk
              accessory you should prioritise.
            </p>
          </div>
        </div>

        {/* Desk Accessory Featured - Image Left */}
        <div className="w-full mb-15 flex justify-center">
          <div className="flex flex-col md:flex-row items-start gap-[60px] max-w-[1200px]">
            <div
              style={{ width: "752.396px", height: "526.337px" }}
              className="flex-shrink-0"
            >
              <div className="w-full h-full overflow-hidden rounded-[30px] group">
                <img
                  src="/pr-bg3.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Accessory Guide"
                />
              </div>
            </div>
            <div
              className="flex flex-col pt-12"
              style={{ width: "350px", flexShrink: 0 }}
            >
              <h2 className="text-5xl font-medium mb-8 tracking-tight text-black leading-[1.1]">
                Ultimate Desk <br /> Accessories <br /> Guide for 2026
              </h2>
              <p className="text-[#333333] mb-10 text-[18px] leading-[28px]">
                We take a look at some of the top desk accessories to help you
                boost your productivity in your desk setup.
              </p>
              <button className="px-10 py-3 bg-black text-white text-sm font-semibold hover:bg-white hover:text-black border-2 border-black transition-all uppercase tracking-widest cursor-pointer w-fit">
                VIEW GUIDE
              </button>
            </div>
          </div>
        </div>

        {/* Accessory Grid (2 Images) */}
        <div className="flex gap-8 mb-40">
          <div className="w-[340px]">
            <GuideCard
              img="/pr-10.jpg"
              title="Best Laptop Stands for your laptop desk setup"
            />
          </div>
          <div className="w-[340px]">
            <GuideCard
              img="/pr-11.jpg"
              title="AWS Desk Pad Guide – Aura Wool Felt Desk Mat"
            />
          </div>
        </div>

        {/* 6. Desk Lighting Section */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-15 mt-40">
          <div className="md:w-[40%]">
            <h1 className="text-[80px] font-bold leading-none tracking-tighter text-black">
              Desk Lighting.
            </h1>
          </div>
          <div className="pt-8">
            <p className="text-[#333333] text-[18px] leading-[28px] max-w-[1000px]">
              We really emphasise how important lighting is to a setup. This set
              of guides help you perfect your desktop lighting.
            </p>
          </div>
        </div>

        {/* Lighting Featured - Image Left */}
        <div className="w-full mb-15 flex justify-center">
          <div className="flex flex-col md:flex-row items-start gap-[60px] max-w-[1200px]">
            <div
              style={{ width: "752.396px", height: "526.337px" }}
              className="flex-shrink-0"
            >
              <div className="w-full h-full overflow-hidden rounded-[30px] group">
                <img
                  src="/pr-bg4.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Lighting Guide"
                />
              </div>
            </div>
            <div
              className="flex flex-col pt-12"
              style={{ width: "350px", flexShrink: 0 }}
            >
              <h2 className="text-5xl font-medium mb-8 tracking-tight text-black leading-[1.1]">
                The Perfect <br /> Desktop Lighting <br /> For Your Setup
              </h2>
              <p className="text-[#333333] mb-10 text-[18px] leading-[28px]">
                We’re looking at how to achieve the perfect desktop lighting for
                your day time workspace or your night time battlestation.
              </p>
              <button className="px-10 py-3 bg-black text-white text-sm font-semibold hover:bg-white hover:text-black border-2 border-black transition-all uppercase tracking-widest cursor-pointer w-fit">
                VIEW GUIDE
              </button>
            </div>
          </div>
        </div>

        {/* Lighting Grid (3 Images) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          <GuideCard
            img="/pr-12.jpg"
            title="A definitive guide on Home Office Lighting"
          />
          <GuideCard
            img="/pr-13.jpg"
            title="Top 5 Best Value Computer Monitor Lamps in 2026"
          />
          <GuideCard
            img="/pr-14.jpg"
            title="Getting the correct lighting for your desk setup"
          />
        </div>

        {/* 7. Standing Desk Section */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-15 mt-40">
          <div className="md:w-[40%]">
            <h1 className="text-[80px] font-bold leading-none tracking-tighter text-black">
              Standing <br /> Desks.
            </h1>
          </div>
          <div className="pt-8">
            <p className="text-[#333333] text-[18px] leading-[28px] max-w-[1000px]">
              The Team at AWS has decided to commit significant effort into
              compiling resources to help you choose the perfect standing desk
              for you.
            </p>
          </div>
        </div>

        {/* Standing Desk Featured - Image Right */}
        <div className="w-full mb-15 flex justify-start">
          <div className="flex flex-col md:flex-row items-start gap-[60px] max-w-[1200px]">
            <div
              className="flex flex-col pt-12"
              style={{ width: "350px", flexShrink: 0 }}
            >
              <h2 className="text-5xl font-medium mb-8 tracking-tight text-black leading-[1.1]">
                4 Essential Tips <br /> for Choosing a <br /> Standing Desk
              </h2>
              <p className="text-[#333333] mb-10 text-[18px] leading-[28px]">
                If you need help selecting a standing desk we have some tips to
                help you choose the best standing desk for you.
              </p>
              <button className="px-10 py-3 bg-black text-white text-sm font-semibold hover:bg-white hover:text-black border-2 border-black transition-all uppercase tracking-widest cursor-pointer w-fit">
                VIEW GUIDE
              </button>
            </div>
            <div
              style={{ width: "752.396px", height: "526.337px" }}
              className="flex-shrink-0"
            >
              <div className="w-full h-full overflow-hidden rounded-[30px] group">
                <img
                  src="/pr-bg5.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Standing Desk"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Standing Desk Grid (3 Images) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-15">
          <GuideCard
            img="/pr-15.jpg"
            title="Stand Up for Success: How Standing Desk Benefit Your Productivity"
          />
          <GuideCard
            img="/pr-16.jpg"
            title="6 Reasons why standing desks are essential in 2026"
          />
          <GuideCard
            img="/pr-17.jpg"
            title="Top 5 Standing Desks on Amazon in 2026"
          />
        </div>

        <div className="h-[15px]" />
      </div>
    </div>
  );
};

export default GuidesPage;
