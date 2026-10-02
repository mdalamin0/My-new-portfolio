import React from "react";

const BackgroundDecoration = () => {
  return (
    <div className="fixed inset-0 -z-50 h-full w-full bg-[#0B0F19] overflow-hidden">
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#00D2FF] opacity-[0.04] blur-[100px] pointer-events-none" />

      <div className="absolute top-[40%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#00D2FF] opacity-[0.05] blur-[120px] pointer-events-none" />

      <div className="absolute bottom-[5%] left-[5%] w-[500px] h-[500px] rounded-full bg-[#00D2FF] opacity-[0.05] blur-[120px] pointer-events-none" />

      <div className="absolute top-[15%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#00D2FF] shadow-[0_0_6px_#00D2FF] opacity-70 animate-float-slow" />
      <div className="absolute top-[28%] right-[30%] w-1.5 h-1.5 rounded-full bg-[#00D2FF] shadow-[0_0_6px_#00D2FF] opacity-80 animate-float-medium" />
      <div className="absolute top-[48%] right-[25%] w-1.5 h-1.5 rounded-full bg-[#00D2FF] shadow-[0_0_6px_#00D2FF] opacity-50 animate-float-medium" />
      <div className="absolute top-[62%] left-[35%] w-1.5 h-1.5 rounded-full bg-[#00D2FF] shadow-[0_0_6px_#00D2FF] opacity-60 animate-float-slow" />
      <div className="absolute top-[75%] left-[12%] w-1.5 h-1.5 rounded-full bg-[#00D2FF] shadow-[0_0_6px_#00D2FF] opacity-60 animate-float-reverse" />
      <div className="absolute top-[88%] right-[15%] w-1.5 h-1.5 rounded-full bg-[#00D2FF] shadow-[0_0_6px_#00D2FF] opacity-70 animate-float-reverse" />
    </div>
  );
};

export default BackgroundDecoration;
