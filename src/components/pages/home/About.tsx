import BatterySvg from "@/assets/images/battery.svg";
import ShinePng from "@/assets/images/shine.png";
import LooperSvg from "@/assets/images/looper.svg";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
    return (
        <div className="mt-10 relative h-[80vh]">
            <Image
                className="absolute left-0 -top-[450px]"
                height={1300} alt="" src={ShinePng} />
            <Image
                className="absolute bottom-0 top-0 left-0"
                height={800} alt="" src={LooperSvg} />
            <SectionHeader title="About" />
            <div className="grid grid-cols-3">
                <div className="place-self-start pt-5">
                    <Image height={400} width={400} src={BatterySvg} alt="battery" />
                </div>
                <div className="flex flex-col space-y-8 col-span-2 pr-5">
                    <h4 className="text-[32px]">What is the Battery, and what is it used for?</h4>
                    <p className="text-[#CFCCCC] text-[20px]">
                        The Battery is an off-chain account in Tonkeeper that allows you to stop worrying about having TON, which is necessary for paying gas fees. We aim to make interacting with cryptocurrency simple and convenient, enabling you to exchange and transfer assets easily and confidently.
                    </p>
                </div>
            </div>
        </div>
    )
}