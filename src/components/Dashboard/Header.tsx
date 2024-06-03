import Image from "next/image";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="w-full m-0 border-b border-gray-600">
      <nav
        className="flex justify-end items-center gap-3 pt-8 pb-6 px-7"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 max-w-fit items-center gap-2 cursor-pointer">
          <Image
            src="/images/profile_image.png"
            width={36}
            height={36}
            alt="user image"
          />
          <span className="font-semibold text-[17px] leading-5">0xd0B...DC4d</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;


