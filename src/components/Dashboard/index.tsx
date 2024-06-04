import clsx from "clsx";
import Header from "./Header";
import { Inter } from "next/font/google";
import TopBoard from "./TopBoard";
import Lootbox from "./Lootbox";
import HoldTokens from "./HoldTokens";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
};

export default DashboardPage;
