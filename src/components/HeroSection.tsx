import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
          Clients in Your DMs — on Autopilot.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Reach helps freelancers and agencies scale outreach without the manual grind.
        </p>
        <button className="bg-gradient-to-r from-[var(--mint-300)] to-[var(--mint-400)] hover:from-[var(--mint-400)] hover:to-[var(--mint-500)] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          Join the Waitlist
        </button>
      </div>
    </div>
  );
};

export default HeroSection; 