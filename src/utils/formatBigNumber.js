import { ethers } from "ethers";
import { formatEther } from "ethers/lib/utils";

const formatBigNumber = (number) => {
  return formatEther(number) * 10 ** 18;
};

export default formatBigNumber;
