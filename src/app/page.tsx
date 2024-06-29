import { Hero } from "@/components/pages/home/Hero";
import Image from "next/image";
import HeroHeaderImg from "@/assets/images/hero_header.svg";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute left-0 top-4 lg:-top-8 -z-50 h-[350px] w-full overflow-y-visible">
        <Image src={HeroHeaderImg} height={452} className="w-full" alt="hero header" objectFit="cover" />
      </div>
      <Hero />
    </div>
  );
}
