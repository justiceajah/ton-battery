import About from "@/components/pages/home/About";
import { Hero } from "@/components/pages/home/Hero";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <About />
    </div>
  );
}
