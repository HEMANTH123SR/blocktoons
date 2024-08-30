

"use client";
import React, { useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { Splide as ReactSplide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";

// Create the TopTenWebToons component
export const RecentlyAdded = () => {
  
  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 4,
      autoScroll: {
        speed: 1,
      },
    });
  

    splide.mount({ AutoScroll });
    
  }, []); // Empty dependency array to run only on mount

  return (
    <ReactSplide aria-label="Top Ten WebToons">
      <SplideSlide>
        <Link
          href={"/"}
          target="_blank"
          className="flex cursor-pointer  justify-center items-center border-4 border-black"
        >
          <img
            src="/path/to/image1.jpg"
            alt="WebToon 1"
            className="h-48 w-48 object-cover"
          />
        </Link>
      </SplideSlide>
      <SplideSlide>
        <Link
          href={"/"}
          target="_blank"
          className="flex cursor-pointer  justify-center items-center border-4 border-black"
        >
          <img
            src="/path/to/image2.png"
            alt="WebToon 2"
            className="h-48 w-48 object-cover"
          />
        </Link>
      </SplideSlide>
      <SplideSlide>
        <Link
          href={"/"}
          target="_blank"
          className="flex cursor-pointer  justify-center items-center border-4 border-black"
        >
          <img
            src="/path/to/image3.png"
            alt="WebToon 3"
            className="h-48 w-48 object-cover"
          />
        </Link>
      </SplideSlide>
      <SplideSlide>
        <Link
          href={"/"}
          target="_blank"
          className="flex cursor-pointer  justify-center items-center border-4 border-black"
        >
          <img
            src="/path/to/image4.png"
            alt="WebToon 4"
            className="h-48 w-48 object-cover"
          />
        </Link>
      </SplideSlide>
      <SplideSlide>
        <Link
          href={"/"}
          target="_blank"
          className="flex cursor-pointer  justify-center items-center border-4 border-black"
        >
          <img
            src="/path/to/image5.jpeg"
            alt="WebToon 5"
            className="h-48 w-48 object-cover"
          />
        </Link>
      </SplideSlide>
      <SplideSlide>
        <Link
          href={"/"}
          target="_blank"
          className="flex cursor-pointer  justify-center items-center border-4 border-black"
        >
          <img
            src="/path/to/image6.jpg"
            alt="WebToon 6"
            className="h-48 w-48 object-cover"
          />
        </Link>
      </SplideSlide>
      <SplideSlide>
        <Link
          href={"/"}
          target="_blank"
          className="flex cursor-pointer  justify-center items-center border-4 border-black"
        >
          <img
            src="/path/to/image7.jpg"
            alt="WebToon 7"
            className="h-48 w-48 object-cover"
          />
        </Link>
      </SplideSlide>
      <SplideSlide>
        <Link
          href={"/"}
          target="_blank"
          className="flex cursor-pointer  justify-center items-center border-4 border-black"
        >
          <img
            src="/path/to/image8.png"
            alt="WebToon 8"
            className="h-48 w-48 object-cover"
          />
        </Link>
      </SplideSlide>
    </ReactSplide>
  );
};
