import React from "react";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Star, Eye } from "lucide-react";
import { WebToonInterface } from "@/testdata/cardP";
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
        className={`text-3xl pb-6 pl-6 ${krabbyPatty.className} font-semibold text-[#62C9C3] underline`}
      >
        {title}
      </h2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-10 p-4 pt-1">
          {webToons.map((webToon: WebToonInterface) => (
            <Link key={webToon._id} href={`/webtoon/${webToon._id}`}>
              <div className="group relative w-32 sm:w-40 lg:w-48">
                <figure className="shrink-0 transition-all duration-300 group-hover:scale-105">
                  <img
                    src={webToon.coverImage}
                    alt={`Webtoon ${webToon.title}`}
                    className="w-full h-72 rounded-md object-cover shadow-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex items-end justify-center p-4">
                    <p className="text-white text-xs font-medium text-center line-clamp-3">
                      {webToon.description}
                    </p>
                  </div>
                  <figcaption className="pt-2 text-sm">
                    <h3 className="font-semibold text-foreground truncate">
                      {webToon.title}
                    </h3>
                    <p className="text-muted-foreground text-xs truncate">
                      {webToon.author}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm">{webToon.rating.toFixed(1)}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 text-gray-400 mr-1" />
                        <span className="text-xs text-gray-400">{webToon.viewCount}</span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
                {webToon.isNew && (
                  <Badge className="absolute top-2 right-2 bg-blue-500 text-white">
                    New
                  </Badge>
                )}
                {webToon.isTrending && (
                  <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                    Trending
                  </Badge>
                )}
                {/* <Badge className="absolute bottom-6 right-2 bg-gray-800 text-white">
                  {webToon.status}
                </Badge> */}
              </div>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
};