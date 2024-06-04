import Image from "next/image";

type Props = {
  token: {
    lineOne: string;
    lineTwo: string;
    src: string;
  };
};

const Token = ({ token }: Props) => {
  return (
    <div className="relative min-w-[256px] sm:min-w-[408.16px]" key={token.src}>
      <Image src={token.src} alt="rare-card" width={408.16} height={379} />
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
  );
};

export default Token;
