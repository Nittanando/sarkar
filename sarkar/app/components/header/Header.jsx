import Link from "next/link";
import React from "react";
import { IoSunnyOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="main-container mx-auto pt-[5rem]">
        <div className="py-4 flex items-center">
          <Link href="/" className="me-4">
            <img className="h-[50px]" src="/logo-light.svg" alt="sarkar" />
          </Link>
          <div className="flex justify-between w-full">
            <div>
              <Link href="/" className="text-xl font-bold">
                Sarkar
              </Link>
              <div>
                <ul className="flex space-x-4 navbar-ul">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-gray-400 transition border-b border-transparent hover:border-gray-400"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-gray-400 transition border-b border-transparent hover:border-gray-400"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-gray-400 transition border-b border-transparent hover:border-gray-400"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-gray-400 transition border-b border-transparent hover:border-gray-400"
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <button>
              <IoSunnyOutline className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
