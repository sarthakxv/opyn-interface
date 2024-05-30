import { http } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "wagmi/chains";

const InfuraKey = process.env.NEXT_PUBLIC_INFURA_KEY;

export const config = getDefaultConfig({
  appName: "Opyn test",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  chains: [sepolia, mainnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {
    [sepolia.id]: http(`https://sepolia.infura.io/v3/${InfuraKey}`),
  },
});
