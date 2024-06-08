import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";
import Xlogo from "./xlogo.jpg";
import TG from "./tg.png";
import AudioPlayer from "react-audio-player";
import song from "./song.mp3"; // Assuming the song.mp3 is in the public folder

function App() {
  return (
    <div className="h-screen w-screen bg-zinc-950 flex flex-col justify-center items-center overflow-x-clip relative">
      <BackgroundGradient>
        <div
          className="h-[250px] w-[250px] md:h-[45vh] md:w-[45vh] bg-zinc-950 rounded-3xl"
          style={{
            backgroundImage: "url(/W.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </BackgroundGradient>
      <div className="absolute top-0 left-0 mt-5 ml-5 hidden md:block">
        <AudioPlayer src={song} autoPlay controls />
      </div>
      <div className="absolute bottom-10 right-10 flex flex-row z-30 hidden md:flex">
        <a
          href="https://twitter.com/tatewsolana"
          className="p-2 hover:scale-110 transition ease-in-out duration-200"
        >
          <img src={Xlogo} alt="Xlogo" className="w-10 h-10 rounded-md" />
        </a>
        <a
          href="https://t.me/tatewsol"
          className="p-2 hover:scale-110 transition ease-in-out duration-200"
        >
          <img src={TG} alt="Tg logo" className="w-10 h-10" />
        </a>
      </div>
      <div className="absolute bottom-12 text-sm text-gray-500 hidden md:block">
        © Official Community Token of the Tate's
      </div>
      <div className="absolute bottom-10 md:hidden flex flex-col items-center">
        <div className="flex flex-row">
          <a
            href="https://twitter.com/tatewsolana"
            className="p-2 hover:scale-110 transition ease-in-out duration-200"
          >
            <img src={Xlogo} alt="Xlogo" className="w-10 h-10 rounded-md" />
          </a>
          <a
            href="https://t.me/tatewsol"
            className="p-2 hover:scale-110 transition ease-in-out duration-200"
          >
            <img src={TG} alt="Tg logo" className="w-10 h-10" />
          </a>
        </div>
        <div className="text-sm text-gray-500">
          © Official Community Token of the Tate's
        </div>
      </div>
    </div>
  );
}

export default App;