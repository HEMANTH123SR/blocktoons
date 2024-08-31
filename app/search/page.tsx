"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { WebToonInterface } from "@/testdata/cardP";

const SearchPage = () => {
  const [search, setSearch] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [webToons, setWebToons] = useState<WebToonInterface[]>([]);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  // useEffect(() => {
  //     (async () => {
  //         if (search.trim() === "") {
  //             return;
  //         }
  //         const res = await fetch(`/api/search?q=${search}`);
  //         const data = await res.json();

  //         setWebToons(data.data.manga);
  //     })();
  // }, [search]);
  return (
    <div className="flex flex-col space-y-1 w-full justify-center items-center mt-6  ">
      <input
        className="w-10/12 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-sans custom-placeholder no-border"
        ref={inputRef}
        type="text"
        aria-label="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ color: "black" }}
      />
      <div className="w-10/12 h-0.5 bg-primary "></div>
      <div className="min-h-4"></div>
      <div className="w-10/12 min-h-[70vh] flex flex-col gap-4">
        {webToons?.map((webtoon) => (
          <Link key={webtoon._id} href={`/blocktoon/${webtoon._id}`}>
            <div className="flex items-center gap-4 cursor-pointer">
              <img
                alt={`${webtoon.title} blocktoon image`}
                className="h-[100px] w-[80px] object-cover rounded-lg"
                src={webtoon.coverImage}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
              />
              <div className="flex flex-col justify-start items-start">
                <span className="text-base  font-bold line-clamp-1 break-all">{`${webtoon.title}`}</span>
                <span className=" text-sm">{`${webtoon.author}`}</span>
                <span className="text-xs text-gray-500 font-mono ">{`${webtoon.lastUpdated}`}</span>
              </div>
            </div>{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
