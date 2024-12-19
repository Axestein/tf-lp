import React from 'react';
import Aboutimg from "../assets/Aboutimg.png";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center pt-64"> 
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-12">How it Works?</h1> 

      <div className="flex items-center justify-center w-full max-w-6xl px-4">
        <div className="space-y-6 text-left sm:text-left pr-8">
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">Step 1: Create a Campaign</h2>
            <p className="text-lg text-neutral-300">Start by setting up a campaign for your cause, defining your goals, and adding important details.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">Step 2: Connect Your Wallet</h2>
            <p className="text-lg text-neutral-300">Link your wallet to securely manage funds and transactions within the campaign.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">Step 3: Share with Your Community</h2>
            <p className="text-lg text-neutral-300">Spread the word and share your campaign with your supporters to begin receiving donations.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">Step 4: Collect Funds and Distribute Transparently</h2>
            <p className="text-lg text-neutral-300">Once the funds are collected, they will be transparently distributed based on your campaign goals.</p>
          </div>
        </div>

        <div className="hidden sm:block">
          <img src={Aboutimg} alt="How it works" className="w-96 h-auto object-cover" />
        </div>
      </div>
    </div>
  );
}

export default About;
