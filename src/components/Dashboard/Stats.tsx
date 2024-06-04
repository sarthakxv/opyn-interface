import Image from "next/image";
import { StatsProps } from "./utils/types";

const Stats = ({ title, xp, image }: StatsProps) => {
  return (
    <div className="inline-flex w-full items-center gap-4 p-2 rounded-3xl bg-secondary-gray text-primary-text">
      <Image src={image} width={72} height={72} alt="stat" />
      <p className="flex flex-col gap-1 text-sm leading-[17.63px] text-left">
        <span className="font-semibold text-[#454C60]">{title}</span>
        <span className="font-normal text-[#C2C2C3]">{xp}</span>
      </p>
    </div>
  );
};

export default Stats;
