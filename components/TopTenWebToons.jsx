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

export const TopTenWebToons = () => {
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
  }, []);

  return (
    <ReactSplide aria-label="Top Ten WebToons">
      <SplideSlide>
       
          <img src="/pictures/01.png" alt="WebToon 1" />
       
      </SplideSlide>
      <SplideSlide>
       
          <img src="/pictures/02.png" alt="WebToon 2" />
       
      </SplideSlide>
      <SplideSlide>
       
          <img src="/pictures/03.png" alt="WebToon 3" />
       
      </SplideSlide>
      <SplideSlide>
       
          <img src="/pictures/04.png" alt="WebToon 4" />
       
      </SplideSlide>
      <SplideSlide>
       
          <img src="/pictures/05.png" alt="WebToon 5" />
       
      </SplideSlide>
      <SplideSlide>
       
          <img src="/pictures/06.png" alt="WebToon 6" />
       
      </SplideSlide>
      <SplideSlide>
       
          <img src="/pictures/07.png" alt="WebToon 7" />
       
      </SplideSlide>
      {/* <SplideSlide>
       
          <img src="/pictures/08.png" alt="WebToon 8" />
       
      </SplideSlide> */}
    </ReactSplide>
  );
};
