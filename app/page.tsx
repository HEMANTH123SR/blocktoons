import { krabbyPatty } from "@/lib/fonts/font";
import { HeaderNav } from "@/components/NavBar";
import { SpotLightCarsoul } from "@/components/Carsoule";
import { TopTenWebToons } from "@/components/TopTenWebToons";
import { RecentlyAdded } from "@/components/RecentlyAdded";
import { Popular } from "@/components/Popular";
export default function Home() {
  return (
    <main
      className={`flex  flex-col overflow-hidden max-w-screen h-full justify-start items-start bg-white`}
    >
      <HeaderNav />
      <SpotLightCarsoul />
      <div className="mx-2 flex flex-col mt-28 ">
        <h2
          className={`text-3xl ${krabbyPatty.className} font-semibold text-[#62C9C3] pl-12 underline`}
        >
          Top Web Toons This Week
        </h2>
        <TopTenWebToons />
      </div>

      <div className="h-96"></div>
    </main>
  );
}
