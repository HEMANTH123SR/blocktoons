import type { Metadata } from "next";

import { Apercu } from "@/lib/fonts/font";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

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
        <body className={Apercu.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
