import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";

import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//RainbowKit imports
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  goerli,
  sepolia,
  polygon,
  optimism,
  arbitrum,
} from 'wagmi/chains';
//import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
/*******************************************************************/

//RainbowKit configuration
const { chains, publicClient } = configureChains(
  [mainnet, goerli, sepolia, polygon, optimism, arbitrum],
  [
    //alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit Connect PEERUP',
  projectId: '152edacbf75e37f23d75d7dbde5fe298',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})
/*******************************************************************/

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps)  {
  return (
  <QueryClientProvider client={queryClient}>
    <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
          <ToastContainer />
        </RainbowKitProvider>
    </WagmiConfig>
  </QueryClientProvider>
  );
};

export default api.withTRPC(MyApp);
