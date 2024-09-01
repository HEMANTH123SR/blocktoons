"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Star, Eye } from "lucide-react";
import { WebToonInterface } from "@/testdata/cardP";
import { krabbyPatty } from "@/lib/fonts/font";
import {
  Asset,
  Aurora,
  BASE_FEE,
  Keypair,
  Networks,
  Operation,
  TransactionBuilder,
} from "diamnet-sdk";
import { auroraServerUrl, masterSecret } from "../constants/constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const WebtoonScrollComponent = ({ title }: { title: string }) => {
  const [webToons, setWebToons] = useState<WebToonInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWebToons = async () => {
      try {
        const response = await fetch("/api"); // Adjust this URL to match your API route
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

  const handleMangaPurchase = async (webToon: WebToonInterface) => {
    if (!window.diam) {
      toast.error("DIAM wallet is not connected");
      return;
    }

    try {
      const connectionResp = await window.diam.connect();
      const userAddress = connectionResp.message[0].diamPublicKey;

      const masterKeypair = Keypair.fromSecret(masterSecret);
      const issuerKeypair = Keypair.random();
      const server = new Aurora.Server(auroraServerUrl);

      const masterAccount = await server.loadAccount(masterKeypair.publicKey());

      const asset = new Asset(webToon.title, issuerKeypair.publicKey());

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

      const xdr = tx.toXDR();
      const signResponse = await window.diam.sign(
        xdr,
        true,
        Networks.TESTNET
      );

      if (signResponse.response.status === 200) {
        toast.success("Transaction Successful");
      } else {
        console.log(signResponse);
        toast.error("Transaction Failed");
      }
    } catch (error) {
      toast.error("Transaction Failed");
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
            <div key={webToon._id} onClick={() => handleMangaPurchase(webToon)}>
              <Link href={`/blocktoon/${webToon._id}`}>
                <div className="w-[250px] space-y-3">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={webToon.coverImage}
                      alt={webToon.title}
                      className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <h3 className="font-medium leading-none">
                      {webToon.title}
                    </h3>
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
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
