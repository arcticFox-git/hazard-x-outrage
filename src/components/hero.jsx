import React from "react";
import HazardOutrageImage from "../assets/hazard_outrage.jpg";
import HazardNoOutrageImage from "../assets/hazard_no_outrage.jpg";
import OutrageNoHazard from "../assets/outrage_no_hazard.jpg";
import NoOutrageNoHazard from "../assets/no_outrage_no_hazard.jpg";

const Hero = () => (
  <div class="flex min-h-screen min-w-screen justify-center bg-slate-100">
    <div class="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
      <div class="group relative cursor-pointer items-center justify-center overflow-hidden">
        <div class="h-full w-full">
          <img
            class="h-full w-full object-cover brightness-50 md:brightness-100 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src={HazardOutrageImage}
            alt=""
          />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div class="absolute inset-0 flex md:translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class="font-dmserif text-3xl font-bold text-white">
            Hazard and Outrage
          </h1>
          <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            People are upset, and rightfully so. Time to move quickly.
          </p>
          <a href="#page1">
            <button class="rounded-md bg-slate-800 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <div class="group relative cursor-pointer items-center justify-center overflow-hidden">
        <div class="h-full w-full">
          <img
            class="h-full w-full object-cover brightness-50 md:brightness-100 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src={HazardNoOutrageImage}
            alt=""
          />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div class="absolute inset-0 flex md:translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class="font-dmserif text-3xl font-bold text-white">
            Hazard, No Outrage
          </h1>
          <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Something dangerous is happening, but nobody seems to care. You need
            to get the word out.
          </p>
          <a href="#page2">
            <button class="rounded-md bg-slate-800 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <div class="group relative cursor-pointer items-center justify-center overflow-hidden">
        <div class="h-full w-full">
          <img
            class="h-full w-full object-cover brightness-50 md:brightness-100 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src={OutrageNoHazard}
            alt=""
          />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div class="absolute inset-0 flex md:translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class="font-dmserif text-3xl font-bold text-white">
            Outrage, No Hazard
          </h1>
          <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            You haven't communicated something clearly, and now people are
            worried. Listen to their concerns and address them.
          </p>
          <a href="#page3">
            <button class="rounded-md bg-slate-800 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <div class="group relative cursor-pointer items-center justify-center overflow-hidden">
        <div class="h-full w-full">
          <img
            class="h-full w-full object-cover brightness-50 md:brightness-100 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src={NoOutrageNoHazard}
            alt=""
          />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div class="absolute inset-0 flex md:translate-y-[80%] flex-col items-center justify-center  text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class="font-dmserif text-3xl font-bold text-white">
            No Outrage, No Hazard
          </h1>
          <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            The sweet spot. Everyone is open for discussion and appropriate
            decisions can be made.
          </p>
          <a href="#page4">
            <button class="rounded-md bg-slate-800 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
