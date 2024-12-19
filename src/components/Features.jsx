import React from 'react';
import decentralizationimg from "../assets/decentrailizationimg.png";
import transparencyimg from "../assets/transparencyimg.png";
import smartcontractsimg from "../assets/smartcontractsimg.png";
import securityimg from "../assets/securityimg.png";

const BentoCard = ({ title, description, image }) => (
  <div 
    className="bg-zinc-900 text-white rounded-lg border-2 border-yellow-400 p-6 flex flex-col items-start transition-all duration-300 hover:shadow-2xl h-[380px]" // Increased height and reduced border width
  >
    <div className="w-full h-52 mb-4 overflow-hidden"> 
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{title}</h3>
    <p className="text-lg text-neutral-300">{description}</p>
  </div>
);

const Features = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 md:px-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-yellow-400 mb-16">
        Features We Provide
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <BentoCard
          title="Decentralization"
          description="No intermediaries or middlemen, funds are directly handled by smart contracts."
          image={decentralizationimg}
        />
        <BentoCard
          title="Transparency"
          description="Blockchain allows for transparent tracking of funds."
          image={transparencyimg}
        />
        <BentoCard
          title="Security"
          description="User data and funds are secured via the blockchain."
          image={securityimg}
        />
        <BentoCard
          title="Smart Contracts"
          description="Automate transactions and ensure conditions are met."
          image={smartcontractsimg}
        />
      </div>
    </div>
  );
};

export default Features;
