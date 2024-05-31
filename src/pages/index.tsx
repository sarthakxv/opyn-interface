import Header from "@components/Header";
import ShortTrade from "@components/ShortTrade";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-between px-8 py-12 md:p-24 ${inter.className}`}
      >
        <ShortTrade />
      </main>
    </>
  );
}
