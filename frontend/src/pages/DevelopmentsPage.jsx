import React from "react";

const DevelopmentsPage = () => {
  // 1. Horizontal Section Tag (Black Bar with centered white text)
  const SectionTag = ({ label }) => (
    <div className="w-full bg-black flex justify-center items-center py-6 rounded-[20px] mb-8 mt-10">
      <h2 className="text-4xl font-bold tracking-[0.2em] text-white uppercase">
        {label}
      </h2>
    </div>
  );

  const VerticalBox = ({ status }) => (
    <div className="border-[1.5px] border-black flex flex-col justify-center items-center py-10 px-4 w-[180px] min-h-[400px] shrink-0">
      <p className="text-black font-bold uppercase tracking-widest text-sm text-center mb-8">
        {status}
      </p>
      <button className="bg-black text-white border-2 border-black px-4 py-2 text-[10px] font-bold hover:bg-white hover:text-black transition-all uppercase w-full cursor-pointer">
        View Project
      </button>
    </div>
  );

  const ImageGrid = ({ images }) => (
    <div className="flex flex-wrap gap-4 mt-8">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="overflow-hidden rounded-[20px] group"
          style={{ width: "180px", height: "180px" }}
        >
          <img
            src={img}
            alt="Development"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-white font-sans pb-15">
      {/* 1. Top Spacer */}
      <div className="h-[220px]" />

      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-32 mb-15">
          <div className="md:w-[40%]">
            <h1 className="text-[80px] font-bold leading-none tracking-tighter text-black">
              Developments.
            </h1>
          </div>
          <div className="md:w-[55%] pt-2">
            <p className="text-[#333333] mb-8 text-[18px] leading-[28px] max-w-[660px]">
              We’re committed to crafting high quality products to improve your
              desk setup. Whilst we place a strong emphasis on aesthetics, we
              favor practicality above all else. See our latest product
              developments below.
            </p>
          </div>
        </div>
        <div className="h-10" /> {/* md:40 space */}
        <SectionTag label="In Development" />
        {/* Flow Timer */}
        <div className="flex flex-col md:flex-row gap-12 mb-20 items-start">
          <VerticalBox status="In Development" />
          <div className="flex-grow pt-2">
            <h2 className="text-5xl font-medium text-black mb-6 tracking-tight">
              The Flow Timer
            </h2>
            <p className="text-[#333333] text-[16px] leading-[26px] max-w-[800px]">
              The Flow Timer by Aura Desk Setups is a sleek, modern productivity
              tool designed around the Pomodoro technique. With customizable
              intervals, dual-timer presets (25/15 and 45/5 minutes), and
              premium materials, it helps users stay focused and manage time
              effectively.
            </p>
            <ImageGrid
              images={["/dev1.jpg", "/dev2.jpg", "/dev3.jpg", "/dev4.jpg"]}
              columns={4}
            />
          </div>
        </div>
        {/* TDL System */}
        <div className="flex flex-col md:flex-row gap-12 mb-40 items-start">
          <VerticalBox status="In Development" />
          <div className="flex-grow pt-2">
            <h2 className="text-5xl font-medium text-black mb-6 tracking-tight">
              To-do list Card System
            </h2>
            <p className="text-[#333333] text-[16px] leading-[26px] max-w-[800px]">
              Introducing “TDL”, a sleek, tactile to-do list system by Aura Desk
              Setups, designed to streamline your day, enhance focus, and boost
              productivity. Complemented by the Pomodoro technique, it’s your
              stylish partner for accomplishing tasks efficiently.
            </p>
            <ImageGrid
              images={["/dev5.jpg", "/dev6.jpg", "/dev7.jpg"]}
              columns={3}
            />
          </div>
        </div>
        {/* --- NEW RELEASE SECTION --- */}
        <SectionTag label="New Release" />
        <div className="flex flex-col md:flex-row gap-12 mb-40 items-start">
          <VerticalBox status="New Release" />
          <div className="flex-grow pt-2">
            <h2 className="text-5xl font-medium text-black mb-6 tracking-tight">
              Keycaps by AWS
            </h2>
            <p className="text-[#333333] text-[16px] leading-[26px] max-w-[800px]">
              Welcome to the world of ‘Keycaps by AWS’ – where style meets
              functionality on your keyboard! These keycaps are more than just
              accessories; they are a statement of your personal style and a
              testament to our commitment to quality.
            </p>
            <ImageGrid
              images={["/dev8.jpg", "/dev9.jpg", "/dev10.jpg", "/dev11.jpg"]}
              columns={4}
            />
          </div>
        </div>
        {/* --- COMPLETED SECTION --- */}
        <SectionTag label="Completed" />
        {/* Charging Tray */}
        <div className="flex flex-col md:flex-row gap-12 mb-20 items-start">
          <VerticalBox status="Completed" />
          <div className="flex-grow pt-2">
            <h2 className="text-5xl font-medium text-black mb-6 tracking-tight">
              Charging Tray by AWS
            </h2>
            <p className="text-[#333333] text-[16px] leading-[26px] max-w-[800px]">
              We try to tackle the issue of wireless charging and how we can
              make it elegant and usable piece for your desk setup. The main
              point was the produce something that was compact so that it
              wouldn’t draw too much attention to it.
            </p>
            <ImageGrid images={["/dev12.jpg", "/dev13.jpg"]} columns={2} />
          </div>
        </div>
        {/* Desk Pad */}
        <div className="flex flex-col md:flex-row gap-12 mb-20 items-start">
          <VerticalBox status="Completed" />
          <div className="flex-grow pt-2">
            <h2 className="text-5xl font-medium text-black mb-6 tracking-tight">
              Desk Pad by AWS
            </h2>
            <p className="text-[#333333] text-[16px] leading-[26px] max-w-[800px]">
              For our first product, we wanted something that would really make
              an impact on people’s desk setups. We wanted a product that
              everyone would need.
            </p>
            <ImageGrid
              images={["/dev14.jpg", "/dev15.jpg", "/dev16.jpg", "/dev17.jpg"]}
              columns={4}
            />
          </div>
        </div>
        {/* Cable Management */}
        <div className="flex flex-col md:flex-row gap-12 mb-20 items-start">
          <VerticalBox status="Completed" />
          <div className="flex-grow pt-2">
            <h2 className="text-5xl font-medium text-black mb-6 tracking-tight">
              Cable Management Pack v1.0
            </h2>
            <p className="text-[#333333] text-[16px] leading-[26px] max-w-[800px]">
              We developed a put together a cable management pack that included
              96 pieces of different cable management tools to help people
              manage their cables cleaner.
            </p>
            <ImageGrid
              images={["/dev18.jpg", "/dev19.jpg", "/dev20.jpg", "/dev21.jpg"]}
              columns={4}
            />
          </div>
        </div>
        {/* Coasters */}
        <div className="flex flex-col md:flex-row gap-12 mb-20 items-start">
          <VerticalBox status="Completed" />
          <div className="flex-grow pt-2">
            <h2 className="text-5xl font-medium text-black mb-6 tracking-tight">
              Coasters by AWS
            </h2>
            <p className="text-[#333333] text-[16px] leading-[26px] max-w-[800px]">
              Pushing forward with development, we need some coasters to provide
              protection to the desk. We thought that people would want a
              coaster made from our top-rated felt finished by a 2mm thick cork
              base. The total thickness of our coaster is approximately 5mm to
              give that extra protection and durability for placing drinks and
              other heated objects on the table.
            </p>
            <ImageGrid
              images={["/dev22.jpg", "/dev23.jpg", "/dev24.jpg", "/dev25.jpg"]}
              columns={4}
            />
          </div>
        </div>
        <div className="h-[15px]" />
      </div>
    </div>
  );
};

export default DevelopmentsPage;
