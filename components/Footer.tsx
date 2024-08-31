import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { krabbyPatty } from "@/lib/fonts/font";

import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 w-screen border-t-4 border-[#62C9C3]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h1
              className={`${krabbyPatty.className} text-[#62C9C3] cursor-pointer font-semibold text-2xl first-letter:text-4xl`}
            >
              BloockToons
            </h1>
            <p className="text-gray-400 text-sm">
              Discover and read the best webtoons from around the world.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/genres"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Genres
                </Link>
              </li>
              <li>
                <Link
                  href="/popular"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Popular
                </Link>
              </li>
              <li>
                <Link
                  href="/new-releases"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  New Releases
                </Link>
              </li>
              <li>
                <Link
                  href="/authors"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Authors
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Help & Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for updates:
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white"
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} BloockToons. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
