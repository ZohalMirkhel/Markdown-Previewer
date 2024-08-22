import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Markdown Previewer</h1>
        <div>
          <a
            href="https://github.com/ZohalMirkhel/markdown-previewer/tree/markdown-previewer"
            className="text-white font-semibold hover:text-indigo-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
