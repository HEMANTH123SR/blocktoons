"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Star, Eye } from "lucide-react";
import { WebToonInterface } from "@/testdata/cardP";
import { krabbyPatty } from "@/lib/fonts/font";
import Loader from "@/components/Loader/Loader";
import { Asset, Aurora, BASE_FEE, Keypair, Networks, Operation, TransactionBuilder } from "diamnet-sdk";
import { auroraServerUrl, masterSecret } from "@/constants/constants";

export const Populare = ({ title }: { title: string }) => {
  const [webToons, setWebToons] = useState<WebToonInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [transactionLoading, setTransactionLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchWebToons = async () => {
      try {
<<<<<<< HEAD:components/LandingPageScrollHorizontalComponent.tsx
        const response = await fetch("/api");
=======
        const response = await fetch("/api/populare"); 
>>>>>>> f0ef25c707cbbf0f27df9ec83170aed5edb482f7:components/Populare.tsx
        if (!response.ok) {
          throw new Error("Failed to fetch webToons");
        }
        const data = await response.json();
        if (data.success) {
          setWebToons(data.data);
        } else {
          throw new Error(data.message || "Failed to fetch webToons");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchWebToons();
  }, []);

  const handleWebtoonClick = async (webToon: WebToonInterface) => {
    setTransactionLoading(true);
    try {
      const userAddress = await connectToDiamWallet();
      const transactionSuccess = await initiateTransaction(userAddress);

      if (transactionSuccess) {
        router.push(`/blocktoon/${webToon._id}`);
      } else {
        alert("Transaction failed, please try again.");
      }
    } catch (err) {
      console.error("Transaction error:", err);
      alert("An error occurred during the transaction.");
    } finally {
      setTransactionLoading(false);
    }
  };

  const connectToDiamWallet = async () => {
    const connectionResp = await window.diam.connect();
    return connectionResp.message[0].diamPublicKey;
  };

  const initiateTransaction = async (userAddress: string) => {
    try {
      const masterKeypair = Keypair.fromSecret(masterSecret);
      const issuerKeypair = Keypair.random();
      const server = new Aurora.Server(auroraServerUrl);
      const masterAccount = await server.loadAccount(masterKeypair.publicKey());
      const asset = new Asset("MangaAccess", issuerKeypair.publicKey());

      const tx = new TransactionBuilder(masterAccount, {
        fee: BASE_FEE,
        networkPassphrase: Networks.TESTNET,
      })
        .addOperation(
          Operation.createAccount({
            destination: issuerKeypair.publicKey(),
            startingBalance: "2",
          })
        )
        .addOperation(
          Operation.changeTrust({
            asset: asset,
            source: userAddress,
          })
        )
        .addOperation(
          Operation.payment({
            destination: userAddress,
            source: issuerKeypair.publicKey(),
            asset: asset,
            amount: "0.0000001",
          })
        )
        .addOperation(
          Operation.setOptions({
            source: issuerKeypair.publicKey(),
            masterWeight: 0,
          })
        )
        .setTimeout(0)
        .build();

      tx.sign(masterKeypair, issuerKeypair);

      // Manually submit the transaction
      const result = await server.submitTransaction(tx);

      return result; // Return true if successful
    } catch (e) {
      console.error("Transaction initiation failed:", e);
      return false;
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className={krabbyPatty.className}>{title}</h2>
      <ScrollArea className="w-[98vw] whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {webToons.map((webToon: WebToonInterface) => (
<<<<<<< HEAD:components/LandingPageScrollHorizontalComponent.tsx
            <div
              key={webToon._id}
              className="w-[250px] space-y-3 cursor-pointer"
              onClick={() => handleWebtoonClick(webToon)}
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={webToon.coverImage}
                  alt={webToon.title}
                  className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                />
              </div>
              <div className="space-y-1 text-sm">
                <h3 className="font-medium leading-none">{webToon.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {webToon.author}
                </p>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1">
                    <Star size={16} />
                    {webToon.rating.toFixed(1)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    {webToon.viewCount}
=======
            <Link href={`/blocktoon/${webToon._id}`} key={webToon._id}>
              <div className="w-[250px] space-y-3">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={`https://cloud.appwrite.io/v1/storage/buckets/66d40de700345c1e19fc/files/${webToon.coverImage}/view?project=65ab3113d00c39e45407&mode=admin`}
                    alt={webToon.title}
                    className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <h3 className="font-medium leading-none">{webToon.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {webToon.author}
                  </p>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1">
                      <Star size={16} />
                      {webToon.rating.toFixed(1)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={16} />
                      {webToon.viewCount}
                    </div>
>>>>>>> f0ef25c707cbbf0f27df9ec83170aed5edb482f7:components/Populare.tsx
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {transactionLoading && <Loader />} {/* Show loading spinner during transaction */}
    </div>
  );
};
