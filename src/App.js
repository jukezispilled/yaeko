import React, { useState, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Ripple from './ripple';
import Xlogo from './xlogo.jpg';
import TG from './tg.png';
import { BackgroundGradient } from './BackgroundGradient';
import happi from './yk.png';
import EmojiRain from './EmojiRain';

function App() {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const audioRef = useRef(null);

  const emojis = ['🍓', '🫐', '🍒', '🥭'];

  const handleCopy = () => {
    navigator.clipboard.writeText('soon...');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handlePlayFromModal = () => {
    setShowModal(false);
    audioRef.current.audioEl.current.play();
  };

  return (
    <div className="h-screen w-screen bg-white flex flex-col justify-center items-center overflow-hidden relative">
      <EmojiRain emojis={emojis} />
      
      <Ripple />
      
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 border border-red-400 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl md:text-5xl pb-5 font-custom text-balance text-red-500">good vibes only</h2>
            <button
              className="block text-xl md:text-3xl text-white font-custom mx-auto bg-indigo-400 py-2 px-6 rounded-full transition-colors duration-300"
              onClick={handlePlayFromModal}
            >
              <div className="mb-2">OK</div>
            </button>
          </div>
        </div>
      )}

      <div className="hidden md:block absolute bottom-5 left-5 text-slate-400 z-10">
        $yaeko is officially the happiest dog of solana
      </div>

      <BackgroundGradient>
        <div
          className="h-[250px] w-[250px] md:h-[45vh] md:w-[55vh] bg-zinc-950 rounded-3xl relative z-10"
          style={{
            backgroundImage: `url(${happi})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </BackgroundGradient>

      <div className="flex justify-center mt-5 bg-slate-100 rounded-full z-10 items-center gap-4 px-5 py-1.5 w-min border-2 border-slate-400">
        <button
          onClick={handleCopy}
          className="bg-indigo-400 text-white py-2 px-4 rounded-full md:hover:bg-indigo-500 border-2 border-white transition-colors duration-300 z-10 text-xs md:text-base"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <span className="whitespace-nowrap">soon...</span>
      </div>

      <ReactAudioPlayer ref={audioRef} src="song.mp3" autoPlay={false} />

      {/* Large screen social media links */}
      <div className="absolute bottom-7 right-7 flex flex-row z-30 hidden md:flex">
        <a href="https://t.me/yaekoportal" className="p-2 hover:scale-110 transition ease-in-out duration-200">
          <img src={TG} alt="Tg logo" className="size-12" />
        </a>
      </div>

      {/* Small screen social media links */}
      <div className="absolute top-3 left-3 flex flex-col items-center md:hidden">
        <div className="flex flex-row">
          <a href="https://t.me/yaekoportal" className="p-2 hover:scale-110 transition ease-in-out duration-200">
            <img src={TG} alt="Tg logo" className="size-10" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;