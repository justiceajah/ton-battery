import Link from "next/link";
import GlowingEllipse from "@/assets/images/glowing_ellipse.svg";
import Image from "next/image";

export function Header() {
  return (
    <header className="relative mt-7">
      <div className="h-[1700px] w-full absolute z-0 -top-72 left-0">
        <Image src={GlowingEllipse} fill alt="glowing ellipse" />
      </div>
      <nav>
        <ul className="flex w-full flex-row justify-center gap-[30px] p-4">
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
    </header>
  );
}
