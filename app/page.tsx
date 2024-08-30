import { Apercu } from "@/lib/fonts/font";

import { HeaderNav } from "@/components/NavBar";
import { SpotLightCarsoul } from "@/components/Carsoule";
export default function Home() {
  return (
    <main
      className={`flex ${Apercu.className} flex-col overflow-hidden max-w-screen h-screen justify-start items-start bg-white`}
    >
      <HeaderNav />
      <SpotLightCarsoul />
    </main>
  );
}
