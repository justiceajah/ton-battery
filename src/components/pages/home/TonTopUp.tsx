import React from "react";
import ColoredSectionHeader from "../../ColoredSectionHeader";
import phoneHoldingHand from "@/assets/images/phone-holding-hand.png";
import Image from "next/image";

const TonTopUp = () => {
  return (
    <div className="relative mt-[80px] md:mt-0 lg:static lg:mt-40">
      <ColoredSectionHeader headerText="HOW TO TOP-UP BATTERY" />

      <div className="mx-sm-container  mx-container mt-10">
        {/* <div className="h-[400px]">
        <iframe className="bg-transparent" src='https://my.spline.design/untitled-c59f560cdcff405045b29b6c75d5fb15/'  width='100%' height='100%'></iframe>
        </div> */}
        <div className="rounded-[70px] bg-[#D9D9D912] bg-opacity-[0.07] px-5 py-10 md:p-11 text-white">
          <div className="flex flex-col justify-between gap-6 lg:flex-row">
            <div className="flex w-full items-center justify-center lg:w-1/2">
              <Image
                src={phoneHoldingHand}
                alt="phone holding a persons hand"
              />
            </div>
            <div className="w-full lg:w-[48%]">
              <div className="flex flex-col gap-4 gap-x-0 md:gap-6 lg:gap-8">
                <h2 className=" w-fit bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-center text-[1.3rem] font-bold text-transparent md:text-[1.5rem] lg:text-[2.166rem]">
                  CHARGING THE BATTERY
                </h2>
                <h3 className="lg:text-2xl text-medium md:text-xl font-semibold">
                  You can charge the Battery in several ways: send USDt, jUSDT,
                  or NOT to the battery.ton domain, or buy it in Tonkeeper via
                  the App Store on the iOS version.
                </h3>
                <h3 className="lg:text-2xl text-medium md:text-xl font-semibold">
                  To do this, tap the Battery icon on the wallet&apos;s main
                  screen and choose the method that works best for you :)
                </h3>
                <h3 className="lg:text-2xl text-medium md:text-xl font-semibold">
                  Minimum limits for the Battery:{" "}
                </h3>
                <ul className="lg:text-2xl text-medium md:text-xl font-semibold">
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
