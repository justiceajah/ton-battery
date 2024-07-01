import BatterySvg from "@/assets/images/battery.svg";
import ShinePng from "@/assets/images/shine.png";
import LooperSvg from "@/assets/images/looper.svg";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <div className="relative h-fit lg:h-[80vh] pt-20">
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
      <div className="relative grid h-[400px] grid-cols-3 px-4 md:h-[300px] lg:mx-auto lg:w-[80%]">
        <div className="place-self-start pt-5">
          <Image height={400} width={400} src={BatterySvg} alt="battery" />
        </div>
        <div className="col-span-2 flex flex-col space-y-8 pr-5">
          <h4 className="w-full text-center text-[20px] md:text-left lg:text-[32px]">
            What is the Battery, and what is it used for?
          </h4>
          <p className="absolute left-0 top-28 w-full px-4 text-[16px] text-[#CFCCCC] md:relative md:top-0 md:text-[20px] lg:px-0">
            The Battery is an off-chain account in Tonkeeper that allows you to
            stop worrying about having TON, which is necessary for paying gas
            fees. We aim to make interacting with cryptocurrency simple and
            convenient, enabling you to exchange and transfer assets easily and
            confidently.
          </p>
        </div>
      </div>

      <div>
        <div className="mt-14 w-full md:mb-20 md:mt-0">
          <Image
            height={400}
            width={1000}
            layout="responsive"
            src={"/images/Frame-1.png"}
            alt="battery"
          />
          <Image
            height={400}
            width={1000}
            layout="responsive"
            src={"/images/Frame-2.png"}
            alt="battery"
          />
        </div>
      </div>
    </div>
  );
}
