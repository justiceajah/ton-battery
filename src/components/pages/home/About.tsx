import BatterySvg from "@/assets/images/battery.svg";
import ShinePng from "@/assets/images/shine.png";
import LooperSvg from "@/assets/images/looper.svg";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <div className="relative -mt-40 h-fit lg:h-[80vh] lg:mt-10">
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
      <div className="grid grid-cols-3">
        <div className="place-self-start pt-5">
          <Image height={400} width={400} src={BatterySvg} alt="battery" />
        </div>
        <div className="col-span-2 flex flex-col space-y-8 pr-5">
          <h4 className="text-[32px]">
            What is the Battery, and what is it used for?
          </h4>
          <p className="text-[20px] text-[#CFCCCC]">
            The Battery is an off-chain account in Tonkeeper that allows you to
            stop worrying about having TON, which is necessary for paying gas
            fees. We aim to make interacting with cryptocurrency simple and
            convenient, enabling you to exchange and transfer assets easily and
            confidently.
          </p>
        </div>
      </div>
    </div>
  );
}
