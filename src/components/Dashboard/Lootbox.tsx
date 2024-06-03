import Image from "next/image";

const Lootbox = () => (
  <div className="flex flex-col sm:flex-row my-12 sm:my-24 items-center sm:justify-between py-5 px-10 mx-14 border border-[#8D8D8D] rounded-lg w-full max-w-[256px] md:max-w-[768px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
      <Image src="/images/lootbox1.svg" width={72} height={61} alt="lootbox" />
      <p className="flex flex-col sm:flex-row items-start sm:items-center font-bold text-xl sm:text-2xl leading-[48px]">
        You have a{" "}
        <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-r from-[#BFB171] via-[#8BD67B] to-[#C663C5]">
          Lootbox
        </span>{" "}
        waiting to be opened.
      </p>
    </div>
    <button className="relative bg-lootbox-btn py-[22px] px-12 sm:px-[95px] rounded-2xl font-semibold text-xl leading-[22px] shadow-lg">
      Open Now
    </button>
  </div>
);

export default Lootbox;
