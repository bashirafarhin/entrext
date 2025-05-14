import React from "react";
import Link from "next/link";
import {
  Mail,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="w-[70vw] mx-auto my-20 mx-auto my-20 text-center">
      <footer className="bg-white bg-gradient-to-b from-[#0D0D0D] to-[#161616]">
        <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <img src="/logo.png" className="w-30 h-30" alt="Site Logo" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/yourprofile"
                      className="hover:underline"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/yourinvite"
                      className="hover:underline"
                      target="_blank"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/privacy-policy" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:underline">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Newsletter
                </h2>
                <form className="mb-4">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="w-full p-2 border-b border-white text-gray-900 dark:text-white"
                  />
                </form>
                <div className="flex gap-4 text-gray-500 dark:text-gray-400">
                  <Link href="https://twitter.com" target="_blank">
                    <div className="p-2 rounded-full hover:scale-110 transition-transform bg-white/10">
                      <Twitter size={20} />
                    </div>
                  </Link>
                  <Link href="https://instagram.com" target="_blank">
                    <div className="p-2 rounded-full hover:scale-110 transition-transform bg-white/10">
                      <Instagram size={20} />
                    </div>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank">
                    <div className="p-2 rounded-full hover:scale-110 transition-transform bg-white/10">
                      <Linkedin size={20} />
                    </div>
                  </Link>
                  <Link href="https://youtube.com" target="_blank">
                    <div className="p-2 rounded-full hover:scale-110 transition-transform bg-white/10">
                      <Youtube size={20} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="text-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              © 2025{" "}
              <Link href="/" className="hover:underline">
                Entrext™
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
