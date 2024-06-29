import { Pill } from "./Pill";
import AppleBrand from "@/assets/images/apple.svg";
import AndroidBrand from "@/assets/images/android.svg";
import PcBrand from "@/assets/images/pc.svg";
import ChromeBrand from "@/assets/images/chrome.svg";
import FirefoxBrand from "@/assets/images/firefox.svg";
import BraveBrand from "@/assets/images/brave.svg";
import VivaldiBrand from "@/assets/images/vivaldi.svg";
import EdgeBrand from "@/assets/images/edge.svg";

export function CryptoIsTheRedPill() {
  return (
    <div className="mx-sm-container mt-20 text-white lg:mx-container lg:mt-40">
      <div className="mb-14">
        <h2 className="mb-8 text-4xl font-bold lg:text-5xl">
          Crypto is the red pill
        </h2>
        <p className="text-lg font-semibold text-[#8994A3]">
          The era of human exploitation is over. Exit the matrix of central
          banking dictatorship, surveillance of credit card companies and
          digital walled gardens. Join the new era of borderless digital economy
          and be prepared to succumb to our future AI overlords.
        </p>
      </div>

      <div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row flex-wrap gap-4">
            <Pill imgSrc={AppleBrand} color="white" text="Tonkeeper iOS" />
            <Pill
              imgSrc={AndroidBrand}
              color="white"
              text="Tonkeeper Android"
            />
          </div>

          <div className="flex flex-row flex-wrap gap-4">
            <Pill imgSrc={PcBrand} color="black" text="Tonkeeper Pro" />
            <Pill imgSrc={ChromeBrand} color="black" />
            <Pill imgSrc={FirefoxBrand} color="black" />
            <Pill imgSrc={BraveBrand} color="black" />
            <Pill imgSrc={VivaldiBrand} color="black" />
            <Pill imgSrc={EdgeBrand} color="black" />
          </div>
        </div>
      </div>
    </div>
  );
}
