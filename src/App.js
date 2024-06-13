import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";
import Xlogo from "./xlogo.jpg";
import TG from "./tg.png";

function App() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col justify-center items-center overflow-x-clip relative">
      <BackgroundGradient>
        <div
          className="h-[250px] w-[250px] md:h-[45vh] md:w-[45vh] bg-zinc-950 rounded-3xl"
          style={{
            backgroundImage: "url(/uni.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </BackgroundGradient>
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
      <div className="absolute bottom-12 text-sm text-gray-500 hidden md:block">
        © UNI 2024
      </div>
      <div className="absolute bottom-10 md:hidden flex flex-col items-center">
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
        <div className="text-sm text-gray-500">
          © UNI 2024
        </div>
      </div>
    </div>
  );
}

export default App;