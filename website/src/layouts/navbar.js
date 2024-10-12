import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-3xl font-bold">Fragrances</a>
        <ul className="flex space-x-12">
          <li><a href="/" className="text-white font-bold">Home</a></li>
          <li><a href="/about" className="text-white font-bold">About</a></li>
          <li><a href="/services" className="text-white font-bold">Services</a></li>
          <li><a href="/contact" className="text-white font-bold">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;