import Marquee from "@/components/Marquee";


export function Banner() {
  return (
    <div className="mb-20 -rotate-12 relative border-2 border-[#175776] right-10 bg-[#fff] w-full  min-w-[calc(100vw+20vw)] overflow-x-hidden flex justify-around gap-x-[66rem] ">
      <Marquee />
      <Marquee />
    </div>

  );
}
