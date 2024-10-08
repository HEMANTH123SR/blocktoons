'use client'

import React from "react";
import Link from "next/link";
import { useState } from "react";

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

export const Footer = () => {

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

  return (
    <footer className="bg-gray-100  border-t-4 border-b-8 border-[#E85C0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">BlockToons</h3>
            <p className="text-sm text-gray-600">
              Discover and publish web comics on the blockchain.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/publish"
                  className="text-sm text-gray-600 hover:text-[#E85C0D]"
                >
                  Publish
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-gray-600 hover:text-[#E85C0D]"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/random"
                  className="text-sm text-gray-600 hover:text-[#E85C0D]"
                >
                  Random
                </Link>
              </li>
              <li>
                <Link
                  href="/bookmark"
                  className="text-sm text-gray-600 hover:text-[#E85C0D]"
                >
                  Bookmark
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-[#E85C0D]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-[#E85C0D]"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#E85C0D]"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#E85C0D]"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#E85C0D]"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col items-center">
        <div className="my-2 mb-8">
            <button
            onClick={handleWebClick}
            className="bg-[#E85C0D] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#55b1ab]">
              {userAddress
            ? `${userAddress.slice(0, 6)}...${userAddress.slice(-6)}`
            : "Connect Wallet"}
            </button>
          </div>
          <p className="text-sm text-gray-600">
            &copy; 2024 BlockToons. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
