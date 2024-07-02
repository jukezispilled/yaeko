import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ReactAudioPlayer from 'react-audio-player';
import Ripple from './ripple';
import Xlogo from './xlogo.jpg';
import TG from './tg.png';
import { BackgroundGradient } from './BackgroundGradient'
import happi from './happi.png';

function App() {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const audioRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText('hKAH847w4Ex8EUeiRss5etmCcBPwPrrkDPm3k7Spump');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Hide the message after 2 seconds
  };

  const handlePlayFromModal = () => {
    setShowModal(false);
    audioRef.current.audioEl.current.play();
  };

  return (
    <div className="h-screen w-screen bg-white flex flex-col justify-center items-center overflow-hidden relative">
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl md:text-5xl pb-4 font-custom text-balance">must be happy to enter</h2>
            <button
              className="block text-xl md:text-3xl text-white font-custom mx-auto bg-yellow-300 py-2 px-6 rounded-full transition-colors duration-300"
              onClick={handlePlayFromModal}
            >
              <div className='mb-2'>yes</div>
            </button>
          </div>
        </div>
      )}
      <Ripple />
      <div className='hidden md:block absolute bottom-5 left-5 text-slate-400 z-10'>
        $happi is officially the happiest dog of solana
      </div>
      <BackgroundGradient>
        <div
          className="h-[250px] w-[250px] md:h-[55vh] md:w-[55vh] bg-zinc-950 rounded-3xl"
          style={{
            backgroundImage: `url(${happi})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </BackgroundGradient>
      <div className='flex justify-center mt-5 bg-slate-100 rounded-full z-10 items-center gap-4 px-5 py-1.5 w-min border-2 border-slate-400'>
        <button
          onClick={handleCopy}
          className="bg-yellow-500 text-white py-2 px-4 rounded-full md:hover:bg-yellow-600 border-2 border-white transition-colors duration-300 z-10"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <span className='whitespace-nowrap'>coming soon...</span>
      </div>
      <ReactAudioPlayer
        ref={audioRef}
        src="song.mp3"
        autoPlay={false}
      />
      {/* Large screen social media links */}
      <div className="absolute bottom-10 right-10 flex flex-row z-30 hidden md:flex">
        <a
          href="https://x.com/"
          className="p-2 hover:scale-110 transition ease-in-out duration-200"
        >
          <img src={Xlogo} alt="Xlogo" className="w-10 h-10 rounded-md" />
        </a>
        <a
          href="https://t.me/"
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
  );
}

export default App;