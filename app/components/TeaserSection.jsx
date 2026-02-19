"use client";
import { useState } from "react";
import VideoModal from "../components/common/VideoModal";

export default function TeaserSection() {
    const [openVideo, setOpenVideo] = useState(false);

  return (
    <>
    <section className="relative w-full min-h-screen bg-[#f7f7f5] flex flex-col items-center justify-center overflow-hidden py-20">
 
      <div className="max-w-4xl text-center px-6 mb-40">
        <h2 className="text-[6vw] md:text-[2.6vw] leading-tight font-normal text-[#312e2e]">
          Celebso Enterprises empowers artists to step into the spotlight —
          supporting talent, shaping presence, and connecting creativity with millions.
        </h2>
      </div> 
      <div className="absolute w-[580px] h-[580px] rounded-full border border-black/10 pointer-events-none"></div>

     
      <span className="absolute left-1/2 -translate-x-[215px] md:-translate-x-[370px] -translate-y-[100px] flex items-center uppercase text-black/20 text-7xl font-light">
        Play
        <svg
          viewBox="0 0 512 512"
          className="text-[#fcb900] opacity-60 "
          height="70"
          width="70"
          fill="currentColor"
        >
          <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm83.8 211.9l-137.2 83c-2.9 1.8-6.7-.4-6.7-3.9V173c0-3.5 3.7-5.7 6.7-3.9l137.2 83c2.9 1.7 2.9 6.1 0 7.8z" />
        </svg>
      </span>
 
      <span className="absolute left-1/2 translate-x-[25px] md:translate-x-[140px] -translate-y-[100px] uppercase text-black/20 text-7xl font-light">
        Teaser
      </span>
 
      <div   onClick={() => setOpenVideo(true)}
       className="relative z-10 w-[300px] h-[450px] aspect-video rounded-lg overflow-hidden cursor-pointer shadow-lg group transition duration-300 hover:scale-105">

        <video
          src="assest/herovideo.mp4"
          muted
          loop
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        />
 
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
 
        <span className="absolute bottom-2 left-2 text-white text-sm">
          <svg
            viewBox="0 0 512 512"
            height="20"
            width="20"
            fill="currentColor"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm83.8 211.9l-137.2 83c-2.9 1.8-6.7-.4-6.7-3.9V173c0-3.5 3.7-5.7 6.7-3.9l137.2 83c2.9 1.7 2.9 6.1 0 7.8z" />
          </svg>
        </span>
 
        <span className="absolute bottom-2 right-2 text-white text-sm">
          00:48
        </span>

      </div>

    </section>

    <VideoModal open={openVideo} onClose={() => setOpenVideo(false)} />
</>
  );
}
