import Link from "next/link";

export function Header() {
  return (
    <header>
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
