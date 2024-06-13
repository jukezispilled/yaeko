import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BackgroundGradient } from "./BackgroundGradient";
import Xlogo from "./xlogo.jpg";
import TG from "./tg.png";
import meme1 from "./meme1.webp";
import meme2 from "./meme2.webp";
import meme3 from "./meme3.webp";
import meme4 from "./meme4.webp";
import meme5 from "./meme5.webp";
import meme6 from "./meme6.webp";

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hKAH847w4Ex8EUeiRss5etmCcBPwPrrkDPm3k7Spump");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Hide the message after 2 seconds
  };

  const memes = [meme1, meme2, meme3, meme4, meme5, meme6];

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.25, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <div>
      <div className="h-screen w-screen bg-white flex flex-col justify-center items-center overflow-x-clip relative">
        <BackgroundGradient>
          <div
            className="h-[250px] w-[250px] md:h-[55vh] md:w-[55vh] bg-zinc-950 rounded-3xl"
            style={{
              backgroundImage: "url(/uni.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </BackgroundGradient>
        {/* Large screen social media links */}
        <div className="absolute bottom-10 right-10 flex flex-row z-30 hidden md:flex">
          <a
            href="https://x.com/UniOnSolana_"
            className="p-2 hover:scale-110 transition ease-in-out duration-200"
          >
            <img src={Xlogo} alt="Xlogo" className="w-10 h-10 rounded-md" />
          </a>
          <a
            href="https://t.me/+4wYgSOXjmFxiNDUx/"
            className="p-2 hover:scale-110 transition ease-in-out duration-200"
          >
            <img src={TG} alt="Tg logo" className="w-10 h-10" />
          </a>
        </div>
        {/* Small screen social media links */}
        <div className="absolute top-5 left-5 flex flex-col items-center md:hidden">
          <div className="flex flex-row">
            <a
              href="https://x.com/UniOnSolana_"
              className="p-2 hover:scale-110 transition ease-in-out duration-200"
            >
              <img src={Xlogo} alt="Xlogo" className="w-10 h-10 rounded-md" />
            </a>
            <a
              href="https://t.me/+4wYgSOXjmFxiNDUx/"
              className="p-2 hover:scale-110 transition ease-in-out duration-200"
            >
              <img src={TG} alt="Tg logo" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
      <div className='w-screen bg-[#F6D10A]'>
        <div className='h-min w-screen flex justify-center pb-[10%]'>
          <div className='grid w-full'>
            <div className='pt-[10%] font-custom text-5xl md:text-6xl lg:text-8xl text-center'>
              Memes
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:px-12'>
              {memes.map((meme, index) => (
                <div key={index} className='bg-gray-300 h-[180px] flex items-center justify-center rounded-lg overflow-hidden'>
                  <img src={meme} alt={`Meme ${index + 1}`} className='object-cover w-full h-full' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className='h-min w-screen flex justify-center'>
          <div className='grid w-full'>
            <div className='pt-[10%] font-custom text-5xl md:text-6xl lg:text-8xl text-center'>
              Tokenomics
            </div>
            <div className='flex justify-center w-full'>
              <div className='bg-[#F6D10A] rounded-xl h-[300px] w-[75%] md:w-[65%] mt-[5%] mb-[5%]'>
                <div className='w-full h-full flex justify-center items-center font-custom text-4xl md:text-5xl lg:text-6xl'>
                  <div className='grid text-center'>
                    total supply
                    <div className="text-center pt-[2%] text-2xl md:text-4xl mx-6">
                      1,000,000,000 $UNI
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center w-full'>
              <div className='bg-[#F6D10A] rounded-xl h-[300px] w-[75%] md:w-[65%] mb-[10%]'>
                <div className='w-full h-full flex justify-center items-center font-custom text-4xl md:text-5xl lg:text-6xl'>
                  <div className='grid text-center'>
                    token address
                    <div className="text-center pt-[2%] text-2xl md:text-4xl break-all mx-12">
                      hKAH847w4Ex8EUeiRss5etmCcBPwPrrkDPm3k7Spump
                    </div>
                    <div className='flex justify-center'>
                      <button
                        className="text-xl mt-2 p-2 w-min bg-black text-white rounded-md transition ease-in-out duration-200"
                        onClick={handleCopy}
                      >
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='h-[300px] w-screen bg-[#F6D10A] flex items-center justify-center'>
              <a href="https://dexscreener.com/solana/7y2wswtj9c8mowyjdvzhru59ac6ouzsugbtiekxcrvvh" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="bg-black font-custom text-white text-4xl md:text-6xl py-4 px-12 rounded-lg md:hover:scale-105 transition ease-in-out duration-200"
                  initial="initial"
                  animate="animate"
                  variants={pulseAnimation}
                >
                  Buy Now
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;