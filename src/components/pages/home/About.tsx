import BatterySvg from "@/assets/images/battery.svg";
import ShinePng from "@/assets/images/shine.png";
import LooperSvg from "@/assets/images/looper.svg";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <div className="relative -mt-20 h-fit lg:h-[80vh] md:mt-[300px] lg:mt-[500px] ">
      <Image
        className="absolute -top-[450px] left-0"
        height={1300}
        alt=""
        src={ShinePng}
      />
      <Image
        className="absolute bottom-0 left-0 top-0"
        height={800}
        alt=""
        src={LooperSvg}
      />
      <SectionHeader title="About" />
      <div className="grid grid-cols-3 px-4 relative h-[400px] md:h-[300px] lg:w-[80%] lg:mx-auto">
        <div className="place-self-start pt-5">
          <Image height={400} width={400} src={BatterySvg} alt="battery" />
        </div>
        <div className="col-span-2 flex flex-col space-y-8 pr-5">
          <h4 className="text-[20px] text-center md:text-left lg:text-[32px] w-full">
            What is the Battery, and what is it used for?
          </h4>
          <p className="text-[18px] md:text-[20px] text-[#CFCCCC] absolute w-full left-0 px-4 lg:px-0 top-28 md:relative md:top-0">
            The Battery is an off-chain account in Tonkeeper that allows you to
            stop worrying about having TON, which is necessary for paying gas
            fees. We aim to make interacting with cryptocurrency simple and
            convenient, enabling you to exchange and transfer assets easily and
            confidently.
          </p>
        </div>
      </div>

      <div>
      <div className=" w-full mt-14 md:mt-0 md:mb-20 ">
          <Image height={400} width={1000} layout="responsive" src={'/images/Frame-1.png'} alt="battery" />
          <Image height={400} width={1000} layout="responsive" src={'/images/Frame-2.png'} alt="battery" />
        </div>
      </div>
    </div>
  );
}
