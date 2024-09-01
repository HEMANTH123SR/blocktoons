"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Star, Eye } from "lucide-react";
import { WebToonInterface } from "@/testdata/cardP";
import { krabbyPatty } from "@/lib/fonts/font";

export const Recents = ({ title }: { title: string }) => {
  const [webToons, setWebToons] = useState<WebToonInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWebToons = async () => {
      try {
        const response = await fetch("/api/recents"); // Adjust this URL to match your API route
        if (!response.ok) {
          throw new Error("Failed to fetch webToons");
        }
        const data = await response.json();
        if (data.success) {
          setWebToons(data.data);
        } else {
          throw new Error(data.message || "Failed to fetch webToons");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchWebToons();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className={krabbyPatty.className}>{title}</h2>
      <ScrollArea className="w-[98vw] whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {webToons.map((webToon: WebToonInterface) => (
            <Link href={`/blocktoon/${webToon._id}`} key={webToon._id}>
              <div className="w-[250px] space-y-3">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={`https://cloud.appwrite.io/v1/storage/buckets/66d40de700345c1e19fc/files/${webToon.coverImage}/view?project=65ab3113d00c39e45407&mode=admin`}
                    alt={webToon.title}
                    className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <h3 className="font-medium leading-none">{webToon.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {webToon.author}
                  </p>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1">
                      <Star size={16} />
                      {webToon.rating.toFixed(1)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={16} />
                      {webToon.viewCount}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
