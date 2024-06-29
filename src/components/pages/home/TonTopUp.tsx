import React from "react";
import ColoredSectionHeader from "../../ColoredSectionHeader";
import phoneHoldingHand from "@/assets/images/phone-holding-hand.png";
import Image from "next/image";

const TonTopUp = () => {
  return (
    <div className="relative mt-[80px] md:mt-0">
      <ColoredSectionHeader headerText="HOW TO TOP-UP BATTERY" />

      <div className="mx-sm-container  mx-container mt-10">
        <div className="rounded-[70px] bg-[#D9D9D912] bg-opacity-[0.07] p-11 text-white">
          <div className="flex flex-col justify-between gap-6 lg:flex-row">
            <div className="flex w-full items-center justify-center lg:w-1/2">
              <Image
                src={phoneHoldingHand}
                alt="phone holding a persons hand"
              />
            </div>
            <div className="w-full lg:w-[48%]">
              <div className="flex flex-col gap-6 lg:gap-8">
                <h2 className=" w-fit bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-center text-[1.3rem] font-bold text-transparent md:text-[1.5rem] lg:text-[2.166rem]">
                  CHARGING THE BATTERY
                </h2>
                <h3 className="text-2xl font-semibold">
                  You can charge the Battery in several ways: send USDt, jUSDT,
                  or NOT to the battery.ton domain, or buy it in Tonkeeper via
                  the App Store on the iOS version.
                </h3>
                <h3 className="text-2xl font-semibold">
                  To do this, tap the Battery icon on the wallet&apos;s main
                  screen and choose the method that works best for you :)
                </h3>
                <h3 className="text-2xl font-semibold">
                  Minimum limits for the Battery:{" "}
                </h3>
                <ul className="text-2xl font-semibold">
                  <li>- 300 NOT</li>
                  <li>- 3 USDt</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TonTopUp;
