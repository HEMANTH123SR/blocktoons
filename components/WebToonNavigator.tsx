"use client";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { WebToonInterface } from "@/testdata/cardP";

export function WebToonSubNavigator({ children }: { children: React.ReactNode }) {
    const { user } = useUser();
    const pathname = usePathname();
    const router = useRouter();
    const id = pathname?.split("/")[1];
    const [webToon, setWebToon] = useState<WebToonInterface>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/webtoons?id=${id}`);
            const data = await res.json();
            setWebToon(data.data);
            setIsLoading(false)
        })()
    })

    if (isLoading) {
        return <div className="flex w-full h-screen justify-center items-center">
            <span className="text-xl font-semibold">Loading</span>
        </div>
    }



    if (user?.fullName === webToon?.createdBy.username) {
        return (
            <div className="min-h-screen bg-white pt-6 pb-12 px-4 sm:px-6 lg:px-8">
                <div className=" w-full">
                    <h2 className="text-3xl font-extrabold text-gray-900">Upload Webtoon</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Share your webtoon with the world! Upload and manage your webtoon
                        collection easily.
                    </p>
                    <hr className="bg-primary h-[2px] my-6" />
                    <div className="mt-12 flex flex-col lg:flex-row ">
                        <div className="flex flex-col w-full lg:w-64">
                            <Button
                                className={`mb-4 block  py-2 px-4 text-left text-sm font-medium text-gray-700
              
                ${pathname === `/${id}/dashboard/webtoon-details`
                                        ? "bg-primary text-white hover:bg-primary "
                                        : "bg-white hover:bg-slate-100 hover:text-black"
                                    } `}
                                onClick={() => router.push(`/${id}/dashboard/webtoon-details`)}
                            >
                                Webtoon Details
                            </Button>
                            <Button
                                className={`mb-4 block  py-2 px-4 text-left text-sm font-medium text-gray-700
              
                 ${pathname === `/${id}/dashboard/chapters`
                                        ? "bg-primary text-white hover:bg-primary "
                                        : "bg-white hover:bg-slate-100 hover:text-black"
                                    } `}
                                onClick={() => router.push(`/${id}/dashboard/chapters`)}
                            >
                                Chapters
                            </Button>


                            <Button
                                className={`mb-4 block  py-2 px-4 text-left text-sm font-medium text-gray-700
            
               ${pathname === `/${id}/dashboard/webtoon-settings`
                                        ? "bg-primary text-white hover:bg-primary "
                                        : "bg-white hover:bg-slate-100 hover:text-black"
                                    } `}
                                onClick={() => router.push(`/${id}/dashboard/webtoon-settings`)}
                            >
                                Webtoon Settings
                            </Button>
                           
                        </div>
                        <div className="flex-1 bg-white px-6">{children}</div>
                    </div>
                </div>
            </div>
        )

    }


    

}