

"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { createImage } from "@/lib/appwrite/appwrite";
import { Chapter } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Input } from "@/components/ui/input";
import { DropZone } from "@/components/DropZone";

export default function ChapterPage() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const id = pathname?.split("/")[1];

  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [chapterName, setChapterName] = useState<string>("");
  const [chapterImages, setChapterImages] = useState<File[]>([]);

  useEffect(() => {
    getChapters();
  }, []);

  const getChapters = async () => {
    try {
      const res = await fetch(`/api/webtoons?id=${id}`);
      const { data } = await res.json();
      setChapters(data.chapters);
    } catch (error) {
      console.error("Failed to fetch chapters:", error);
    }
  };

  const addChapter = async () => {
    if (chapterName.length < 4 || chapterName.length > 60) {
      toast("Chapter name must be between 4 and 60 characters");
      return;
    }

    if (chapterImages.length < 1 || chapterImages.length > 14) {
      toast("Chapter images must be between 1 and 14 images");
      return;
    }

    const isDuplicate = chapters.some(
      (chapter) => chapter.title === chapterName
    );
    if (isDuplicate) {
      toast("Chapter already exists");
      return;
    }

    try {
      const imageUrls = await getImages();
      const newChapter: Chapter = {
        title: chapterName,
        imageUrls,
        chapterNumber: chapters.length + 1,
        publishedDate: new Date().toLocaleDateString(),
        imageCount: imageUrls.length,
      };

      const res = await fetch(`/api`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ webToonId: id, chapters: [newChapter] }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast("Chapter added successfully");
        setIsDrawerOpen(false);
        setChapters((prev) => [...prev, newChapter]);
      } else {
        toast(`Failed to add chapter: ${data.message}`);
      }
    } catch (error) {
      console.error("Failed to add chapter:", error);
      toast("Failed to add chapter");
    }
  };

  const getImages = async (): Promise<string[]> => {
    const urls: string[] = [];
    for (let file of chapterImages) {
      const res = await createImage(file);
      if (res.status === "success" && res.id) {
        urls.push(res.id);
      } else {
        toast(`Failed to upload image ${file.name}`);
      }
    }
    return urls;
  };

  return (
    <div>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <div className="flex w-full justify-center">
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              className="bg-[#E85C0D] text-white lg:mr-10"
            >
              Add Chapter
            </Button>
          </DrawerTrigger>
        </div>
        <DrawerContent>
          <div className="px-4 mx-auto w-full max-w-md ">
            <DrawerHeader className="py-0">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="chaptername"
              >
                Chapter Title
              </label>
              <Input
                className="mt-1"
                type="text"
                placeholder="Chapter title"
                id="chaptername"
                value={chapterName}
                onChange={(e) => setChapterName(e.target.value)}
              />
              <DrawerDescription>
                Only images are accepted and they should be less than 1MB.
              </DrawerDescription>
            </DrawerHeader>
            <DropZone
              multipleImage={true}
              setImage={null}
              setMultipleImage={setChapterImages}
            />

            <DrawerFooter>
              <Button onClick={addChapter}>Publish</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
        {chapters.map((chapter, i) => (
          <div key={i} className="">
            <div className="flex bg-slate-100 rounded-lg p-3 px-6">
              <div className="flex flex-row space-x-4 ">
                <img
                  src={
                    chapter.imageUrls && chapter.imageUrls.length > 0
                      ? `https://cloud.appwrite.io/v1/storage/buckets/66d40de700345c1e19fc/files/${chapter.imageUrls[0]}/view?project=65ab3113d00c39e45407&mode=admin`
                      : "https://via.placeholder.com/150"
                  }
                  alt={chapter.title}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div className="flex flex-col justify-between py-2">
                  <p className="text-sm font-semibold font-sans text-[#E85C0D]">
                    {chapter.title}
                  </p>
                  <p className="text-xs font-sans text-gray-500">
                    {chapter.publishedDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
