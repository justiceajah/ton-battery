"use client";
import Link from "next/link";
import GlowingEllipse from "@/assets/images/glowing_ellipse.svg";
import Image from "next/image";
import { useRef, useState } from "react";

export function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navLinkRef = useRef<HTMLUListElement | null>(null);

  function toggleMenuVisibility() {
    console.log("toggleMenuVisibility");

    const MENU_ANIMATION_DURATION = 500;
    // If the menu is not visible, set it to visible
    if (!isMenuVisible) {
      setIsMenuVisible(true);
    } else {
      // If the menu is visible, add some animation classes to the nav links
      navLinkRef.current?.classList.remove("nav-links__animate-in");
      navLinkRef.current?.classList.add("nav-links__animate-out");

      // After 500 milliseconds, set the menu to invisible and remove the animation classes
      setTimeout(() => {
        setIsMenuVisible(false);
        navLinkRef.current?.classList.add("nav-links__animate-in");
      }, MENU_ANIMATION_DURATION);
    }
  }

  return (
    <header className="relative mt-7">
      <div className="absolute -top-72 left-0 -z-50 h-[1700px] w-full">
        <Image src={GlowingEllipse} fill alt="glowing ellipse" />
      </div>
      <nav className="hidden lg:flex">
        <ul className="w-full flex-col justify-center gap-[30px] p-4 lg:flex lg:flex-row">
          <li className="w-fit p-2">
            <Link href="/">FAQ</Link>
          </li>
          <li className="w-fit p-2">
            <Link href="/">Support</Link>
          </li>
          <li className="w-fit p-2">
            <Link href="/">Documentation</Link>
          </li>
          <li className="w-fit p-2">
            <Link href="/">Bug Bounty</Link>
          </li>
          <li className="w-fit p-2">
            <Link href="/">Github</Link>
          </li>
          <li className="w-fit p-2">
            <Link href="/">Tonkeeper Battery</Link>
          </li>
        </ul>
      </nav>

      <nav className="px-sm-container z-50 flex lg:hidden lg:px-container">
        <div className="lg:hidden w-full flex flex-row items-end">
          <button
            onClick={toggleMenuVisibility}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-align-justify"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </button>
          {/* If the menu is visible, display a list of links */}
          {isMenuVisible && (
            <ul
              ref={navLinkRef}
              className={`nav-links nav-links__animate-in dark:bg-gray-700 dark:text-white`}
            >
              {/* Display a button with an icon to close the menu */}
              <li className="lg:hidden">
                <button onClick={toggleMenuVisibility}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </li>
              <li onClick={toggleMenuVisibility}>
                <Link href={"/articles"}>Articles</Link>
              </li>
              <li onClick={toggleMenuVisibility}>
                <Link href={"/articles/series"}>Series</Link>
              </li>
              {/* <li onClick={toggleMenuVisibility}>
              <Link href={"/book-notes"}>Book Notes</Link>
            </li> */}
              <li onClick={toggleMenuVisibility}>
                <Link href={"/projects"}>Projects</Link>
              </li>
              {/* <li onClick={toggleMenuVisibility}>
              <Link href={"/videos"}>Videos</Link>
            </li>
            <li onClick={toggleMenuVisibility}>
              <Link href={"/newsletter"}>Newsletter</Link>
            </li> */}
              <li onClick={toggleMenuVisibility}>
                <Link href={"/about"}>About</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
