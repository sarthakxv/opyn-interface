import Image from "next/image";
import { holdTokensLevelOne } from "../utils/data";

const LevelOne = () => {
  return (
    <div className="flex flex-col gap-5 py-20">
      <div className="w-full flex flex-col md:flex-row items-center gap-3 justify-between">
        <h1 className="pl-0 md:pl-8 lg:pl-16 font-bold text-[50px] leading-[48px] text-transparent bg-clip-text bg-gradient-to-r from-[#BFB171] via-[#8BD67B] to-[#C663C5]">
          Level 1
        </h1>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-full">
          <button className="flex flex-row items-center group gap-1 bg-primary-gray hover:bg-gray-800 transition-colors text-white font-normal text-sm leading-[22px] px-4 py-2 rounded-full ">
            <span>What All Can I Win</span>
            <Image
              alt="gift"
              height={32}
              width={32}
              src="/images/gift-icon.svg"
              className="-mt-1 transition-transform group-hover:rotate-12"
            />
          </button>
        </div>
      </div>
      <hr className="border border-[#7D7D7D]" />
      <p className="pl-8 lg:pl-16 font-normal text-xl leading-6">
        0/15 completed
      </p>
      <hr className="border border-[#7D7D7D]" />
      <div className="flex flex-row overflow-auto gap-24 mt-14 scroll-smooth">
        {holdTokensLevelOne.map((token, index) => (
          <div
            className="relative min-w-[256px] sm:min-w-[408.16px]"
            key={token.src}
          >
            <Image
              src={token.src}
              alt="rare-card"
              width={408.16}
              height={379}
            />
            <div className="absolute inset-0 px-4 mt-10 lg:mt-6 inline-flex w-full justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="font-normal text-base leading-5">TASK 1</span>
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
  );
};

export default LevelOne;