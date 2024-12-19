import React from 'react';
import footerlogo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="text-center">
        <p className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-16">
          Ready to create a campaign? Connect your wallet and get started!
        </p>
      </div>

      <div className="w-full">
        <img src={footerlogo} alt="Footer Logo" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default Footer;
