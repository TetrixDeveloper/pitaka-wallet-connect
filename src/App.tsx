import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "viem/chains";

import Home from "./Home";

const chains = [arbitrum, mainnet, polygon];
const projectId = "6a636e819171c7539534c1087d8b6137"; // Your Project ID here

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Home />
      </WagmiConfig>

      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        explorerRecommendedWalletIds={[
          "14e5d957c6eb62d3ee8fc6239703ac2d537d7e3552154836ca0beef775f630bc",
        ]}
        explorerExcludedWalletIds="ALL"
        termsOfServiceUrl="https://support.pitaka.io/terms-of-use"
        privacyPolicyUrl="https://support.pitaka.io/privacy-policy"
        themeMode="dark"
        themeVariables={{
          "--w3m-font-family": "Roboto, sans-serif",
          "--w3m-accent-color": "#613CB0",
          "--w3m-background-color": "#1A1A1A",
          "--w3m-logo-image-url": "/pitaka.png",
          "--w3m-overlay-backdrop-filter": "blur(10px)",
        }}
      />
    </>
  );
}

export default App;
