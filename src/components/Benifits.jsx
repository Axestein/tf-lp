import React from 'react';
import benifitimg from "../assets/benifitimg.png";

const Benifits = () => {
  return (
    <div className="bg-black text-white min-h-screen py-1 px-4 md:px-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-yellow-400 mb-16">
        Benefits for Campaign Creators
      </h1>

      <div className="flex flex-col-reverse sm:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="space-y-6 text-left sm:text-left pr-8">
          <ul className="list-disc pl-6">
            <li className="text-lg">
              <strong>Global Reach:</strong> Campaigns can attract backers from anywhere in the world.
            </li>
            <li className="text-lg">
              <strong>Lower Fees:</strong> Traditional crowdfunding platforms charge high fees; Web3 platforms can minimize or eliminate them.
            </li>
            <li className="text-lg">
              <strong>Full Ownership:</strong> Users maintain full ownership of their campaigns and funds.
            </li>
            <li className="text-lg">
              <strong>Smart Contract Automation:</strong> Funds are automatically transferred when goals are met.
            </li>
          </ul>
        </div>

        <div className="hidden sm:block">
          <img src={benifitimg} alt="How it works" className="w-64 h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Benifits;
