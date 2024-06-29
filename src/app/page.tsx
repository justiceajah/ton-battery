import Benefits from "@/components/pages/home/Benefits";
import About from "@/components/pages/home/About";
import { Hero } from "@/components/pages/home/Hero";
import Image from "next/image";
import HeroHeaderImg from "@/assets/images/hero_header.svg";
import TonTopUp from "@/components/pages/home/TonTopUp";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute left-0 top-4 -z-50 h-[350px] w-full overflow-y-visible lg:-top-8">
        <Image
          src={HeroHeaderImg}
          height={452}
          className="w-full"
          alt="hero header"
          objectFit="cover"
        />
      </div>
      <Hero />
      <About />
      <Benefits />
      <TonTopUp />
    </div>
  );
}
