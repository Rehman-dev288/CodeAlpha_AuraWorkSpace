import React from "react";
import { motion } from "framer-motion";

const ProductivityPage = () => {
  return (
    <div className="w-full min-h-screen bg-white pb-0 font-sans">
      {/* 1. Top Spacer */}
      <div className="h-[220px]" />

      <div className="max-w-[1100px] mx-auto px-6">
        {/* 2. Header Section: Productivity */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-15">
          <div className="md:w-[40%]">
            <h1 className="text-[80px] font-bold leading-none tracking-tighter text-black">
              Productivity.
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
                maxWidth: "660px",
                textAlign: "left",
              }}
            >
              We believe in the power of small changes and the impact they can
              have on your workflow. It’s not about working more; it’s about
              working smart. From hacks that help you streamline your work, to
              tips on organizing your digital space, to strategies that keep
              distractions at bay, we cover everything that fuels your
              productivity engine.
            </p>
          </div>
        </div>

        <div className="w-full mb-40 flex justify-center">
          <div className="flex flex-col md:flex-row items-start gap-[60px] max-w-[1200px]">
            <div
              style={{ width: "752.396px", height: "526.337px" }}
              className="flex-shrink-0"
            >
              <div className="w-full h-full overflow-hidden rounded-[30px] shadow-sm">
                <img
                  src="/pdr-bg.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  alt="7 Ultimate Hacks"
                />
              </div>
            </div>

            <div
              className="flex flex-col pt-12"
              style={{ width: "350px", flexShrink: 0 }}
            >
              <h2 className="text-5xl font-medium mb-8 tracking-tight text-black leading-[1.1]">
                7 Ultimate <br /> Hacks for <br /> Desk Setup
              </h2>

              <p className="text-[#333333] mb-10 text-[18px] leading-[28px]">
                Take a look at 7 effective productivity hacks for remote work,
                aiming to boost efficiency and overcome common home-based
                distractions.
              </p>

              <div>
                <button className="px-10 py-3 bg-black text-white text-sm font-semibold hover:bg-white hover:text-black border-2 border-black transition-all uppercase tracking-widest cursor-pointer">
                  VIEW GUIDE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start mb-15 mt-40">
          <div className="flex-shrink-0 mr-14">
            <h1 className="text-[80px] font-bold leading-none tracking-tighter text-black">
              Tools.
            </h1>
          </div>

          <div className="pt-2">
            <p
              className="text-[#333333] mb-8 text-[18px] leading-[28px]"
              style={{
                maxWidth: "1000px",
                textAlign: "left",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              A variety of physical or digital tools are being developed or can
              be used to improve productivity. We aim to provide a comprehensive
              guide on optimally using these tools in your daily routine,
              demonstrating their unique features and explaining how they can
              contribute to a more efficient, organized, and productive work
              environment.
            </p>
          </div>
        </div>

        <section className="mb-15">
          <div className="grid md:grid-cols-[540px_1fr] gap-16 items-center">
            <div
              className="overflow-hidden rounded-[30px]"
              style={{ width: "540px", height: "540px" }}
            >
              <img
                src="/focus-mds.webp"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                alt="Focus by AWS"
              />
            </div>
            <div>
              <h2 className="text-5xl font-medium mb-6 tracking-tight text-black">
                Focus by AWS
              </h2>
              <p className="text-[#333333] mb-8 text-[18px] leading-[28px] max-w-[600px]">
                “Focus by AWS” is a Chrome extension designed to enhance your
                productivity. It combines a to-do list with a Pomodoro timer,
                helping you manage tasks efficiently while maintaining focus.
                Beautiful wallpapers add an aesthetic touch, creating a
                motivating and visually pleasing workspace in every new tab.
              </p>
              <button className="px-10 py-3 bg-black text-white text-sm font-semibold hover:bg-white hover:text-black border-2 border-black transition-all uppercase tracking-widest">
                READ MORE
              </button>
            </div>
          </div>
        </section>

        <section className="mb-40 flex justify-start">
          <div className="flex flex-col md:flex-row items-start gap-[60px] max-w-[1200px]">
            <div
              className="flex flex-col pt-12"
              style={{ width: "350px", flexShrink: 0 }}
            >
              <h2 className="text-5xl font-bold mb-6 tracking-tight text-black leading-tight">
                To-do List <br /> Card System
              </h2>
              <p className="text-[#333333] mb-8 text-[18px] leading-[28px]">
                The To-Do List System is a practical and stylish tool for
                managing tasks. With its sleek black PVC cards and holder, it
                helps you organize and display seven tasks at a time, while
                seamlessly integrating with the Pomodoro Technique for focused
                productivity.
              </p>
              <div className="text-left">
                <button className="px-10 py-3 bg-black text-white text-sm font-semibold hover:bg-white hover:text-black border-2 border-black transition-all uppercase tracking-widest cursor-pointer">
                  VIEW DEVELOPMENT
                </button>
              </div>
            </div>

            <div
              style={{ width: "752.396px", height: "526.337px" }}
              className="flex-shrink-0"
            >
              <div className="w-full h-full overflow-hidden rounded-[30px] shadow-sm group">
                <img
                  src="/todo-bg.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="To-Do List System"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col md:flex-row items-start gap-12 mb-15 mt-40">
          <div className="md:w-[40%]">
            <h1 className="text-[80px] font-bold leading-none tracking-tighter text-black">
              Methods.
            </h1>
          </div>
          <div className="pt-2">
            <p
              className="text-[#333333] mb-8 text-[18px] leading-[28px]"
              style={{
                maxWidth: "1000px",
                textAlign: "left",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              An array of productivity methods are being adopted and tailored to
              boost efficiency. Our goal is to provide an exhaustive guide on
              implementing these methods into your daily routine, showcasing
              their distinct characteristics and elucidating how they can
              contribute to a more streamlined, orderly, and productive work
              setting.
            </p>
          </div>
        </div>
        {/* 8. Methods 3-Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {[
            { img: "/time-1.jpg", title: "Time Blocking" },
            { img: "/time-2.jpg", title: "Task & Time" },
            { img: "/time-3.jpg", title: "Pomodoro Method" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div
                className="overflow-hidden rounded-[30px] mb-6 mx-auto"
                style={{ width: "346px", height: "300px" }}
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                  alt={item.title}
                />
              </div>
              <h3 className="text-2xl font-medium text-black mb-4">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* 9. Final Learn More Button */}
        <div className="flex justify-center mb-15">
          <button className="px-10 py-3 bg-black text-white text-sm font-semibold hover:bg-white hover:text-black border-2 border-black transition-all uppercase tracking-widest cursor-pointer">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductivityPage;
