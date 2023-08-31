import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";

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

//For the xmtp chat
//window.Buffer = window.Buffer ?? Buffer;

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
  <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
  </WagmiConfig>
  );
};

export default api.withTRPC(MyApp);
