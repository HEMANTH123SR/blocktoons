"use client";
import React, { useState, useEffect } from "react";
import { WebToonInterface } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { webToons as webToonsIntialData } from "@/testData";

export function SpotLightCarsoul() {
  const [webToonsSpotLight, setWebToonsSpotlight] =
    useState<WebToonInterface[]>(webToonsIntialData);

  return (
    <Carousel className="w-screen  ">
      <CarouselContent className="w-screen ">
        {webToonsSpotLight.map((data) => (
          <CarouselItem key={data._id} className="">
            <CarouselCard
              webToonName={data.webToonName}
              author={data.author}
              description={data.description}
              coverImage={data.coverImage}
              tags={data.tags}
              totalChapter={data.chapters.length}
              date={data.createdAt}
              status={data.status}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-[#FE560F]" />
      <CarouselNext className="text-[#FE560F]" />
    </Carousel>
  );
}

function CarouselCard({
  author,
  webToonName,
  description,
  coverImage,
  totalChapter,
  date,
  tags,
  status,
}: {
  author: string;
  webToonName: string;
  description: string;
  coverImage: string;
  totalChapter: number;
  date: string;
  tags: string;
  status: string;
}) {
  return (
    <div>
      <div className="flex w-full   ">
        <div className="w-full flex justify-center pt-5">
          <img
            alt="The Girl I Like Forgot Her Glasses"
            className="h-[380px] w-11/12 border shadow-lg  rounded-sm"
            src={`https://imgs.search.brave.com/U99PlYSGdruQs1Y7KEm_yfG0flIiZv7ap2Pzg1IVOhg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXIuZG9nL2xh/cmdlLzIwNTAyNTg4/LmpwZw`}
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="w-3/5 sm:w-3/4 flex items-center pr-4">
          <div className="h-5/6 flex flex-col space-y-4">
            <div>
              <h2 className="hidden sm:block text-5xl  font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {webToonName}
              </h2>

              <h2 className="sm:hidden text-4xl font-bold tracking-tighter">
                {`${webToonName.slice(0, 16)}${
                  webToonName.length > 16 ? "..." : ""
                } `}
              </h2>
            </div>
            <div className="hidden sm:flex space-x-2">
              {tags
                .split("#")
                .filter((tag) => tag.trim().length > 1)
                .map((tag) => (
                  <Badge
                    variant="outline"
                    key={tag}
                  >{`${tag.toUpperCase()}`}</Badge>
                ))}
            </div>
            <div>
             
              <p className="">
                {`${description.slice(0, 600)}`}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-x-4">
              <div className="flex  space-x-4 h-6 mt-2 ">
                <Badge variant="secondary">{`${author}`}</Badge>
                <Badge variant="secondary">{`CH: ${totalChapter}`}</Badge>
              </div>
              <div className=" space-x-4 h-6 mt-2 mx-4 sm:hidden md:flex">
                <Badge
                  className={`hidden sm:flex justify-center items-center`}
                  variant="secondary"
                >
                  {status}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
