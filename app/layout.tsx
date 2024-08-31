import type { Metadata } from "next";

import { Apercu } from "@/lib/fonts/font";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { HeaderNav } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
export const metadata: Metadata = {
  title: "BlockToons Blockchain-Powered Webtoon",
  description:
    "Read exclusive chapters with secure blockchain transactions. Pay for what you read, seamlessly and securely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${Apercu.className} overflow-x-hidden h-full`}>
          <HeaderNav />
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
