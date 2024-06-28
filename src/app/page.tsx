import Benefits from "@/components/tonkeeper-benefits/Benefits";
import { Hero } from "@/components/pages/home/Hero";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Benefits/>
    </div>
  );
}
