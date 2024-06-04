import Image from "next/image";

const Footer = () => {
  return (
    <div className="mx-14 flex flex-col items-center justify-center py-24 border-t border-[#7D7D7D]">
      <p className="inline-flex items-center gap-2">
        <span>Built on and by</span>
        <Image
          src="/images/mercel-logo.svg"
          alt="logo"
          height={35}
          width={111}
        />
      </p>
    </div>
  );
};

export default Footer;
