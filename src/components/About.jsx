import React from 'react';
import Aboutimg from "../assets/Aboutimg.png";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center pt-52"> {/* Adjusted padding top */}
      {/* How it works header */}
      <h1 className="text-4xl font-bold mb-12">How it works?</h1> {/* Increased bottom margin */}

      {/* Flex container for steps and image */}
      <div className="flex items-center justify-center w-full max-w-6xl px-4">
        {/* Left side: Steps and descriptions */}
        <div className="space-y-6 text-left sm:text-left pr-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Step 1: Create a Campaign</h2>
            <p className="text-lg">Start by setting up a campaign for your cause, defining your goals, and adding important details.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Step 2: Connect Your Wallet</h2>
            <p className="text-lg">Link your wallet to securely manage funds and transactions within the campaign.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Step 3: Share with Your Community</h2>
            <p className="text-lg">Spread the word and share your campaign with your supporters to begin receiving donations.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Step 4: Collect Funds and Distribute Transparently</h2>
            <p className="text-lg">Once the funds are collected, they will be transparently distributed based on your campaign goals.</p>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="hidden sm:block">
          <img src={Aboutimg} alt="How it works" className="w-96 h-auto object-cover" />
        </div>
      </div>
    </div>
  );
}

export default About;
