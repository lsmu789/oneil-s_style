import React from 'react';

const Header = () => {
  return (
    <header className="bg-slate-800/50 backdrop-blur-sm h-16 flex items-center px-6 justify-between border-b border-slate-700">
      <h1 className="text-lg font-semibold text-white">AI Investment Masters Library</h1>
      <nav className="flex items-center gap-6 text-sm font-medium text-slate-400">
        <a href="#" className="hover:text-white transition-colors">About</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
        <a href="#" className="hover:text-white transition-colors">Settings</a>
      </nav>
    </header>
  );
};

export default Header;
