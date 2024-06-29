import Image from "next/image";

export function Pill({
  imgSrc,
  text,
  color,
}: {
  imgSrc: string;
  text?: string;
  color: "white" | "black";
}) {
  return (
    <>
      {color === "white" ? (
        <div
          className={
            text
              ? "flex w-fit flex-row gap-2 rounded-[28px] bg-white px-7 py-[14px] text-black"
              : "flex w-fit flex-row gap-2 rounded-full bg-white px-7 py-[14px] text-black"
          }
        >
          <Image src={imgSrc} alt="brand logo" width={28} height={28} />
          {text ? <p className="text-xl">{text}</p> : null}
        </div>
      ) : (
        <div
          className={
            text
              ? "flex w-fit flex-row gap-2 rounded-[28px] bg-[#1D2633] px-7 py-[14px] text-white"
              : "flex w-fit flex-row gap-2 rounded-full bg-[#1D2633] px-7 py-[14px] text-white"
          }
        >
          <Image src={imgSrc} alt="brand logo" width={28} height={28} />
          {text ? <p className="text-xl">{text}</p> : null}
        </div>
      )}
    </>
  );
}
