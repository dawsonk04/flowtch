import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Reach helped me double my client base in just 3 months without spending hours on manual outreach.",
      author: "Sarah Johnson",
      role: "Freelance Designer"
    },
    {
      quote: "The automated follow-ups alone saved our agency 15 hours per week. It's been a game-changer for our business.",
      author: "Michael Chen",
      role: "Agency Owner"
    }
  ];

  return (
    <div className="py-16 px-4 md:px-8 bg-gradient-to-b from-transparent to-[var(--mint-50)]/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-md relative border border-[var(--mint-100)]">
              <svg className="absolute text-[var(--mint-100)] w-16 h-16 -top-6 -left-6 opacity-50" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8v6a6 6 0 01-6 6H8a6 6 0 016 6v-6a6 6 0 00-6-6H4a6 6 0 01-6-6v-6a6 6 0 016-6h6a6 6 0 016 6zm16 0v6a6 6 0 01-6 6h4a6 6 0 016 6v-6a6 6 0 00-6-6h-4a6 6 0 01-6-6v-6a6 6 0 016-6h6a6 6 0 016 6z" />
              </svg>
              <div className="relative">
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[var(--mint-300)] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection; 