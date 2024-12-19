import React from 'react';
import heroimg2 from "../assets/heroimg2.png";

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white">
      <div className="absolute top-40 left-0 w-full h-full flex flex-col items-center justify-start px-4 py-2 md:px-8 z-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 md:mb-6">
          Empowering Communities Through Web3 Crowdfunding
        </h1>
        <p className="text-lg sm:text-xl text-center mb-4">
          Join the movement, raise funds, and create meaningful change using decentralized technology.
        </p>
        <button className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg text-xl hover:bg-yellow-600 transition-all duration-300">
          Get Started
        </button>
      </div>
      <img src={heroimg2} alt="Hero Image" className="absolute top-96 left-0 w-full h-30 object-cover z-0" />
    </div>
  );
}

export default Home;
