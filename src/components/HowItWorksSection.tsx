import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <div className="py-10 px-4 md:px-8 bg-gradient-to-b from-white/80 to-[var(--mint-50)]/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">How It Works</h2>
        {/* Steps will go here */}
        <div className="space-y-8">
          {/* This is a placeholder for future steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="bg-white backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-200">
                <div className="w-12 h-12 flex items-center justify-center bg-[var(--mint-100)] text-[var(--mint-500)] rounded-full mb-4 font-bold text-xl">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Step {step}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection; 