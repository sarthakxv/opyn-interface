import clsx from "clsx";
import Header from "./Header";
import { Inter } from "next/font/google";
import TopBoard from "./TopBoard";
import Lootbox from "./Lootbox";
import Image from "next/image";
import HoldTokens from "./HoldTokens";

// Default font: Inter
const inter = Inter({ subsets: ["latin"] });

const DashboardPage = () => {
  return (
    <div
      className={clsx(
        "min-h-screen bg-primary-gray text-primary-text",
        inter.className
      )}
    >
      <Header />
      <div className="mx-auto w-full max-w-screen overflow-hidden">
        <TopBoard />
        <Lootbox />
        <HoldTokens />
      </div>
    </div>
  );
};

export default DashboardPage;
