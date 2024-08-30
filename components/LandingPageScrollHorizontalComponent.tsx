import React from "react";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { WebToonInterface } from "@/lib/types";
import { krabbyPatty } from "@/lib/fonts/font";
export const WebtoonScrollComponent = ({
  title,
  webToons,
}: {
  title: string;
  webToons: WebToonInterface[];
}) => {
  return (
    <div className="w-full">
      <h2
        className={`text-3xl pb-6 pl-6 ${krabbyPatty.className} font-semibold text-[#62C9C3]  underline`}
      >
        {title}
      </h2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-4 lg:space-x-6 p-4 pt-1">
          {webToons.map((webToon: WebToonInterface) => (
            <Link key={webToon._id} href={`/webtoon/${webToon._id}`}>
              <div className="group relative">
                <figure className="shrink-0 transition-all duration-300 group-hover:scale-105">
                  <img
                    src={webToon.coverImage}
                    alt={`Webtoon ${webToon.webToonName}`}
                    className="w-32 h-48 sm:w-40 sm:h-56 lg:w-48 lg:h-64 rounded-md object-cover shadow-md"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex items-center justify-center">
                    <p className="text-white text-sm font-medium px-2 text-center">
                      {webToon.description.slice(0, 50)}...
                    </p>
                  </div>
                  <figcaption className="pt-2 text-sm">
                    <h3 className="font-semibold text-foreground truncate max-w-[10rem]">
                      {webToon.webToonName}
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      {webToon.author}
                    </p>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {/* <span className="text-sm">
                        {webToon?.rating.toFixed(1) ? "" : ""}
                      </span> */}
                    </div>
                  </figcaption>
                </figure>
                {/* {webToon.isNew && ( */}
                <Badge className="absolute top-2 right-2 bg-blue-500 text-white">
                  New
                </Badge>
                {/* )}
                {webToon.isTrending && ( */}
                <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                  Trending
                </Badge>
                {/* )} */}
              </div>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
};
