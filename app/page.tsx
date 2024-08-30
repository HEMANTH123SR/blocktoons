import {Apercu} from "@/lib/fonts/font"

import {HeaderNav} from "@/components/NavBar"

export default function Home() {
  return (
    <main className={`flex ${Apercu.className} h-screen justify-start items-start bg-white`}>
      <HeaderNav/>
    </main>
  );
}
