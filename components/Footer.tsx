import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-100  border-t-4 border-[#62C9C3]">
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
                  className="text-sm text-gray-600 hover:text-[#62C9C3]"
                >
                  Publish
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-gray-600 hover:text-[#62C9C3]"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/random"
                  className="text-sm text-gray-600 hover:text-[#62C9C3]"
                >
                  Random
                </Link>
              </li>
              <li>
                <Link
                  href="/bookmark"
                  className="text-sm text-gray-600 hover:text-[#62C9C3]"
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
                  className="text-sm text-gray-600 hover:text-[#62C9C3]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-[#62C9C3]"
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
                  className="text-sm text-gray-600 hover:text-[#62C9C3]"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#62C9C3]"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#62C9C3]"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col items-center">
          <p className="text-sm text-gray-600">
            &copy; 2024 BlockToons. All rights reserved.
          </p>
          <div className="mt-2">
            <button className="bg-[#62C9C3] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#55b1ab]">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
