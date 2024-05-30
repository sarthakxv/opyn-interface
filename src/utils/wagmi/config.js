import { http } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia } from "wagmi/chains";
import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';

export const config = getDefaultConfig({
  appName: "Opyn test",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  chains: [sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {
    [sepolia.id]: http(),
  },
});
