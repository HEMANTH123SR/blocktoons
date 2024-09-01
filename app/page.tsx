import { krabbyPatty } from "@/lib/fonts/font";
import { SpotLightCarsoul } from "@/components/Carsoule";
import { TopTenWebToons } from "@/components/TopTenWebToons";
import { Recents } from "@/components/Recents";
import { Populare } from "@/components/Populare";
import { webToons } from "@/testdata/cardP";
export default function Home() {
  return (
    <main
      className={`flex  flex-col overflow-hidden max-w-screen h-full justify-start items-start bg-white`}
    >
      <SpotLightCarsoul />

      <TopTenWebToons />

      <div className="px-8 py-10">
        <Recents title="Recently Added New Web Toons" />
      </div>
      <div className="px-8 py-10">
        <Populare title="Populare Web Toons We Think you many like it " />
      </div>
      <div className="py-11"></div>
    </main>
  );
}


// by by hello world