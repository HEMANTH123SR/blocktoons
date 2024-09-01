"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Chapter } from "@/lib/types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { WebToonChapterSkelton } from "@/components/WebToonChapterSkelton";
import { SkipBack, SkipForward } from "lucide-react";
import { toast } from "sonner";

const ChapterPage = ({
  params,
}: {
  params: { chapterid: string | number; id: string };
}) => {

  const router = useRouter();
  const [chapterState, setChapterState] = useState<Chapter>();
  const [somethingWentFrong, setSomethingWentFrong] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [nextChapterId, setNextChapterId] = useState<string | undefined>("");
  const [prevChapterId, setPrevChapterId] = useState<string | undefined>("");
  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/webtoons?id=${params.id}`);
      const data = await res.json();

      
      if (!res.ok) {
        setSomethingWentFrong(true);
        return;
      }
      if (res.ok) {
        console.log("data recived data", data.data.chapters[0]);
        console.log("params chapter id", params.chapterid);
        console.log("user id");
        setChapterState(data.data.chapters[Number(params.chapterid)]);
        // setNextChapterId(data.data.chapters[params.chapterid]._id);
        // setPrevChapterId(data.data.chapters[Number(params.chapterid) - 2]._id);
        setIsLoading(false);
      }
  
    })();
  }, []);
  if (somethingWentFrong) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <h1 className="text-4xl font-mono">Something went wrong</h1>
      </div>
    );
  }
  if (isLoading) {
    return <WebToonChapterSkelton />;
  }
  return (
    <div className="h-full w-full">
      <div className="h-10 w-full bg-primary flex justify-between  px-6">
        <div className="flex space-x-2 items-center">
          <span className="text-white font-mono">{`#${chapterState?.title}`}</span>
          <span className="font-sans text-white">{chapterState?.title}</span>
        </div>
        <div className="flex space-x-6 items-center">
          <div
            className="flex space-x-1 items-center justify-center cursor-pointer"
            onClick={() => {
              if (prevChapterId) {
                router.push(`${prevChapterId}`);
                return;
              }
              toast("there is no previous chapter", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Cancel",
                  onClick: () => {},
                },
              });
            }}
          >
            <SkipBack className="text-white" />
            <span className="text-sm font-sans text-white text-center pb-1">
              Page
            </span>
          </div>
          <span className="rounded-full text-primary bg-white h-6 w-6 text-center">
            {chapterState?.chapterNumber}
          </span>
          <div
            className="flex space-x-1 items-center justify-center cursor-pointer"
            onClick={() => {
              if (nextChapterId) {
                router.push(`${nextChapterId}`);
                return;
              }
              toast("there is no next chapter", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Cancel",
                  onClick: () => {},
                },
              });
            }}
          >
            <span className="text-sm font-sans text-white text-center pb-1">
              Page
            </span>
            <SkipForward className="text-white" />
          </div>
        </div>
      </div>
      <ScrollArea className="h-full w-full min-h-[70vh]">
        <div className="h-full w-full flex flex-col items-center justify-center my-10">
          {chapterState?.imageUrls &&
            chapterState?.imageUrls.map((imageId: string) => {
              return (
                <img
                  src={`https://cloud.appwrite.io/v1/storage/buckets/66d40de700345c1e19fc/files/${imageId}/view?project=65ab3113d00c39e45407&mode=admin`}
                  alt="chapter"
                  key={imageId}
                  className="w-11/12 h-full object-cover"
                />
              );
            })}
          <ScrollBar orientation="horizontal" />
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChapterPage;
