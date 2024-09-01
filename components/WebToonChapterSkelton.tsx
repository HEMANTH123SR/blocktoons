import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
export const WebToonChapterSkelton = () => {
    return (
        <div className="flex flex-col bg-white">
            <div className="h-10 w-full bg-primary flex justify-between  px-6 ">
                <div className="flex space-x-2 items-center">
                    <Skeleton className="h-5 w-6 rounded-full " />
                    <Skeleton className="h-5 w-24 rounded-md" />
                </div>
                <div className="flex space-x-6 items-center">
                    <Skeleton className="h-5 w-16 rounded-md" />
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-5 w-16 rounded-md" />
                </div>
            </div>
            <Skeleton className="mt-2 w-full h-[90vh]" />
        </div >
    )
}