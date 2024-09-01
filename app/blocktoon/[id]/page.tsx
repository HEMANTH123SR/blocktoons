"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { FaHeart, FaBookmark } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { krabbyPatty } from "@/lib/fonts/font";
import { WebToonInterface } from "@/testdata/cardP";

type PageProps = {
  params: { id: string };
};

const Page: React.FC<PageProps> = ({ params }) => {
  const router = useRouter();
  const [webToon, setWebToon] = useState<WebToonInterface | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const fetchWebToon = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/webtoons?id=${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch WebToon");
        }
        const data = await response.json();
        if (data.success && data.data) {
          setWebToon(data.data);
        } else {
          setError("WebToon not found");
        }
      } catch (err) {
        setError("An error occurred while fetching the WebToon");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWebToon();
  }, [params.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !webToon) {
    return <div>{error || "WebToon not found"}</div>;
  }

  const capitalizeWords = (str: string): string => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb id={params.id} title={webToon.title} />

        <div className="flex flex-col md:flex-row gap-8">
          <CoverImage src={webToon.coverImage} title={webToon.title} />

          <div className="flex-1 space-y-6">
            <h1
              className={`text-4xl md:text-6xl font-bold ${krabbyPatty.className}`}
            >
              {capitalizeWords(webToon.title)}
            </h1>

            <p className="text-xl font-semibold">
              {capitalizeWords(webToon.author)}
            </p>

            <div className="flex flex-wrap gap-4">
              {webToon.chapters.length && (
                <Badge variant="secondary">CH: {webToon.chapters.length}</Badge>
              )}
              <Badge variant="secondary">Updated: {webToon.lastUpdated}</Badge>
              <Badge variant="secondary">{webToon.status}</Badge>
            </div>

            <div className="flex items-center space-x-6 text-lg">
              <Stat
                icon={<HiUsers className="w-7 h-7" />}
                value={webToon.viewCount}
                label="Views"
              />
              <Stat
                icon={<FaHeart className="w-5 h-5" />}
                value={webToon.likeCount}
                label="Likes"
                isActive={isLiked}
                onClick={() => setIsLiked(!isLiked)}
              />
              <Stat
                icon={<FaBookmark className="w-5 h-5" />}
                label="Bookmark"
                isActive={isBookmarked}
                onClick={() => setIsBookmarked(!isBookmarked)}
              />
            </div>

            <p className="text-lg">{webToon.description.slice(0, 400)}</p>
          </div>
        </div>
      </div>
      <ScrollArea className="px-16">
        <div className="flex flex-col space-y-6  px-4 lg:px-8 h-96">
          {webToon.chapters.length &&
            webToon.chapters.map((chapter,i) => (
              <div
                className="flex items-center space-x-8 cursor-pointer"
                key={chapter._id}
                onClick={() =>
                  router.push(`${webToon._id}/chapter/${i+1}`)
                }
              >
                <img
                  alt={chapter.title}
                  className="h-[100px] w-[100px] object-cover"
                  height="100"
                  src={`https://cloud.appwrite.io/v1/storage/buckets/66d40de700345c1e19fc/files/${chapter.imageUrls[0]}/view?project=65ab3113d00c39e45407&mode=admin`}
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div className="flex flex-col justify-start items-start">
                  <span className="text-lg font-mono text-[#E11D48]">{`#0${chapter.chapterNumber}`}</span>
                  <h2 className=" font-semibold font-sans">{`Chapter ${chapter.chapterNumber}: ${chapter.title}`}</h2>
                  <span className="text-xs text-gray-500 font-mono ">
                    {chapter.publishedDate}
                  </span>
                </div>
              </div>
            ))}
          <ScrollBar orientation="vertical" className="hidden" />
        </div>
      </ScrollArea>
    </div>
  );
};

type BreadcrumbProps = {
  id: string;
  title: string;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ id, title }) => (
  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
    <Link href="/" className="hover:text-gray-900">
      Home
    </Link>
    <span>›</span>
    <Link href="/blocktoon" className="hover:text-gray-900">
      BlockToon
    </Link>
    <span>›</span>
    <span className="text-gray-900">{title}</span>
  </div>
);

type CoverImageProps = {
  src: string;
  title: string;
};

const CoverImage: React.FC<CoverImageProps> = ({ src, title }) => (
  <div className="w-full md:w-1/3 lg:w-1/4">
    <img
      src={`https://cloud.appwrite.io/v1/storage/buckets/66d40de700345c1e19fc/files/${src}/view?project=65ab3113d00c39e45407&mode=admin`}
      alt={`${title} cover`}
      className="w-full rounded-lg shadow-lg"
      style={{ aspectRatio: "2/3", objectFit: "cover" }}
    />
  </div>
);

type StatProps = {
  icon: React.ReactNode;
  value?: number;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

const Stat: React.FC<StatProps> = ({
  icon,
  value,
  label,
  isActive,
  onClick,
}) => (
  <div
    className={`flex items-center space-x-2 cursor-pointer ${
      isActive ? "text-[#E85C0D]" : ""
    }`}
    onClick={onClick}
  >
    {icon}
    {value !== undefined && <span>{value}</span>}
    <span>{label}</span>
  </div>
);

export default Page;
