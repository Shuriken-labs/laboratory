import { ethers } from "ethers";
import { encrypt } from "../utils/encryption";

export const createWallet12 = async () => {
  const wallet = ethers.Wallet.createRandom();
  const seedPhrase = wallet.mnemonic.phrase;
  const address = wallet.address;

  return {
    encrypted_mnemonic: encrypt(seedPhrase),
    addresses: {
      evm: address
    }
  };
};
