import Benefits from "@/components/pages/home/Benefits";
import About from "@/components/pages/home/About";
import { Hero } from "@/components/pages/home/Hero";
import TonTopUp from "@/components/pages/home/TonTopUp";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <About />
      <Benefits/>
      <TonTopUp/>
    </div>
  );
}
