import { ethers } from "ethers";
import DwarCharacterAbi from "contracts/DwarCharacterAbi.json";
import { DwarCharacterAddress } from "contracts/address.js";
import getRpcUrl from 'utils/getRpcUrl'

// const RPC_URL = getRpcUrl()
// const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL)

const getContract = (abi, address, signer) => {
  const signerOrProvider = signer;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getDwarCharacterContract = (signer) => {
  return getContract(DwarCharacterAbi, DwarCharacterAddress, signer);
};
