import Header from "@components/Header";
import ShortTrade from "@components/ShortTrade";
import clsx from "clsx";
import { Inter } from "next/font/google";

// Default font: Inter
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div
        className={clsx(
          "page-center flex flex-col items-center justify-between",
          inter.className
        )}
      >
        <ShortTrade />
      </div>
    </>
  );
}
