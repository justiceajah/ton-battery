import Image from "next/image";
import LogoImg from "@/assets/images/logo.svg";
import HeroBanner from "@/assets/images/hero_banner.svg";

export function Hero() {
  return (
    <div className="relative">
      <section className="z-20 px-sm-container lg:px-container py-10 lg:bg-cover lg:bg-center">
        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex max-w-[450px] flex-col items-center justify-center gap-2 lg:flex-row lg:items-start">
            <Image height={72} width={72} src={LogoImg} alt="logo" />
            <h1 className="text-center text-[60px] font-bold leading-none lg:text-left lg:text-[80px]">
              Tonkeeper{" "}
              <span className="bg-gradient-to-r from-primary-100 to-primary-50 bg-clip-text text-transparent">
                Battery
              </span>
            </h1>
          </div>

          <p className="text-center text-lg font-semibold">
            Cryptocurrency interaction made simple and convenient
          </p>

          <button className="flex flex-row items-center gap-2 rounded-2xl bg-gradient-to-r from-primary-50 to-primary-100 px-[25px] py-[10px]">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 13V11C3.5 7.22876 3.5 5.34315 4.67157 4.17157C5.84315 3 7.72876 3 11.5 3H13.5C17.2712 3 19.1569 3 20.3284 4.17157C21.5 5.34315 21.5 7.22876 21.5 11V13C21.5 16.7712 21.5 18.6569 20.3284 19.8284C19.1569 21 17.2712 21 13.5 21H12.5"
                stroke="#CCD2E3"
                strokeWidth="2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.4997 13.5853L19.2569 13.3424L19.2422 13.3277C19.1785 13.2641 19.1249 13.2104 19.0777 13.167C17.6476 11.853 15.3649 12.2235 14.4237 13.9223C14.3926 13.9784 14.3588 14.0462 14.3185 14.1267L14.3185 14.1267L14.3092 14.1453L14.281 14.2015L14.2791 14.2052L14.2763 14.2021L14.2354 14.1544L9.25927 8.34898C8.89985 7.92966 8.26855 7.8811 7.84923 8.24052C7.4299 8.59994 7.38134 9.23124 7.74076 9.65057L12.7168 15.456L12.7257 15.4663C12.7545 15.5 12.7884 15.5396 12.8193 15.5726C13.746 16.5621 15.3679 16.3625 16.0269 15.1777C16.0489 15.1382 16.0722 15.0916 16.092 15.0519L16.092 15.0518L16.0981 15.0397C16.1528 14.9303 16.1657 14.9051 16.1732 14.8915C16.4869 14.3252 17.2478 14.2017 17.7245 14.6398C17.736 14.6503 17.7561 14.6701 17.8427 14.7566L19.4442 16.3581C19.4902 15.6403 19.4984 14.7478 19.4997 13.5853Z"
                fill="#CCD2E3"
              />
              <circle cx="17" cy="7.5" r="1.5" fill="#CCD2E3" />
              <path
                d="M8.5 16V15H9.5V16H8.5ZM4.12469 20.7809C3.69343 21.1259 3.06414 21.056 2.71913 20.6247C2.37412 20.1934 2.44404 19.5641 2.87531 19.2191L4.12469 20.7809ZM7.5 21V16H9.5V21H7.5ZM8.5 17H3.5V15H8.5V17ZM9.1247 16.7809L4.12469 20.7809L2.87531 19.2191L7.8753 15.2191L9.1247 16.7809Z"
                fill="#CCD2E3"
              />
            </svg>
            <span className="text-lg font-black">Explore Now</span>
          </button>
        </div>
      </section>
      <div className="relative overflow-visible">
        <div className="h-[400px] bg-contain bg-top bg-no-repeat lg:h-[1000px] lg:bg-cover">
          <Image
            className="-mt-14 h-full lg:-mt-80"
            src={HeroBanner}
            alt="banner"
            fill
          />
        </div>
      </div>
    </div>
  );
}
