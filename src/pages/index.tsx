import Header from "@components/Header";
import ShortTrade from "@components/ShortTrade";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <ShortTrade />
      </main>
    </>
  );
}
