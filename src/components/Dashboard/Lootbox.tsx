import Image from "next/image";

const Lootbox = () => (
  <div className="flex flex-col md:flex-row gap-5 justify-between py-5 px-10 border border-[#8D8D8D] rounded-lg mx-12">
    <div className="flex flex-col md:flex-row items-start lg:items-center gap-10">
      <Image src="/images/lootbox1.svg" width={72} height={61} alt="lootbox" />
      <p className="flex gap-0 flex-col lg:flex-row items-start lg:items-center font-bold text-xl sm:text-2xl leading-[48px]">
        You have a{" "}
        <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-r from-[#BFB171] via-[#8BD67B] to-[#C663C5]">
          Lootbox
        </span>
        waiting to be opened.
      </p>
    </div>
    <button className="relative bg-lootbox-btn max-w-[294px] max-h-16 py-[22px] px-12 sm:px-[95px] rounded-2xl font-semibold text-xl leading-[22px] shadow-lg">
      Open Now
    </button>
  </div>
);

export default Lootbox;
