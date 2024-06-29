import Link from "next/link";
import Image from "next/image";
import TopAppp from "@/assets/images/topapp.png";

export function Footer() {
  return (
    <footer className="mx-sm-container mt-20 lg:mx-container">
      <div className="mb-40 flex flex-col items-center justify-center">
        <h3 className="mb-4 w-fit bg-gradient-to-r from-[#0E6EFF] via-[#0ED0FF] to-[#0ED4FF] bg-clip-text text-4xl font-semibold text-transparent hover:!bg-gradient-to-r hover:!from-primary-50 hover:!bg-primary-100">
          Get Newsletter
        </h3>

        <p className="mb-[35px] w-full text-center lg:text-left text-2xl">
          Get to know the next big thing on Tonkeeper
        </p>

        <input
          type="text"
          className="mb-7 w-[100%] md:w-[40vw] appearance-none rounded-2xl border border-[#595858] px-2 py-[14px]"
          placeholder="Enter your email"
        />

        <button className="flex flex-row items-center gap-2 rounded-2xl bg-gradient-to-r from-primary-50 to-primary-100 px-[25px] py-[10px] hover:!bg-gradient-to-r hover:!from-primary-50 hover:!bg-primary-100">
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

      <div className="flex flex-row flex-wrap gap-16 lg:justify-between">
        <div className="flex flex-col gap-5">
          <h4 className="font-medium">Company</h4>
          <Link href="/about" className="text-[#8994A3]">
            News
          </Link>
          <Link href="/about" className="text-[#8994A3]">
            Chat
          </Link>
          <Link href="/about" className="text-[#8994A3]">
            Twitter
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-medium">Resources</h4>
          <Link href="/about" className="text-[#8994A3]">
            FAQ
          </Link>
          <Link href="/about" className="text-[#8994A3]">
            Support
          </Link>
          <Link href="/about" className="text-[#8994A3]">
            Suggest A Feature
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-medium">Developers</h4>
          <Link href="/about" className="text-[#8994A3]">
            Documentation
          </Link>
          <Link href="/about" className="text-[#8994A3]">
            Bug Bounty
          </Link>
          <Link href="/about" className="text-[#8994A3]">
            Github
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-medium">Legal</h4>
          <Link href="/about" className="text-[#8994A3]">
            Terms
          </Link>
          <Link href="/about" className="text-[#8994A3]">
            Privacy
          </Link>
        </div>

        <div className=" w-full flex items-center justify-center lg:w-fit">
          <Image src={TopAppp} alt="number one app in ton app" />
        </div>
      </div>

      <div className="my-10 flex flex-row flex-wrap lg:gap-6 items-center justify-center  w-full">
        <p className="grow">© 2024 Tonkeeper. All rights reserved.</p>
        <p className="text-[#8994A3]">
          All trademarks are the property of their respective owners.
        </p>
      </div>
    </footer>
  );
}
