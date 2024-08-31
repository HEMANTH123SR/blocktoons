import { krabbyPatty } from "@/lib/fonts/font";
import { SpotLightCarsoul } from "@/components/Carsoule";
import { TopTenWebToons } from "@/components/TopTenWebToons";
import { WebtoonScrollComponent } from "@/components/LandingPageScrollHorizontalComponent";

import { webToons } from "@/testdata/cardP";
export default function Home() {
  return (
    <main
      className={`flex  flex-col overflow-hidden max-w-screen h-full justify-start items-start bg-white`}
    >
      <SpotLightCarsoul />
    
      <TopTenWebToons />
   
      <div className="px-8 py-10">
        <WebtoonScrollComponent title="Recently Added New Web Toons" />
      </div>
      <div className="px-8 py-10">
        <WebtoonScrollComponent title="Populare Web Toons We Think you many like it " />
      </div>
      <div className="py-11"></div>
    </main>
  );
}
