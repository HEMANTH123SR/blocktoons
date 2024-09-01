"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState, useEffect } from "react";
import { krabbyPatty } from "@/lib/fonts/font";
import { Search } from "lucide-react";
import { FaWallet } from "react-icons/fa";
import { redirect, useRouter } from 'next/navigation';

import { create } from "ipfs-http-client";
import { Buffer } from "buffer";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HeaderNav = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/auth/login');
  };
  const [isScrolled, setIsScrolled] = useState(false);

  
  // Diam wallet integration
  const [webVisible, setWebVisible] = useState(false);
  const [officeVisible, setOfficeVisible] = useState(false);
  const [webReverse, setWebReverse] = useState(false);
  const [officeReverse, setOfficeReverse] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [contentVisible, setContentVisible] = useState(false);
  const [file, setFile] = useState("");
  const [assetName, setAssetName] = useState("");
  const [loading, setLoading] = useState(false);
  const [nftData, setNftData] = useState([]);

  const notify = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleWebClick = async () => {
    if (!userAddress) {
      const connectionResp = await window.diam.connect();
      setUserAddress(connectionResp.message[0].diamPublicKey);
      setWebVisible(true);
      setOfficeVisible(false);
      setWebReverse(false);
    } else {
      setWebVisible(true);
      setOfficeVisible(false);
      setWebReverse(false);
    }

    setTimeout(() => {
      setContentVisible(true);
    }, 600);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex w-full max-w-[1550px] items-center  border-b  justify-between px-3 py-3.5 text-black transition-colors duration-300 md:px-7 ${
        isScrolled
          ? 'border-b bg-white bg-opacity-70 backdrop-blur-md backdrop-filter'
          : 'bg-white'
      }`}
    >
      <div className="flex items-center justify-center space-x-8">
        <Link className="flex items-center justify-center space-x-2" href={'/'}>
          <h1
            className={`${krabbyPatty.className} text-[#E85C0D] cursor-pointer font-semibold text-2xl first-letter:text-4xl`}
          >
            BloockToons
          </h1>
        </Link>
      </div>
      <div className="hidden  md:block">
        <div className="flex space-x-5">
          <Link
            href={"/"}
            className="rounded-md px-4 py-2.5  font-semibold text-[#868686] hover:bg-slate-50"
          >
            Publish
          </Link>
          <Link
            href={'/'}
            className="rounded-md px-4 py-2.5  font-semibold text-[#868686] hover:bg-slate-50"
          >
            Dashboard
          </Link>
          <Link
            href={'/'}
            className="rounded-md px-4 py-2.5  font-semibold text-[#868686] hover:bg-slate-50"
          >
            Random
          </Link>
          <Link
            href={'/'}
            className="rounded-md px-4 py-2.5  font-semibold text-[#868686] hover:bg-slate-50"
          >
            Bookmark
          </Link>
        </div>
      </div>
      {/* right navigation link consist of auth and search */}
      <div className="flex justify-center items-center space-x-2 ">
        <Link href={"/search"} className="hidden md:block mr-6">
          <Search className="text-2xl text-text cursor-pointer" />
        </Link>
        {/* <FaWallet className="text-2xl text-text cursor-pointer"/> */}

        
        <button
          onClick={handleWebClick}
          className="rounded-lg border text-lg bg-[#E85C0D]  px-2.5 py-1 font-semibold text-white"
        >
          Connect Wallet
        </button>
        <div className="hidden md:flex">
          <SignedOut>
            <button
              onClick={handleLogin}
              className="rounded-lg border text-lg bg-white px-2.5 py-1 font-semibold text-black"
            >
              Sign In
            </button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};
