import React from 'react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Automated Outreach',
      description: 'Set up personalized outreach campaigns that run on autopilot.'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Track performance and optimize your campaigns with powerful insights.'
    },
    {
      icon: '🤝',
      title: 'Smart Follow-ups',
      description: 'Never miss an opportunity with intelligent, timely follow-ups.'
    }
  ];

  return (
    <div className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-md border border-[var(--mint-100)] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="mt-6">
                <a href="#" className="text-[var(--mint-500)] hover:text-[var(--mint-600)] font-medium flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 