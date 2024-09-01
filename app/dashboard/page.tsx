"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { WebToonInterface } from "@/testdata/cardP";
import { Button } from "@/components/ui/button";

const DashBoardPage = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const [webToon, setWebToons] = useState<WebToonInterface[]>([]);
  const [somethingWentWrong, setSomethingWentWrong] = useState(false);
  useEffect(() => {
    (async () => {
      if (isLoaded) {
        const res = await fetch("/api");
        const data = await res.json();
        if (!res.ok) {
          setSomethingWentWrong(true);
          return;
        }
        console.log("ohhhh ");
        console.log(data.data);
        setWebToons(
          data.data.filter((webToon: WebToonInterface) => {
            if (
              webToon.createdBy.email ===
              user?.primaryEmailAddress?.emailAddress
            ) {
              return true;
            } else {
              return false;
            }
          })
        );
      }
    })();
  }, [user?.id]);

  if (!(isLoaded && user)) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Loading...</h1>
      </div>
    );
  }
  if (!isSignedIn) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-semibold">
          You Have Not Signed In. Please sign in first.
        </h1>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-center items-center  my-14">
        <Button
          variant="outline"
          className="bg-[#E85C0D] text-white "
          onClick={() => router.push(`/publish`)}
        >
          Create new Webtoon
        </Button>
      </div>
      <div className="pb-[70vh]  grid grid-cols-1 lg:grid-cols-2 gap-6 mx-12 bg-white">
        {webToon.map((webToon: WebToonInterface) => (
          <div
            key={webToon._id}
            className="flex items-center gap-4 cursor-pointer border mr-36"
            onClick={() => router.push(`/${webToon._id}/dashboard/chapters`)}
          >
            <img
              alt={`${webToon.title} webtoon image`}
              className="h-[100px] w-[100px] object-cover"
              height="100"
              src={`https://cloud.appwrite.io/v1/storage/buckets/66d40de700345c1e19fc/files/${webToon.coverImage}/view?project=65ab3113d00c39e45407&mode=admin`}
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <div className="flex flex-col justify-start items-start">
              <span className="text-lg font-mono text-[#E85C0D]">{`${webToon.title}}`}</span>
              <h2 className=" font-semibold font-sans">{`${webToon.author}`}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoardPage;
