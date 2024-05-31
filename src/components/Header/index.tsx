// Library Imports
import Link from "next/link";
import Connect from "./Connect";

const Header: React.FC = () => {
  return (
    <>
      <header className="w-full m-0 md:m-3 z-50">
        <nav
          className="max-w-[1380px] border border-gray-200 w-full md:w-[94%] mx-auto h-[70px] placeholder:h-[70px] flex justify-between items-center gap-3 bg-N0 md:border md:rounded-full py-3 px-7"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold">Opyn Finance</span>
            </Link>
          </div>
          <Connect />
        </nav>
      </header>
    </>
  );
};

export default Header;
