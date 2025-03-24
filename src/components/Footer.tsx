import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 md:px-8 bg-gradient-to-t from-[var(--mint-100)]/50 to-transparent">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="font-semibold text-xl text-gray-800">Reach</p>
          <p className="text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="/terms" className="text-gray-500 hover:text-[var(--mint-500)] transition-colors">Terms</a>
          <a href="/privacy" className="text-gray-500 hover:text-[var(--mint-500)] transition-colors">Privacy</a>
          <a href="/contact" className="text-gray-500 hover:text-[var(--mint-500)] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 