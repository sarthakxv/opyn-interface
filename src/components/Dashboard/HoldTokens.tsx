import Image from "next/image";
import { holdTokensData } from "./utils/data";

const HoldTokens = () => {
  return (
    <div className="w-full px-[60px]">
      {/* Level 1 */}
      <div>
        <div className="mb-5 w-full flex flex-col md:flex-row items-center gap-3 justify-between">
          <h1 className="pl-0 md:pl-8 lg:pl-16 font-bold text-[50px] leading-[48px] text-transparent bg-clip-text bg-gradient-to-r from-[#BFB171] via-[#8BD67B] to-[#C663C5]">
            Level 1
          </h1>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-full">
            <button className="flex flex-row items-center gap-1 bg-primary-gray text-white font-normal text-sm leading-[22px] px-4 py-2 rounded-full ">
              <span>What All Can I Win</span>
              <Image
                alt="gift"
                height={32}
                width={32}
                src="/images/gift-icon.svg"
                className="-mt-1"
              />
            </button>
          </div>
        </div>
        <hr className="border border-[#7D7D7D]" />
        <p className="pl-8 lg:pl-16 py-7 font-normal text-xl leading-6">
          0/15 completed
        </p>
        <hr className="border border-[#7D7D7D]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24 my-20">
          {holdTokensData.map((token, index) => (
            <div className="relative" key={token.src}>
              <Image
                src={token.src}
                alt="rare-card"
                width={408.16}
                height={379}
              />
              <div className="absolute inset-0 px-4 mt-10 lg:mt-6 inline-flex w-full justify-between items-center">
                <div className="flex flex-col gap-1">
                  <span className="font-normal text-base leading-5">
                    TASK 1
                  </span>
                  <p className="flex flex-col font-bold text-base lg:text-xl md:text-[26.4px] leading-9">
                    <span>{token.lineOne}</span>
                    <span>{token.lineTwo}</span>
                  </p>
                </div>
                <Image
                  src="/images/holdToken.svg"
                  width={76.98}
                  height={76.98}
                  alt="hold token"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoldTokens;
