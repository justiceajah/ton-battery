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
  const baseClasses = "flex w-fit flex-row gap-2 px-7 py-[14px]";
  const colorClasses =
    color === "white" ? "bg-white text-black" : "bg-[#1D2633] text-white";
  const roundedClasses = text ? "rounded-[28px]" : "rounded-full";

  return (
    <div className={`${baseClasses} ${colorClasses} ${roundedClasses}`}>
      <Image src={imgSrc} alt="brand logo" width={28} height={28} />
      {text ? <p className="text-xl">{text}</p> : null}
    </div>
  );
}
