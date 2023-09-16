import { configureChains } from "wagmi";

const ottochain = {
  id: 9100,
  name: "Otto Chain",
  network: "Testnet",
  nativeCurrency: {
    name: "aotto",
    symbol: "aotto",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: [
        "https://gateway.testnet.octopus.network/ottochain/m4k5urt9h33dpbhgsp4lqxemo6naeihz"
      ]
    },
    public: {
      http: [
        "https://gateway.testnet.octopus.network/ottochain/m4k5urt9h33dpbhgsp4lqxemo6naeihzc"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "Ottoscan",
      url: "http://34.69.4.240:4000/"
    }
  },
  contracts: {
    multicall3: {
      address: "otto1zrut2rar5lyjrkxgys5hrgsn55lyzj6rk59mm5",
      blockCreated: "2023-08-04T00:29:19.911360658Z"
    }
  }
};

export default { ...ottochain, satisfies: configureChains };
